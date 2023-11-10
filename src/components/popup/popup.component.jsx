import React from "react";
import "./popup.styles.css";

const Popup = (props) => {
  const { openPopup } = props;
  return (
    <div className="popup-background">
      <div className="popup-container">
        <div className="close-btn">
          <button onClick={() => openPopup(false)}>X</button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
