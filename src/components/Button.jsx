import React from 'react'; 

const Button = (props) => { 
  return ( 
    <button className="add-item-btn btn" onClick={props.onClick}>{props.text}</button> 
  ); 
} 

export default Button;