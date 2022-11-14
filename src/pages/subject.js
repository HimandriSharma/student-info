import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSubjects } from "../redux";
import Warning from "./warning";

const Subject = ({ selectedSubject }) => {
	useEffect(() => {
		fetchSubjects();
	});
	return Object.keys(selectedSubject.subject).length === 0 ? (
		<Warning />
	) : (
		<Card className="card-style">
			<h2>Subject: {selectedSubject.subject.sub_name}</h2>
			<p style={{ maxWidth: "450px" }}>
				<b>About:</b> {selectedSubject.subject.sub_about}
			</p>
			<Link to="/landing">
				<Button>Go back</Button>
			</Link>
		</Card>
	);
};
const mapStateToProps = (state) => {
	return {
		selectedSubject: state.selectedSubject,
	};
};

export default connect(mapStateToProps, null)(Subject);
