import { Card } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSubjects, selectedSubject } from "../redux";
import Warning from "./warning";

const Landing = ({ username, subjectData, fetchSubjects, selectedSubject }) => {
	const student_name = username;
	const navigate = useNavigate();
	useEffect(() => {
		fetchSubjects();
	}, []);
	const handleClick = (v) => {
		navigate("/subject");
		selectedSubject(v);
	};
	return username ? (
		<Card className="card-style">
			<h2>Hello, {student_name}</h2>
			{subjectData.subjects.map((v, i) => (
				<Card
					style={{ margin: "10px" }}
					hoverable={true}
					onClick={() => handleClick(v)}
					key={i}
				>
					{v.sub_name}
				</Card>
			))}
		</Card>
	) : (
		<Warning />
	);
};
const mapStateToProps = (state) => {
	return {
		username: state.user.username,
		subjectData: state.subjects,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSubjects: () => dispatch(fetchSubjects()),
		selectedSubject: (subject) => dispatch(selectedSubject(subject)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
