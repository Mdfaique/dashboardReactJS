import React from "react";

const Navlinks = (props) => {
  const handleLinkClick = (id) => {
    if (props?.setActiveLink) {
      props?.setActiveLink(id);
    }
  };

  return (
    <div
      className={`${props.className1} ${
        props?.activeLink === props?.class ? "active" : ""
      }`}
      onClick={() => handleLinkClick(props?.class)}
    >
      <div className="icon">{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default Navlinks;
