import React from "react";
import "../styles/UserList.css"


function UserList(props) {
    return (
        <ul className="list-group">

            <li className="list-group-item">
                <h3>{props.name}</h3>
                <img src={props.picture}/>
                <h3>City: {props.city}</h3>
                <h3>State: {props.state}</h3>
                <h3>Email: {props.email}</h3>
            </li>
        </ul>
    );
}

export default UserList;