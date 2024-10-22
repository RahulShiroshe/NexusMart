import React from "react";
import { Link } from "react-router-dom";
import "./HelpdeskIcon.css";

const HelpdeskIcon = () => {
  return (
    <Link to="/Help" className="helpdesk-icon">
      <i className="fas fa-user-headset"></i>
    </Link>
  );
};

export default HelpdeskIcon;
