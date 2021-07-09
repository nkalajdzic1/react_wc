import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticlePageContent from "../../components/ArticlePageContent/ArticlePageContent";
import Page from "../../components/Page/Page";

function ArticlePage() {
  return (
    <Page>
      <ArticlePageContent />
    </Page>
  );
}

export default ArticlePage;
