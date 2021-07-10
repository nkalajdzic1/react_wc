import { Divider, Link, Typography } from "@material-ui/core";
import { Breadcrumb } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import Page from "../../components/Page/Page";

function TermsAndConditionsPage() {
  return (
    <Page>
      <Breadcrumb style={{ margin: "20px" }}>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Terms and conditions</Breadcrumb.Item>
      </Breadcrumb>
      <div className="about_page">
        <Typography variant="h6">Terms and conditions</Typography>
        <div className="about_page_divider">
          <Divider />
        </div>
        <div className="about_page_content">
          <Paragraph>
            Page is only used for development purposes. Be aware when accessing
            the home page your location is tried to be accessed to try find
            articles for your location/country.
          </Paragraph>
        </div>
      </div>
    </Page>
  );
}

export default TermsAndConditionsPage;
