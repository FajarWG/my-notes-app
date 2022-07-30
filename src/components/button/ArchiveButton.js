import React from "react";

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <button className="btn-archive" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
};

export default ArchiveButton;
