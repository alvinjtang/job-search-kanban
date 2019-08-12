import React, {useState} from 'react';
import List from './List';
import ListBtn from './ListBtn';
import '../stylesheets/board.css'

let sampleList = {
    name: 'Title',
    cards: []
}

let dummyLists = new Array(4).fill(sampleList).map((list, i) => {return {...list, id: i+1}});

export default () => {

    const [lists, setLists] = useState([])

    return (
        <div id="board">
            {lists.map((list, i) => <List key={i} list={list} lists={lists} setLists={setLists}/>)}
            <ListBtn lists={lists} setLists={setLists} />
        </div>
    )
}