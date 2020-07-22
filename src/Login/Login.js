import React, { useContext } from 'react';
import { Formik , Form, Field} from 'formik';
import { LoginSchema } from '../Login/LoginSchema';
import config from "../config/index"
import intro from "../images/logo-instagram.png";
import "./Login.scss";
import {UserContext} from "../user-context";
import { useHistory , Link} from 'react-router-dom';




function Login() {

    const {setUser} = useContext(UserContext);
    const history = useHistory();
    const submit = async (values) =>{
        const res = await fetch(config.apiUrl + "/users/login", {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            credentials : "include",
            body : JSON.stringify(values)

    }); 
    if(res.status === 200){
        const loggedUser = await res.json();
        setUser(loggedUser);
        history.push("/")
    } else if (res.status === 409){
        console.log("no");
        
    } else{
        console.log("unknown error");
        
    }
    return res;
};




    return(
        <div className=".container d-flex justify-content-center">
                <div id="Login">
                    <img src={intro} id="image2"className="image2" alt="Instagram" width="150px" height="150px" />
                <div id="ajust1" className="shadow-lg p-3 mb-5 bg-white rounded">


            <Formik initialValues ={{username : "", password : "",}}
                validationSchema ={LoginSchema}
                    onSubmit={submit}>
                
                {({ errors, touched})=>(
                    <Form className ="Login_form mt-2 px-0">
                        <h2 className="Login_title">Login</h2>
                    <div class="form-group">
                        </div>
                        <label htmlFor="username">Username</label>
                        <Field  class="form-control" name = "username" id = "username"/>
                        {errors.username && touched.username && <small className="text-danger mt-2">{errors.username}</small>}

                    <div class="form-group">
                        <label htmlFor="Password">Password</label>
                        <Field type="password" class="form-control" name = "password" id="password"/>
                        {errors.password && touched.password && <small className="text-danger mt-2">{errors.password}</small>}
                    </div>
                    <button type="submit" class="btn btn-primary" id="button">Login</button>
                    <div className="text-center">
								Don't have an account? <Link to="/register" className="Login__register-link">Register</Link>
							</div>
                </Form>
                
                )}
                </Formik>
            </div>
        </div>
    </div>
    )
}


export default Login;