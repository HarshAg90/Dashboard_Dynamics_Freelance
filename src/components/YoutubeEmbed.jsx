import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const YoutubeEmbed = ({ embedId }) => {
  const containerStyle = {
    // overflow: "visible",
    // paddingBottom: "56.25%",
    // position: "relative",
    // height: 0
  };

  const iframeStyle = {
    // left: 0,
    // top: 0,
    // height: "100%",
    // width: "100%",
    // position: "absolute"
  };

  return (
    <div style={containerStyle}>
      <iframe
        style={iframeStyle}
        width={isMobile ? "380":  "1280"}
      height={isMobile ? "213": "720"}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
