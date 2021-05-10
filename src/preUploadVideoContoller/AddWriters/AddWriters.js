import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

const AddWriter = () => {

  const [inputFields, setInputFields] = useState([
    { name: '',  img: ''}
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "WriterName") {
      values[index].WriterName = event.target.value;
    } else {
      values[index].Writerimg = event.target.value;
    }

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({WriterName: '',  Writerimg: '' });
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
            Add Writers
          </button>
          {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div className="comp_border">
              <div className="text_btn">
                <h4>Writer {index+1}</h4>
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
                  <label htmlFor="WriterName">Name</label>
                  <input
                    type="text"
                    placeholder="Thomas Man"
                    className="form-control"
                    id="WriterName"
                    name="WriterName"
                    value={inputField.WriterName}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4 col-md-5">
                  <label htmlFor="Writerimg">Writer Image</label>
                  <input
                    type="file"
                    multiple
                    className="form-control"
                    id="Writerimg"
                    name="Writerimg"
                    value={inputField.Writerimg}
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
        </div> */}
        <br/>
         <pre>
        {JSON.stringify(inputFields, null, 2)}
        </pre>  
      </form>
    </>
  )
}

export default AddWriter;