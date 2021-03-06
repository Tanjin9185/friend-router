import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email,id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borrderRadius: '20px',
    }
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/about/${friendId}`);
    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <p>Email : {email}</p>
            {/* <p>Id: <Link to={`/about/${id}`}>Show details {id}</Link></p> */}
            <button  onClick={() => handleClick(id)}>
      Detail
    </button>
        </div>
    );
};

export default Friend;