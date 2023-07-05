import React, { useContext } from "react";
import "./friendrequests.scss";
import { AuthContext } from "../../context/authContext";
import Request from '../../components/request/Request';

const FriendRequests = () => {

    const { currentUser } = useContext(AuthContext);


    const requests = [
        {
            name: 'Shweta Varma',
            profilePic: '',
            id: 1,
        },
        {
            name: 'Harsh Pandey',
            profilePic: '',
            id: 2,
        },
        {
            name: 'Renuka',
            profilePic: '',
            id: 3,
        },
        {
            name: 'Ankit Kumar',
            profilePic: '',
            id: 4,
        },
        {
            name: 'Anirudh Garg',
            profilePic: '',
            id: 5,
        },
        {
            name: 'Vaidehi Sharma',
            profilePic: '',
            id: 6,
        },
        {
            name: 'Suryakant',
            profilePic: '',
            id: 7,
        },
        {
            name: 'Prashant Sharma',
            profilePic: '',
            id: 8,
        },
    ]

    // Temporary
    const pic = "https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";


    return (
        <div className="friend-requests">
            <div className="request-type">
                <div className="request-header">
                    <h3>Friend requests</h3>
                    <span>See all</span>
                </div>
                <div className="requests">
                {requests.map((request) => (
                    <Request name={request.name} profilePic={pic} received />
                ))}
                </div>
            </div>

            <div className="request-type">
                <div className="request-header">
                    <h3>People you may know</h3>
                    <span>See all</span>
                </div>
                <div className="requests">
                {requests.map((request) => (
                    <Request name={request.name} profilePic={pic} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default FriendRequests;