import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="/img/ship.jpg"
            alt=""
            />

            {/* Product id, title, price, rating, image  */}
            <div className="home__row">
                <Product
                    id="12345671"
                    title="High-Density Exercise, Massage, Muscle Recovery, Round Foam Roller"
                    price={22.99}
                    rating={5}
                    image="/img/amazonbasic.jpg"
                />
                <Product
                    id="12345672"
                    title="Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
                    price={18.99}
                    rating={4}
                    image="/img/kettle.jpg"
                />
                <Product
                    id="12345673"
                    title="USB Type-C to USB-A 2.0 Male Charger Cable, 3 Feet (0.9 Meters), White"
                    price={5.90}
                    rating={5}
                    image="/img/usb_cable.jpg"
                />
                <Product
                    id="12345674"
                    title="Plier Tools Set - Set of 4"
                    price={18.99}
                    rating={4}
                    image="/img/plier.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345675"
                    title="Men's Fashion Volcano Bottom Casual Sports Shoes -White"
                    price={22.99}
                    rating={4}
                    image="/img/shoe.jpg"
                />
                <Product
                    id="12345676"
                    title="DELL DELL XPS 15 7Th Gen Intel Corei7,2.8GHz,2TBB SSD, - 16GB RAM, 8GB,15.6' Windows 10 Home"
                    price={22.99}
                    rating={3}
                    image="/img/dell.jpg"
                />
                <Product
                    id="12345677"
                    title="9-Inch Thermal Laminator Machine"
                    price={22.99}
                    rating={2}
                    image="/img/laminator.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345678"
                    title="High-Density Exercise, Massage, Muscle Recovery, Round Foam Roller"
                    price={22.99}
                    rating={5}
                    image="/img/mouse.jpg"
                />
            </div>
        </div>
    )
}

export default Home
