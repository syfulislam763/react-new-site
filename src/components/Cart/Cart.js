import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let Name = "";
    let Salary = 0;
    let totalUsers = 0;
    for(let i=0; i<cart.length; i++){
        const value = cart[i];
        Name = value.name;
        Salary = value.salary;
        totalUsers = totalUsers + Salary;
    }
    return (
        <div className="cart">
            <h4>Added Users</h4>
            <p style={{fontWeight:500}}>Users: {cart.length}</p>
            <p style={{fontWeight:500,color:"green"}}>Currently added <strong>{Name}</strong> and his/her salary: ${Salary}</p>
            <p style={{fontWeight:600}}>Total Users Salary: ${totalUsers} </p>
        </div>
    );
};

export default Cart;