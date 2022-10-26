import React, { useState } from "react";
// rfc

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked + " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase", "Sucess");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase", "Sucess");
  };
  const handClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handSingleSpaceClick = () => {
    let newText = text.replace(/ {2,}/g, " ");
    setText(newText);
    props.showAlert(" Extra spaces has been removed", "Sucess");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text has been copied to clipbord", "Sucess");
  };

  const [text, setText] = useState("");
  //   console.log(useState("Enter a text"));
  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="textbox" class="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textbox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handSingleSpaceClick}>
          Clear double Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        {/* button.btn.btn-primary */}
      </div>
      <div className="container my-2">
        {/* my-2 is used for spacing */}
        <h2>Your text has </h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
        </p>
        <p> {text.length} Character </p>

        <p>Takes {0.008 * text.split(" ").length} minutes to read</p>

        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
