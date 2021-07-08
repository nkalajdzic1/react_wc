import React from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";

import "./FooterCustom.css";

const { Footer } = Layout;

function FooterCustom() {
  return (
    <Footer style={{ textAlign: "center" }} className="footer">
      <div className="footer_divst">
        <div>
          favicon.ico icon made by{" "}
          <a href="https://icon54.com/" title="Pixel perfect">
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Page creator
          <a href="https://www.linkedin.com/in/nadir-kalajd%C5%BEi%C4%87-844995214/">
            {" "}
            Nadir Kalajdžić{" "}
          </a>
        </div>
        <div>About us</div>
        <div>Terms and conditions</div>
        <div>Privacy podivcy</div>
      </div>
    </Footer>
  );
}

export default FooterCustom;
