import React, {useState} from 'react';
import List from './List';
import ListBtn from './ListBtn';
import '../stylesheets/board.css'

let sampleCard = {
    companyName: 'Alvin',
    position: 'engineer',
    url: 'alvintang.dev',
    notes: 'blah'
};

let dummyCards = new Array(3).fill(sampleCard);

let sampleList = {
    name: 'Title',
    cards: dummyCards
}

let dummyLists = new Array(4).fill(sampleList);

export default () => {

    const [lists, setLists] = useState(dummyLists)

    return (
        <div id="board">
            {lists.map((list, i) => <List key={i} list={list} />)}
            <ListBtn lists={lists} setLists={setLists} />
        </div>
    )
}