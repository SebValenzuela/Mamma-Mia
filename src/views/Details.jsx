import React from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import pizzasData from "./../../pizzas 2.json";
import './Details.css'

function DetailsView({ cart, totalPrice }) {
    const { pizzaId } = useParams();
    const selectedPizza = pizzasData.find((pizza) => pizza.id === pizzaId);

    const addToCart = (pizza) => {
        // Agrega la pizza al carrito y actualiza el precio total
        // Usa las propiedades pasadas en lugar de los estados directamente
        cart.push(pizza);
        // Actualiza el precio total cuando se agrega una pizza al carrito
        totalPrice += pizza.price / 100;
    };

    return (
        <div>
            <NavbarComponent totalPrice={totalPrice} />

            <div className="container-details">
                <div className="card-pizza">
                    {/* Verifica si se encontró una pizza con el ID correspondiente y muestra los detalles */}
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
                                    <button id="cart-buttom" onClick={() => addToCart(selectedPizza)}>Añadir</button>
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
