import React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa"; 
import "../styles/SocialShare.css";

const SocialShare = ({ shareUrl }) => (
  <div className="social-share">
    <h3 className="subtitle">Osszd meg az ünnepi örömöt!</h3>
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} className="share-button">
        <FaFacebook className="social-icon facebook-icon" />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} className="share-button">
        <FaTwitter className="social-icon twitter-icon" />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} className="share-button">
        <FaWhatsapp className="social-icon whatsapp-icon" />
      </WhatsappShareButton>
      <a href={`mailto:?subject=Advent Calendar&body=Look at this advent calendar: ${shareUrl}`} className="share-button">
        <FaEnvelope className="social-icon email-icon" />
      </a>
    </div>
  </div>
);

export default SocialShare;