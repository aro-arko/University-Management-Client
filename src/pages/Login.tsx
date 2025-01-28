/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useFormContext();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const toastId = toast.loading("Loggin in...", { duration: 2000 });
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <div>
          <PHInput type="text" name="userId" label="ID: " />
        </div>
        <div>
          <PHInput type="text" name="password" label="Password: " />
        </div>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
