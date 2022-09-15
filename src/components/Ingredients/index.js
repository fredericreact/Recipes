import React from 'react';
import './styles.css'
const Ingredients = (props) => {
const {list} =props;
return (
<div className='ingredients'>

{
    list.map((ingredientObject) => (
    <div key={ingredientObject.id} className='ingredients'>
    
    <span className='ingredient-quantity'>
    {ingredientObject.quantity} {ingredientObject.unit}
    </span>
    
    <span className='ingredient-name'>
    {ingredientObject.name}
    </span>
    
    </div>   
    ))
}


</div>

)
}
;

export default Ingredients;