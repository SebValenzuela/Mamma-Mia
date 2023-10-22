import React from "react";
import NavbarComponent from "../components/Navbar";
import './OrderDetail.css';
import pizzasData from './../../pizzas 2.json';

function OrderDetailView({ cart }) {
    // Función para buscar los detalles de una pizza en el archivo JSON
    const findPizzaDetails = (pizzaId) => {
        return pizzasData.find(pizza => pizza.id === pizzaId);
    };

    // Función para incrementar la cantidad de una pizza en el carrito
    const incrementQuantity = (pizza) => {
        // Implementa la lógica para aumentar la cantidad de la pizza en el carrito
    };

    // Función para disminuir la cantidad de una pizza en el carrito
    const decrementQuantity = (pizza) => {
        // Implementa la lógica para disminuir la cantidad de la pizza en el carrito
    };

    // Función para calcular el precio total de una pizza en el carrito
    const calculatePizzaTotal = (pizza) => {
        const pizzaDetails = findPizzaDetails(pizza.id);
        // Calcula el precio total de la pizza multiplicando el precio por la cantidad
        return pizzaDetails.price * pizza.quantity;
    };

    // Función para calcular el precio total de todas las pizzas en el carrito
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((pizza) => {
            totalPrice += calculatePizzaTotal(pizza);
        });
        return totalPrice;
    };

    return (
        <>
            <NavbarComponent />
            <div className="container-order">
                <div className="card-order">
                    <h3>Detalles del pedido</h3>
                    <ul>
                        {cart.map((pizza, index) => (
                            <li key={index} className="d-flex">
                                <div className="d-flex">
                                    <img src={findPizzaDetails(pizza.id).img} alt={findPizzaDetails(pizza.id).name} />
                                    <p>{findPizzaDetails(pizza.id).name}</p>
                                </div>
                                <div className="d-flex">
                                    <div className="pizza-price">${calculatePizzaTotal(pizza).toFixed(2)}</div>
                                    <button className="less" onClick={() => decrementQuantity(pizza)}>-</button>
                                    <span>{pizza.quantity}</span>
                                    <button className="plus" onClick={() => incrementQuantity(pizza)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="total-prices">
                        <span>Total: ${calculateTotalPrice().toFixed(2)}</span>
                    </div>
                    <button className="pay">Ir a pagar</button>
                </div>
            </div>
        </>
    );
}

export default OrderDetailView;
