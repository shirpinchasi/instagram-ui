import React  from 'react';
import {Field, Form, Formik} from "formik";
import {PostCreateSchema} from "../PostCreate/PostCreate-Schema";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from "../config/index";
import {useHistory} from "react-router-dom";



function PostCreate() {
    const history = useHistory();


    const buildFormData = (values)=>{
        const data = new FormData();
        for(const key in values){
            data.append(key,values[key])
        }
        return data;
    };

    const submit = async (values) =>{
        const data = buildFormData(values)
         await fetch(`${config.apiUrl}/posts`, {
            method : "PUT",
            credentials : "include",
            body : data
            
        });
        history.push("/")
    };
    

    return (
        <div className="d-flex justify-content-center">
            <h2 className="h2">Create post</h2>
            <Formik
                initialValues={{image: '', description: ''}}
                validationSchema={PostCreateSchema}
                onSubmit={submit}>
                    {({isSubmitting, setFieldValue})=>(
                        <Form className="PostCreate_form mt-5 col-lg-8 px-0" noValidate>
                            <div className="shadow-lg p-3 mb-5 bg-white rounded" id="shadow-lg">
                            <div className="form-group-img">
                            <div id="selectImg">
                                <label htmlFor="image" > Select Image:</label>
                                <input type="file" id="image" name="image" onChange={(e)=>{
                                    setFieldValue("image" , e.currentTarget.files[0]);
                            }}/>
                            </div>
                            </div>
                            <div id="desc">
                            <div className="form-group" id="description">
                                <label htmlFor="description" id="labelDesc">description:</label>
                                <Field as={"textarea"} name="description" placeholder="" />
                            </div>
                            </div>
                            <div className="form-group text-center mt-4">
                                <button type="submit" className="mt-3 Register_submit-btn" disabled={isSubmitting}>Submit</button>
                                </div>
                                </div>
                            </Form> 
                              
                        )}
            </Formik>
        </div>
    );
}


export default PostCreate;