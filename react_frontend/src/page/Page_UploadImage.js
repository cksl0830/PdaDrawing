import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import "semantic-ui-css/semantic.min.css";
import "./PagesStyle.css";
import DragDrop from "../component/DragDrop";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";
import InputForm from "../component/InputForm"
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


function Page_UploadImage({ history }) {
  const [myImage, setMyImage] = useState(null);
  const [styleImage, setStyleImage] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [resultState, setResultState] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [saveState, setSaveState] = useState(false);
  const [goAlbum, setGoAlbum] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;

  const clickBack = () => { // Back button
    // set States as default
    setResultState(null);
    setMyImage(null);
    setStyleImage(null);
    setLoadingState(false);
    setFormOpen(false);
    setSaveState(false);
    
    // change button name
    document.getElementById("submitBtn").innerHTML = "Transfer";
  }

  const message = (title, message, type) =>{
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 3000,
      },
      dismissable: {
        Click: true
      }
    });
  }

  const clickSubmit = async () => {
    if (resultState == null) { // click 'Transfer' button
      if (myImage == null || styleImage == null) {
        return message("주의", "사진을 입력해주세요 ~^^*", "danger")
      }

      setLoadingState(true);
      const formData = new FormData();
      formData.append("myImage", myImage);
      formData.append("styleImage", styleImage);
      checkFormData(formData); // [DEBUG] 보낼 데이터를 console에 보여줌

      // 이미지 전송
      let response = null;
      try {
        response = await axios
          .post("/send_image", formData, {
            header: {
              "content-type": "multipart/form-data",
            },
            responseType: "arraybuffer",
          })
          .then(response => {
            // 변환된 이미지 받음
            const prefix =
              "data:" + response.headers["content-type"] + ";base64,";
            const file = Buffer.from(response.data, "binary").toString("base64");
            return prefix + file;
          });
      } catch (error) {
        console.log(error);
        setMyImage(null);
        setStyleImage(null);
        setLoadingState(false);
        setFormOpen(false);
        setSaveState(false);
        return message("ERROR", "Please check the console for an error message.", "warning")
      }

      // 이미지 전송 및 변환 성공
      if (response) {
        console.log(response);
        setLoadingState(false);
        setResultState(response);
        setMyImage(null);
        setStyleImage(null);
        document.getElementById("submitBtn").innerHTML = "save to album";
      }
    }
    else { // click 'Save To Album' button
      setFormOpen(true);
    }
  };


  return (
<<<<<<< HEAD
    <div className="UploadImage">
    <Container fluid>
    <div>
    <Navigation/>
    </div>
    <div style={linestyle}></div>
=======
    <NavigationBar history={history} icon={"home"} pageName={"TRANSFER IMAGE"} content={
>>>>>>> 039a4f6ca93a3ea682c782e6716310ea5632f913
      <div className="App-container">
        <ReactNotification />  
        <div className="head2">
            <h1>LINE DRAWING</h1>
            <p>이미지 드래그 또는 클릭 후 파일을 업로드하여 라인드로잉을 시작해보세요 !</p>
          </div>    
        <div className="ui placeholder segment">
          {!loadingState && !resultState ? (
            // drop-zone
            <div>
              <div className="ui two column very relaxed stackable grid">
                <div className="middle aligned column">
                  <DragDrop setImage={setMyImage} />
                </div>
                <div className="middle aligned column">
                  <DragDrop setImage={setStyleImage} />
                </div>
              </div>
              <div className="ui vertical divider">PLUS</div>
            </div>
          ) : loadingState ? (
            // loading
            <PropagateLoader
              css={override}
              size={25}
              color={"#00b5ad"}
              loading={loadingState}
            />
          ) : (
                // show transfered image
                <div className="product">
                  <img src={resultState} alt="result" className="img_result" />
                </div>
              )}
        </div>
        <div className="btn_transfer">
          { resultState ? (<button
            className="ui inverted button"
            onClick={clickBack}
            id="backBtn"
            disabled={!resultState}
          >
<<<<<<< HEAD
            이미지 재선택
=======
            Back
>>>>>>> 039a4f6ca93a3ea682c782e6716310ea5632f913
          </button>) : null }
          <button
            className="ui inverted button"
            onClick={clickSubmit}
            id="submitBtn"
            disabled={saveState || loadingState}
          >
            Start Line Drawing
          </button>
          <InputForm open={formOpen} setOpen={setFormOpen} url={resultState} saveState={saveState} setSaveState={setSaveState} setGoAlbum={setGoAlbum}/>
          { goAlbum && history.push("/album") }
        </div>
      </div>
    } />
  );
}

// [DEBUG]
function checkFormData(formData) {
  for (let key of formData.keys()) {
    console.log(key); // FormData의 key 확인
  }
  for (let value of formData.values()) {
    console.log(value); // FormData의 value 확인
  }
}

export default Page_UploadImage;
