import React from "react";
import { NavLink } from "react-router-dom";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import twitter from "../images/icons/twitter.svg";
import githubblue from "../images/icons/github-blue.svg";
import linkedBlue from "../images/icons/linked-blue.svg";
import twitterBlue from "../images/icons/twitter-blue.svg";

function SocialMedia({ className }) {
  return (
    <div className='footer-social'>
      <NavLink
        to={{ pathname: "https://github.com/aycom366" }}
        target='_blank'
        className={`social-links ${className}`}
        data-aos={`${className && "fade-left"}`}
        data-aos-delay={`${className && "300"}`}
      >
        <img
          aria-label='github'
          src={className ? githubblue : github}
          alt='Temitayo Github'
        />
      </NavLink>
      <NavLink
        data-aos={`${className && "fade-left"}`}
        data-aos-delay={`${className && "400"}`}
        to={{ pathname: "https://twitter.com/bamigboyeayomi5" }}
        target='_blank'
        className={`social-links ${className}`}
      >
        <img
          aria-label='Twitter'
          src={className ? twitterBlue : twitter}
          alt='Temitayo Twitter'
        />
      </NavLink>
      <NavLink
        data-aos={`${className && "fade-left"}`}
        data-aos-delay={`${className && "500"}`}
        to={{
          pathname: "https://www.linkedin.com/in/ayomide-bamigboye-a477b4171/",
        }}
        target='_blank'
        className={`social-links ${className}`}
      >
        <img
          aria-label='Linkedin'
          src={className ? linkedBlue : linkedin}
          alt='Temitayo Linkedin'
        />
      </NavLink>
    </div>
  );
}

export default SocialMedia;
