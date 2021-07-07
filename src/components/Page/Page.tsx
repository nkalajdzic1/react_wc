import { Layout } from "antd";
import FooterCustom from "../FooterCustom/FooterCustom";
import HeaderCustom from "../HeaderCustom/HeaderCustom";

export interface IPageProps {
  children: any;
}

function Page({ children }: IPageProps) {
  return (
    <Layout className="layout">
      <HeaderCustom />
      {children}
      <FooterCustom />
    </Layout>
  );
}

export default Page;
