import React, { useState, Fragment, useEffect } from "react";
import "../../Components/component.css";
import "bootstrap/dist/css/bootstrap.css";
import EpisodeCast from "./EpisodesCast";
import EpisodeSupportCast from "./EpisodeSuppCast";

const Episodes = ({ exportData }) => {
  const [inputFields, setInputFields] = useState([
    {
      description: "",
      episNumber: "",
      submitDate: "",
      thumb: "",
      casts: [],
      supportingCast: [],
    },
  ]);

  useEffect(() => {
    // console.log("Episode Details - ", inputFields);

    // return () => {
    //   cleanup
    // };
  }, [inputFields, exportData]);

  const handleInputChange = (event) => {
    const values = [...inputFields];
    if (event.target.name === "description") {
      values[0].description = event.target.value;
    } else if (event.target.name === "episNumber") {
      values[0].episNumber = event.target.value;
    } else if (event.target.name === "submitDate") {
      values[0].submitDate = event.target.value;
    } else if (event.target.name === "thumb") {
      values[0].thumb = event.target.value;
    }
    setInputFields(values);
    exportData("episodes", inputFields);
  };

  // const handleChildData = (index, name, data) => {
  //   switch (name) {
  //     case "cast":
  //       setInputFields({ ...inputFields, casts: data });
  //       break;
  //     case "supportingCast":
  //       setInputFields({ ...inputFields, supportingCast: data });
  //       break;
  //     default:
  //       break;
  //   }
  //   console.log(index, name, data);
  // };

  const handleChildData = (name, data) => {
    const values = [...inputFields];
    switch (name) {
      case "cast":
        values[0].casts = data;
        break;
      case "supportingCast":
        values[0].supportingCast = data;
        break;
      default:
        break;
    }
    setInputFields(values);
    console.log(name, data, "Mutated Object - ", values);
    exportData("episodes", inputFields);
  };

  // const handleAddFields = () => {
  //   const values = [...inputFields];
  //   values.push({
  //     description: "",
  //     episNumber: "",
  //     submitDate: "",
  //     thumb: "",
  //   });
  //   setInputFields(values);
  // };

  // const handleRemoveFields = (index) => {
  //   const values = [...inputFields];
  //   values.splice(index, 1);
  //   setInputFields(values);
  // };
  return (
    <>
      <br />
        <div className="container_pad">
          {/* <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleAddFields()}
          >
            Add Episodes
          </button> */}
          {/* {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}> */}
          <div className="comp_border">
            <div className="text_btn">
              <h4>Episodes Details</h4>
            </div>
            <div className="row">
              <div className="form-group col-sm-4 col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Episode Description"
                  className="form-control"
                  id="description"
                  name="description"
                  value={inputFields.description}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className="form-group col-sm-4 col-md-6">
                <label htmlFor="episNumber">Episod Number</label>
                <input
                  type="text"
                  placeholder="Episode Number"
                  className="form-control"
                  id="episNumber"
                  name="episNumber"
                  value={inputFields.episNumber}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className="form-group col-sm-4 col-md-6">
                <label htmlFor="submitDate">Submit Date</label>
                <input
                  type="text"
                  placeholder="Submit Date"
                  className="form-control"
                  id="submitDate"
                  name="submitDate"
                  value={inputFields.submitDate}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className="form-group col-sm-4 col-md-6">
                <label htmlFor="VideoThumb">Video Thumb</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Video Thumb"
                  id="VideoThumb"
                  name="thumb"
                  value={inputFields.thumb}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <hr />
              <div className="row">
                <EpisodeCast exportData={handleChildData} />
                <EpisodeSupportCast exportData={handleChildData} />
              </div>
            </div>
          </div>
          {/* </Fragment>
          ))} */}
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

export default Episodes;
