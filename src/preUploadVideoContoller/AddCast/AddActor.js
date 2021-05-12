import React, { useState, Fragment } from "react";
import "../../Components/component.css";
import "bootstrap/dist/css/bootstrap.css";

const AddActor = ({ exportData }) => {
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
    } else if (event.target.name === "CastActorimg") {
      values[index].CastActorimg = event.target.value;
    }

    setInputFields(values);
    exportData("actor", values);
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
      {/* <h1>Dynamic Form Fields in React</h1> */}
      <br />
        <div className="container_pad">
          <button
            className="btn btn-primary waves-effect"
            type="button"
            onClick={() => handleAddFields()}
          >
            Add Actor
          </button>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="comp_border">
                <div className="text_btn">
                  <h4>Actor {index + 1}</h4>
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
                    <label htmlFor="CastActorName">Actor Name</label>
                    <input
                      type="text"
                      placeholder="Acotor Name"
                      className="form-control"
                      id="CastActorName"
                      name="name"
                      value={inputField.name}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="form-group col-sm-4 col-md-6">
                    <label htmlFor="CastActorimg">Actor Image</label>
                    <input
                      type="text"
                      placeholder="Image URl"
                      className="form-control"
                      id="CastActorimg"
                      name="CastActorimg"
                      value={inputField.CastActorimg}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </div>
              </div>
          </Fragment>
        ))}
      </div>
      {/* <div className="submit-button">
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

export default AddActor;
