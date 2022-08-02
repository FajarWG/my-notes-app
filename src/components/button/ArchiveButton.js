import React from "react";

const ArchiveButton = ({ onArchive }) => {
  return (
    <button className="btn-archive" onClick={onArchive}>
      Archive
    </button>
  );
};

export default ArchiveButton;
