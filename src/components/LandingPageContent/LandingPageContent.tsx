import { Button } from "@material-ui/core";
import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../../api/TopHeadlines";
import ArticleList from "../ArticleList/ArticleList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./LandingPageContent.css";

export interface IHeadline {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

function LandingPageContent() {
  const [headlines, setHeadlines] = useState<IHeadline[]>([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    getTopHeadlines()
      .then((res) => {
        if (res.data != null)
          if (res.data.articles != null) setHeadlines(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadMore = () => {
    setVisible((value) => value + 3);
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <div className="article_list">
          <ArticleList headlines={headlines.slice(0, visible)} />
        </div>
        <div className="load_more_button">
          <Button
            hidden={visible >= headlines.length}
            onClick={loadMore}
            variant="outlined"
            className="load_btn"
            endIcon={<ExpandMoreIcon />}
          >
            Load more
          </Button>
        </div>
      </div>
    </Content>
  );
}

export default LandingPageContent;
