import React, { useState } from "react";

const Underline = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        onClick={toggleModal}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "blue",
        }}
      >
        {text}
      </span>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
          style={modalOverlayStyle}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={modalContentStyle}
          >
            <h2>Title</h2>
            <p>Content</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Underline;
