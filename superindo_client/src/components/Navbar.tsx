import { Container, ModalLogin, ModalRegister } from "@/components";
import { logout, useAppDispatch, useAppSelector } from "@/redux";
import { BarChartOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Flex, Layout, Typography,Image,  theme } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../public/logo.png"

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = useRef([
    {
      key: "user-transactions",
      icon: <BarChartOutlined />,
      label: <Link to="/user/transactions">Transactions</Link>,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <div onClick={() => dispatch(logout())}>Logout</div>,
    },
  ]);

  return (
    <>
      <Header style={{ padding: 0, background: "white" }}>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <Flex align="center" justify="center" style={{ height: 64 }}>
            <Image
                    src={logo}
                    alt=""
                    style={{height:40,paddingLeft:40}}
                  />
              <Title level={1} style={{ color: "#868687", fontSize: "1rem" }}>
                SUPERINDO
              </Title>
            </Flex>
          </Link>

          <Flex align="center" justify="center" gap={10} style={{ height: 64 }}>
          <Button type="link" href="/admin/login">
                  Admin
                </Button>
            {user ? (
              <Dropdown
                menu={{ items: items.current }}
                trigger={["click"]}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <Avatar size={30} icon={<UserOutlined />} style={{ cursor: "pointer" }} />
              </Dropdown>
            ) : (
              <>
                <Button type="default" onClick={() => setIsModalRegisterOpen(true)}>
                  Register
                </Button>
                <Button type="primary" onClick={() => setIsModalLoginOpen(true)}>
                  Login
                </Button>
              </>
            )}
          </Flex>
        </Container>
      </Header>

      <ModalRegister isOpen={isModalRegisterOpen} onCancel={() => setIsModalRegisterOpen(false)} />
      <ModalLogin isOpen={isModalLoginOpen} onCancel={() => setIsModalLoginOpen(false)} />
    </>
  );
};

export default Navbar;
