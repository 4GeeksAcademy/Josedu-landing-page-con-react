import React from "react"
import Card from "./card.jsx";
const CardHolder = () => {
    return (
        <>
        <div className="container-fluid mb-3">
			<div className="row d-flex justify-content-between">
                <Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
        </>
    )
}

export default CardHolder