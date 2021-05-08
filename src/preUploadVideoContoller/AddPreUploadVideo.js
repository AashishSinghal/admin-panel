import {
  Grid,
  Input,
  MenuItem,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { uploadVideo } from "../APIs/uploadVideo";
import {
  videoTypes,
  planTypes,
  languages,
  genres,
  cbfcrating,
} from "../Utils/Constants";

const AddPreUploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [preVideoUpload, setPreVideoUpload] = useState({
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
  });
  const [fileSelectorDisabled, setFileSelectorDisabled] = useState(false);
  const [videoDesc, setVideoDesc] = useState({
    preVideoUpload: {
      videoType: "",
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
    // setVideoDesc({...videoDesc, preVideoUpload : e.target.value})
  };

  const handleInputChange = (e) => {
    setVideoDesc({ ...videoDesc, [e.target.name]: e.target.value });
  };

  const handleVideoUploadFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add__prevideo">
      <h1>Pre Upload Video</h1>
      <br />
      <form>
        <Grid container spacing={3} justify="space-around">
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="language"
              select
              label="Language"
              value={preVideoUpload.language}
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
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="planType "
              select
              label="Plan Type"
              value={preVideoUpload.planType}
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
          <Grid item xs={6} sm={3} md={2}>
            <TextareaAutosize
              id="description"
              label="Video Dscription"
              onChange={(e) => handleInputChange(e)}
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Minimum 3 rows"
              required
              type="text"
              value={preVideoUpload.description}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="select-video-type"
              select
              label="Video Type"
              value={videoDesc.videoType}
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
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="cbfcrating"
              select
              label="CBFC Rating"
              value={videoDesc.cbfcrating}
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
            <TextField
              id="cbfcrating"
              label="CBFC Rating"
              value={preVideoUpload.cbfcrating}
              onChange="handleInputChange"
              placeholder="CBFC Rating"
            />
          </Grid> 
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="genres"
              select
              label="genres"
              value={videoDesc.genres}
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
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="title "
              label="Video Title"
              onChange=""
              placeholder="Enter Title.."
              required
              type="text"
              value={preVideoUpload.title}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
              autoFocus
              onChange={(e) => handleFile(e)}
              placeholder="Select a Video file to Upload"
              required
              type="file"
              value={videoFile}
              disabled={fileSelectorDisabled}
            />
          </Grid>
              
          
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="channelId"
              label="Channel Id "
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Channel ID"
              required
              type="number"
              value={videoDesc.preUploadVideo.channelId}
            />
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="duration"
              label="Duration"
              onChange=""
              placeholder="Enter Duration"
              required
              type="number"
              value={videoDesc.preUploadVideo.duration}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="id "
              label="ID"
              onChange=""
              placeholder="Enter ID"
              required
              type="number"
              value={videoDesc.preUploadVideo.id}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="likes "
              label="Likes"
              onChange=""
              placeholder="Enter Likes"
              required
              type="number"
              value={videoDesc.preUploadVideo.likes}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="numeps "
              label="No. of Episodes"
              onChange=""
              placeholder="Enter Number of Episodes"
              required
              type="number"
              value={videoDesc.preUploadVideo.numeps}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="partNumber "
              label="Part Number"
              onChange=""
              placeholder="Enter Part Number"
              required
              type="text"
              value={videoDesc.preUploadVideo.partNumber}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="promo "
              label="Promo"
              onChange=""
              placeholder="Enter Promo"
              required
              type="text"
              value={videoDesc.preUploadVideo.promo}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="plans "
              label="Plans"
              onChange=""
              placeholder="Enter Plans"
              required
              type="text"
              value={preVideoUpload.plans}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
            onChange={(e) => handleFile(e)}
              required
              type="file"
              value={videoFile}
              disabled={fileSelectorDisabled}
              id="thumbs "
              label="Video Thumbs"
            />
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="tralier"
              label="Tralier"
              onChange=""
              placeholder="Tralier"
              required
              type="text"
              value={videoDesc.preUploadVideo.tralier}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="vdoUrl "
              label="Video Url"
              onChange=""
              placeholder="Enter URL for Video"
              required
              type="text"
              value={videoDesc.preUploadVideo.vdoUrl}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="views "
              label="Views"
              onChange=""
              placeholder="Enter Number of Views"
              required
              type="number"
              value={videoDesc.preUploadVideo.views}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="actorList"
              label="Actor List"
              onChange=""
              placeholder="List of Actors"
              required
              type="text"
              value={videoDesc.preUploadVideo.actorList}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="actressList"
              label="Actress List"
              onChange=""
              placeholder="List of Actress"
              required
              type="text"
              value={videoDesc.preUploadVideo.actressList}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="banners"
              label="Banners List"
              onChange=""
              placeholder="List of Banners"
              required
              type="text"
              value={videoDesc.preUploadVideo.banners}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="directors"
              label="Directors"
              onChange=""
              placeholder="Enter Directors"
              required
              type="text"
              value={videoDesc.preUploadVideo.directors}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="eps"
              label="Episodes"
              onChange=""
              placeholder="Enter Episodes"
              required
              type="text"
              value={videoDesc.preUploadVideo.eps}
            />
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="plans "
              label="Plans"
              onChange=""
              placeholder="Enter Plans"
              required
              type="text"
              value={videoDesc.preUploadVideo.plans}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="supportingActorList "
              label="Supporting Actor"
              onChange=""
              placeholder="Enter Supporting Actor List"
              required
              type="text"
              value={videoDesc.preUploadVideo.supportingActorList}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="supportingActressList "
              label="Supporting Actress"
              onChange=""
              placeholder="Enter Supporting Actress List"
              required
              type="text"
              value={videoDesc.preUploadVideo.supportingActressList}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="writer "
              label="Writer Name"
              onChange=""
              placeholder="Enter Writer Name"
              required
              type="text"
              value={videoDesc.preUploadVideo.writer}
            />
          </Grid>
        </Grid>
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
