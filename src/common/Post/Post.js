import React, { useContext } from 'react';
import config from '../../config/index';
import './Post.scss';
import PostLike from './PostLike/PostLike';
import Avatar from "../../common/Avatar/Avatar"
import { Link } from 'react-router-dom';

function Post (props){

    const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return months[date.getMonth()] + ' ' + date.getDate();
	};

	const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
    };
    

    return (
        <div className="col-12 col-md-4">
			<article className="Post ">
				<header>
					<div className="Post__user ">
					<Link to ={`/profile/${props.data.user._id}`}>
                    	<Avatar size="sm" image={props.data.user.avatar}/>
					</Link>
					</div>
					<div className="Post__date">
						{formatDate(props.data.createdAt)}
					</div>
				</header>
				<div className="Post__image">
					<Link to ={`/post/${props.data._id}`}>
					<img src={buildImageUrl(props.data.image)} title={props.data.description} alt=""/>
					</Link>
				</div>
				<div className="Post__actions">
					<PostLike postId={props.data._id} likes={props.data.likes} />
				</div>
				<div className="Post__content">
					<h1 className="Post__description">{props.data.description}</h1>
				</div>
			</article>
		</div>
    )
}


export default Post;

