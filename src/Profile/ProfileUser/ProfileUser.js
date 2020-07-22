import React, { useState, useEffect } from "react";
import config from "../../config/index";
import Avatar from "../../common/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import "./ProfileUser.scss";

function ProfileUser(props) {
    
    const [profile, setProfile] = useState({});


    useEffect(()=> {
        getUser(props.userId);
    },[props.userId]);

    async function getUser(id){
        try{
            const res = await fetch(`${config.apiUrl}/users/${props.userId}`,{
                credentials: "include"
            });
            const fetchedUser = await res.json();
            setProfile(fetchedUser);
        }catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
            <header className="d-flex flex-column flex-lg-row pt-2">
                <div className="col-12 col-lg-4 text-center">
                    <div id="avatarGradient">
                    <div id="avatarProfile">
                        <Avatar size="lg" image={profile.avatar}/>
                    </div>
                    </div>
                </div>
                <div id="profile" className="col-12 col-lg-6 text-center text text-lg-left">
                    <h2 className="h3 mt2">{profile.username}</h2>
                    <div className="mt-3">
                        <strong className="mr-3 mr-lg-5">{props.postsNum} posts</strong>
                        <strong className="mr-3 mr-lg-5">0 followers</strong>
                        <strong >0 following</strong>
                    </div>
                    <p className="mt-3 text-muted">
                        Hi, this is my profile
                    </p>
                </div>
            </header>
                    <div className= "editAvatar ">
                        <FontAwesomeIcon icon={faUserEdit} className="far fa-user-edit lg float-right "/>
                    </div>
        </div>
    )
}

export default ProfileUser;