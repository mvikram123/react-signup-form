import React,{useState} from "react";




const Form=()=>{
    const[user,setUser]=useState(
        {
            name:"" , 
            email:"" ,
            password:"",
        }
    );

    let{name,email,password}=user

 function signup(e){
    e.preventDefault();
   // console.log(user)
  if(!name||!email|| !password){
    alert("all fields are required")
   // setUser();
    }
    console.log(user);
   
}


 

    return(
        <div>
            <div>
            <form onSubmit={signup}>
                <label name="userName">Name</label>
                <input type="text" onChange={e=>setUser({...user,name:e.target.value})}></input><br />
                   <label name="email">Email</label>
                <input type="text" onChange={e=>setUser({...user,email:e.target.value})}></input><br />
                   <label name="password">Password </label>
                <input type="password" onChange={e=>setUser({...user,password:e.target.value})}></input><br />
                <button type="submit">Submit</button>
            </form>
        </div>
       
        <p>{name}</p> 
        <p>{email}</p> 
        <p>{password}</p> 
        </div>
    )
}


export default Form;