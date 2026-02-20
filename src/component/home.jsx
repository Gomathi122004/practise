import axios from "axios";
import { useEffect } from "react";

export const Home = ()=>{
    async function getpost(){
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            console.log (data);
            }catch(err){
                console.log(err);
            }
    }
     async function getpostusingAxios(){
        try{
            await axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                console.log(res.data)
    })
}catch(err){
                console.log("error fetching API",err);
            }
        }
    // useEffect(() => {
    //     getpost();
    // }, [])
useEffect(() => {
        getpostusingAxios();
    }, [])

     return(
        <div>
            this is home page 
        </div>
    )
}