import React from 'react';
import { useState } from 'react';

import Accessoriedata from './Data/storeData'
import products from './Data/ProductData.json'
import './App.css';
//Pages
import Home from './Pages/Home'
import Store from './Pages/Store'
import Cart from './Pages/Cart'
// Images
import paypalLogo from "./Images/Web/Paypal.svg"
import visaLogo from "./Images/Web/visa.svg"
import westernUnionLogo from "./Images/Web/Western_union.svg"
import mastercardLogo from "./Images/Web/master_card.svg"
import ishopLogo from './Images/Web/iSHOP Logo.svg'



// const Accesories = Accessoriedata.map((Accessoriedata) => <ul>{Accessoriedata}</ul>)
const UserContext = React.createContext(null);

function App() {
  const [id, setId] = useState(1);

  function handleClick(x){
    setId(x);
  }

  const shopAlt = `<p className = "font-sizebig altClass">iSHOP</p>`
  return (
    <div className="">
    {/* -------------------------------------------------------- */}
      <div id = "topBar" className = "disgrid">
        <div id = "tB-sectionOne" className = "disgrid">
          <div id = "sO-leftDiv" className = "disflex flex-right ">
            <li>
              <ul id = "language"><p className = "font-sizesml">EN</p></ul>
              <ul id = "currency" className = "font-sizesml-n margin-left-m">
                <div className = "dropdown">
                  <button className = "dropbtn font-sizesml"> 
                    <div id = "activeCurrency" className = "colorBlack padding-med">
                      <i className="fa fa-usd" aria-hidden="true"></i>
                    </div>
                    <i className="fa fa-caret-down"></i>
                  </button>

                  <div className = "dropdown-content">
                    <a id = "currencyOptionOne" href="#" className = "colorBlack padding-small font-sizesml-n"><i className="fa fa-inr" aria-hidden="true"></i></a>
                    <a id = "currencyOptionTwo" href="#" className = "colorBlack padding-small font-sizesml-n"><i className="fa fa-eur" aria-hidden="true"></i></a>
                  </div>
                </div> 
              </ul>
            </li>
          </div>
          
          <div className = "FILLER-DIV"></div>

          <div id = "sO-rightDiv" className = "disflex">
            <li>
              <ul id = "profileBtn" className = "font-sizesml-n padding-small"><i className="fa fa-user" aria-hidden="true"></i> <p> Profile</p></ul>
              <ul id = "cartBtn" className = "font-sizesml-n padding-small margin-left-l"  onClick = {() => setId(2)}><i className="fa fa-shopping-cart" aria-hidden="true"> <p> Cart</p></i></ul>
              <ul id = "searchBtn" className = "font-sizesml-n padding-small margin-left-l"><i className="fa fa-search" aria-hidden="true"></i></ul>
            </li>
          </div>
        </div>

        <div id = "tB-sectionTwo" className = "disflex">
          <img src = {ishopLogo} alt = {shopAlt}></img>
        </div>

        <div id = "tB-sectionThree" className = "disgrid Vcenter">
            <div className = "FILLER-DIV"></div>
            <li id = "sT-navbar" className = "disgrid">
              <ul id = "sT-home" className = "hover-navbar font-sizesml disflex Vcenter" onClick = {() => setId(1)}><b>HOME</b></ul>
              <ul id = "sT-store" className = "hover-navbar  font-sizesml disflex Vcenter" onClick = {() => setId(3)}><b>STORE</b></ul>
              <ul id = "sT-iphone" className = "hover-navbar font-sizesml disflex Vcenter" onClick = {() => setId(3)}><b>IPHONE</b></ul>
              <ul id = "sT-ipad" className = "hover-navbar font-sizesml disflex Vcenter" onClick = {() => setId(3)}><b>IPAD</b></ul>
              <ul id = "sT-macbook" className = "hover-navbar font-sizesml disflex Vcenter" onClick = {() => setId(3)}><b>MACBOOK</b></ul>
              <ul id = "sT-accesories" className = "hover-navbar font-sizesml disflex Vcenter" onClick = {() => setId(3)}><b>ACCESORIES</b></ul>
            </li>
            <div className = "FILLER-DIV"></div>
        </div>
      </div>
    
    {/* -------------------------------------------------------- */}

    <div id = "renderDiv">
      {id == 1 && <Home handleClick={handleClick}/>}
      {id == 3 &&<Store handleClick={handleClick}/>}
      {id == 2 && <Cart/>}
    </div>
    
    {/* -------------------------------------------------------- */}
    
    <div id = "footer" className = "disgrid">
      <div id = "f-sectionOne" className = "disgrid">
        <div id = "f-descr" className = "padding-small">
          <h2>iSHOP</h2>
          <p className = "font-sizesml">Lorem Ispum is simply dummy text for the printing and typesetting indutry. Lorem Ispum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div id = "information" className = "padding-small">
          <h5>Information</h5>
          <li>
            <ul><a className = "font-sizesml" href = "#">About Us</a></ul>
            <ul><a className = "font-sizesml" href = "#">Information</a></ul>
            <ul><a className = "font-sizesml" href = "#">Privacy Policy</a></ul>
            <ul><a className = "font-sizesml" href = "#">Terms & Conditions</a></ul>
          </li>
        </div>

        <div id = "contactUs" className = "padding-small">
          <h5>Contact Us</h5>
          <p className = "font-sizesml">IShop : address@building 123</p><br/>
          <p className = "font-sizesml">Call us now : 1234567890</p><br/>
          <p className = "font-sizesml">Email : support@whatever.com</p>
        </div>
      </div>
      <div id = "f-sectionTwo" className = "disgird">
        <div id = "iconSection" className = "disflex">
          <img className = "margin-left-s"src= {paypalLogo} alt = "Paypal"/>
          <img className = "margin-left-s"src= {westernUnionLogo} alt = "WesternUnion"/>
          <img className = "margin-left-s"src= {visaLogo} alt = "Visa"/>
          <img className = "margin-left-s"src= {mastercardLogo} alt = "MasterCard"/>
        </div>
      </div>
    </div>

    {/* -------------------------------------------------------- */}
    </div>
  );
}

export default App;
