import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import Subject from "./subject";
import Warning from "./warning";

const Pages = () => {
	return (
		<Routes>
			<Route path="*" exact={true} element={<Warning />} />
			<Route path="/" element={<Login />} />
			<Route path="/landing" element={<Landing />} />
			<Route path="/subject" element={<Subject />} />
		</Routes>
	);
};

export default Pages;
