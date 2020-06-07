import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddInventory = ()=>{

        const product = fakeData;
        console.log('before post',fakeData.length);
        fetch('https://evening-reaches-71506.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data =>{
            console.log("post successful",data);
        })
    }
    return (
        <div>
            <h1>Add more products to sell..</h1>
            <button onClick={handleAddInventory}>Add inventory</button>
        </div>
    );
};

export default Inventory;