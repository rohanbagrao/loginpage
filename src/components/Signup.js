import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const homepage = useNavigate();

    const [inpval,setInpval] = useState({
        firstName :"",
        lastName : "",
        email : "",
        password : "",
        repeatPassword : ""
    })

    const [data] = useState([]);
   
    
    const getData = (e)=>{
console.log(e.target.value)
    const {value, name} = e.target;
 

    setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }

    })
    }
    const addData = (e)=>{
        e.preventDefault();

        const {firstName, lastName, email, password, repeatPassword} = inpval;
        if(firstName === ""){
            alert("First name is required")
        }else if(lastName === ""){
            alert("Last name is required")
        }else if (email === ""){
            alert("Email is required")
        }else if (!email.includes("@")){
            alert("Enter valid email id")
        }else if (password < 8){
            alert("Password should be greater than 8")
       
        }else {
            localStorage.setItem("userdata", JSON.stringify([...data, inpval])) ;
            homepage("./home")


        }
    }
  return (
    <>
    <h3 className='container mt-3'>Create Account</h3>
    <p className='mt-1'>Already have an account? <span><NavLink to = "/login">SignIn</NavLink></span></p>
    <div className='container mt-3 col-lg-3'>
    
         <Form>
      <Form.Group className="mb-0.5" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" name = 'firstName' onChange={getData} placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-0.5" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" name = 'lastName' onChange={getData} placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-0.5" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" name = 'email' onChange={getData} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-0.5" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" name = 'password' onChange={getData} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password"  name = 'repeatPassword' onChange={getData} placeholder="Repeat Password" />
      </Form.Group>
      
      <Button variant="primary" onClick={addData} type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Signup