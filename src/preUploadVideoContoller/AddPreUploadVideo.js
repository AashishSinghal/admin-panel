import { Input, MenuItem, Select, TextField, TextareaAutosize } from "@material-ui/core";
// import  from "@material-ui/core/TextareaAutosize";
import React, { useEffect, useState } from "react";
import "./preUploadvideo.css";
import AddDirector from "./AddDirectors/AddDirectors";
import AddWriter from "./AddWriters/AddWriters";
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
// import AddWriter from "./AddWriters/AddWriters";
import { addPreUploadVideo } from "../APIs/addPreUploadVideo";
import Episodes from "./Episodes/Episodes";
import AddActor from "./AddCast/AddActor";
import AddActress from "./AddCast/AddActress";

const AddPreUploadVideo = ({ vdoUrl }) => {
  // const [videoFile, setVideoFile] = useState(null);
  const [genresArr, setGenresArr] = useState([]);
  const [response, setResponse] = useState("");
  const [preUploadVideo, setPreUploadVideo] = useState({
    title: "",
    description: "",
    likes: 0,
    channelId: 0,
    banners: [],
    cbfcrating: "",
    actorList: [
      {
        id: 0,
        imageUrl: "string",
        name: "actor",
      },
    ],
    actressList: [
      {
        id: 0,
        imageUrl: "string",
        name: "actress",
      },
    ],
    genres: [],
    trailer: [],
    promo: {
      duaration: "string",
      id: 0,
      promoUrl: "string",
      submitDate: "string",
    },

    directors: [
      {
        id: 0,
        dirName: "dir1",
      },
    ],
    eps: [],
    writer: [
      {
        id: 0,
        writerName: "writer1",
      },
    ],
    views: 0,
    videoType: "",
    language: "",
    thumbs: "",
    planType: "",
    plans: [""],
    numeps: "",
    partNumber: "string",
    vdoUrl: vdoUrl,
    duration: 0,
    supportingActressList: [
      {
        id: 0,
        name: "sactoress1",
        imageUrl: "string",
      },
    ],
    supportingActorList: [
      {
        id: 0,
        name: "sactor1",
        imageUrl: "string",
      },
    ],
  }); useState(0);

  useEffect(() => {
    console.log(
      "Change in preUploadVideo - ",
      preUploadVideo,
      JSON.stringify(preUploadVideo)
    );
    // console.log("Change in preUploadVideo-planType - ", preUploadVideo);
    // return () => {
    //   cleanup
    // };
  }, [preUploadVideo]);

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
    addPreUploadVideo(preUploadVideo).then((res) => {
      console.log("Details Response", res);
      setResponse(res);
    });
  };

  return (
    <div className="add__prevideo">
      <h1>Pre Upload Video</h1>
      <br />
      <form>
        <div className="basic__details container">
          <div className="row">
            <div className="col-md-4 col-sm-6 input__container">
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
            </div>
            <div className="col-md-4 col-sm-6 input__container">
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
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                id="select-video-type"
                select
                label="Video Type"
                name="videoType"
                value={preUploadVideo.videoType}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              >
                {videoTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                id="cbfcrating"
                select
                label="CBFC Rating"
                name="cbfcrating"
                value={preUploadVideo.cbfcrating}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              >
                {cbfcrating.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-md-4 col-sm-6 input__container">
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
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                type="number"
                id="channelId"
                label="Channel ID"
                name="channelId"
                value={preUploadVideo.channelId}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              />
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                type="number"
                id="duration"
                label="Duration"
                name="duration"
                value={preUploadVideo.duration}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              />
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                type="number"
                id="likes"
                label="Likes"
                name="likes"
                value={preUploadVideo.likes}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              />
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextField
                className="input textfield"
                type="number"
                id="numeps"
                label="Number Of Episodes"
                name="numeps"
                value={preUploadVideo.numeps}
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              />
            </div>
            <div className="col-md-4 col-sm-6 input__container">
              <TextareaAutosize
                className="input"
                id="description"
                // label="Video Description"
                placeholder="description..."
                name="description"
                onChange={(e) => handleInputChange(e)}
                aria-label="minimum height"
                rowsMin={3}
                value={preUploadVideo.description}
              />
            </div>
          </div>
        </div>

        <TextField
          className="input textfield"
          id="vdoUrl"
          label="Video URL"
          onChange={(e) => handleInputChange(e)}
          placeholder="Video URL"
          type="text"
          name="vdoUrl"
          value={vdoUrl}
        />
        <TextField
          className="input textfield"
          id="title "
          label="Video Title"
          onChange={(e) => handleInputChange(e)}
          placeholder="Video Title..."
          type="text"
          name="title"
          value={preUploadVideo.title}
        />
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
        <MusicVideoDetails />
        <Episodes />
        <AddActor />
        <AddActress/>
        <AddSupportingActor />
        <AddSupportingActress />
        <AddDirector/>
        <AddWriter/>
      </form>
      <br />
      <br />
      <button
        type="button"
        class="btn btn-success"
        onClick={(e) => handleVideoUploadFormSubmit(e)}
      >
        Submit Details
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
