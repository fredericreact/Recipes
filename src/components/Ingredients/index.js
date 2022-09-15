import React from 'react';
import './styles.css';

import Proptypes from 'prop-types';

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


Ingredients.propTypes = {
    list: Proptypes.arrayOf(
        Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        quantity:Proptypes.number.isRequired,
        unit: Proptypes.string.isRequired,
        }),
    ).isRequired,
    
    };

export default Ingredients;

