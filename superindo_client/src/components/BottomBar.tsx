import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const BottomBar = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
      Superindo ©2023 Created by Hari | <Link to="/admin">Go to Admin page</Link>
    </Footer>
  );
};

export default BottomBar;
