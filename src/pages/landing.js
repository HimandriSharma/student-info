import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const subjects = [
	{
		sub_code: "ENG",
		sub_name: "English",
		sub_about:
			"English is a West Germanic language of the Indo-European language family, with its earliest forms spoken by the inhabitants of early medieval England.",
	},
	{
		sub_code: "MATH",
		sub_name: "Mathermatics",
		sub_about:
			"Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.",
	},
	{
		sub_code: "SCI",
		sub_name: "Science",
		sub_about:
			"Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.",
	},
	{
		sub_code: "SOC",
		sub_name: "Social Studies",
		sub_about:
			"A part of a school or college curriculum concerned with the study of social relationships and the functioning of society and usually made up of courses in history, government, economics, civics, sociology, geography, and anthropology.",
	},
];
const Landing = () => {
	const student_name = localStorage.getItem("STUDENT_NAME");
	return (
		<Card className="card-style">
			<h2>Hello, {student_name}</h2>
			{subjects.map((v, i) => (
				<Link to="/subject" state={{subject:v}} key={i}>
					<Card style={{ margin: "10px" }} hoverable={true}>
						{v.sub_name}
					</Card>
				</Link>
			))}
		</Card>
	);
};

export default Landing;
