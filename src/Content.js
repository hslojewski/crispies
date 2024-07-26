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
    // document.querySelector('body').scrollTo({
    //   top: 0,
    //   left: 0
    // });
    // document.querySelector("body").scrollTo(0,0);
  }


  render() {
    const {
      displayProjects, orderChronologically, isReply = 0, hasReplies = 0, upvotes = 0,
      thumbnail = "", data = {}, tags = { tools: [], skills: [], affiliations: [], roles: [] }, date = null, title = null, titleAlignment = null, type = null, projects = {},
      images = [], postContent = ""
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
      <table className={isReply ? "reply"+isReply : ""}>
        <tr>
          <td>
            {thumbnail &&
              <div className="content-banner">
                <img src={[process.env.PUBLIC_URL, thumbnail].join("/")} alt="" />
              </div>
            }
          </td>
          <td>
            <p>
              <b className="username">{title}</b>
              <i className="date">{date}</i>
            </p>
            <p className="post-content">{parse(postContent)}</p>
            {images.length > 0 &&
              <div className="image-container">
                {(images||[]).map((image, i) => {
                  return(<img src={[process.env.PUBLIC_URL, image].join("/")} />);
                })}
              </div>
            }
            <p className="post-options">
              <span>▼</span>
              <span>{upvotes}</span>
              <span>▲</span>
              <span className="reply-link">Reply</span>
              <span className="share-link">Share</span>
            </p>
            {hasReplies > 0 &&
              <p className="reply-counter">{hasReplies ? ("+" + hasReplies + (hasReplies === 1 ? " more reply" : " more replies")) : null}</p>
            }
          </td>
        </tr>
      </table>
    );
  }
}

export default Content;
