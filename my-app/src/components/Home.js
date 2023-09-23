import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import i1 from '../images/c1.jpeg'
import i2 from '../images/c2.jpeg'
import i3 from '../images/c3.jpeg'
import img from '../images/first.jpeg'
import carr from '../images/carr.jpeg'
import ai from '../images/ai.jpeg'
import clg from '../images/clg.jpg'
import u1 from '../images/u1.jpeg'
import u2 from '../images/u2.jpeg'
import u3 from '../images/u3.jpg'
import co1 from '../images/co1.png'
import co2 from '../images/co2.jpg'
import co3 from '../images/co3.jpeg'
import sc1 from '../images/sc1.png'
import sc2 from '../images/sc2.png'
import sc3 from '../images/sc3.png'

function Home() {




  return (
    <>

      <div className='container'>

        <div className='row'>
          <div className="col-12 fw-bold text-center pt-5">
            <h1 className='text-shadow'>Get Career Councelling <span className='bg-primary text-white'>Near You</span></h1>
            <p>Your partner for shaping your <span className='text-primary'>Career</span></p>
          </div>
        </div>
      </div>




      <section>
        {/* Carousel */}
        <div id="demo" className="carousel slide container" data-bs-ride="carousel">
          {/* The slideshow/carousel */}
          <div className="carousel-inner" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-item active">
              <img src={i1} alt="Los Angeles" className="img-fluid d-block mx-auto" style={{ width: '100%', height: '60vh' }} />
            </div>
            <div className="carousel-item">
              <img src={i2} alt="Chicago" className="img-fluid d-block mx-auto" style={{ width: '100%', height: '60vh' }} />
            </div>
            <div className="carousel-item">
              <img src={i3} alt="New York" className="img-fluid d-block mx-auto" style={{ width: '100%', height: '60vh' }} />
            </div>
            <div className="carousel-item">
              <img src={i3} alt="New York" className="img-fluid d-block mx-auto" style={{ width: '100%', height: '60vh' }} />
            </div>
          </div>

          {/* Left and right controls/icons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>







      {/* careerr sustainibility */}
      <section>
        <div className='container'>
          <div className='row pt-5 e-career'>
            <div className='col-lg-8 col-12'>
              <h2 className='text-primary fw-bold'>Check Career Suitability for your Dream Career</h2>
              <p>Take Informed Career Decisions. Check Career Fit for your Dream Career</p>
              <div className='search_input'>
                <input type="text" class="form-control custom-search-box" placeholder='SEARCH YOUR CAREER' />
              </div>
              <p className='pt-3 text-secondary'>MOST SEARCHABLE SUITABILITY CHECK</p>
              <ul className='p-0'>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Medical Science</Link>
                </li>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Legal Services</Link>
                </li>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Software Engineering</Link>
                </li>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Interior Design</Link>
                </li>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Archiet</Link>
                </li>
                <li className="me-2">
                  <Link className='text-decoration-none text-dark' to="/">Governmant Services</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-12 pt-5'>
              <img src={carr} alt="" className='img-fluid' />
              <p className='text-center pt-2'>Check your Career Suitability Now</p>
              <button className='btn btn-danger mx-auto d-block'>Start Now</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='text-center mt-5 bg-primary text-white p-3'>
          <div className='container mt-3'>
            <h4>Best Career Guidance Platform In India 2022</h4>
            <p className='px-5'>Searching for the best career guidance platform? Here is a list of top 6 career guidance platform functionalities needs to be considered before selecting Career Guidance platform in India. See why edumilestones career guidance platform is considered the highest rated career counselling guidance program in India since 2008</p>
            <button className='btn btn-outline-warning text-white'>Continue Reading</button>
          </div>
        </div>
      </section>

      {/* career assesment section */}
      <section>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 pt-4'>
              <img src={ai} alt="" className='img-fluid' />
            </div>
            <div className='col-lg-6 col-12'>
              <h3 className='text-primary'>AI Based Career Assessment Platform</h3>
              <ul className='pt-2'>
                <li className='mb-1'>5 Dimensional Career Assessment Platform</li>
                <li className='mb-1'>Career Analysis across 150+ Career Paths and 3000+ Occupations</li>
                <li className='mb-1'>AI for higher Accuracy and reliability</li>
                <li className='mb-1'>Find out the most suitable career path and get an execution plan in just 45 Minutes.</li>
                <li className='mb-1'>32 + Dedicated Assessments starting from 8th Class Students to Graduates and Professionals.</li>
              </ul>
              <button className='d-block mx-auto btn btn-primary'>Start Assessment</button>
            </div>
          </div>
        </div>
      </section>

      {/* college predictor */}
      <section>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 pt-5'>
              <h3 className='text-primary'>College Admission Predictors</h3>
              <div className='text-secondary'>
                <p>Know your College Admission chances at the career path level based on Psychometric, Abilities and Academic analysis</p>
                <p>180000 + Top colleges and 1000+ exams analysis for each candidate. Set your career milestones</p>
              </div>
              <button className='d-block mx-auto btn btn-primary mt-4'>Start Now</button>
            </div>

            <div className='col-lg-6 col-12'>
              <img src={clg} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      {/* abroad universities */}

      <section>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 pt-4'>
              <div id="demo" class="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                {/* <div class="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div> */}

                {/* <!-- The slideshow/carousel --> */}
                <div class="carousel-inner" data-bs-ride="carousel" data-bs-interval="4000" data-bs-wrap="true">
                  <div class="carousel-item active">
                    <img src={u1} alt="Los Angeles" className="img-fluid d-block w-100 h-100" />
                  </div>
                  {/* <div class="carousel-item">
                    <img src={u2} alt="Chicago" className="img-fluid d-block w-100 h-100"/>
                  </div> */}
                  <div class="carousel-item">
                    <img src={u3} alt="New York" className="img-fluid d-block w-100 h-100" />
                  </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button> */}
              </div>
            </div>
            <div className='col-lg-6 col-12 pt-4'>
              <h3 className='text-primary'>Study Abroad Application Process across 22 Countries</h3>
              <ul className='pt-2'>
                <li className='mb-1'>Profile analysis</li>
                <li className='mb-1'>Top colleges recommendations</li>
                <li className='mb-1'>End to end application management</li>
                <li className='mb-1'>Visa processing</li>
                <li className='mb-1'>SOP support and guidance</li>
                <li>Fast track application processing</li>
                <li>Real-time application status</li>
              </ul>
              <button className='d-block mx-auto btn btn-primary'>Start Profiling</button>
            </div>
          </div>
        </div>
      </section>

      {/* success stories */}
      <section>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner mt-5 pt-2 success bg-primary" data-bs-ride="carousel" data-bs-interval="4000" data-bs-wrap="true">
          <h3 className='text-center text-white'>Success Stories</h3>
          <div className=' p-2 text-white'>
            <div class="carousel-item  active">
              <p className="text-center">This is the best Career Counselling I have ever had in my life. While many career counsellors suggest careers based on your interest, Meru Counselors use complex software algorithms that suggest a perfect career based on your character. I have never seen someone do such an in-depth analysis of one's character and analyse needs based on it. During the counselling, I felt as if my mind was being read and revealed. Your character will be examined perfectly and your interests will be brought out from the nutshell giving you complete satisfaction. Out of all, this is the best choice if you want to plan and execute your future in an optimized way.<p>--Kshitij Singh</p></p>

            </div>
            <div class="carousel-item">
              <p className="text-center">Counsellor is very understanding and she helped me very much. I'm really thankful for calibre connect<p>--Prateek Kanaujia</p></p>
            </div>
            <div class="carousel-item">
              <p className="text-center">Absolutely great experience! The counselling was very structured at the start and at the end, I got a chance to ask all the questions I needed. Dr Verma is an expert in the field and her advice is very spot on!<p>--Arman Khan</p></p>
            </div>
            <div class="carousel-item">
              <p className="text-center">Taking my daughter to Turning Point for career counselling turned out to be a correct decision for us. She was analyzed thoroughly and Ms Rupan interaction bought out her interests and strengths which helped us in finalizing her best career choices. Rupan is very cheerful, knowledgeable and has the right tools and training for this critical position which is a must as a person whose life depends on the career choices he/she makes at this juncture. I will surely recommend her for your ward.<p>--Adarsh Sidnal</p></p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button className=" carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </section>

      {/* online courses */}

      <section>
        <div className='container pt-5'>
          <h3 className='text-center text-primary pb-4'>Career Boosters</h3>
          <div className='row'>
            <div className='col-lg-4 col-12 '>
              <div className=" card" style={{ width: "350px" }}>
                <img className="img-fluid card-img-top" src={co1} alt="" />
                <div className=" card-body text-center">
                  <h5 className="card-text ">Live intractive coding classes for students</h5>
                  <Link to="#" className="mx-auto btn btn-primary">Interested</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className="card" style={{ width: "350px" }}>
                <img className="card-img-top img-fluid" src={co2} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-text text-center">Learn fundamental concepts of Science</h5>
                  <Link to="#" className="btn btn-primary">Interested</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12 '>
              <div className="card" style={{ width: "350px" }}>
                <img className="img-fluid card-img-top" src={co3} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-text text-center">Live UPSC classes from India's top Educator</h5>
                  <Link to="#" className="btn btn-primary">Interested</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section>
        <div className='container pt-5'>
          <h3 className='text-center text-primary'>Our Popular Blogs</h3>
          <Link className='d-block text-center' style={{ textDecoration: "none" }} to="https://www.edumilestones.com/blog/">View All{">>"} </Link>
          <div className='row pt-3'>
            <div className='col-lg-4 col-12'>
              <div className=" card" style={{ width: "350px" }}>
                <img className="img-fluid card-img-top" src={sc1} alt="" />
                <div className=" card-body" style={{ background: "#f3f3f3", maxHeight: "60vh", overflow: "hidden" }}>
                  <h4 className="card-text ">How to become a School Councellor</h4>
                  <p>Discover how to become a school counsellor. This comprehensive guide outlines 3 essential steps to embark on this rewarding career.......</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className="card" style={{ width: "350px" }}>
                <img className="card-img-top img-fluid" src={sc2} alt="" />
                <div className="card-body" style={{ background: "#f3f3f3", maxHeight: "60vh", overflow: "hidden" }}>
                  <h4 className="card-text">Start an Overseas Education Business in India-2023"</h4>
                  <p>Launch an Overseas Education Business in India-2023. Embrace the Booming Demand for Global Education. Start your own study abroad business in 48 Hrs....</p>

                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12 '>
              <div className="card" style={{ width: "350px" }}>
                <img className="img-fluid card-img-top" src={sc3} alt="" />
                <div className="card-body" style={{ background: "#f3f3f3", maxHeight: "60vh", overflow: "hidden" }}>
                  <h4 className="card-text">Top 5 Education Business Ideas in 2023</h4>
                  <p>Demand for Career counselling business, Demand for Study abroad business, Play School, Tuition center, E-Learning...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
