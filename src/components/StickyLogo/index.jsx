import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRocket } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faSnapchat,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


const StickyLogo = () => {
 

  return (

    <div className="sticky-logo-container">
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="2x"
        className="app-logo-icon py-2"
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        className="app-logo-icon py-2"
      />
      <FontAwesomeIcon
        icon={faSnapchat}
        size="2x"
        className="app-logo-icon py-2"
      />
      {/* {postStore?.product?.isLoading ? "loading..." : ""} */}

    
    </div>
  );
};

export default StickyLogo;
