import React from "react";
import HeartImage from "../images/heart.svg";

interface JudgeButtons {
  handleLike: () => void;
  handleDisLike: () => void;
}

export const JudgeButtons: React.FC<JudgeButtons> = ({
  handleLike,
  handleDisLike,
}) => (
  <div>
    <div onClick={handleDisLike}>Dislike</div>
    <div onClick={handleLike}>Like</div>
    <HeartImage />
    {/* <img src={heartImage} alt="" />
    {console.log(heartImage)} */}
  </div>
);
