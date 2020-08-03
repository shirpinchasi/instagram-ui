import React,{useEffect ,useState} from "react";
import config from "../config/index";
import SearchResult from "./SearchResult"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss"


function Search(){
    
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        if(!query) {
            return;
        }
        getUsers();
    }, [query]);


    async function getUsers(){
        try{
            const res = await fetch(`${config.apiUrl}/users?username=${query}`);
            const users = await res.json();
            setUsers(users)
        }catch(err){
            console.log(err);
            
        }
    }


    function hasNoResults(){
        return query && users.length === 0;
    }

        return(
            <div id="Search">
                <div id="search" className="col-12 col-lg-6 mt-3">
                    <input id="form-control"
                        placeholder="Search profile here.."
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}/>
                        
                </div>
                <div className = "d-flex flex-wrap">
                    { hasNoResults()
                    ?<div className="Search__no-results"><FontAwesomeIcon icon={faFrown } className="far fa-frown fa-lg"/> No results found</div>
                    :users.map(user =><SearchResult user={user} key={user._id} />)
                    }
                </div>
            </div>
        )
       
}
export default Search;