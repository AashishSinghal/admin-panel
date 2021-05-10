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
import { uploadVideo } from "../APIs/uploadVideo";
import "./preUploadvideo.css";
import {
  languages,
  planTypes,
  videoTypes,
  cbfcrating,
  genres,
} from "../Utils/Constants";

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
                label="Video Description"
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
              {/* <TextField
                className="input textfield"
                id="genres"
                select
                label="genres"
                name="genres"
                value={preUploadVideo.genres}
                onChange={(e) => handleInputChange(e)}
                helperText="Please select Genres type"
                variant="outlined"
              >
                {genres.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField> */}
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
            {/* <Grid item xs={12}>
              <h3>Cast 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="actorName "
                label="Actor Name"
                // onChange=""
                placeholder="Thomas Man"
                required
                type="text"
                value={preUploadVideo.actorName}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="actimg"
                label="Actor Image"
                // onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.actimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="actressName "
                label="Actress Name"
                // onChange=""
                placeholder="Mena txt"
                required
                type="text"
                value={preUploadVideo.actressName}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="actrimg"
                label="Actress Image"
                // onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.actrimg}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <h3>Supporting Actor 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="actname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={preUploadVideo.actname}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="supactimg"
                label="Supporting Actor Image"
                // onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.supactimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="phnnumber"
                label="Phone Number"
                // onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={preUploadVideo.phnnumber}
              />
            </Grid> */}
            <Grid item xs={6} sm={3} md={6}></Grid>
            {/* <Grid item xs={12}>
              <h3>Supporting Actress 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="actrname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={preUploadVideo.actrname}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="supactrimg"
                label="Supporting Actress Image"
                // onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.supactrimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="phnnumber"
                label="Phone Number"
                // onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={preUploadVideo.phnnumber}
              />
            </Grid> */}
            <Grid item xs={6} sm={3} md={6}></Grid>
            {/* <Grid item xs={12}>
              <h3>Directors 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="directorname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={preUploadVideo.directorname}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="directorimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.directorimg}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <h3>Writer 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                className="input textfield"
                id="Writername"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={preUploadVideo.Writername}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="writerimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={preUploadVideo.writerimg}
              />
            </Grid> */}
            <Grid item xs={12}></Grid>
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
