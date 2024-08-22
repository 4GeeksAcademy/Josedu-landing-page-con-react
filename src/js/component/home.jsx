import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
		<div className="container-fluid mb-3">
			<div className="row d-flex justify-content-between">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
			<Footer />
		</div>
		</>
	);
};
// Hacer los componentes y reemplazar todo el codigo aqui por los nuevos compponentes.
export default Home;
