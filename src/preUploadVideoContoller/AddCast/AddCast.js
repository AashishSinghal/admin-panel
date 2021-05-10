import React, { useState, Fragment } from "react";
import "../../Components/component.css";
import "bootstrap/dist/css/bootstrap.css";

const AddCast = () => {
  const [inputFields, setInputFields] = useState([
    {
      CastActorName: "",
      CastActorimg: "",
      CastActressName: "",
      CastActressimg: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "CastActorName") {
      values[index].CastActorName = event.target.value;
    } else if (event.target.name === "CastActorimg") {
      values[index].CastActorimg = event.target.value;
    } else if (event.target.name === "CastActressName") {
      values[index].CastActressName = event.target.value;
    } else {
      values[index].CastActressimg = event.target.value;
    }

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      CastActorName: "",
      CastActorimg: "",
      CastActressName: "",
      CastActressimg: "",
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
      <form onSubmit={handleSubmit}>
        <div className="container_pad">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleAddFields()}
          >
            Add Cast
          </button>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="comp_border">
                <div className="text_btn">
                  <h4>Cast {index + 1}</h4>
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
                    <label htmlFor="CastActorName">Actor Name</label>
                    <input
                      type="text"
                      placeholder="Acotor Name"
                      className="form-control"
                      id="CastActorName"
                      name="CastActorName"
                      value={inputField.CastActorName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="form-group col-sm-4 col-md-5">
                    <label htmlFor="CastActorimg">Actor Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="CastActorimg"
                      name="CastActorimg"
                      value={inputField.CastActorimg}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="form-group col-sm-4 col-md-5">
                    <label htmlFor="CastActressName">Actress Name</label>
                    <input
                      type="text"
                      placeholder="Actress Name"
                      className="form-control"
                      id="CastActressName"
                      name="CastActressName"
                      value={inputField.CastActressName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="form-group col-sm-4 col-md-5">
                    <label htmlFor="CastActressimg">Actress Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="CastActressimg"
                      name="CastActressimg"
                      value={inputField.CastActressimg}
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
        <br />
        <pre>{JSON.stringify(inputFields, null, 2)}</pre>
      </form>
    </>
  );
};

export default AddCast;
