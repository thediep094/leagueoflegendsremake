import React, { useState } from "react";
import "../../styles/sections/checkout/ShippingAddress.scss"

type ShippingAddress = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
};

const ShippingAddress = () => {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Shipping Address: ", shippingAddress);

  };

  return (

    
    <div className="form">
      <form className="contact-information">
        <label className="content-header1">Contact information</label>
        <label className="email">
        
          <input
            type="email"
            name="Email"
            placeholder="Email"

          />
        </label>
        <label className="checkbox" >
          <input type="checkbox"  name="newsletter"/>
          <p > Keep me up to date on news and exclusive offers</p>
        </label>

         
      
    </form>
    <form onSubmit={handleSubmit}>
      <div className="content">
      <label className="content-header">Shipping Address</label>
      <div className="name">

     
      <label>
       
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={shippingAddress.firstName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={shippingAddress.lastName}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <label>
        
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingAddress.address}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
      
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone (Optional)"
          value={shippingAddress.phone}
          onChange={handleInputChange}
          required
        />
      </label>
              
      </div>
      <div className="button"><button type="submit">Complete Payment</button></div>
      
    </form>
    </div>
  );
};

export default ShippingAddress;
