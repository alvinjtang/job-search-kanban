import React from 'react';
import Card from './Card';
import '../stylesheets/column.css'

export default () => {
    return (
        <div className="col">
            <div className='col-title'>
                Title
            </div>
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}