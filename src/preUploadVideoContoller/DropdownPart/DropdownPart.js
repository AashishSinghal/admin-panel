import React, { useState, Fragment } from "react";
import '../../Components/component.css'
import "bootstrap/dist/css/bootstrap.css";

const MusicVideoDetails = () => {

  const [inputFields, setInputFields] = useState([
    { SuppActressName: '',  SuppActressimg: ''}
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "SuppActressName") {
      values[index].SuppActressName = event.target.value;
    } else if (event.target.name === "SuppActressimg") {
      values[index].SuppActressimg = event.target.value;
    } 

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({SuppActressName: '',  SuppActressimg: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <>
      {/* <h1>Dynamic Form Fields in React</h1> */}
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="container_pad">
          {/* <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleAddFields()}
          >
            Add Supporting Actress
          </button> */}
          {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div className="comp_border">
              <div className="text_btn">
                <h4>Music Video Details</h4>
                  {/* <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    Remove
                  </button> */}
              </div>
              <div className="row">
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="VideoDetail">Video Detail</label>
                  <input
                    type="text"
                    placeholder="Supportng Actress Name"
                    className="form-control"
                    id="VideoDetail"
                    name="VideoDetail"
                    value={inputField.VideoDetail}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="VideoThumb">Video Thumb</label>
                  <input
                    type="file"
                    className="form-control"
                    id="VideoThumb"
                    name="VideoThumb"
                    value={inputField.VideoThumb}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="VideoTeaser">Video Teaser</label>
                  <input
                    type="file"
                    className="form-control"
                    id="VideoTeaser"
                    name="VideoTeaser"
                    value={inputField.VideoTeaser}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="VideoTrailer">Video Trailer</label>
                  <input
                    type="file"
                    className="form-control"
                    id="VideoTrailer"
                    name="VideoTrailer"
                    value={inputField.VideoTrailer}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="StorySynopsis">Story Synopsis</label>
                  <input
                    type="text"
                    placeholder="Story Synopsis"
                    className="form-control"
                    id="StorySynopsis"
                    name="StorySynopsis"
                    value={inputField.StorySynopsis}
                    onChange={event => handleInputChange(index, event)}
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
        </div>
        <br/>
         <pre>
        {JSON.stringify(inputFields, null, 2)}
        </pre> */}
      </form>
    </>
  )
}

export default MusicVideoDetails;