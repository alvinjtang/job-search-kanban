import React, {useState} from 'react';
import '../stylesheets/column.css'

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
        setLists([...lists, list])
    }

    return (
        <div className="col">
            <div className='col-title' onClick={() => setShowForm(!showForm)}>
                +
            </div>
            {showForm ? 
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={list.name}
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            :   null
            }
        </div>
    )
}