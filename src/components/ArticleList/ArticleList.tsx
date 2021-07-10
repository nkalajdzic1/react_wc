import React from "react";
import { IHeadline } from "../../store";
import CustomCard from "../CustomCard/CustomCard";

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
