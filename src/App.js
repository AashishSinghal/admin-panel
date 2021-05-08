import React, { useState } from "react";
import { uploadVideo } from "./APIs/uploadVideo";
import AddPreUploadVideo from "./preUploadVideoContoller/AddPreUploadVideo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AddPreUploadVideo />
    </div>
  );
};

export default App;
