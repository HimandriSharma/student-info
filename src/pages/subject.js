import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { fetchSubjects } from "../redux";

const Subject = ({subjectData, fetchSubjects}) => {
	const { subject } = useLocation().state;
	useEffect(() => {
		fetchSubjects();
	}, []);
	console.log(subjectData)
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
const mapStateToProps = (state) => {
	return {
		subjectData: state.subjects,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSubjects: () => dispatch(fetchSubjects()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
