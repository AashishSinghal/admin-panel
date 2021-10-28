import React, { useEffect, useState } from "react";
import { uploadVideo } from "./APIs/uploadVideo";
import AddPreUploadVideo from "./preUploadVideoContoller/AddPreUploadVideo";
import copy from "copy-to-clipboard";
import $ from "jquery";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [files, setFiles] = useState([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // console.log("Files & response", files, response);
    console.log("Response Values - ", response);
    // return () => {
    //   cleanup
    // };
  }, [files, response]);

  const handleFileUpload = (e) => {
    var values = [];
    e.preventDefault();
    setLoading(true);
    let file = e.target[0].files;
    console.log("File event - ", e);
    setFiles(file);
    for (let i = 0; i < file.length; i++) {
      console.log("Mapped File -", file[i]);
      let formData = new FormData();
      formData.append(`file`, file[i]);
      console.log(`FormData ${i} - `, formData);
      uploadVideo(formData).then(
        //<----- API CAll
        (res) => {
          if (res) {
            console.log(`response ${i} - `, res, formData);
            values.push(res.data);
            setResponse(values);
          } else {
            console.log("No Data Received");
          }
          //     // setVideoFile(null);
        },
        (err) => {
          console.log("Req error - ", err);
          setLoading(false);
          alert("Video upload Failed Please try Again.");
        }
      );
    }
  };

  const copyToClipboard = (index) => {
    var value = $(`.videoUrl__span${index}`).text();
    copy(value);
    console.log("Copy - ", value);
  };

  const responseURL = (data) => {
    let url = response.map((res) => {
      console.log("res name - ", res.fileDownloadUri);
      if (res.fileName === data) {
        return res.fileDownloadUri;
      } else {
        return null;
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return url;
  };

  $(document).ready(function () {
    $("form input").change(function () {
      if (this.files) {
        $("form p").text(this.files.length + " file(s) selected");
      }
    });
    $(".server__details>i").on("click", function () {});
  });

  return (
    <div className="App main_wrapper_box">
      <div className="inner_wrapper_box">
        <div className="upload">
          <form
            onSubmit={(e) => {
              handleFileUpload(e);
            }}
          >
            <div className="input-div">
              {/* File Input Over Here */}
              <input
              className="file_limit"
                type="file"
                multiple
                onChange={(e) => {
                  console.log("Files - ", e.target.files[0]);
                }}
              />
              <p>Drag your files here or click in this area.</p>
            </div>
            <button type="submit">
              <i className="bi bi-upload limit_button"></i> <span>Upload</span>
            </button>
          </form>
        </div>
        <br />
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {[...files].map((file, index) => {
            console.log("JSX Mapping -", file);
            return (
              <li key={index} className="nav-item" role="presentation">
                <a
                  className={index === 0 ? "nav-link active" : "nav-link"}
                  id="home-tab"
                  data-toggle="tab"
                  href={`#tab${index}`}
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  File - {index + 1}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tab-content" id="myTabContent">
          {[...files].map((file, index) => {
            return (
              <div
                key={index}
                className={
                  index === 0 ? "tab-pane fade show active" : "tab-pane fade"
                }
                id={`tab${index}`}
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="video__details">
                  <div className="upload__details">
                    <strong>File Name - </strong>
                    {files ? file.name : "Not Available"}
                    <br />
                    <strong>File Size - </strong>
                    {files
                      ? files[index].size / (1024 * 1024) + " MB"
                      : "Not Available"}
                    <br />
                    <strong>File Type - </strong>
                    {/* {files ? files[0].type : "Not Available"} */}
                    <br />
                  </div>
                  <div className="server__details">
                    <strong>File Download URI - </strong>
                    {loading ? "Loading ..." : null}
                    <span className={`videoUrl__span${index}`}>
                      {response.length > 0
                        ? responseURL(file.name)
                        : "waiting For response..."}
                    </span>
                    &nbsp; &nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => copyToClipboard(index)}
                    >
                      <i className="bi bi-clipboard"></i>
                    </button>
                    <br />
                  </div>
                </div>
                <br />
                <AddPreUploadVideo vdoUrl={response.fileDownloadUri} />
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default App;
