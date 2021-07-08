import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { IHeadline } from "../LandingPageContent/LandingPageContent";

export interface IArticleListProps {
  headlines: IHeadline[];
}

function ArticleList({ headlines }: IArticleListProps) {
  return (
    <>
      {headlines.map((x, i) => {
        return <CustomCard key={i} headline={x}></CustomCard>;
      })}
    </>
  );
}

export default ArticleList;
