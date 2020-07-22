import React, {useEffect, useState} from 'react';
import './Feed.scss'
import Post from "../common/Post/Post";
import config from '../config/index';



function Feed() {

    const[posts, setPosts] = useState([]);

        useEffect( ()=>{ 
            async function getPosts() {
                    try {
                        const res = await fetch(config.apiUrl + '/posts?sort=-1', {
                            credentials: 'include'
                        });
                        const fetchedPosts = await res.json();
                        setPosts(fetchedPosts);
                    } catch (err){
                        console.log(posts);
                        
                    }
                }
            getPosts();
        },[])


        return (
            <div className="Feed">
                    {posts.map( post=> <Post key={post._id} data={post} />
                    )}

            </div>
        );
    }


 export default Feed;