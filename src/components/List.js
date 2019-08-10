import React from 'react';
import Card from './Card';
import '../stylesheets/column.css'

export default ({list}) => {
    const {name, cards} = list;
    return (
        <div className="col">
            <div className='col-title'>
                {name}
            </div>
            <div>
                {cards.map((card, i) => <Card key={i} card={card} />)}
            </div>
        </div>
    )
}