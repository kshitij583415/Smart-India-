import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import "../Contact.css"
// import FacebookIcon from '@mui/icons-material/Facebook';
function Login() {
  return (
    // <div>
    //   <div className="container pt-1">
    //   <div className="row justify-content-center align-items-center min-vh-100">
    //     <div className="col-lg-8 col-md-10 col-sm-12">
    //       <div className="card p-4 shadow rounded custom-card">
    //         <h2 className="text-center mb-4 custom-heading">Login</h2>
    //         <form>
    //           <div className="mb-3">
    //             <input type="email" className="form-control custom-input" id="email" aria-describedby="emailHelp" placeholder='Your Email' />
    //           </div>
    //           <div className="mb-3">
    //             <input type="password" className="form-control custom-input" id="exampleInputPassword1" placeholder='Password'/>
    //           </div>
    //           <button type="submit" className="btn btn-primary w-100 custom-button">Login</button>
    //         </form>
    //         <div className="text-center mt-3">
    //           <p>Dont have an account? <Link to="/signup" className="custom-link">SignUp</Link></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg"
                  placeholder="Enter password" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">Forgot password?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                  style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                  class="link-danger">Register</Link></p>
              </div>

            </form>
          </div>
        </div>
      </div>
  



        {/* <!-- Right --> */}
        <div>
          <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter"></i>

          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      
    </section>
  )
}

export default Login
