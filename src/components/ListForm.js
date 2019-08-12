import React from 'react';
import '../stylesheets/list.css'

export default ({props}) => {

    const {list, lists, setList, setLists, setShowBtn} = props;

    const handleChange = (e) => {
        e.persist()
        setList({...list, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLists([...lists, list]);
        setList({...list, name: ''});
        setShowBtn(false)
    }

    return (
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
    )
}