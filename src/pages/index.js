import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import Subject from "./subject";

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/landing" element={<Landing />} />
            <Route path="/subject" element={<Subject />} />
		</Routes>
	);
};

export default Pages;
