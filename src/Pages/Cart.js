import totalData from '../Data/cartData.json'

const tData = [{
  "price" : "$3194",
  "shippingFee" : "$20",
  "total" : "$3214",
  "coupon" : "No"
}]


function loadProducts(){
  
  return (totalData.map((data) => {
    return (<div className = "item-container disgrid">
    <img className = "cart-image disflex Vcenter" src = {data.img}></img>
    <div className = "cart-name font-sizesml disflex Vcenter">{data.name}</div>
    <div className = "cart-price font-sizesml disflex Vcenter">{data.price}</div>
    <div className = "cart-qty font-sizesml disflex Vcenter">{data.quantity}</div>
    <div className = "cart-unit font-sizesml disflex Vcenter">{data.deprecatedPrice}</div>
  </div>)
  }))
}

function Cart(){
    return(
        <div id = "cartPage" className = "disgrid">
        <div className = "FILLER-DIV"></div>
        <div id = "cp-mid-div">
          <div id = "cp-sectionOne">
            <div id = "cp-titlebar" className = "">
              <li id = "cp-outercontainer" className = "disgrid font-sizesml-n">
                <ul className='FILLER-DIV'></ul>
                <ul className = " disflex Vcenter">PRODUCT</ul>
                <ul className = "disflex Vcenter">PRICE</ul>
                <ul className = "disflex Vcenter">QTY</ul>
                <ul className = "disflex Vcenter">UNIT PRICE</ul>
              </li>
            </div>
          </div>

          <div id = "cp-sectionTwo">
            {loadProducts()}
          </div>

          <div id = "cp-sectionThree" className = "disgrid">
            <div id = "cp-bill-one">
              <div id = "voucherbox" className = "disgrid">
                <input type = "text" className = "font-sizesml" value = "Voucher Code"/>
                <div id = "reedembtn" className = "font-sizesml disflex Vcenter">Redeem</div>
              </div>
            </div>
            <div className = "FILLER-DIV"></div>
            <div id = "cp-bill-two" className = "disgrid font-sizesml">
              <li className = "disgrid">
                <ul id = "subtotal"><p id = "st-title">Subtotal</p><p className = "bill-num">{tData.map(data => {return(data.price)})}</p></ul>
                <ul id = "shipping"><p id = "st-title">Shipping</p><p className = "bill-num">{tData.map(data => {return(data.shippingFee)})}</p></ul>
                <ul id = "coupon"><p id = "st-title">Coupon</p><p className = "bill-num">{tData.map(data => {return(data.coupon)})}</p></ul>
              </li>
              <div id = "total" className = 'font-sizebig-m'>
                <p>TOTAL</p>
                <p className = "bill-num">
                  {tData.map(data => {return((data.total))})}
                </p>
              </div>
              <div id = "checkoutbtn" className = "disflex Vcenter">Check Out</div>
            </div>
          </div>
        </div>
        <div className = "FILLER-DIV"></div>
      </div>
    )
}

export default Cart;