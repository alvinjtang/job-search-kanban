import React, {useState} from 'react';
import ListForm from './ListForm'
import '../stylesheets/list.css'

export default ({lists, setLists}) => {

    const [showBtn, setShowBtn] = useState(false);
    const [list, setList] = useState({
        name: '',
        cards: [],
    })

    const toggleBtn = () => {
        setShowBtn(!showBtn);
    }

    return (
        <div>
            <button id='list-add-btn' className={showBtn ? 'red' : 'green'} onClick={toggleBtn}>
                {showBtn ? '-' : '+'}
            </button>
            
            {showBtn ? 
                <ListForm props={{list, lists, setList, setLists, setShowBtn}} />
                : 
                null
            }
        </div>
    )
}