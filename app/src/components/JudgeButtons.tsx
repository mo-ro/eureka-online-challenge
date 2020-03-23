/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import goodImage from "../images/good.svg";
import skipImage from "../images/skip-arrow.svg";

interface JudgeButtons {
  handleLike: () => void;
  handleDisLike: () => void;
}

const buttonsStyle = css({
  display: "flex",
  maxWidth: 360,
  width: "100%",
  justifyContent: "center",
  margin: "0 auto",
});

const buttonStyle = theme =>
  css({
    width: 80,
    height: 80,
    borderRadius: "100%",
    backgroundColor: theme.colors.white,
    boxShadow: "0 2px 6px rgba(0, 0, 0, .1)",
    padding: 20,
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "background .8s",
    backgroundPosition: "center",
    margin: "0 18px",

    "&:hover": {
      background: `${theme.colors.lightGray} radial-gradient(circle, transparent 1%, ${theme.colors.lightGray} 1%) center/15000%`,
    },

    "&:active": {
      backgroundColor: "rgba(0, 0, 0, .1)",
      backgroundSize: "100%",
      transition: "background 0s",
    },

    "> img": {
      width: "100%",
    },
  });

export const JudgeButtons: React.FC<JudgeButtons> = ({
  handleLike,
  handleDisLike,
}) => (
  <div css={buttonsStyle}>
    <div css={buttonStyle} onClick={handleDisLike}>
      <img src={skipImage} alt="" />
    </div>
    <div css={buttonStyle} onClick={handleLike}>
      <img src={goodImage} alt="" />
    </div>
  </div>
);
