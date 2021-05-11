import React, { useEffect, useState } from "react";
import { uploadVideo } from "./APIs/uploadVideo";
import AddPreUploadVideo from "./preUploadVideoContoller/AddPreUploadVideo";
import $ from "jquery";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  const [files, setFiles] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("Files & response", files, response);
    // return () => {
    //   cleanup
    // };
  }, [files, response]);

  const handleFileUpload = (e) => {
    setLoading(true);
    let file = e.target[0].files[0];
    console.log("File event - ", e);
    setFiles(file);
    let formData = new FormData();
    formData.append("file", file);
    console.log("FormData - ", formData);
    uploadVideo(formData).then(
      (res) => {
        console.log("response  - ", res, formData);
        setResponse(res.data);
        setLoading(false);
        // setVideoFile(null);
      },
      (err) => {
        console.log("Req error - ", err);
        setLoading(false);
        alert("Video upload Failed Please try Again.");
      }
    );
  };

  $(document).ready(function () {
    $("form input").change(function () {
      if (this.files) {
        $("form p").text(this.files.length + " file(s) selected");
      }
    });
    $(".server__details>i").on("click", function () {
      
    });
  });

  return (
    <div className="App">
      <div className="upload">
        <form
          onSubmit={(e) => {
            handleFileUpload(e);
          }}
        >
          <div className="input-div">
            <input type="file" />
            <p>Drag your files here or click in this area.</p>
          </div>
          <button type="submit">
            <i className="bi bi-upload"></i> &nbsp;Upload
          </button>
        </form>
      </div>
      <div className="video__details">
        <div className="upload__details">
          <strong>File Name - </strong>
          {files ? files.name : "Not Available"}
          <br />
          <strong>File Size - </strong>
          {files ? files.size : "Not Available"}
          <br />
          <strong>File Type - </strong>
          {files ? files.type : "Not Available"}
          <br />
        </div>
        <div className="server__details">
          {loading ? <div className="server__loading"></div> : null}
          <strong>File Download URI - </strong>
          <span>{response ? response.fileDownloadUri : "Loading..."}</span>
          &nbsp; &nbsp;
          <i className="bi bi-clipboard"></i>
          <br />
        </div>
      </div>
      <br />
      <AddPreUploadVideo vdoUrl={response.fileDownloadUri} />
    </div>
  );
};

export default App;
