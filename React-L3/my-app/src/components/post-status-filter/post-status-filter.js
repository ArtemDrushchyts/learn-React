import React from 'react';
// import { Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group" >
            <button className='btn btn-info'>Все</button>
            <button className='btn btn-outline-secondary'>Понравились</button>
        </div>
    )
}

export default PostStatusFilter;