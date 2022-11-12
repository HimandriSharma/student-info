import { Button, Card } from "antd";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Subject = () => {
	const { subject } = useLocation().state;
	return (
		<Card className="card-style">
			<h2>Subject: {subject.sub_name}</h2>
			<p style={{ maxWidth: "450px" }}>
				<b>About:</b> {subject.sub_about}
			</p>
			<Link to="/landing">
				<Button>Go back</Button>
			</Link>
		</Card>
	);
};

export default Subject;
