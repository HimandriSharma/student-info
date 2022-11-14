import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";
import { postUserCred } from "../redux";
import { connect } from "react-redux";

const STUDENT_NAME = "STUDENT_NAME";
const Login = ({ postUserCred }) => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const handleFinish = (values) => {
		localStorage.setItem(STUDENT_NAME, values.username);
		postUserCred({ username: values.username, password: values.password });
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

const mapDispatchToProps = (dispatch) => {
	return {
		postUserCred: ({username, password}) => dispatch(postUserCred({username, password})),
	};
};
export default connect(null, mapDispatchToProps)(Login);
