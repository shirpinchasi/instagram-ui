import React, { useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import CommentCreate from "./CommentCreate/CommentCreate";



function PostComment({postId}) {

    const[comments , setComments] = useState([]);

    useEffect(()=>{
        if(!postId){
            return;
        }
        getComments(postId);
    }, [postId]);

    async function getComments(postId) {
        const fetchedComments = await (await fetch(`${config.apiUrl}/posts/${postId}/comment`,{
            credentials : "include"
        })).json()
        setComments(fetchedComments);
    }
    function onAddedComment(comment) {
        setComments([...comments,comment]);
    }
    return(
        <div>
            {comments.map(comment =>{
                return (<PostComment key={comment._id} data={comment} />)
            })}
            <hr/>
            < CommentCreate postId={postId} onAdd={onAddedComment}/>
        </div>
    )


}

export default PostComment;