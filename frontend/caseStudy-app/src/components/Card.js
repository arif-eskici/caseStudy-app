import React, { useEffect, useState } from "react";
import "./card.css";
import axios, { post } from "axios";

function Card() {
  const [title, setTitle] = useState("New Title");
  const [description, setDescription] = useState("New Description");
  const [newImage, setNewImage] = useState();
  const [savedTitle, setSavedTitle] = useState();
  const [savedDescription, setSavedDescription] = useState();
  const [savedNewImage, setSavedNewImage] = useState();
  const [buttonActive, setButtonActive] = useState(false);

  const onChangeFile = (event) => {
    if (event.target.files.length < 1) {
      return;
    }
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setNewImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onButtonClick = () => {
    if (!buttonActive) return;
    const parameter = "?title=" + title + "&description=" + description;
    const url = "http://localhost:8082/api/v1" + parameter;
    const formData = new FormData();
    const file = new File([newImage.split(",")[1]], "filename.png", {
      type: "image/png",
    });
    formData.append("file", file);
    // console.log(newImage);
    axios({
      method: "post",
      url,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        //  console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    setSavedTitle(title);
    setSavedDescription(description);
    setSavedNewImage(newImage);
    setTitle("New Title");
    setDescription("New Description");
    setNewImage(null);
  };

  useEffect(() => {
    if (
      title &&
      title != "New Title" &&
      description &&
      description != "New Description" &&
      newImage
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [title, description, newImage]);

  return (
    <>
      <div className="main">
        <div className="head">
          <div className="header">New Title</div>
        </div>
        <div className="üst">
          <div className="title">
            <input
              style={{
                border: "none",
                fontSize: "1.3rem",
                color: "rgb(222, 107, 12, 0.947)",
                width: "100%",
              }}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="desc">
            <textarea
              style={{
                border: "none",
                width: "100%",
                resize: "none",
                fontFamily: "sans-serif",
                fontSize: "1.05rem",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {!newImage && (
            <div className="img">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: "-1.3rem",
                  left: "-.8rem",
                }}
              >
                <label>
                  <input type="file" onChange={onChangeFile}></input>
                  <span style={{ fontSize: "5.5rem", fontWeight: "350" }}>
                    {" "}
                    +{" "}
                  </span>
                </label>

                <span
                  style={{
                    position: "relative",
                    top: "-2rem",
                    left: ".7rem",
                  }}
                >
                  GÖRSEL
                </span>
              </div>
            </div>
          )}
          {newImage && (
            <div className="img3">
              <img
                style={{
                  maxWidth: "100%",
                  objectFit: "fill",
                  Height: "100%",
                }}
                src={newImage}
              />
            </div>
          )}

          <div
            className="box"
            style={{
              backgroundColor: buttonActive ? "green" : "gray",
              cursor: buttonActive ? "pointer" : "default",
            }}
            onClick={onButtonClick}
          ></div>
        </div>
        <div className="area"></div>
        <div className="head">
          <div className="header">New Title</div>
        </div>

        <div className="alt">
          <div
            className="title"
            style={{
              border: "none",
              fontSize: "1.3rem",
              color: "rgb(222, 107, 12, 0.947)",
            }}
          >
            {savedTitle}
          </div>
          <div
            className="desc2"
            style={{
              border: "none",
              resize: "none",
              fontFamily: "sans-serif",
              fontSize: "1.05rem",
            }}
          >
            {savedDescription}{" "}
          </div>
          <div
            className="img2"
            style={{
              backgroundColor: savedNewImage
                ? "transparent"
                : "rgb(206, 205, 205)",
            }}
          >
            {savedNewImage && (
              <img
                style={{ maxWidth: "100%", objectFit: "cover" }}
                src={savedNewImage}
              ></img>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
