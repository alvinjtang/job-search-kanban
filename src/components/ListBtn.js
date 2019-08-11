import React, {useState} from 'react';
import '../stylesheets/list.css'

export default ({lists, setLists}) => {

    const [showForm, setShowForm] = useState(false);
    const [list, setList] = useState({
        name: '',
        cards: [],
    })

    const handleChange = (e) => {
        e.persist()
        setList({...list, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLists([...lists, list]);
        setList({...list, name: ''});
        setShowForm(false)
    }

    return (
        <div>
            <button id='list-add-btn' onClick={() => setShowForm(!showForm)}>
                +
            </button>
            {showForm ? 
                <div className="list-title">
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <br />
                        <input 
                            type='text'
                            name='name'
                            value={list.name}
                            onChange={handleChange}
                        />
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            :   null
            }
        </div>
    )
}