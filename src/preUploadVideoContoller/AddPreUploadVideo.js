import {
  Input,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  InputLabel,
} from "@material-ui/core";
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
import { addPreUploadVideo } from "../APIs/addPreUploadVideo";
import Episodes from "./Episodes/Episodes";
import AddActor from "./AddCast/AddActor";
import AddActress from "./AddCast/AddActress";

const AddPreUploadVideo = ({ vdoUrl }) => {
  // const [videoFile, setVideoFile] = useState(null);
  const [genresArr, setGenresArr] = useState([]);
  const [response, setResponse] = useState("");
  const [promo, setPromo] = useState({
    duration: "",
    id: 0,
    promoUrl: "",
    submitDate: "",
  });
  const [trailer, setTrailer] = useState({
    duration: "",
    id: 0,
    submitDate: "",
    trailerUrl: "",
  });
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
  });
  useState(0);

  useEffect(() => {
    console.log(
      "Change in preUploadVideo - ",
      preUploadVideo
      // JSON.stringify(preUploadVideo)
    );
    // console.log("Change in preUploadVideo-planType - ", preUploadVideo);
    // return () => {
    //   cleanup
    // };
  }, [preUploadVideo]);

  const handleChildData = (name, data) => {
    // e.preventDefault();
    switch (name) {
      case "director":
        setPreUploadVideo({ ...preUploadVideo, directors: data });
        break;
      case "actor":
        break;
      case "actress":
        break;
      case "supportingActor":
        break;
      case "supportingActoress":
        break;
      case "writers":
        setPreUploadVideo({ ...preUploadVideo, writer: data });
        break;
      case "episodes":
        setPreUploadVideo({ ...preUploadVideo, eps: data });
        break;
      default:
        console.log("invalid Data field");
        break;
    }
    console.log(`Data from ${name}`, data);
  };

  const handlePromoChange = (e) => {
    setPromo({ ...promo, [e.target.name]: e.target.value });
    setPreUploadVideo({ ...preUploadVideo, promo: promo });
  };

  const handleTrailerChange = (e) => {
    setTrailer({ ...trailer, [e.target.name]: e.target.value });
    setPreUploadVideo({ ...preUploadVideo, trailer: trailer });
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
    addPreUploadVideo(preUploadVideo).then((res) => {
      console.log("Details Response", res);
      alert("Details Sent Successfully!");
      setResponse(res);
    });
  };

  return (
    <div className="add__prevideo">
      <h1>Pre Upload Video</h1>
      <br />
      <form className="container">
        <div className="basic__details">
          <div className="basic__details__inner">
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
                <TextField
                  className="input textfield"
                  id="vdoUrl"
                  label="Video URL"
                  onChange={(e) => handleInputChange(e)}
                  variant="outlined"
                  placeholder="Video URL"
                  type="text"
                  name="vdoUrl"
                  value={vdoUrl}
                />
              </div>
              <div className="col-md-4 col-sm-6 input__container">
                <TextField
                  className="input textfield"
                  id="title"
                  label="Video Title"
                  onChange={(e) => handleInputChange(e)}
                  variant="outlined"
                  placeholder="Video Title..."
                  type="text"
                  name="title"
                  value={preUploadVideo.title}
                />
              </div>
              <div className="col-md-4 col-sm-6 input__container">
                <TextField
                  className="input textfield"
                  id="thumbs"
                  label="Thumbs"
                  onChange={(e) => handleInputChange(e)}
                  variant="outlined"
                  placeholder="Thumbs"
                  type="text"
                  name="thumbs"
                  value={preUploadVideo.title}
                />
              </div>
              <div className="col-md-4 col-sm-6 input__container">
                <InputLabel id="demo-mutiple-name-label">Genre</InputLabel>
                <Select
                  className="input multiselect"
                  labelId="demo-mutiple-name-label"
                  id="genres"
                  multiple
                  name="genres"
                  placeholder="Genres"
                  value={genresArr}
                  onChange={(e) => handleInputChange(e)}
                  variant="outlined"
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
              <div className="col-md-12 col-sm-12 col-md input__container">
                <TextareaAutosize
                  className="input"
                  id="description"
                  // label="Video Description"
                  placeholder="Description..."
                  name="description"
                  onChange={(e) => handleInputChange(e)}
                  aria-label="minimum height"
                  rowsMin={3}
                  value={preUploadVideo.description}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container_pad">
          <div className="comp_border">
            <div className="row">
              <div className="text_btn col-md-6 custom_col">
                <h4>Promo</h4>
                <label htmlFor="durationPromo">Duration</label>
                <input
                  type="text"
                  placeholder="Duration"
                  className="form-control"
                  id="durationPromo"
                  name="duration"
                  value={promo.duaration}
                  onChange={(e) => handlePromoChange(e)}
                />
                <br />
                <label htmlFor="promoUrl">Promo URL</label>
                <input
                  type="text"
                  placeholder="Promo URL"
                  className="form-control"
                  id="promoUrl"
                  name="promoUrl"
                  value={promo.promoUrl}
                  onChange={(e) => handlePromoChange(e)}
                />
                <br />
                <label htmlFor="submitDatePromo">Submit Date</label>
                <input
                  type="text"
                  placeholder="submitDate"
                  className="form-control"
                  id="submitDatePromo"
                  name="submitDate"
                  value={promo.submitDate}
                  onChange={(e) => handlePromoChange(e)}
                />
                {/* <br />
                <pre>{JSON.stringify(promo, null, 2)}</pre> */}
              </div>
              <div className="text_btn col-md-6 custom_col">
                <h4>Trailer</h4>
                <label htmlFor="durationTrailer">Duration</label>
                <input
                  type="text"
                  placeholder="Duration"
                  className="form-control"
                  id="durationTrailer"
                  name="duration"
                  value={trailer.duaration}
                  onChange={(e) => handleTrailerChange(e)}
                />
                <br />
                <label htmlFor="trailerUrl">Trailer URL</label>
                <input
                  type="text"
                  placeholder="Promo URL"
                  className="form-control"
                  id="trailerUrl"
                  name="trailerUrl"
                  value={trailer.trailerUrl}
                  onChange={(e) => handleTrailerChange(e)}
                />
                <br />
                <label htmlFor="submitDateTrailer">Submit Date</label>
                <input
                  type="text"
                  placeholder="Submit Date"
                  className="form-control"
                  id="submitDateTrailer"
                  name="submitDate"
                  value={trailer.submitDate}
                  onChange={(e) => handleTrailerChange(e)}
                />
                {/* <br />
                <pre>{JSON.stringify(trailer, null, 2)}</pre> */}
              </div>
            </div>
          </div>
        </div>

        {/* <MusicVideoDetails /> */}
        <Episodes exportData={handleChildData} />
        <AddActor exportData={handleChildData} />
        <AddActress exportData={handleChildData} />
        <AddSupportingActor exportData={handleChildData} />
        <AddSupportingActress exportData={handleChildData} />
        <AddDirector exportData={handleChildData} />
        <AddWriter exportData={handleChildData} />
      </form>
      <br />
      <br />
      <div className="success__btn">
        <button
          type="button"
          className="btn btn-lg btn-success "
          onClick={(e) => handleVideoUploadFormSubmit(e)}
        >
          Submit Details
        </button>
      </div>
      <br />
      <div className="response">
        <h1>Response From the Server</h1>
        <pre>
          <p>{JSON.stringify(response, null, 2)}</p>
        </pre>
      </div>
    </div>
  );
};

export default AddPreUploadVideo;
