import React, {useState} from 'react';
import Card from './Card';
import CardBtn from './CardBtn';
import '../stylesheets/list.css'

let sampleCard = {
    companyName: 'Google',
    position: 'engineer,',
    url: 'alvintang.dev',
    notes: 'algos'
}

let dummyCards = new Array(3).fill(sampleCard).map((card, i) => {return {...card, id: i+1}});

export default ({list}) => {
    const {name} = list;

    const [cards, setCards] = useState([])

    return (
        <div className="list">
            <div className='list-title'>
                {name}
            </div>
            <CardBtn cards={cards} setCards={setCards} />
            <div>
                {cards.map((card, i) => <Card key={i} card={card} />)}
            </div>
        </div>
    )
}