import { Grid, Input, MenuItem, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { uploadVideo } from "../APIs/uploadVideo";
import "./preUploadvideo.css";
import AddDirector from "./AddDirectors/AddDirectors";
import AddWriter from "./AddWriters/AddWriters";
import AddCast from "./AddCast/AddCast";
import AddSupportingActor from "./AddSupportingActor/AddSupportngActor";
import {
  languages,
  planTypes,
  videoTypes,
  cbfcrating,
  genres,
} from "../Utils/Constants";
import AddSupportingActress from "./AddSupportingActress/AddSupportingActress";
import MusicVideoDetails from "./MusicVideoDetail/MusicVideoDetail";

const AddPreUploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [fileSelectorDisabled, setFileSelectorDisabled] = useState(false);
  const [
    numSupportingActressChildren,
    setNumSupportingActressChildren,
  ] = useState(0);

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
                // label="Video Description"
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
            <MusicVideoDetails />
            <AddCast />
            <Grid item xs={6} sm={3} md={6}></Grid>
            <AddSupportingActor />
            <AddSupportingActress />
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <AddDirector/>
            <AddWriter/>
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
