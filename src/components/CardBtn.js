import React, {useState} from 'react';
import CardForm from './CardForm'
import '../stylesheets/card.css'

export default ({cards, setCards}) => {

    const [showBtn, setShowBtn] = useState(false);
    const [card, setCard] = useState({
        companyName: '',
        position: '',
        url: '',
        notes: ''
    })

    const toggleBtn = () => {
        setShowBtn(!showBtn);
    }

    return (
        <div>
            <button id='card-add-btn' onClick={toggleBtn}>
                {showBtn ? '-' : '+'}
            </button>
            
            {showBtn ? 
                <CardForm props={{card, cards, setCard, setCards, setShowBtn}} />
                : 
                null
            }
        </div>
    )
}