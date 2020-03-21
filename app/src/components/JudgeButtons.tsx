import React from "react";

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
  </div>
);
