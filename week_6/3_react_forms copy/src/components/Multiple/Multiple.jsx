import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
const [formData, setFormData] = useState({
name: "",
email: "",
color: false,
});

const handleChange = (event) => {
console.log('event event ', event)
console.log('event event formData ', formData)

const { name, value, type } = event.target;
let valueToStore = value
console.log('event name ', name)
console.log('event value ', value)
console.log('event type ', type)

if(type === 'checkbox') {
valueToStore = event.target.checked
}
setFormData((prevFormData) => ({ ...prevFormData, [name]: valueToStore }));
};

const handleSubmit = (event) => {
event.preventDefault();
alert(
`Name: ${formData.name}, Email: ${formData.email}, isChecked: ${formData.color}`
);
};

return (
<form onSubmit={handleSubmit} className="multiple">
<label className="multiple__text" htmlFor="name">
Name:
</label>
<input
type="text"
id="name"
className="multiple__input"
name="name"
value={formData.name}
onChange={handleChange}
/>

<label className="multiple__text" htmlFor="email">
Email:
</label>
<input
type="email"
id="email"
className="multiple__input"
name="email"
value={formData.email}
onChange={handleChange}
/>

<label htmlFor="color" className="checkbox__text">
<input
id="checkbox__input"
className="checkbox__input"
type="checkbox"
name="color"
checked={formData.color}
onChange={handleChange}
/>
Blue
</label>

<button className="multiple__button" type="submit">
Submit
</button>
</form>
);
}
