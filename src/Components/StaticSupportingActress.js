import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const StaticSupportingActress = () => {
  const [inputFields, setInputFields] = useState([
    {
      Name: "",
      Phone: "",
      imageFile: "",
    },
  ]);

  const handleFile = (e) => {
    let file = e.target.files[0];

    setInputFields({ ...inputFields, imageFile: file });
  };
  console.log(inputFields);
  return (
    <>
      <div className="box">
        <h3>Supporting Actress 1</h3>
        <div className="firstLine">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={inputFields.Name}
              onChange={(e) =>
                setInputFields({ ...inputFields, Name: e.target.value })
              }
              className="form-control name-input"
            />
          </div>
          <div className="file-upload-div">
            <label>Supporting Actress Image</label>
            <div className="file-upload">
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleFile}
              />
            </div>
          </div>
        </div>
        <div className="secondLine">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone number"
              value={inputFields.Phone}
              onChange={(e) =>
                setInputFields({ ...inputFields, Phone: e.target.value })
              }
              className="form-control name-input"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticSupportingActress;
