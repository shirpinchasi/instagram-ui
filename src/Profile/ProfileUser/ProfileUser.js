import React, { useState, useEffect } from "react";
import config from "../../config/index";
import Avatar from "../../common/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import "./ProfileUser.scss";
import { Link } from "react-router-dom";

function ProfileUser(props) {
    
    const [profile, setProfile] = useState({});


    useEffect(()=> {
        getUser(props.userId);
    },[props.userId]);

    async function getUser(id){
        try{
            const res = await fetch(`${config.apiUrl}/users/${id}`,{
                credentials: "include"
            });
            const fetchedUser = await res.json();
            setProfile(fetchedUser);
        }catch(err) {
            console.log(err);
        }
    }

    return(
        <header className="d-flex flex-wrap flex-column  mt-2  col-  text-center">
            <div id="avatarGradient">
                        <div id="avatarProfile">
                            <Avatar size="lg" image={profile.avatar}/>
                        </div>
                    </div>
                <div id="profile " className="text-center text text-lg-center">
                    <h2 className="h3 mt-2">{profile.username}</h2>
                    <div className="mt-3">
                        <strong className="mr-2 mr-lg-5">{props.postsNum} posts</strong>
                        <strong className="mr-2 mr-lg-5">0 followers</strong>
                        <strong >0 following</strong>
                    </div>
                    <p className="mt-3 text-muted">
                        {profile.bio}
                    </p>
                </div>
                    <div className= "editAvatar ">
                        <Link to="/setting/" className="settingIcon">
                            <FontAwesomeIcon icon={faUserEdit} className="far fa-user-edit lg float-right"/>
                        </Link>
                    </div>
        </header>
    );
}

export default ProfileUser;