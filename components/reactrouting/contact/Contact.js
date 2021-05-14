import React from 'react'
const Contact= () => {
    return <div>
    <a href="http://127.0.0.1:5500/MyTrip.html"> 
      <img className="logo" src="logo-mytrip.png" /> 
    </a>
    <h1 className="trip">MyTrip</h1>
    <div className="card">
      <div className="topnav">
        <a className="active" href="http://127.0.0.1:5500/MyTrip.html">Home</a>
        <a href="http://127.0.0.1:5500/contactus.html" target="_self">Contact</a>
        <a href="http://127.0.0.1:5500/trippackage.html" target="_self">TripPackage</a>
        <div className="topnav-right">
          <a href="http://127.0.0.1:5500/login.html" target="_self">Login</a>
          <a href="http://127.0.0.1:5500/register.html" target="_self">Register</a>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{backgroundImage: 'url(wood.jpg)'}}>
      <div className="contact">
        <section id="contact" className="contact">
          <div className="row" style={{width: '2000px'}}>
            <div className="column">
              <div className="card">
                <h3>Contact us</h3>
                <img src="contact.jpg" />
                <p>Name: shweta kumari</p>
                <p>Email:<a href="kumarishweta580@gmail.com">kumarishweta580@gmail.com</a></p>
                <i className="fa fa-phone-square fa-2x">
                  <p>Phone:<a href={74102589630}>74102589630</a></p>
                </i>
                <p>
                  address: somewhere in earth
                </p>
              </div>
            </div>
          </div></section></div></div></div>
}
export default Contact;