import {useState}  from 'react';
export default function RegisterPage(){
const[username,setUsername]=useState("");
const[password,setpassword]=useState("");
async function register(ev){
ev.preventDefault();
 await fetch('http://localhost:4000/register',{
    method:'POST',
    body:JSON.stringify({username,password}),
    hesders:{'Content-Type':'application/json'},
})
}
    return(
    <div>
    <form className="register" onChange={register}>
        <h1>Register</h1>
        <input type="text" 
        placeholder="UserName" 
        value={username} 
        onChange={ev=>setUsername(ev.target)}/>
        <input type="password"
         placeholder="password"
         value={password}
         onChange={ev=>setUsername(ev.target)}/>
        <button >Register</button>
    </form>
 </div>

    )
}