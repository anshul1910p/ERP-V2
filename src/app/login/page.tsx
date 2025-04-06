"use client"
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    const handleLogin=async () => {
      console.log("anshul");
        setLoading(true);
        setError("");

        try 
        {
    const response=  await fetch("http://15.206.60.189/erp/auth/token/login/",
            {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email,password,
                  }),
            });

            const data=await response.json();

            if(!response.ok)
            {
            throw new Error(data.message || "Login Failed");
            }
         

            console.log('Login successful',data.auth_token);
            localStorage.setItem("authToken",data.auth_token);

          }
          catch(err :any){
             setError(err.message);
          }
          finally 
          {
            setLoading(false);
          }
    }

  return (
    <>
    <div className="d-flex vh-100 justify-content-center align-items-center ">
        <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
          <h4 className="text-center mb-3">Login</h4>
          <form >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control"     value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary w-100" onClick={handleLogin} disabled={loading}>
             {loading? "Logging in...":"Login"} 
            </button>
            <div className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
