import React from "react";
import Navlinks from "./navlinks";

const AdminLinks = (props) => {
  return (
    <div className="Admin-links">
      <Navlinks icon={props.icon} title={props.title} class="inactive" className1="inactive"/>
      <div className="Arrow">➜</div>
    </div>
  );
};

export default AdminLinks;
