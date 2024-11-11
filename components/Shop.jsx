import { React } from "react";
export function root()
{
    return(
        <>
        <main>
        <body id="body1">
            <wrapper id='wrapper1'>
                <header id="header1">
                    <h1 id="h1">Webshop</h1>
                </header>
                <nav id="topnav1">
                    <link to="/components/Product.jsx">Produkt</link>
                    <link to="/components/Cart.jsx">Kundvagn</link>
                </nav>
                <content id='content1'>
                    <article id="article">
                        <h3 id="title">Välkommen</h3>
                        <p>Webster är din destination för alla dina online shoppingbehov.</p>
                        <p>Oavsett om du letar efter de senaste trenderna, väsentliga kvalitetssaker eller unika fynd, erbjuder Webster ett varierat urval av produkter som passar alla smaker och livsstilar.</p>
                        <p>Vårt användarvänliga gränssnitt gör det enkelt att surfa och shoppa, med kategorier som spänner från mode och elektronik till heminredning och personlig vård. </p>
                        <p>På Webster har vi åtagit oss att leverera en sömlös shoppingupplevelse, från snabba och säkra utcheckningar till pålitlig frakt. </p>
                        <p>Dessutom säkerställer vår dedikerade kundsupport att du alltid är i goda händer. </p>
                        <p>Handla smart, shoppa med Webster – där variation möter bekvämlighet.</p>
                    </article>
                </content>
                <footer id="footer1">
                    <h3 id="h3">Copyright &amp; E-shop 2024</h3>
                </footer>
            </wrapper>
        </body>
        </main>
        </>
    )
}
export default Shop;
