import { Divider, Link, Typography } from "@material-ui/core";
import { Breadcrumb } from "antd";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getByQuery } from "../../api/GetByQuery";
import { setSearchResults } from "../../SearchResultsRedux";
import { selectSearchResults } from "../../store";
import ArticleList from "../ArticleList/ArticleList";
import { toastError, toastRegularBlack } from "../CustomToast/CustomToast";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./SearchPageContent.css";
import SortDropDown from "../SortDropDown/SortDropDown";

function SearchPageContent() {
  const location = useLocation();
  const [visible, setVisible] = useState(20);
  var param = new URLSearchParams(location.search).get("query");
  const searchResults = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  const [numbOfArticles, setNumOfArticles] = useState(0);
  const [dropdown, setDropdown] = useState<string>("relevancy");

  useEffect(() => {
    param != null
      ? getByQuery(param, dropdown)
          .then((res) => {
            dispatch(setSearchResults(res.data.articles));
            setNumOfArticles(res.data.articles.length);
          })
          .catch(() =>
            toastRegularBlack("Could not get articles now. Try again later.")
          )
      : toastError("No results");
  }, [param, dropdown]);

  const loadMore = () => {
    setVisible((value) => value + 20);
  };

  return (
    <>
      <Breadcrumb style={{ margin: "20px" }}>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Search results</Breadcrumb.Item>
      </Breadcrumb>
      <div className="search_page_content">
        <div>
          <Typography variant="caption">
            Displaying {numbOfArticles} results for the search "{param}"
          </Typography>
        </div>
        <div className="search_page_dropdown">
          <SortDropDown
            dropdown={dropdown}
            setDropdown={setDropdown}
          ></SortDropDown>
        </div>
        <div className="search_page_divider">
          <Divider />
        </div>
        <div className="article_list">
          <ArticleList headlines={searchResults.slice(0, visible)} />
        </div>
        <div className="load_more_button">
          <Button
            hidden={visible >= searchResults.length}
            onClick={loadMore}
            variant="outlined"
            className="load_btn"
            endIcon={<ExpandMoreIcon />}
          >
            Load more
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchPageContent;
