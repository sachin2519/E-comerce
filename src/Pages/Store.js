import bgImg2 from '../Images/miscellaneous/2_corousel.png'
import data from '../Data/ProductData.json'

function loadProducts(){
    return (data.map((data) => {
      return (<div className = "display-Box-store disgrid">
      <div className = "display-image disflex Vcenter">
      <img src = {data.img}></img>
      </div>
      <div className = "display-title disflex Vcenter font-sizesml-m">{data.name}</div>
      <div className = "display-pricebox disgrid">
      <div className = "display-price disflex Vcenter font-sizesml-n">{data.price}</div>
      <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{data.deprecatedPrice}</div>
      </div>
  </div>)
    }))
  }

function Store(props){
    return (
        <div id = "storepage" className = "disgrid margin-top-m">
            <div className = "FILLER-DIV"></div>
            <div id = "sP-sectionOne" className = "sp-filters disgrid padding-small">
            <div id = "sP-accesories" className = "backdropGray margin-bottom-s disflex">
                <p className = "spheading font-sizesml-m">ACCESORIES</p>
                <li className = "font-sizesml disflex">
                <ul className = "margin-bottom-s margin-top-s"><p className = "ac-title">Apple Car</p><p className = "ac-num">2</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Air port & Wireless</p><p className = "ac-num">48</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cables and Docks</p><p className = "ac-num">14</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cases and Films</p><p className = "ac-num">15</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Charging Devices</p><p className = "ac-num">22</p></ul>
                {/* <ul className = "margin-bottom-s"><p className = "ac-title">Connected Home</p><p className = "ac-num">1</p></ul> */}
                {/* <ul className = "margin-bottom-s"><p className = "ac-title">Headphones</p><p className = "ac-num">99</p></ul> */}
                </li>
            </div>
            <div id = "sP-price" className = "backdropGray margin-bottom-s disflex">
                <div className = "slidecontainer disflex">
                <p className = "spheading font-sizesml-m">Price</p>
                <input type="range" min="1" max="100" value="50"/>
                </div>
            </div>
            <div id = "sP-color" className = "backdropGray margin-bottom-s">
                <p className = "spheading font-sizesml-m">COLOR</p>
                <li>
                <ul className = "co-outer margin-left-m"><div id = "red" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "green"className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "blue" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "gray" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "yellow" className = "co-inner disflex Vcenter"></div></ul>
                </li>
            </div>
            <div id = "sP-brand" className = "backdropGray margin-bottom-s">
            <p className = "spheading font-sizesml-m">BRANDS</p>
                <li className = "font-sizesml disflex">
                <ul className = "margin-bottom-s margin-top-s"><p className = "ac-title">Apple Car</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Air port & Wireless</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cables and Docks</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cases and Films</p><p className = "ac-num">99</p></ul>
                </li>
            </div>
            </div>
            <div id = "sP-sectionTwo" className = "disgrid">
                <div id = "sP-sub-container" className = "disgrid">
                    <div id = "sP-sub-descr" className = "Vcenter">
                    <p className = "font-sizesml-m">iPhone 8</p>
                    <p className = "font-sizesml">Performance and design. Taken right to edge</p>
                    <a className = "font-sizesml" onClick={() => props.handleClick(2)}>SHOP NOW</a>
                    </div>
                    <div id = "sP-sub-imgContainer">
                    <img src = {bgImg2}/>
                    </div>
                </div>

            <div id = "sP-sub-prodDisplay" className = "disflex Vcenter">
                {loadProducts()}
            </div>
            </div>
      </div>
    );
}

export default Store;