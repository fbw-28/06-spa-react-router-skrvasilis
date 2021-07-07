import React from "react";
import photo from "../images/me.jpg";

export default function Me() {
  return (
    <div className="me-container">
      <div className="myimage">
        <img src={photo} alt="me" />
      </div>
      <div className="aboutme">
        <h1>Vasilis Skrimpas</h1>

        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos saepe
          eius delectus obcaecati quisquam reprehenderit distinctio dicta rerum
          nostrum mollitia, nulla suscipit architecto natus recusandae dolor,
          hic asperiores eos expedita.
        </h3>

        <h2>Some websites i frequently use:</h2>
        <div className="websites">
          <a href="https://www.youtube.com/" target="_blank">
            youtube.com
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            youtube.com
          </a>{" "}
          <a href="https://www.youtube.com/" target="_blank">
            youtube.com
          </a>
        </div>
      </div>
    </div>
  );
}
