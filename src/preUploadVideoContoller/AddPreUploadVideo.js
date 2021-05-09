import { Grid, Input, MenuItem, TextField } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React, { useState } from "react";
import { uploadVideo } from "../APIs/uploadVideo";

const videoTypes = [
  "Short-films",
  "Films",
  "Web-series",
  "Music videos",
  // "DIAMOND",
  // "ONEYEAR",
  // "ONEDAY",
  // "SIXMONTHS",
  // "THREEMONTHS",
  // "ONEMONTH",
];
const planTypes = [
  "STANDARD",
  "PREMIUM",
  "DIAMOND",
  "SINGLEVIDEO",
  "WEBSERIES",
  "MOVIE",
  "SORTMOVIE",
  "TRAILER",
  "UPCOMMING",
  "DEFAULT",
];
const languages = [
  "Hindi",
  "Marathi",
  "Haryanvi",
  "Bengali",
  "Punjabi",
  "Assamese",
  "Rajasthani",
  "Bhojpuri",
  "Oriya",
  "Nepali",
  "Gadhwali",
  "Kashmiri",
  "Chhattisgarhi",
  "Manipuri",
  "English",
  "Malyalam",
  "Tamil",
  "Telugu ",
  "Kannad",
  "Hyderabadi",
  "Gujarati",
];
const genres = [
   "Drama",
   "Comedy",
   "Horror",
   "Thriller",
   "Social",
   "Romantic",
   "Action",
   "Suspense",
   "Motivational",
   "Devotional",
   "Edutainment",
   "Infotainment",
   "Docutainment",
   "Historical",
   "Fantasy",
   "Mythology",
   "Bhakti song",
   "Romantic song",
   "Sad song",
   "Horror song ",
   "Folk song",
   "Rap song",
   "Item song",
   "Classical song",
];
const cbfcrating  = [
  "U",
  "U/A",
  "A",
];

const AddPreUploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [fileSelectorDisabled, setFileSelectorDisabled] = useState(false);
  const [videoDesc, setVideoDesc] = useState({
    preUploadVideo: {
      cbfcrating: "",
      description: "",
      title: "",
      videoType: "",
      actorList: "",
      actressList: "",
      banners: "",
      channelId : "",
      description :"",
      directors :"",
      duration :"",
      eps:"",
      genres:"",
      id:"",
      language :"",
      likes :"",
      numeps:"",
      partNumber :"",
      planType :"",
      plans :"",
      promo :"",
      supportingActorList :"",
      supportingActressList :"",
      plans:"",
      thumbs:"",
      trailer:"",
      main:"",
      stysynp:"",
      actorName:"",
      actimg:"",
      actressName:"",
      actrimg:"",
      name:"",
      supactimg:"",
      phnnumber:"",

    },
    genre:{
      genreName: "",
    },
    cast: {

    }
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
              value={videoDesc.languages}
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
            value={videoDesc.planType }
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
              label="Video Description"
              placeholder="description..."
              label="Dscription"
              onChange={(e) => handleInputChange(e)}
              aria-label="minimum height" 
              rowsMin={3}  
              value={videoDesc.preUploadVideo.description}
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
                placeholder="Video Title..."
                required
                type="text"
                value={videoDesc.preUploadVideo.title }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="thumbs "
                // label="Video Thumbs"
                onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={videoDesc.preUploadVideo.thumbs }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="teaser "
                label="Video Teaser"
                onChange=""
                // placeholder="Enter Thumbs"
                required
                type="file"
                value={videoDesc.preUploadVideo.teaser }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="trailer"
                label="Video Trailer"
                onChange=""
                placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.trailer }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="main"
                label="Main Video"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.main }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="strysynp "
                label="Story synopsis"
                onChange=""
                placeholder="Enter Story synopsis"
                required
                type="text"
                value={videoDesc.preUploadVideo.strysynp }
              />
          </Grid>
          <Grid item xs={12}>
            <h3>Cast 1</h3>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="actorName "
                label="Actor Name"
                onChange=""
                placeholder="Thomas Man"
                required
                type="text"
                value={videoDesc.preUploadVideo.actorName }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="actimg"
                label="Actor Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.actimg }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="actressName "
                label="Actress Name"
                onChange=""
                placeholder="Mena txt"
                required
                type="text"
                value={videoDesc.preUploadVideo.actressName }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="actrimg"
                label="Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.actrimg }
              />
          </Grid>
          <Grid item xs={12}>
            <h3>Supporting Actor 1</h3>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="actname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDesc.preUploadVideo.actname }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="supactimg"
                label="Supporting Actor Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.supactimg }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="phnnumber"
                label="Phone Number"
                onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={videoDesc.preUploadVideo.phnnumber}
              />
          </Grid>
          <Grid item xs={12}>
            <h3>Supporting Actress 1</h3>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="actrname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDesc.preUploadVideo.actrname }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="supactrimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.supactrimg }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="phnnumber"
                label="Phone Number"
                onChange=""
                placeholder="Phone Number"
                required
                type="number"
                value={videoDesc.preUploadVideo.phnnumber}
              />
          </Grid>
          <Grid item xs={12}>
            <h3>Directors 1</h3>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="directorname"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDesc.preUploadVideo.directorname }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="directorimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.directorimg }
              />
          </Grid>
          <Grid item xs={12}>
            <h3>Writer 1</h3>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
                id="Writername"
                label="Name"
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                required
                type="text"
                value={videoDesc.preUploadVideo.Writername }
              />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Input
                id="writerimg"
                label="Supporting Actress Image"
                onChange=""
                // placeholder="trailer"
                required
                type="file"
                value={videoDesc.preUploadVideo.writerimg }
              />
          </Grid>
          <Grid items xs={12} ></Grid>
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
                value={videoDesc.preUploadVideo.id }
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
                value={videoDesc.preUploadVideo.likes }
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
                value={videoDesc.preUploadVideo.numeps }
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
                value={videoDesc.preUploadVideo.partNumber }
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
                value={videoDesc.preUploadVideo.promo }
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
                value={videoDesc.preUploadVideo.plans }
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
                value={videoDesc.preUploadVideo.vdoUrl }
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
                value={videoDesc.preUploadVideo.views }
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
                value={videoDesc.preUploadVideo.actressList }
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
                value={videoDesc.preUploadVideo.banners }
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
                value={videoDesc.preUploadVideo.plans }
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
                value={videoDesc.preUploadVideo.supportingActorList }
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
                value={videoDesc.preUploadVideo.supportingActressList }
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
                value={videoDesc.preUploadVideo.writer }
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
