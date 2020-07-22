import React, { useContext } from "react";
import "./MenuAvatar.scss";
import { UserContext } from "../../user-context";
import Avatar from "../../common/Avatar/Avatar";
import { Link } from "react-router-dom";

function MenuAvatar(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <Link to ={`/profile/${user._id}`}>
                <Avatar size="sm" image={user.avatar}/>
            </Link>
        </div>
    );
}

export default MenuAvatar;