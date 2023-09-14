import { useEffect, useState } from "react"
import User from "./User";
import './Users.css'


export default function Users(){
const [users,setUsers] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json()).then(data=>setUsers(data))

},[])

    return (
        <div className="box">
           { users.map(user=><User friend={user}></User>)}
        </div>
    )
}
