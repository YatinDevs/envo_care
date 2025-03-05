import React from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-300 
            ${
              show ? "opacity-100 visible z-50" : "opacity-0 invisible z-[-1]"
            }`}
    >
      {/* Background overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-md transition-opacity duration-500"
        onClick={hidePopup}
      ></div>

      {/* Video Player Container */}
      <div
        className={`relative bg-white w-[800px] aspect-video transform transition-transform duration-300 
                ${show ? "scale-100" : "scale-50"}`}
      >
        {/* Close Button */}
        <span
          className="absolute top-[-20px] right-0 text-white cursor-pointer text-lg font-bold"
          onClick={hidePopup}
        >
          ✖
        </span>

        {/* Video Player */}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={show}
        />
      </div>
    </div>
  );
};

export default VideoModal;
