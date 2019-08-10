import React from 'react';
import Column from './Column';
import '../stylesheets/board.css'

export default () => {
    return (
        <div id="board">
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    )
}