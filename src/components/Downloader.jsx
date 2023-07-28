import React from "react";
import env from "react-dotenv";


const backendIPAddress = env.REACT_APP_BACKEND_ADDRESS;

const Downloader = (props) => {
  const [url, setUrl] = React.useState("");
  const [startMin, setStartMin] = React.useState(0);
  const [startSec, setStartSec] = React.useState(0);
  const [stopMin, setStopMin] = React.useState(0);
  const [stopSec, setStopSec] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleStartMinChange = (event) => {
    setStartMin(event.target.value);
  };

  const handleStartSecChange = (event) => {
    setStartSec(event.target.value);
  };

  const handleStopMinChange = (event) => {
    setStopMin(event.target.value);
  };

  const handleStopSecChange = (event) => {
    setStopSec(event.target.value);
  };

  const handleDownload = (event) => {
    if (
      Number(startMin) * 60 + Number(startSec) >=
      Number(stopMin) * 60 + Number(stopSec)
    )
      alert("Invalid start/stop time!");
    else
      window.open(
        `http://${backendIPAddress}/?url=${url}&start=${
          Number(startMin) * 60 + Number(startSec)
        }&stop=${Number(stopMin) * 60 + Number(stopSec)}`,
        "_blank",
        "noreferrer"
      );

    event.preventDefault();
  };

  const handleDeleteClick = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <React.Fragment>
      <div className="item container">
        <button className="btn delete-btn" onClick={handleDeleteClick}>
          x
        </button>
        <span className="item-title">video {props.num}</span>
        <div className="form-group">
          <label className="title" htmlFor="url">
            URL:
          </label>
          <div className="input-container">
            <input
              id="url"
              className="url-input"
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={handleUrlChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <br />
          <label className="title" htmlFor="number1">
            Start:
          </label>
          <div className="input-container">
            <input
              id="startMin"
              type="number"
              min="0"
              max="59"
              placeholder="Enter starting minute"
              value={startMin}
              onChange={handleStartMinChange}
              required
            />
            <span className="colon">:</span>
            <input
              id="startSec"
              type="number"
              min="0"
              max="59"
              placeholder="Enter starting second"
              value={startSec}
              onChange={handleStartSecChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <br />
          <label className="title" htmlFor="number2">
            Stop:
          </label>
          <div className="input-container">
            <input
              id="stopMin"
              type="number"
              min="0"
              max="59"
              placeholder="Enter ending minute"
              value={stopMin}
              onChange={handleStopMinChange}
              required
            />
            <span className="colon">:</span>
            <input
              id="stopSec"
              type="number"
              min="0"
              max="59"
              placeholder="Enter ending second"
              value={stopSec}
              onChange={handleStopSecChange}
              required
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </React.Fragment>
  ) : null;
};

export default Downloader;
