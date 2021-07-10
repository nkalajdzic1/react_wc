import { Button, Typography } from "@material-ui/core";
import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../../api/TopHeadlines";
import ArticleList from "../ArticleList/ArticleList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useSelector, useDispatch } from "react-redux";
import { setTopHeadlines } from "../../TopHeadlinesRedux";

import "./LandingPageContent.css";
import { countries } from "./Countries";
import { getLocation } from "../../api/GetLocation";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import {
  toastError,
  toastRegular,
  toastSucces,
} from "../CustomToast/CustomToast";
import { selectTopHeadlines } from "../../store";

export interface CountryPair {
  code: string;
  name: string;
}

function LandingPageContent() {
  const [visible, setVisible] = useState(20);
  const topHeadlines = useSelector(selectTopHeadlines);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState<CountryPair>({
    code: "us",
    name: "United States",
  });

  useEffect(() => {
    getLocation()
      .then((res) => {
        var location = countries.find((x) => x.code === res.data.country_code);
        if (location != null) {
          setSelectedCountry(location);
          toastSucces(`Found articles for your location in ${location.name}`);
        } else {
          toastRegular(
            `Could not find any articles for your location in ${res.data.country_name}. Loaded articles for the United States.`
          );
        }
      })
      .catch((err) => {
        toastError(
          `Error on loading your location to display articles from your location.`
        );
      });
  }, []);

  useEffect(() => {
    getTopHeadlines(selectedCountry.code)
      .then((res) => {
        if (res.data != null && res.data.articles != null)
          dispatch(setTopHeadlines(res.data.articles));
      })
      .catch((err) => console.log(err));
  }, [dispatch, selectedCountry]);

  const loadMore = () => {
    setVisible((value) => value + 20);
  };

  const setCountry = (country: CountryPair) => setSelectedCountry(country);

  return (
    <Content style={{ padding: "0 20px" }}>
      <Breadcrumb style={{ margin: "20px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <div>
          <Typography variant="h5" style={{ margin: "0 auto" }}>
            Top headlines
          </Typography>
        </div>
        <div className="dropdown_country">
          <Typography style={{ width: 150 }}>Select country: </Typography>
          <CustomDropDown
            values={countries}
            selected={selectedCountry}
            setCountry={setCountry}
          />
        </div>
        <div className="article_list">
          <ArticleList headlines={topHeadlines.slice(0, visible)} />
        </div>
        <div className="load_more_button">
          <Button
            hidden={visible >= topHeadlines.length}
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
