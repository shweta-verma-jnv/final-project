import React, { useContext } from "react";
import "./request.scss";
import { AuthContext } from "../../context/authContext";

const Request = (props) => {

    const { currentUser } = useContext(AuthContext);

    const { received, name, profilePic } = props;

    return (
        <div className="request">
            <div className="view">
                <img src={ profilePic } alt="" />
                <span>{ name }</span>
            </div>
            <div className="buttons">
                <button className="button-primary">{received? "Confirm": "Add friend"}</button>
                <button className="button-secondary">{received? "Delete": "Remove"}</button>
            </div>
        </div>
    )
}

export default Request;