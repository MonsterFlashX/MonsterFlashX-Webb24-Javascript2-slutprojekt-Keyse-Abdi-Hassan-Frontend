// Importerar nödvändiga biblioteker och komponenterna
import React, { useState, useEffect } from 'react';
import { Cart } from './Cart';
import { Loading } from './Loading';
import { Error } from './Error';
import { Product } from './Product';
import { createRoot } from 'react-dom/client';

// Definierar App komponenterna
export function App() {
    const [status, setStatus] = useState('success');
    const [Products, setProducts] = useState(['Notepad', 'Lamp', 'Hulk', 'T-shirt', 'Mittens', 'Watch']);
    const [Items, setItems] = useState(['Default Product']);
    const [lastSearches, setLastSearches] = useState([]);

    function addItem(newProduct){
        // setState kan ta en callbackfunktion som argument, den behöver returnera det nya värdet som statet ska ha
        // Callbackfunktionens parameter kommer innehålla det nuvarande värdet av statet
        setItems( current =>{
            currentItem = [...current];
            currentItem.push(newProduct);
            currentItem.shift();
            return currentItem;
        } );
    }

    /*
    useEffect(()=>{
        setStatus('loading');

        fetchProducts(Products[Products.length-1])
            .then((Products)=>{ 
                setProducts(Products); 
                setStatus('success') 
            })
            .catch(()=>{ setStatus('error')} );
    }, [lastSearches])
    */
    
  return (
    <>
            <main>
                {/* Loading eller Error eller ProductContainer */}
                {status == 'loading' && <Loading/>}
                {status == 'error' && <Error/>}
                {status == 'success' && <Product Items={setItems}/>}
                {status == 'cart' && <Cart Products={setProducts}/>}
            </main>
        </>
  );
}

export default App;

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);
//root.render(<Product/>);
//root.render(<Cart/>);
//root.render(<Loading/>);
//root.render(<Error/>);
//root.render(<Eshop/>);

