import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';

const Users = () => {
    //console.log(fakeData);
    const [users, setUsers] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const addUsers = (person) => {
        //console.log("clicked me");
        const newCart = [...cart, person];
        setCart(newCart);
    }
    return (
        <div>
            <div className="contain">
                <div className="user-container">
                    {
                        users.map(user => <Person 
                                        addUsers={addUsers}
                                        person={user}>
                                        </Person>)
                    }
                </div>
                <div className="user-cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Users;