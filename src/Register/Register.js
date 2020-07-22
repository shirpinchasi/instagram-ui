import React, { useState } from 'react';
import { Formik , Form, Field} from 'formik';
import { RegisterSchema } from './register.schema';
import {useHistory} from "react-router-dom";
import config from "../config/index";
import "./Register.scss";




function Register() {
    const history = useHistory();
    const [showSuccess, setSuccess] = useState(false);

    const submit = async (values) =>{

        const res = await fetch(config.apiUrl + "/users", {
            method : "PUT",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(values)

    }); 
    if(res.status === 201){
        setSuccess(true);
        setTimeout(()=>history.push("/login"),2000);
        
    }else{
        console.log("unknown error");
        
    }
    return res;
};

  return(
    <div className="Register row d-flex justify-content-center"> 
            <div className="text-center"> 
                <h2 className="Register_title">Register now!</h2>
                <h4 className="Register_subtitle">It's quick and easy!</h4>
            </div>
    
        <div id="ajust" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <Formik initialValues ={{username : "", email : "", password : "",agreeTerms : false}}
            validationSchema ={RegisterSchema}
            validateOnChange={true}
            onSubmit={submit}>
            {({ errors, touched, isSubmitting})=>(
                    <Form className ="Register_form mt-1 px-0" noValidate>
                        <div class="form-group">
                                <label htmlFor="username">Username</label>
                                <Field type="username" class="form-control" id ="username" name = "username" placeholder="2-16 characters"/>
                                {errors.username && touched.username && <small className="text-danger mt-2">{errors.username}</small>}
                        </div>
                        <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type="email" class="form-control" name = "email" id="email" placeholder="Email address..."/>
                                {errors.email && touched.email && <small className="text-danger mt-2">{errors.email}</small>}
                        </div>
                        <div class="form-group">
                            <label htmlFor="Password">Password</label>
                            <Field type="password" class="form-control" name = "password" id="password" placeholder="6-16 characters"/>
                            {errors.password && touched.password && <small className="text-danger mt-2">{errors.password}</small>}
                        </div>
                        <div class="form-group form-check">
                            <div>
                                <Field type="checkbox" class="form-check-input" name = "agreeTerms" id="agreeToTerms"/>
                                <label class="form-check-label" htmlFor="agreeToTerms" >Agree to terms</label>
                            </div>
                            {errors.agreeTerms && touched.agreeTerms && <small className="text-danger mt-2">{errors.agreeTerms}</small>}
                        </div>
                        <div className="form-group">
                            {showSuccess
                                ?<div className="alert alert-success Register_success">Wait for transfer...</div>
                                : <button type="submit" className="mt-3 Register_submit-btn" disabled={isSubmitting}>Submit</button>}
                        </div>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
     )
}

export default Register;