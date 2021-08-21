import React, { useEffect, useRef, useState } from "react";
import { VideoContainer } from "./style";
import ReactPlayer from "react-player";
import { useLocalContext } from "../../../Context.js/Context";
import axiosInstance from "../../../helpers/axios";

const Video = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const videoRef = useRef(null);
  const [play, setPlay] = useState(true);
  const [draw, setDraw] = useState(true);
  const [timeduration, setTimeDuration] = useState(null);

  const {
    seconds,
    setSeconds,
    coorX,
    setCoorX,
    coorY,
    setCoorY,
    btnsA,
    btnsB,
    btnsC,
  } = useLocalContext();

  const postData = {
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    timestamps: "" + seconds,
    coorX: "" + coorX,
    coorY: "" + coorY,
  };

  const sendData = () => {
    axiosInstance.post("/api/v-timestamp", postData);
    console.log("DDDAAATTAA", postData);
  };

  //Set canvas width, height and scale;
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 694;
    canvas.height = window.innerHeight - 290;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const context = canvas.getContext("2d");
    context.scale(1, 1);
    contextRef.current = context;
  }, []);

  //Start drawing function enables us to draw
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setCoorX(offsetX);
    setCoorY(offsetY);
    //use draw state for handle play and pause depending upon drawing
    if (draw) {
      contextRef.current.beginPath();
      console.log("Start", offsetX, offsetY);
      console.log("X", coorX);
      console.log("Y", coorY);
      contextRef.current.arc(offsetX, offsetY, 5, 0, 2 * Math.PI, true);
      contextRef.current.fillStyle = "red";
      contextRef.current.fill();
      setPlay(!play);
      setDraw(false);
      sendData();
    } else {
      return;
    }
  };

  //finish drawing on onMouseUp
  const finishDrawing = () => {
    contextRef.current.closePath();
  };

  //Function to detect key and enables to controls the video with key
  const useKey = (key, cb) => {
    const callBackRef = useRef(cb);

    useEffect(() => {
      callBackRef.current = cb;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callBackRef.current(event);
        }
      }
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  };

  //Gives the duration of video
  const handleDuration = (duration) => {
    setTimeDuration(duration);
  };

  //handle the timestamps and give us the time in seconds
  const handleProgress = (progress) => {
    if (!timeduration) {
      return;
    }

    const secondsElapsed = progress.played * timeduration;

    if (secondsElapsed !== seconds) {
      setSeconds(secondsElapsed);
    }
  };

  console.log("Duration", timeduration);
  console.log("Seconds", seconds);

  // useEffect(() => {
    console.log("bA", btnsA);
    console.log("bB", btnsB);
    console.log("bC", btnsC);
  // }, [btnsA, btnsB, btnsC]);

  //handling play and pause on S key
  const handleS = (event) => {
    setSeconds(null);
    setPlay(!play);
    setDraw(true);
    //clear canvas after play again
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  //call function handleS
  useKey("KeyS", handleS);
  return (
    <>
      <VideoContainer>
        <canvas
          style={{ position: "absolute" }}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          ref={canvasRef}
        ></canvas>
        <ReactPlayer
          ref={videoRef}
          onDuration={handleDuration}
          onProgress={handleProgress}
          playing={play}
          width="100%"
          height="100%"
          controls={false}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </VideoContainer>
    </>
  );
};

export default Video;
