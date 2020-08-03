import React,{useContext} from "react";
import { Formik, Form } from "formik";
import config from '../../../../../config/index';
import { useParams } from 'react-router-dom';
import { UserContext } from "../../../../../user-context";
import Avatar from "../../../../Avatar/Avatar";
import CommentCreateSchema from "../CommentCreate/CommentCreateSchema";





function CommentCreate(postId,onAdd) {
    
    const {user} = useContext(UserContext);

    async function submit(values) {
        const newComment = await (await fetch(`${config.apiUrl}/posts/${postId}/comment`,{
            method :"PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            credentials : "include",
            body:JSON.stringify(values)
        })).json();
        onAdd(newComment);
    }

        return(
            <div className="CommentCreate">
                <Formik
                initialValues={{content : ""}}
                validationSchema={CommentCreateSchema}
                onSubmit={submit}>
                {({isSubmmiting })=>(
                    <Form>
                        <div className="form-group d-flex">
                            <div className ="mr-2">
                                <Avatar size="sm" image={user.avatar}/>

                            </div>

                        </div>
                    </Form>
                )}
                    
                </Formik>
                
            </div>
        )
    }



export default CommentCreate;
