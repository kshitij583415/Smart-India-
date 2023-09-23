import React, { useState } from 'react';
import '../App.css'; 
import { Link ,useNavigate } from 'react-router-dom';// Import custom CSS

function SignUp() {

  let navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  })

  let name,value;

  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
  
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          cpassword,
        }),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
  
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
      } else {
        window.alert("Successful Registration");
        navigate('/login');
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      window.alert("An error occurred while processing your request.");
    }
  };
  


 

 /* return (
    <div className='container'>
      <div className='container'>
    <div className="container pt-1 shadow">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card p-4 shadow rounded custom-card">
            <h2 className="text-center mb-4 custom-heading">Sign Up</h2>
            <form method='POST'>
              <div className="mb-3"> 
                <input type="text" className="form-control custom-input" name="name" id="name" placeholder="Your name" autoComplete="off" value={user.name} onChange={handleInputs}/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control custom-input" name="email" id="email" aria-describedby="emailHelp" placeholder='Your Email' autoComplete="off" value={user.email} onChange={handleInputs} />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control custom-input" name="phone" id="mobile" placeholder='Mobile Number' autoComplete="off" value={user.phone} onChange={handleInputs}/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control custom-input" name="password" id="exampleInputPassword1" placeholder='Password' autoComplete="off" value={user.password} onChange={handleInputs}/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control custom-input" name="cpassword" id="confirmPassword" placeholder='Confirm Password' autoComplete="off" value={user.cpassword} onChange={handleInputs}/>
              </div>
              <button type="submit" className="btn btn-primary w-100 custom-button" onClick={postData}>Sign Up</button>
            </form>
            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/login" className="custom-link">Login</Link></p>
            </div>
          </div>
        </div>
      </div>

    

    </div>
    </div>
    </div>
  );*/



return(
  <section class="vh-100" style={{backgroundColor: "#eee;"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c name" class="form-control" name="name"  autoComplete="off" value={user.name} onChange={handleInputs} />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c email" class="form-control" name="email" aria-describedby="emailHelp" autoComplete="off" value={user.email} onChange={handleInputs} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c mobile" class="form-control" name="phone" autoComplete="off" value={user.phone} onChange={handleInputs}/>
                      <label class="form-label" for="form3Example1c">Phone Number</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" name="password" autoComplete="off" value={user.password} onChange={handleInputs}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd confirmPassword" class="form-control" name="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}/>
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                  <p>Already have an account? <Link to="/login" className="custom-link">Login</Link></p>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={postData}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


)
}

export default SignUp;




