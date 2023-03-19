import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/notes/1"
					element={
						<NotesPage
							title="First Year: Dental Anatomy - Bones Complete (4 topics)"
							img="notes1"
						/>
					}
				></Route>
				<Route
					path="/notes/2"
					element={
						<NotesPage
							title="CIIPS: Triz benchmarking (Lecture 8)"
							img="notes2"
						/>
					}
				></Route>
				<Route
					path="/notes/3"
					element={
						<NotesPage
							title="JEE: Organic Chemistry - Halogens in 5 minutes"
							img="notes3"
						/>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
