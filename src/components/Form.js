import React from "react";

function Form(props) {
  return (
    <div className={props.className} style={props.style}>
      <div className="url-entry">
        <label>Enter API URL: </label>
        <input type="text" value={props.url} onChange={props.onURLChange} />
      </div>

      <div className="method-select">
        <p> Choose REST method:</p>
        <select onChange={props.onMethodChange}>
          <option value="GET">Get</option>
          <option value="POST">Post</option>
          <option value="PUT">Put</option>
          <option value="DELETE">Delete</option>
          <option value="PATCH">Patch</option>
        </select>
      </div>
      <button id="submit-btn"
        onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default Form;
