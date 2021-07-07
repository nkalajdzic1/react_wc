import React from "react";
import blue from "../../Colors";
import { Layout, Menu, Input } from "antd";

const { Header } = Layout;
const { Search } = Input;

function HeaderCustom() {
  return (
    <Header style={{ backgroundColor: blue }}>
      <Search
        placeholder="Search by term"
        allowClear
        style={{
          float: "left",
          width: "200px",
          height: "31px",
          margin: "16px 24px 16px 0",
        }}
        onSearch={() => {}}
      />
      <Menu theme="dark" style={{ backgroundColor: blue }} mode="horizontal">
        <Menu.Item key={1} className={""}>
          Home
        </Menu.Item>
        <Menu.Item key={2}>About us</Menu.Item>
        <Menu.Item key={3}>Terms and conditions</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderCustom;
