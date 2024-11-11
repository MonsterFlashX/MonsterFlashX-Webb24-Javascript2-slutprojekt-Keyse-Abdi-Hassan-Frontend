// Importerar biblioteker och komponenterna
import React, { useState, useEffect } from 'react';

function addProduct() {
    const button1 = addEventListener("button1").innerHTML;
    const button2 = addEventListener("button2").innerHTML;
    const button3 = addEventListener("button3").innerHTML;
    const button4 = addEventListener("button4").innerHTML;
    const button5 = addEventListener("button5").innerHTML;
    const button6 = addEventListener("button6").innerHTML;

    if (button1 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");
    }
    else if (button1 > "denied") {
        console.log("product not added");
        alert("Denied! Product Not Added");
    }
    if (button2 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");

    }
    else if (button2 > "denied") {
        console.log("product not added");
        alert("Denied! Product Not Added");
    }
    if (button3 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");
    }
    else if (button3 > "denied") {
        console.log("product not added")
        alert("Denied! Product Not Added");
    }
    if (button4 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");
    }
    else if (button4 > "error") {
        console.log("product not added");
        alert("Denied! Product Not Added");
    }
    if (button5 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");

    }
    else if (button5 > "denied") {
        console.log("product not added");
        alert("Denied! Product Not Added");
    }
    if (button6 < "granted")  {
        console.log("product added");
        alert("Granted! Product Added");
    }
    else if (button6 > "denied") {
        console.log("product not added")
        alert("Denied! Product Not Added");
    }
}

// Definierar produktskomponenten
export function Product() {
    const [cart, setCart] = useState();

    /*
    const addProductToCart = (productId) => {
      commerce.cart.add(productId, 1)
        .then(result => {
          setCart(result.cart);
          alert("Product added to cart");
        });
    }
   
    useEffect(() => {
      commerce.cart.retrieve()
        .then(cart => {
          setCart(cart);
        })
    }, [])
   */
    return(
       <>
                <body id='body3'>
                    <wrapper id='wrapper3'>
                        <header id='header3'>
                            <h1 id='h1'>Produktssidan</h1>
                        </header>
                        <nav id='topnav3'>
                            <a href='E-shop.jsx'>Introduktion</a>
                            <a href='Cart.jsx'>Kundvagn</a>
                        </nav>
                <content id='content3'>
                    <product id='product-card1'>
                        <img id='notepad' className='public/img/Notepad.avif' width='300px' height='250px' alt='Notepad'></img>
                        <article id='info1'>
                            <p>Produkt 1 - 25 kronor</p>
                        </article>
                        <article id='info2'>
                            <p>Lager: 25</p>
                        </article>
                        <form id='button1'>
                        <button type='submit' onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                    <product id='product-card2'>
                        <img id='lamp' src='public/img/Lamp.jpg' width='300px' height='250px' alt='Lamp'></img>
                        <article id='info3'>
                            <p>Produkt 2 - 50 kr</p>
                        </article>
                        <article id='info4'>
                            <p>Lager: 50</p>
                        </article>
                        <form id='button2'>
                        <button type='submit' onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                    <product id='product-card3'>
                        <img id='toy' src='public/img/Hulk.jpg' width='300px' height='250px' alt='Hulk'></img>
                        <article id='info5'>
                            <p>Produkt 3 - 75 kr</p>
                        </article>
                        <article id='info6'>
                            <p>Produkt: 75</p>
                        </article>
                        <form id='button3'>
                        <button type='submit' onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                    <product id='product-card4'>
                        <img id='T-shirt' src='public/img/T-shirt.webp' width='300px' height='250px' alt='T-shirt'></img>
                        <article id='info7'>
                            <p>Produkt 4 - 250 kronor</p>
                        </article>
                        <article id='info8'>
                            <p>Lager: 25</p>
                        </article>
                        <form id='button4'>
                        <button type='submit'onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                    <product id='product-card5'>
                        <img id='Mittens' src='public/img/Mittens.webp' width='300px' height='250px' alt='Mittens'></img>
                        <article id='info9'>
                            <p>Produkt 5 - 90 kronor</p>
                        </article>
                        <article id='info10'>
                            <p>Lager: 50</p>
                        </article>
                        <form id='button5'>
                        <button type='submit'onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                    <product id='product-card6'>
                        <img id='Watch' src='public/img/Watch.avif' width='300px' height='250px' alt='Watch'></img>
                        <article id='info11'>
                            <p>Produkt 1 - 25 kronor</p>
                        </article>
                        <article id='info12'>
                            <p>Lager: 75</p>
                        </article>
                        <form id='button6'>
                        <button type='submit'onClick={() => addProduct()}>Lägg till</button>
                        </form>
                    </product>
                </content>
                <footer id='footer3'>
                    <h3>Copyright &amp; E-shop</h3>
                </footer>
                </wrapper>
                </body>
       </>

    )
}
export default Product;
