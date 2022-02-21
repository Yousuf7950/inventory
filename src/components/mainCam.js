import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Root, Preview, Footer, GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import AddProduct from "./funcComponent";
import { useNavigate } from "react-router-dom";

export default function MainCam() {
  let navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [cardImage, setCardImage] = useState();

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            <Preview src={URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <button
            onClick={() => {
              // setIsCameraOpen(false);
              // setCardImage(undefined);
              navigate("/");
            }}
          >
            Save & Back to main page
          </button>
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MainCam />, rootElement);
