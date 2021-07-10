import React, { useState } from "react";
import blue from "../../Colors";
import { Layout, Menu, Input } from "antd";
import { useHistory } from "react-router-dom";

import "./HeaderCustom.css";

const { Header } = Layout;
const { Search } = Input;

function HeaderCustom() {
  const [isSearching, setIsSearching] = useState(false);
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState("-1");

  const onSearch = (seacrhValue: string) => {
    history.push("/search?query=" + seacrhValue);
    setSelectedItem("-1");
  };

  const routeTo = (page: string) => {
    history.push(`/${page}`);
    setSelectedItem("-1");
  };

  return (
    <Header style={{ backgroundColor: blue }}>
      <Search
        placeholder="Search by term"
        style={{
          float: "left",
          width: "200px",
          height: "31px",
          margin: "16px 24px 16px 0",
        }}
        loading={isSearching}
        onSearch={onSearch}
      />
      <Menu
        theme="dark"
        style={{ backgroundColor: blue }}
        mode="horizontal"
        defaultSelectedKeys={[selectedItem]}
        selectedKeys={[selectedItem]}
      >
        <Menu.Item key={1} onClick={() => routeTo("landing")}>
          Home
        </Menu.Item>
        <Menu.Item key={2} onClick={() => routeTo("about_us")}>
          About us
        </Menu.Item>
        <Menu.Item key={3} onClick={() => routeTo("terms_and_conditions")}>
          Terms and conditions
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderCustom;
