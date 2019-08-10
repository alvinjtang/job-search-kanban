import React from 'react';
import '../stylesheets/card.css';

export default ({card}) => {
    let {companyName, position, url, notes} = card;
    return (
        <div className='card'>
            {companyName}<br />
            {position}<br />
            {url}<br />
            {notes}<br />
        </div>
    )
}