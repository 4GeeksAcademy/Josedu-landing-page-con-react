import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardHolder from "./cardholder.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
			<CardHolder />
			<Footer />
		</div>
		</>
	);
};
// Hacer los componentes y reemplazar todo el codigo aqui por los nuevos compponentes.
export default Home;
