import { Grid, Input, MenuItem, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
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
    preUploadVideo: {
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
      genres: "",
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
    },
    genre: {
      genreName: "",
    },
    cast: {},
  });
  const [response, setResponse] = useState("");

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
    setVideoDesc({ ...videoDetails, [e.target.name]: e.target.value });
  };

  const handleVideoUploadFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add__prevideo">
      <h1>Pre Upload Video</h1>
      <br />
      <form>
        <Container maxWidth="md">
          <Grid container spacing={3} justify="space-around">
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="language"
                select
                label="Language"
                value={videoDetails.languages}
                onChange={handleVideotypeChange}
                helperText="Please select Language type"
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
                id="planType "
                select
                label="Plan Type"
                value={videoDetails.planType}
                onChange={handleVideotypeChange}
                helperText="Please select plan type"
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
                label="Dscription"
                onChange={(e) => handleInputChange(e)}
                aria-label="minimum height"
                rowsMin={3}
                value={videoDetails.preUploadVideo.description}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="select-video-type"
                select
                label="Video Type"
                value={videoDetails.videoType}
                onChange={handleVideotypeChange}
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
                id="cbfcrating"
                select
                label="CBFC Rating"
                value={videoDetails.cbfcrating}
                onChange={handleVideotypeChange}
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
              <TextField
                id="genres"
                select
                label="genres"
                value={videoDetails.genres}
                onChange={handleVideotypeChange}
                helperText="Please select Genres type"
                variant="outlined"
              >
                {genres.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={12}>
              <h3>Music Video Details</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="title "
                label="Video Title"
                onChange=""
                placeholder="Video Title..."
                required
                type="text"
                value={videoDetails.preUploadVideo.title}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="thumbs "
                // label="Video Thumbs"
                onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={videoDetails.preUploadVideo.thumbs}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="teaser "
                label="Video Teaser"
                onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={videoDetails.preUploadVideo.teaser}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="trailer"
                label="Video Trailer"
                onChange=""
                placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.trailer}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="main"
                label="Main Video"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.main}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="strysynp "
                label="Story synopsis"
                onChange=""
                placeholder="Enter Story synopsis"
                required
                type="text"
                value={videoDetails.preUploadVideo.strysynp}
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
            <AddDirector/>
            <AddWriter/>
            {/* <Grid item xs={12}>
              <h3>Directors 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="directorname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDetails.preUploadVideo.directorname}
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
                value={videoDetails.preUploadVideo.directorimg}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <h3>Writer 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="Writername"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDetails.preUploadVideo.Writername}
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
                value={videoDetails.preUploadVideo.writerimg}
              />
            </Grid> */}
            <Grid items xs={12}></Grid>
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
