import React from "react";
import Avatar from "../common/Avatar/Avatar";
import "./SearchResult.scss";
import { Link } from 'react-router-dom';




function SearchResult (props){
    return(
        <div>
        <div className="col-lg-4" key={props.user._id}>
            <div className="SearchResult d-flex p-4">
            <Link to ={`/profile/${props.user._id}`}>
                <div id="SearchResult__Avatar" className="shadow-lg p-3 mb-2 bg-white rounded">
                    <Avatar size="sm" image={props.user.avatar}/>
                    <hr/>
                    <div>{props.user.username}</div>
                    <p className="SearchResult__bio">{props.user.bio}</p>
                </div>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default SearchResult;