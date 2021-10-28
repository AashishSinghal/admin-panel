import React, { useState, Fragment } from "react";
import "../../Components/component.css";
import "bootstrap/dist/css/bootstrap.css";

const AddDirector = ({ exportData }) => {
  const [inputFields, setInputFields] = useState([
    {
      id: "0",
      name: "",
      imageUrl: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else {
      values[index].imageUrl = event.target.value;
    }

    setInputFields(values);
    exportData("director", values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      id: "",
      name: "",
      imageUrl: "",
    });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <>
      <br />
      <div className="container_pad">
        <button
          className="add_button"
          type="button"
          onClick={() => handleAddFields()}
        >
          Add Directors
        </button>
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div className="comp_border">
              <div className="text_btn">
                <h4>Director {index + 1}</h4>
                {index === 0 ? null : (
                  <button
                    className="btn btn-outline-danger waves-effect"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="row">
                <div className="form-group col-sm-4 col-md-6">
                  <label htmlFor="DirectorName">Name</label>
                  <input
                    type="text"
                    placeholder="Thomas Man"
                    className="form-control"
                    id="DirectorName"
                    name="name"
                    value={inputField.name}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-6">
                  <label htmlFor="Directorimg">Director Image</label>
                  <input
                    type="text"
                    placeholder="Image URl"
                    className="form-control"
                    id="Directorimg"
                    name="imageUrl"
                    value={inputField.imageUrl}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {/*<div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>*/}
      {/* <br />
      <pre>{JSON.stringify(inputFields, null, 2)}</pre> */}
    </>
  );
};

export default AddDirector;
