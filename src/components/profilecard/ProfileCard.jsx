import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ 
  name = "Bapan Mondal", 
  profession = "Photographer", 
   imageUrl = "/bapanImage.jpg" 
}) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="decorative-background"></div>
        
        {/* Left Side - Text Content */}
        <div className="text-section">
          <div className="decorative-elements"></div>
          <h1 className="name">{name}</h1>
          <p className="profession">{profession}</p>
          <div className="accent-line"></div>
        </div>

        {/* Right Side - Image */}
        <div className="image-section">
          <div className="image-container">
            <div className="glow-effect"></div>
            <div className="image-frame"></div>
            <img 
              src={imageUrl} 
              alt={`${name} - ${profession}`}
              className="person-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;