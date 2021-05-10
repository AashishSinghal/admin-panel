import {
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { uploadVideo } from "../APIs/uploadVideo";
import StaticSupportingActress from "../Components/StaticSupportingActress";
import DynamicSupportingActress from "../Components/DynamicSupportingActress";
import StaticSupportingActor from "../Components/StaticSupportingActor";
import DynamicSupportingActor from "../Components/DynamicSupportingActor";
import StaticCast from "../Components/StaticCast";
import DynamicCast from "../Components/DynamicCast";
import "./preUploadvideo.css";
// import { AddDirector } from "./AddDirectors/AddDirectors.js"
import AddDirector from "./AddDirectors/AddDirectors";
import {
  languages,
  planTypes,
  videoTypes,
  cbfcrating,
  genres,
} from "../Utils/Constants";
import AddWriter from "./AddWriters/AddWriters";

const AddPreUploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [fileSelectorDisabled, setFileSelectorDisabled] = useState(false);
  const [genresArr, setGenresArr] = useState([]);
  const [preUploadVideo, setPreUploadVideo] = useState({
    cbfcrating: "",
    description: "",
    title: "",
    videoType: "",
    actorList: "",
    actressList: "",
    banners: "",
    channelId: "",
    directors: "",
    duration: "",
    eps: "",
    genres: [],
    id: "",
    language: "",
    likes: "",
    numeps: "",
    partNumber: "",
    planType: "",
    plans: "",
    promo: "",
    supportingActorList: "",
    supportingActressList: "",
    thumbs: "",
    trailer: "",
    main: "",
    stysynp: "",
    actorName: "",
    actimg: "",
    actressName: "",
    actrimg: "",
    name: "",
    supactimg: "",
    phnnumber: "",
  });
  const [
    numSupportingActressChildren,
    setNumSupportingActressChildren,
  ] = useState(0);

  const [numSupportingActorChildren, setNumSupportingActorChildren] = useState(
    0
  );
  const [numCastChildren, setNumCastChildren] = useState(0);

  const onAddSupportingActressChild = () => {
    setNumSupportingActressChildren(numSupportingActressChildren + 1);
  };
  const onRemoveSupportingActressChild = () => {
    setNumSupportingActressChildren(numSupportingActressChildren - 1);
  };

  const SupportingActressChildren = [];

  for (var i = 0; i < numSupportingActressChildren; i += 1) {
    SupportingActressChildren.push(
      <DynamicSupportingActress
        key={i}
        number={i}
        onRemove={onRemoveSupportingActressChild}
      />
    );
  }

  const onAddSupportingActorChild = () => {
    setNumSupportingActorChildren(numSupportingActorChildren + 1);
  };
  const onRemoveSupportingActorChild = () => {
    setNumSupportingActorChildren(numSupportingActorChildren - 1);
  };

  const SupportingActorChildren = [];

  for (var i = 0; i < numSupportingActorChildren; i += 1) {
    SupportingActorChildren.push(
      <DynamicSupportingActor
        key={i}
        number={i}
        onRemove={onRemoveSupportingActorChild}
      />
    );
  }

  const onAddCastChild = () => {
    setNumCastChildren(numCastChildren + 1);
  };
  const onRemoveCastChild = () => {
    setNumCastChildren(numCastChildren - 1);
  };

  const CastChildren = [];

  for (var i = 0; i < numCastChildren; i += 1) {
    CastChildren.push(
      <DynamicCast key={i} number={i} onRemove={onRemoveCastChild} />
    );
  }
  const [videoDetails, setVideoDesc] = useState({
    preUploadVideo: {},
    genre: {
      genreName: "",
    },
    cast: {},
  });
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log("Change in preUploadVideo - ", preUploadVideo);
    // console.log("Change in preUploadVideo-planType - ", preUploadVideo);
    // return () => {
    //   cleanup
    // };
  }, [preUploadVideo]);

  const handleFile = (e) => {
    let file = e.target.files[0];
    console.log("File event - ", e);
    setVideoFile(file);
    let formData = new FormData();
    formData.append("file", videoFile);
    console.log("FormData - ", formData);
    uploadVideo(formData).then(
      (res) => {
        console.log("response  - ", res, formData);
        setResponse(res);
        // setVideoFile(null);
      },
      (err) => {
        console.log("Req error - ", err);
        alert("Video upload Failed Please try Again.");
      }
    );
    setVideoDesc({ title: e.target.files[0].name });
  };

  const handleVideotypeChange = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "genres": {
        setGenresArr(e.target.value);
        let genres = [];
        let values = e.target.value;
        for (let i in values) {
          genres.push({
            genreName: values[i],
          });
          console.log(values[i], genres);
        }
        setPreUploadVideo({ ...preUploadVideo, genres: genres });
        break;
      }
      default: {
        setPreUploadVideo({
          ...preUploadVideo,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const handleVideoUploadFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add__prevideo">
      <h1>Pre Upload Video</h1>
      <br />
      <form>
        <Container maxWidth="lg">
          <Grid container spacing={3} justify="space-around">
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="language"
                select
                label="Language"
                name="language"
                value={preUploadVideo.language}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              >
                {languages.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="planType "
                select
                name="planType"
                label="Plan Type"
                value={preUploadVideo.planType}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              >
                {planTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextareaAutosize
                id="description"
                // label="Video Description"
                placeholder="description..."
                name="description"
                onChange={(e) => handleInputChange(e)}
                aria-label="minimum height"
                rowsMin={3}
                value={preUploadVideo.description}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="select-video-type"
                select
                label="Video Type"
                name="videoType"
                value={preUploadVideo.videoType}
                onChange={(e) => handleInputChange(e)}
                helperText="Please select video type"
                variant="outlined"
              >
                {videoTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="cbfcrating"
                select
                label="CBFC Rating"
                name="cbfcrating"
                value={preUploadVideo.cbfcrating}
                onChange={(e) => handleInputChange(e)}
                helperText="Please select CBFC rating type"
                variant="outlined"
              >
                {cbfcrating.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              {/* <InputLabel id="demo-mutiple-name-label">Genres</InputLabel> */}
              <Select
                className="input multiselect"
                labelId="demo-mutiple-name-label"
                id="genres"
                placeholder="Genres"
                multiple
                name="genres"
                value={genresArr}
                onChange={(e) => handleInputChange(e)}
                input={<Input />}
                // MenuProps={MenuProps}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Placeholder</em>;
                  }

                  return selected.join(", ");
                }}
              >
                <MenuItem disabled value="">
                  <em>Genres</em>
                </MenuItem>
                {genres.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={12}>
              <br />
              <h3>Video File Details</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="title "
                label="Video Title"
                onChange={(e) => handleInputChange(e)}
                placeholder="Video Title..."
                required
                type="text"
                name="title"
                value={preUploadVideo.title}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="thumbs "
                // label="Video Thumbs"
                // onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={preUploadVideo.thumbs}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="teaser "
                label="Video Teaser"
                // onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={preUploadVideo.teaser}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="trailer"
                label="Video Trailer"
                // onChange=""
                placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.trailer}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="main"
                label="Main Video"
                // onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.main}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="strysynp "
                label="Story synopsis"
                // onChange=""
                placeholder="Enter Story synopsis"
                required
                type="text"
                value={preUploadVideo.strysynp}
              />
            </Grid>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddCastChild}
              >
                Add Cast
              </Button>
              <StaticCast />
              {CastChildren}
            </div>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddSupportingActorChild}
              >
                Add Supporting Actor
              </Button>
              <StaticSupportingActor />
              {SupportingActorChildren}
            </div>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddSupportingActressChild}
              >
                Add Supporting Actress
              </Button>
              <StaticSupportingActress />
              {SupportingActressChildren}
            </div>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <AddDirector />
            <AddWriter />
          </Grid>
        </Container>
      </form>
      <br />
      <br />
      <button type="submit" onClick={(e) => handleVideoUploadFormSubmit(e)}>
        Upload
      </button>
      <br />
      <>Response From the Server</>
      <div className="response">
        <pre>
          <p>{JSON.stringify(response, null, 2)}</p>
        </pre>
      </div>
    </div>
  );
};

export default AddPreUploadVideo;
