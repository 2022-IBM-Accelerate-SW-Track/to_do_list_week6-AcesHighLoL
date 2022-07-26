import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/George Guardia Headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">George Guardia</div>
            <div className="brief_description">
            I am a student seeking Computer Science Degree, attending Florida International University. I am a strong leader and someone who is not scared to take charge. 
            I am very passionate when it comes to developing and programming projects as well as working and building computers. 
            In my position at ASI I have been able to expand my social skills and help struggling students in the field of computer science as well as develop my skills in frontend and backend development.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
