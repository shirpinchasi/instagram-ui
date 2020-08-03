import React from "react";
import "./PostComment.scss";
import Avatar from "../../../../Avatar/Avatar";
import { Link } from "react-router-dom";

function PostComment({ data }){
    return(
        <div className="PostComment">
            <Link to = {`/profile/${data.user._id}`} >
                <Avatar size="sm" image={data.user.avatar}/>
                <strong>{data.user.username}</strong>
            </Link>
           
            <p className="PostComment_content">{data.content}</p>
        </div>
    );
}

export default PostComment;