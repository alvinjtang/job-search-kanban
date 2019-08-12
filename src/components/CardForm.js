import React from 'react';
import '../stylesheets/card.css'

const blank = {
    companyName: '',
    position: '',
    url: '',
    notes: ''
}

export default ({props}) => {

    const {card, cards, setCard, setCards, setShowBtn} = props;
    
    const handleChange = (e) => {
        e.persist()
        setCard({...card, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCards([card, ...cards]);
        setCard(blank);
        setShowBtn(false)
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                <br />
                <input 
                    type='text'
                    name='companyName'
                    value={card.companyName}
                    onChange={handleChange}
                />
                <br />
                <label>Position</label>
                <br />
                <input 
                    type='text'
                    name='position'
                    value={card.position}
                    onChange={handleChange}
                />
                <br />
                <label>URL</label>
                <br />
                <input 
                    type='text'
                    name='url'
                    value={card.url}
                    onChange={handleChange}
                />
                <br />
                <label>Notes</label>
                <br />
                <input 
                    type='text'
                    name='notes'
                    value={card.notes}
                    onChange={handleChange}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}