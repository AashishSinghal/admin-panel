import React, { useState, Fragment } from "react";
import '../../Components/component.css'
import "bootstrap/dist/css/bootstrap.css";
import EpisodeCast from "./EpisodesCast";
import EpisodeSupportCast from "./EpisodeSuppCast";

const Episodes = () => {

  const [inputFields, setInputFields] = useState([
    { description: '',  epsnumber: '', submitDate:'' }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "description") {
      values[index].description = event.target.value;
    } else if (event.target.name === "epsnumber") {
      values[index].epsnumber = event.target.value;
    } else if (event.target.name === "submitDate") {
        values[index].submitDate = event.target.value;
    }

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({description: '',  epsnumber: '', submitDate:'' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="container_pad">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleAddFields()}
          >
            Add Episodes
          </button>
          {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div className="comp_border">
              <div className="text_btn">
                <h4>Episodes {index+1}</h4>
                {index === 0 ? null : (
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      Remove
                    </button>
                  )}
              </div>
              <div className="row">
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    placeholder="Episod Description"
                    className="form-control"
                    id="description"
                    name="description"
                    value={inputField.description}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="epsnumber">Episod Number</label>
                  <input
                    type="text"
                    placeholder="Episod Number"
                    className="form-control"
                    id="epsnumber"
                    name="epsnumber"
                    value={inputField.epsnumber}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="submitDate">Submit Date</label>
                  <input
                    type="text"
                    placeholder="Submit Date"
                    className="form-control"
                    id="submitDate"
                    name="submitDate"
                    value={inputField.submitDate}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className=" col-sm-4 col-md-5"></div>
                <hr />
                <EpisodeCast />
                <EpisodeSupportCast />
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
        <br/>
         <pre>
        {JSON.stringify(inputFields, null, 2)}
        </pre> 
      </form>
    </>
  )
}

export default Episodes;