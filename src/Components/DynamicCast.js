import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const DynamicCast = (props) => {
  const { number, onRemove } = props;
  const [inputFields, setInputFields] = useState([
    {
      ActorName: "",
      ActressName: "",
      ActorImageFile: "",
      ActressImageFile: "",
    },
  ]);

  const handleActorFile = (e) => {
    let file = e.target.files[0];

    setInputFields({ ...inputFields, ActorImageFile: file });
  };
  const handleActressFile = (e) => {
    let file = e.target.files[0];

    setInputFields({ ...inputFields, ActressImageFile: file });
  };

  console.log(inputFields);
  return (
    <>
      <div className="box">
        <Button
          variant="contained"
          onClick={onRemove}
          className="remove-button"
          color="secondary"
        >
          Remove
        </Button>
        <h3>Cast {number + 2}</h3>

        <div className="firstLine">
          <div className="form-group">
            <label>Actor Name</label>
            <input
              type="text"
              placeholder="Actor name"
              value={inputFields.ActorName}
              onChange={(e) =>
                setInputFields({ ...inputFields, ActorName: e.target.value })
              }
              className="form-control name-input"
            />
          </div>
          <div className="file-upload-div">
            <label>Actor Image</label>
            <div className="file-upload">
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleActorFile}
              />
            </div>
          </div>
        </div>
        <div className="secondLine">
          <div className="form-group">
            <label>Actress Name</label>
            <input
              type="text"
              placeholder="Actress name"
              value={inputFields.Phone}
              onChange={(e) =>
                setInputFields({ ...inputFields, ActressName: e.target.value })
              }
              className="form-control name-input"
            />
          </div>
          <div className="file-upload-div">
            <label>Actress Image</label>
            <div className="file-upload">
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleActressFile}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCast;
