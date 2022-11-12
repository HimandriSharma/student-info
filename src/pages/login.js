import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";

const STUDENT_NAME = "STUDENT_NAME";
const Login = () => {
	useEffect(() => {
		localStorage.setItem(STUDENT_NAME, null);
	}, []);
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const handleFinish = (values) => {
		localStorage.setItem(STUDENT_NAME, values.username);
		navigate("/landing");
	};
	return (
		<Card className="card-style">
			<Form
				name="login-form"
				onFinish={handleFinish}
				form={form}
				layout="vertical"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default Login;
