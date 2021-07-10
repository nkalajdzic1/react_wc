import { Divider, Link, Typography } from "@material-ui/core";
import { Breadcrumb } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import Page from "../../components/Page/Page";

import "./AboutPage.css";

function AboutPage() {
  return (
    <Page>
      <Breadcrumb style={{ margin: "20px" }}>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <div className="about_page">
        <Typography variant="h6">About</Typography>
        <div className="about_page_divider">
          <Divider />
        </div>
        <div className="about_page_content">
          Page created by Nadir Kalajdžić.
          <br />
          <br /> Page is used only for developing purposes.
          <br />
          <br /> When you try to access a single article, the query of the url
          gets filled with all the info for the article - this could be done via
          history.push and add data to body to make the body look better, but it
          would have a disadvantage.
          <br /> <br />
          In that case, you would not be able to add the given article to
          bookmarks, hence that is why I implemented the single article page
          this way.
        </div>
      </div>
    </Page>
  );
}

export default AboutPage;
