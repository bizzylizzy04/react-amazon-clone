import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Prime Video"
        />
        <div className="home__row">
          <Product
            id="123456789"
            title="Govee LED Light Bulb Dimmable, Music Sync RGB Color Changing Light Bulb A19 7W 60W Equivalent, Multicolor Decorative No Hub Required Smart LED Bulb with APP for Party Home"
            price={13.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61MPIRd11-L._AC_SL1500_.jpg"
            alt=""
          />

          <Product
            id="87695123"
            title="Web Design with HTML, CSS, JavaScript and jQuery Set"
            price={47.24}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41T53nRtyoL._SX435_BO1,204,203,200_.jpg"
            alt=""
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt=""
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            image="https://i.ebayimg.com/images/g/ZXAAAOSw-19fB~El/s-l300.jpg"
            alt=""
          />
          <Product
            id="099538102"
            title="Rustic Country Wood Barrel Invitations, Elegant invites for Wedding Rehearsal Dinner, Bridal Shower, Engagement, Birthday, Bachelorette Party, Baby Shower, Reception, Anniversary, Housewarming"
            price={14.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91ouxpSKiVL._AC_SL1500_.jpg"
            alt=""
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep..."
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UY545_FMwebp_QL65_.jpg"
            alt=""
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            alt=""
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            alt=""
          />
        </div>

        <div className="home__row">
          <Product
            id="9082932"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1400"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            alt=""
          />
          <Product
            id="4953800"
            title="YDL Personalized Dog Collar, Custom Embroidered Pet Name and Phone Number 4 Adjustable Sizes Quick Release Buckle and D-Ring"
            price={11.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/614Gzt4xtVL._AC_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
