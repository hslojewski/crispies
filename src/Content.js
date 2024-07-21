import React from 'react';
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';
import { FaRegKeyboard, FaCode, FaSitemap, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import FilteredProjects from './FilteredProjects';

class Content extends React.Component {

  imageModalTrigger() {
    var imageModal = document.getElementById("image-modal"),
        contentImages = document.querySelectorAll(".image-container .image img:not(.ignore-modal)"),
        modalImage = document.getElementById("modal-image"),
        closeIcon = document.getElementsByClassName("close-modal")[0];
    if (contentImages.length) {
      Array.from(contentImages).forEach(contentImage => {
        contentImage.onclick = function(){
          imageModal.style.display = "block";
          modalImage.src = this.src;
          modalImage.alt = this.alt;
        }
      });
    }
    if (closeIcon) {
      closeIcon.onclick = function() { 
          imageModal.style.display = "none";
      }
    }
    window.addEventListener('keydown', e => {
      if (e.key === "Escape") {
        imageModal.style.display = "none";
      }
    });
  }

  componentDidMount() {
    const {
      getProjectData,
      projectPath = "",
    } = this.props;
    // getProjectData(projectPath);
    document.querySelector('body').scrollTo({
      top: 0,
      left: 0
    });
  }

  render() {
    const {
      displayProjects, orderChronologically,
      thumbnail = "", data = {}, tags = { tools: [], skills: [], affiliations: [], roles: [] }, date = null, title = null, titleAlignment = null, type = null, projects = {}
    } = this.props;

    this.imageModalTrigger();

    var eduIconComponents = {
      "FaSitemap": FaSitemap,
      "FaCode": FaCode,
      "FaRegKeyboard": FaRegKeyboard,
      "FaLinkedinIn": FaLinkedinIn,
      "FaEnvelope": FaEnvelope
    };
    
    
    return (
      <div>
        <table>
          <tr>
            <td>
              {thumbnail &&
                <div className="content-banner">
                  <img src={[process.env.PUBLIC_URL, thumbnail].join("/")} alt="" />
                </div>
              }
            </td>
            <td>
              <h1 className={titleAlignment}>{title}</h1>
              <p className="description">post content</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Content;
