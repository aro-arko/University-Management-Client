import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out!", { duration: 2000 });
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: "0",
          }}
        >
          <Button
            onClick={handleLogout}
            style={{ marginLeft: "auto", marginRight: "16px" }}
          >
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
