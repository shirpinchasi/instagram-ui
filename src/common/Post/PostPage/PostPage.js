import React, { useState ,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import config from '../../../config/index';
import Avatar from "../../../common/Avatar/Avatar";
import './PostPage.scss';
import PostLike from '../PostLike/PostLike';
import PostComments from "./PostComments/PostComments";








function PostPage (){
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(()=> {
        if(!id){
            return;
        }
        getPost(id);
    },[id]);

    async function getPost(id){
            const fetchedPost = await (await fetch(`${config.apiUrl}/posts/${id}`,{
                credentials : "include"

            })).json();
            setPost(fetchedPost);
            setLoading(false);
        }

    const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return months[date.getMonth()] + ' ' + date.getDate();
	};

	const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
    };
   
    

    return (
        <div id="PostPage" className="shadow-lg p-3 mb-2 bg-white rounded">
            {!isLoading && <div className="row">
                <div className="col- col-md-4 text-center">
			<div className="PostPage ">
                <header>
                <div className="Post__user ">
                            <Link to ={`/profile/${post.user._id}`} className='d-flex'>
                                <Avatar size="sm" image={post.user.avatar} id="avatarPostPage"/>
                                <h6 className="PostPage__username">{post.user.username}</h6>
                            </Link>
                        </div>
                </header>
                <div className="Post__image">
					<img src={buildImageUrl(post.image)} alt="post image"/>
				</div>
					<div className="Post__date">
						{formatDate(post.createdAt)}
					</div>
				<div className="Post__actions">
                <PostLike postId={post._id} likes={post.likes} />
				</div>
				<div className="Post__content">
					<h3 className="Post__description">{post.description}</h3>
				</div>
                <div className="col-md-4">
                    
                    <hr />
                    <PostComments postId={post._id}/>
                </div>
			</div>
            </div>
		</div>}
        </div>
        );
    }


export default PostPage;

