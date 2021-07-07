import React from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";

import "./FooterCustom.css";

const { Footer } = Layout;

function FooterCustom() {
  return (
    <Footer style={{ textAlign: "center" }} className="footer">
      <div className="footer_credit">
        <ul style={{ listStyle: "none" }}>
          <li>
            favicon.ico icon made by{" "}
            <a href="https://icon54.com/" title="Pixel perfect">
              Pixel perfect
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            Page creator
            <a href="https://www.linkedin.com/in/nadir-kalajd%C5%BEi%C4%87-844995214/">
              {" "}
              Nadir Kalajdžić{" "}
            </a>
            . All rights reserved
          </li>
        </ul>
      </div>
      <div className="footer_pages">
        <ul style={{ listStyle: "none" }}>
          <li>About us</li>
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </Footer>
  );
}

export default FooterCustom;
