import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./Styles";

const sort = [
  "Sort by Popularity",
  "Sort by Relevance",
  "Sort by Published date",
];

export interface IDropDown {
  dropdown: string;
  setDropdown: (sort: string) => void;
}

function SortDropDown({ dropdown, setDropdown }: IDropDown) {
  const [selected, setSelected] = useState(sort[1]);
  const classes = useStyles();

  const menu = (
    <Menu>
      {sort.map((x, i) => {
        return (
          <Menu.Item
            key={i}
            onClick={() => {
              setSelected(x);
              x === "Sort by Popularity"
                ? setDropdown("popularity")
                : x === "Sort by Relevance"
                ? setDropdown("relevancy")
                : setDropdown("publishedAt");
            }}
          >
            <a target="_blank">{x}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button className={classes.root}>
        <span className={classes.left}>{selected}</span>
        <ExpandMoreIcon className={classes.right} />
      </Button>
    </Dropdown>
  );
}

export default SortDropDown;
