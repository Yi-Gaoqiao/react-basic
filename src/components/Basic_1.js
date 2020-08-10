import React, {useState} from 'react'

const Basic_1 = () => {


    const [products, setProducts] = useState({name: '', price: ''})

    return (
        <div>
            <form>
                <input type='text' value={products.name} onChange={evt => setProducts({...products, name: evt.target.value})}/>
                <input type='text' value={products.price} onChange={evt => setProducts({...products, price: evt.target.value})}/>

            </form>

            <h3>Product name is {products.name}</h3>
            <h3>Product price is {products.price}</h3>
        </div>
    )
}

export default Basic_1
