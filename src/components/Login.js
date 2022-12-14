import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const homepage = useNavigate();

    const [inpval, setInpval] = useState(
        {
            email: "",
            password: ""
        }
    )

    const getData = (e) => {

        const { value, name } = e.target;


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }

        }
        )

    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userdata")
        console.log(getuserArr)

        const { email, password } = inpval;

        if (email === "") {
            alert("Email is required")
        } else if (!email.includes("@")) {
            alert("Enter valid email id")
        } else if (password < 8) {
            alert("Password should be greater than 8")

        } else {
         
            if (getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });
                if(userlogin.length === 0 ){
                    alert("Invalid details")
                }else{
                    console.log("userloginsuccessfully")
                    homepage("./home")
                }
            }
        }
    }

        return (
            <>
                <h3 className='container mt-3'>Sign In</h3>

                <div className='container mt-3 col-lg-3'>
                    <Form>
                        <Form.Group className="mb-0.5" controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" onChange={getData} name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" onChange={getData} name='password' placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={addData} type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        )
    
}
export default Login