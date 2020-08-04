import development from "./development";
import production from "./production";

let apiUrl = development;
if(process.env.NODE_ENV === "production"){
    apiUrl = production;
}



export default development;