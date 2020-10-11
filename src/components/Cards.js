import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<h1> What is new? </h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/perfume4.jpg"
							text="A new scent has Arrived"
							label="Revolutionary"
							path="/services"
						/>
						<CardItem
							src="images/perfume1.png"
							text="This is it! We have it now!"
							label="Fancy"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/perfume2.jpg"
							text="Science said it cant be done!"
							label="Mystery"
							path="/services"
						/>
						<CardItem
							src="images/perfume3.jpg"
							text="This is the stuff dreams are made of"
							label="Miracle"
							path="/products"
						/>
						<CardItem
							src="images/perfume5.jpg"
							text="Hear the sound of smell! HEAR IT!!!"
							label="Gorgeous"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
