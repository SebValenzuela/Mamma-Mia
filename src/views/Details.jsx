import React from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import pizzasData from "./../../pizzas 2.json";
import './Details.css'

function DetailsView() {
    const { pizzaId } = useParams();
    const selectedPizza = pizzasData.find((pizza) => pizza.id === pizzaId);

    return (
        <div>
            <NavbarComponent />
            <div className="container-details">
                <div className="card-pizza">
                    {selectedPizza ? (
                        <div className="d-flex">
                            <div className="card-img">
                                <img src={selectedPizza.img} alt={selectedPizza.name} />
                            </div>
                            <div className="card-body">
                                <h2>{selectedPizza.name}</h2>
                                <hr />
                                <p>{selectedPizza.desc}</p>
                                <p className='ingredients'>Ingredientes:</p>
                                <ul className='list-ingredients'>
                                    {selectedPizza.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <div className="button-card d-flex justify-content-between">
                                    <p>Precio: ${selectedPizza.price / 100}</p>
                                    <button id="cart-buttom">Añadir al carrito</button> {/* Agregar al carrito */}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Pizza no encontrada</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailsView;
