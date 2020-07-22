import React from "react";
import PropTypes from "prop-types"
import avatarDeafult from "../../images/emptyAvatar.png";
import "./Avatar.scss";

function Avatar(props){
    const size = props.size || "sm";
    const image = props.image || avatarDeafult;
    const className = "Avatar " + size;

    return(
            <img src={image} className={"Avatar " + className} alt=""/>
    )
}
Avatar.propTypes={
    size : PropTypes.oneOf(["sm" , "md" , "lg"])
}
export default Avatar;