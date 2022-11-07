/** @format */

import React from "react";
import './App.css'
import picture from './images/pic.jpg';
import camera from './images/camera.png';
import avatar from './images/avatar.png';
import slack from './images/slack.png';
import github from './images/github.png';
import zuri from './images/zuri.png';
import hng from './images/hng.png';
import i4g from './images/I4G.png';
import three from './images/three.png';
const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <header>
          <img src={avatar} alt="avatar" className="avatar" />
          <img src={three} alt="three" className="three" />
          <div className="profile-section">
            <img src={picture} alt="pic" id="profile__img" className="image" />
            <img src={camera} alt="camera" className="camera" />
          </div>
          <h3 className="twitter-name" id="twitter">
            Salifu Williams Eneojo
          </h3>
        </header>

        <div className="body">
          <a href="https://twitter.com/eneojo_salifu" id="btn__zuri">
            <div className="link-section">
              <h4 className="link">Twitter Link</h4>
            </div>
          </a>

          <a
            href="https://training.zuri.team/"
            id="books"
            title="this is where you find books about design and coding"
          >
            <div className="link-section">
              <h4 className="link">Zuri Teams</h4>
            </div>
          </a>

          <a href="https://books.zuri.team/" id="book__python" title="">
            <div className="link-section">
              <h4 className="link" text="">
                Zuri Books
              </h4>
            </div>
          </a>

          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E"
            id="pitch"
            title=",eager to learn pythonthis are python programming books for beginners"
          >
            <div className="link-section">
              <h4 className="link">Python Books</h4>
            </div>
          </a>

          <a
            href="https://background.zuri.team/"
            id="book__design"
            text="you pitch a service for doing background checks on coders"
          >
            <div className="link-section">
              <h4 className="link">Background Check for Coders</h4>
            </div>
          </a>

          <a
            href="https://books.zuri.team/design-rules"
            id=""
            text=" you pitch the free design book offered by Zuri"
          >
            <div className="link-section">
              <h4 className="link">Design Books</h4>
            </div>
          </a>
        </div>
      </div>
      <div className="social-icons">
        <img src={slack} alt="slack" className="slack" id="slack" />
        <img src={github} alt="slack" className="github" />
      </div>

      <footer className="footer">
        <img src={zuri} alt="zuri" className="zuri" />
        <img src={hng} alt="hng" className="hng" />
        <img src={i4g} alt="i4g" className="i4g" />
      </footer>
    </React.Fragment>
  );
};

export default Home;
