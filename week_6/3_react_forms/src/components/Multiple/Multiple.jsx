import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    name2: "",
    name3: "",
    country: 'Canada',
  });

  const [isVisible, setIsVisible] = useState(false);


  const handleChange = (event) => {
    console.log('event event ', event)
    console.log('event event formData ', formData)

    const { name, value, type } = event.target;
    let valueToStore = value
    console.log('event name ', name)
    console.log('event value ', value)
    console.log('event type ', type)

    const { name2, value2, type2 } = event.target;
    let valueToStore2 = value2
    console.log('event name2 ', name2)
    console.log('event value ', value2)
    console.log('event type ', type2)

    const { name3, value3, type3 } = event.target;
    let valueToStore3 = value3
    console.log('event name3 ', name3)
    console.log('event value ', value3)
    console.log('event type ', type3)
   
    
  };
  const handleButtonClick = () => {
    setIsVisible(!isVisible);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      ` Press ok to show data  `
       );
     
  };

  return (
    <center>
    <h1> Address </h1>
      <div className="form">
      <form onSubmit={handleSubmit} className="multiple">
          <label className="multiple__text" htmlFor="street">
            Street:
          </label>
          <input
            type="text"
            id="street"
            className="multiple__input"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          <label className="multiple__text" htmlFor="postal">
           Postal Code:
          </label>
          <input
            type="text"
            id="postal"
            className="multiple__input2"
            name="postal"
            value={formData.postal}
            onChange={handleChange}
          />
         
         <label className="multiple__text" htmlFor="city">
           City:
          </label>
          <input
            type="text"
            id="city"
            className="multiple__input2"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <div>
            <label>Country: </label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="Canada">Canada</option>
              <option value="Palestine">Palestine</option>
              <option value="Jordan">Jordan</option>
              <option value="Egypt">Egypt</option>
            </select>        </div>

          <button className="submit" onClick={handleButtonClick} >Submit</button>
                        {isVisible && (
                            <div>
                                <h2>Displayed Data</h2>
                                <p>Street: {formData.street}</p>
                                <p>Postal Code: {formData.postal}</p>
                                <p>City: {formData.city}</p>
                                <p>Country: {formData.country}</p>
                            </div>
          )}
        </form>
        </div>
        </center>


     

  );

}
