import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";

function LandingPageContent() {
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
  );
}

export default LandingPageContent;
