// Importerar biblioteker och komponenter
import { React } from 'react';
    
// Definierar Kundvagnskomponenten
export function Cart() {
  const [AddCartItems] = useState([]);

  // Funktion som man lägger en produkt till kundvagnen
  function addCart(product) {
    AddCartItems(prevItems => [...prevItems, product]);

  }
  return (
    <>
    <html>
    <body id='body2'>
        <wrapper id='wrapper2'>
            <header id='header2'>
                <h1 id='h1'>Kundvagn</h1>
            </header>
            <nav id='topnav2'>
                <a href='E-shop.jsx'>Introduktion</a>
                <a href='Product.jsx'>Produkt</a>
            </nav>
            <content id='content2'>
                <article id='article'>
                    <h3 id='title'></h3>
                </article>
                <section id='product-sum'>
                    <article>
                    <br><strong id='strong1'>Produkt 1 -</strong></br>
                    <br><strong id='strong2'>Produkt 2 -</strong></br>
                    <br><strong id='strong3'>Produkt 3 -</strong></br>
                    <br><strong id='strong4'>Produkt 4 -</strong></br>
                    <br><strong id='strong5'>Produkt 5 -</strong></br>
                    <br><strong id='strong6'>Produkt 6 -</strong></br>
                    </article>
                </section>
                <section id='payment'>
                    <form id='button7'>
                        <button type='submit'>Betala</button>
                    </form>
                    <form id='button8'>
                        <button type='submit'>Töm</button>
                    </form>
                </section>
            </content>
            <footer id='footer2'>
                <h3>Copyright © Webster 2024</h3>
            </footer>
        </wrapper>
    </body>
    </html>
    </>
  )
}

export default Cart;
