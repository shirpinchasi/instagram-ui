import React, { useState, useEffect } from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Register from './Register/Register';
import Login from "./Login/Login"
import PostCreate from './PostCreate/PostCreate';
import {UserService} from "./services/user-service";
import {UserContext} from "./user-context";
import Feed from "./Feed/Feed";
import Profile from './Profile/Profile';
import Search from "./Search/Search";





function App() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(()=> {
    async function getUser(){
      const user = await UserService.get();
      setUser(user);
      setLoading(false);
      if (!user) {
        history.push("/login");
      }
    }
    getUser();
  },[history])

  return(
    <UserContext.Provider value = {{user,setUser}}>
      {isLoading && <div className="App__Loading">Loading...</div>}
        <div className=".container .flex-row">
        <div className="d-flex flex-column flex-sm-column-reverse vh-100 ">
        <div className=".col- .col-md-12  flex-grow-1">
            <Switch>
                <Route path="/login">
                     <Login/>
                </Route>
                <Route path="/search">
                     <Search/>
                </Route>
                <Route path ="/post/create">
                      <PostCreate/>
                </Route>
                <Route path ="/profile/:id">
                      <Profile/>
                </Route>
                <Route path ="/register">
                      <Register/>
                </Route>
                <Route path ="/">
                       <Feed />
                </Route>
            </Switch>
        </div>
            {user && <Menu/>}
        </div>
        </div>
    </UserContext.Provider>
  )
}

export default App;
