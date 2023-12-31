import React, { useState, useEffect } from 'react'
import NavbarComponent from './components/Navbar'
import './App.css'
import pizzasData from './../pizzas 2.json'
import { useNavigate } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]); // Usar el estado para mantener el carrito
  const [totalPrice, setTotalPrice] = useState(0); // Usar el estado para mantener el precio total
  const navigate = useNavigate();

  useEffect(() => {
    // Carga los datos del archivo JSON al estado
    setPizzas(pizzasData);
  }, []);

  const goToDetails = (pizzaId) => {
    navigate(`/details/${pizzaId}`);
  };

  const addToCart = (pizza) => {
    setCart([...cart, pizza]); // Agregar la pizza al carrito
    setTotalPrice(totalPrice + pizza.price / 100); // Actualizar el precio total
  };

  return (
    <>
      <NavbarComponent totalPrice={totalPrice} />
      <div className="back-img">
        <div className='dark-back d-flex align-center justify-content-center'>
          <div className='w-75'>
            <div>
              <h1>¡Pizzeria Mamma Mia!</h1>
            </div>
            <div>
              <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="catalogo">
        {pizzas.map((pizza) => (
          <div className="col-4" key={pizza.id}>
            <div key={pizza.id} className="pizza-card">
              <img className='card-img' src={pizza.img} alt={pizza.name} />
              <div className="card-title">
                <h2>{pizza.name}</h2>
              </div>
              <div className="card-body">
                <hr />
                <p className='ingredients'>Ingredientes:</p>
                <ul className='list-ingredients'>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <hr />
                <div className="card-buttons">
                  <p className='price'>Price: ${pizza.price / 100}</p>
                  <div className="d-flex justify-content-between">
                    <button className='details' onClick={() => goToDetails(pizza.id)}>Ver más</button>
                    <button className='cart' onClick={() => addToCart(pizza)}>Añadir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
