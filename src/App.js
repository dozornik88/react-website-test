import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Brands from "./components/pages/Brands";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contacts";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/brands" exact component={Brands} />
					<Route path="/services" exact component={Services} />
					<Route path="/sign-up" exact component={SignUp} />
					<Route path="/contacts" exact component={Contact} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
