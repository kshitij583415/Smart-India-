import React from 'react'
import about from "../images/my.avif"
import "../App.css"
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
    <div className='container shadow m-5 mx-auto'>
  <form method=''>
    <div className='row my-5'>
      <div className='col-md-4'>
        <img src={about} alt="" className='img-fluid' style={{ width: "300px" }} />
      </div>

      <div className='col-md-6 mt-5 pt-5'>
        <h5>Kshitij Singh</h5>
        <p className='text-primary'>Web Developer</p>
        <p><small className='text-muted'>RANKINGS:<span>1/10</span></small></p>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <Link to="#home" className='nav-link' id="home-tab" data-toggle="tab" role="tab">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="#profile" className='nav-link' id="profile-tab" data-toggle="tab" role="tab">Timeline</Link>
          </li>
        </ul>
      </div>

      <div className='col-md-2 mt-5 pt-5'>
        <input type="submit" className='profile-edit-btn' name="btnAddMore" value="Edit Profile" />
      </div>

      <div className='col-md-8'>
        <div className='' id="myTabContent">
          <div className='tab-pane fade show active' id="home" aria-labelledby="home-tab">
            <div className='row'>
              <div className='col-md-6'>
                <label>User ID</label>
              </div>
              <div className='col-md-6'>
                <p>4t2468</p>
              </div>
            </div>
          </div>
          {/* Other tab content goes here */}
        </div>
      </div>
    </div>
  </form>
</div>

    </>
  )
}

export default About
