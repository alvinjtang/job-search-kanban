import React from 'react';
import Card from './Card';
import '../stylesheets/list.css'

export default ({list}) => {
    const {name, cards} = list;
    return (
        <div className="list">
            <div className='list-title'>
                {name}
            </div>
            <div>
                {cards.map((card, i) => <Card key={i} card={card} />)}
            </div>
        </div>
    )
}