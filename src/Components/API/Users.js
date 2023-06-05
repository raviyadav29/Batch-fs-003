import axios from "axios";

export const getUsers = (setUsers , setState) => {
    axios.get("https://randomuser.me/api/?results=20").then((res)=>{
        console.log(res.data.results);
        setUsers(res.data.results);
        setState(res.data.results);
    })
    //fetch("https://randomuser.me/api/?results=20")
       // .then((res) => res.json())
       // .then((data) => {
       //     console.log(data.results);
       //     setUsers(data.results);
       //     setState(data.results);
       // })
        //.catch(() => { });
};