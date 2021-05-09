import { Grid, Input, MenuItem, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { uploadVideo } from "../APIs/uploadVideo";
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
            <Grid item xs={12}>
              <h3>Cast 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="actorName "
                label="Actor Name"
                onChange=""
                placeholder="Thomas Man"
                required
                type="text"
                value={videoDetails.preUploadVideo.actorName}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="actimg"
                label="Actor Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.actimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="actressName "
                label="Actress Name"
                onChange=""
                placeholder="Mena txt"
                required
                type="text"
                value={videoDetails.preUploadVideo.actressName}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="actrimg"
                label="Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.actrimg}
              />
            </Grid>
            <Grid item xs={12}>
              <h3>Supporting Actor 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="actname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDetails.preUploadVideo.actname}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="supactimg"
                label="Supporting Actor Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.supactimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="phnnumber"
                label="Phone Number"
                onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={videoDetails.preUploadVideo.phnnumber}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}></Grid>
            <Grid item xs={12}>
              <h3>Supporting Actress 1</h3>
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="actrname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDetails.preUploadVideo.actrname}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <Input
                className="input"
                id="supactrimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDetails.preUploadVideo.supactrimg}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <TextField
                id="phnnumber"
                label="Phone Number"
                onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={videoDetails.preUploadVideo.phnnumber}
              />
            </Grid>
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
