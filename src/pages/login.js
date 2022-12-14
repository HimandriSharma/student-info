import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";
import { postUserCred } from "../redux";
import { connect } from "react-redux";
const Login = ({ postUserCred }) => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const handleFinish = (values) => {
		postUserCred({ username: values.username, password: values.password });
		navigate("/landing");
	};
	return (
		<Card className="card-style">
			<h1>Login</h1>
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
					<Input placeholder="John"/>
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
					<Input.Password placeholder="Secret"/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" data-testid="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		postUserCred: ({username, password}) => dispatch(postUserCred({username, password})),
	};
};
export default connect(null, mapDispatchToProps)(Login);
