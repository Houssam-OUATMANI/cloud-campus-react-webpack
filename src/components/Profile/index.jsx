import React from "react";
import jeanPicture from "../../images/jean.jpg"
const Profile = ({ nom, prenom }) => {
  return (
    <div className="profile">
      <div className="info">
        <p>Nom : {nom}</p>
        <p>Prénom : {prenom}</p>
      </div>
      <div className="image_container">
        <img src={jeanPicture} alt={nom} />
      </div>
    </div>
  );
};

export default Profile;
