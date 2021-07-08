import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "react-toastify/dist/ReactToastify.css";
import "./CustomCard.css";
import { Button } from "@material-ui/core";
import { IHeadline } from "../LandingPageContent/LandingPageContent";
import Paragraph from "antd/lib/typography/Paragraph";
import { toast } from "react-toastify";

export interface ICustomCardProps {
  headline: IHeadline;
}

export default function CustomCard({ headline }: ICustomCardProps) {
  return (
    <div className="single_card">
      <Card className="card_root">
        <CardMedia
          className="card_cover"
          image={headline.urlToImage}
          title={headline.title}
        />
        <div className="card_details">
          <CardContent className="card_content">
            <Typography component="h6" variant="h6" noWrap={true}>
              {headline.title}
            </Typography>
            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
              {headline.description}
            </Paragraph>
          </CardContent>
          <div className="card_controls">
            <Button className="card_button">Read full article</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
