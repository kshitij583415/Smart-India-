import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import bg from "../images/bg.jpg"
import n1 from "../images/n1.jpg"
import n2 from "../images/n2.jpg"
import n3 from "../images/n3.jpg"
import n4 from "../images/n4.jpg"
import n5 from "../images/n5.png"
import n6 from "../images/n6.jpg"
import n7 from "../images/n7.jpg"
import n8 from "../images/n8.jpg"
import n9 from "../images/n9.jpg"
import rec1 from "../images/rec1.gif";
import rec2 from "../images/rec2.gif";
import a1 from "../images/a1.png"
import a2 from "../images/a2.png"
import a3 from "../images/a3.png"


function Career() {
    return (
        <>
            {/* Heading */}
            <section>
                <div className='text-center text-white' style={{ backgroundImage: `url(${bg})` }}>
                    <div className='container p-3'>
                        <div className='container p-2'>
                            <h1>Psychometric Career Assessments</h1>
                            <p>Edumilestones psychometric assessment is most advanced and accurate online career test that will help to take informed career decisions. It is highest rated career assessment platform in India.</p>
                            <p>Online Career Assessment is based on well-proven psychometric theories and Artificial intelligence (AI).</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <div className='text-center p-4' style={{ backgroundColor: "#f5f5f5" }}>
                    <div className='container px-6'>
                        <h3 className='text-primary'>
                            14+ online career test from 4th class to professionals.
                        </h3>
                        <div className='row pt-2'>
                            <div className='col-lg-2 col-0'></div>
                            <div className='col-lg-3 col-12 col-lg-offset-3'>
                                <button className=' btn-sm btn btn-primary'>Career Assesment-English</button>
                            </div>
                            <div className='col-lg-3 col-12'>
                                <button className=' btn-sm  btn btn-danger'>Career Assesment-Hindi</button>
                            </div>
                            <div className='col-lg-3 col-12'>
                                <button className=' btn-sm  btn btn-danger'>IB Assesment-International</button>
                            </div>
                            <div className='col-lg-2 col-0'></div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h6 className='py-3 px-1'>Career Assessment for Professionals</h6>
                                <img class="card-img-top" src={n1} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350px" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n2} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n3} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n4} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n5} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n6} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n7} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n8} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 fade-in'>
                            <div class="card" style={{ width: "350" }}>
                                <h1>Hello</h1>
                                <img class="card-img-top" src={n9} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <Link to="#" class="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 dimensional career */}
            <section>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 pt-1'>
                            <img src={rec1} alt="" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h3 className='text-primary'>5 Dimentional Career Assessment</h3>
                            <p className='pt-3'>Edumilestones 5 dimensional career assessment test includes a detailed analysis of personality, interest, career motivators, learning style and abilities.</p>
                            <p>Since 2008 it is considered as an industry benchmark. It is a highly accurate and reliable assessment and based on well-proven psychometric theories.</p>
                            <p>Career analysis is done among 20+ career clusters, 180+ career paths and 3000+ occupations. More than 3 Lac students are benefited and given 4.9 ratings to it.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* career report */}


            <section>
                <div className='container mt-5 pt-5'>
                    <div className='row'>

                        <div className='col-lg-6 col-12'>
                            <h3 className='text-primary'>Comprehensive Career Report</h3>
                            <p className='pt-4'>22+ pages comprehensive career report provides a clear recommendation of the most suitable career option.</p>
                            <p className='pt-2'>Career report is not only limited to find out the most suitable career option but also offer detailed education road map with the execution plan.</p>
                        </div>
                        <div className='col-lg-6 col-12 pt-1'>
                            <img src={rec2} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 pt-1'>
                            <img src={rec1} alt="" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h3 className='text-primary'>Colleges shortlisting and admission prediction</h3>
                            <p className='pt-3'>Post identifying career option the next logical step is college selection. edumilestones college selection student dashboard helps the student to find the best college for them.</p>
                            <p>Based on artificial intelligence and career assessment, the student will also get a prediction score of admission chances for every college. Based on college selection, the student can generate additional milestones report.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container pt-5 mt-4'>
                    <div className='row'>
                        <div className='col-lg-4 col-12 text-center'>
                            <h5>Career Library</h5>
                            <p>Complete information on 180+ career options with analysis</p>
                            <img className="img-res" src={a1} alt="" />
                        </div>
                        <div className='col-lg-4 col-12 text-center'>
                            <h5>Career Boosters</h5>
                            <p>Avail additional offers, coupons and deals to boost your career</p>
                            <img className="img-res" src={a2} alt="" />
                        </div>
                        <div className='col-lg-4 col-12 text-center'>
                            <h5>Online Courses</h5>
                            <p>Get unlimited access to edumilestones exclusive courses online</p>
                            <img className="img-res" src={a3} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* sucess stories */}

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

            {/* student test */}

            <section>
                <div className='container mt-5 pt-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <h3>Online psychometric test for students in India</h3>
                                <p>There are 37.4 million students in India. Every year close to 2 million students give 10th board exams. Today’s young generation are tomorrow’s future. And the students’ future can only be bright when they choose the right career path, or when they get career guidance at the right time.</p>
                                <p>That’s where the psychometric test comes into picture.</p>
                                <p>Online psychometric tests for students is the need of the hour. Every year the number of students is increasing exponentially. The more the number of students, the more confusion arises. Online psychometric tests for students can help in closing this gap.</p>
                                <p>Career counsellors use psychometric tests to analyse the personality, aptitude, learning style for the students.</p>
                                <p>Psychometric tests help give the best results for students in effective career planning. Career planning is definitely a challenging process in the students’ life. Nowadays there are so many career options available. It is imperative for a student to get confused and feel directionless. With the help of online psychometric tests, the journey of the student’s life becomes smoother which aligns with the career interest.</p>
                            </div>
                            <div className="pt-4">
                                <h3>All you need to know about psychometric career assessment test</h3>
                                <p>Psychometric career assessment test is a diagnosis tool used to identify, explore the strengths of the candidate and find out the most suitable career path. It helps the students and professionals to understand their personality, interest, aptitude.</p>
                                <p>Psychometric career assessment test is used widely by students, graduates and professionals to make informed career decisions.</p>
                                <p>There are so many students and professionals who are confused about their career path. Psychometric career assessment tests can be very beneficial for them. It can help the individuals to understand their skills and talent and guide the individual in the right direction.</p>
                                <p>When you are not aware of what to do in your career, then is the right time to take a career assessment test. When you are confused and worried about your career, then is the right time to take a career assessment test.</p>
                                <p>The career assessment test will help you be aware of your strengths and interests.</p>
                                <p>It will give you sure shot ways on how to shape your future. Many schools use a career assessment test to determine what is suitable for the student.</p>
                                <p>Many companies use psychometric tests to determine whether the candidate is suitable for a certain role or not.</p>
                                <p>The magnitude of the psychometric test is immense. Psychometric tests with the help of career counsellor can change the fortune of any student/professional.</p>
                            </div>
                            <div className="pt-4">
                                <h3>Importance of psychometric test in career counselling</h3>
                                <p>Assessing your skills is certainly an important part of your career growth. Before starting up your career you need to know what are your strengths, what are you good at, what are you interested in? These are few questions that keep revolving in our brain more often.</p>
                                <p>As you already know there are many students who are confused about their career path, professionals are stressed about their jobs.</p>
                                <p>Career counselling with the help of a seasoned expert can help you solve all your career related queries. Career assessment test is used for career guidance purposes.</p>
                                <p>Online psychometric tests provide valuable insights of your personality, interest. The psychometric test is designed specifically to address and solve your career related queries.</p>
                                <p>The importance of psychometric tests in career counselling is immense.</p>
                                <p>Career counsellors from all over the world use psychometric tests to give career counselling to students and professionals. Psychometric tests with the help of career counsellor can change the fortune of any student/professional.</p>
                                <p>What would you do if you are confused about your career path?</p>
                                <p>What would you do if you don’t have any idea where your life is heading?</p>
                                <p>What would you do if you are confused whether to take Science, Commerce or Arts?</p>
                                <p>The surest and the best answer to it is get career guidance and counselling from a career counsellor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section>
                <div className='pricing p-5'>
                    <div className='container text-center'>
                        <h3>Find out your Best Possibility </h3>
                    </div>
                    <div className='mt-4 text-center p-3'>
                        <div className='container me-3'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-12 shadow-lg ms-5 p-4 bg-white pricing-item mt-5 fade-in'>
                                    <h6 className="font-weight-bolder">Suitability Assessment</h6>
                                    <h1 className='my-0 font-weight-normal'>$5<small className='text-muted'>/mo</small></h1>
                                    <ul className='list-unstyled mt-3 mb-4 new_font'>
                                        <li>5 Dimensional Career Assessment</li><hr />
                                        <li>Check your Career Suitability for One Career Option</li><hr />
                                        <li>5 Pages Free Career Analysis Report</li><hr />
                                        <li>Well researched information about career</li><hr />
                                        <li>No individual career counselling</li>
                                    </ul>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 shadow-lg ms-5 p-4 bg-white pricing-item mt-4 fade-in'>
                                    <h6 className="font-weight-bolder">Career Assessment and Report</h6>
                                    <h1 className='my-0 font-weight-normal'>$15<small className='text-muted'>/mo</small></h1>
                                    <ul className='list-unstyled mt-3 mb-4 new_font'>
                                        <li>5 Dimensional Career Assessment</li><hr />
                                        <li>Explore and Find out most suitable career paths among 150+ Career Paths and 3000+ Occupations</li><hr />
                                        <li>30+ Pages detailed career analysis report</li><hr />
                                        <li>Detailed Execution Plan</li><hr />
                                        <li>Self search career library and Colleges Info.</li><hr />
                                        <li>No Face to face career counselling</li><hr />
                                        <li>No individual career counselling</li>
                                    </ul>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 shadow-lg ms-5 p-4 bg-white pricing-item fade-in'>
                                    <h6 className="font-weight-bolder">Face to Face Counselling Near you</h6>
                                    <h1 className='my-0 font-weight-normal'>$18<small className='text-muted'>/mo</small></h1>
                                    <ul className='list-unstyled mt-3 mb-4 new_font'>
                                        <li>5 Dimensional Career Assessment</li><hr />
                                        <li>Explore and Find out most suitable career paths among 150+ Career Paths and 3000+ Occupations</li><hr />
                                        <li>30+ Pages detailed career analysis report</li><hr />
                                        <li>Detailed Execution Plan</li><hr />
                                        <li>Well research Career Information</li><hr />
                                        <li>Book Appointment with Best career counselor for 40+ Minutes Face to Face counseling near you. More than 1800+ Career counselor across India</li><hr />
                                        <li>Individual career counselling included</li><hr />
                                        <li>Post Counselling Support Included</li><hr />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faq */}
            <section>
                <div className='container my-5  font-weight-bolder'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center'>Frequently Asked Questions</h3>

                            <div class="accordion w-75 mx-auto mt-4" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How to Choose the career Assessment?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body  font-low">
                                            <p>We have different career assessments for different groups. It starts from 5th class to professionals. Candidate can select assessment based on your current stage. All the assessments are highly accuracy and reliabile.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What is five dimensional career assessment?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low ">
                                            <p>Our career assessment explores the 5 dimensions of the candidate. It includes, Personality analysis, Career Interest analysis, Career motivators analysis, learning style analysis and Skills & Abilities analysis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is the difference between Free suitability and comprehensive Analysis?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>Both are 5 dimensional career assessment. In Free Suitability, candidate can get analysis of one career path of their choice with free 3 pages basic report. In Comprehensive plan, career analysis will be done across 160+ career paths and 2000+ Occupations to find out the best career path for you. Comprehensive 28+ pages career report with execution plan will help you to achieve career goals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Once comprehensive report is activated, can I see analysis other career paths as well?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>Yes, very much. This is the biggest advantage every student is having. Once assessment is done student can generate unlimited comprehensive 28+ pages comprehensive reports of different career paths. It is important to know you most preferred career paths but equally it is important to know about career paths that you should avoid or develop.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                            Do I need to give assessment once again for comprehensive analysis?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>No, you do not need to give assessment again. Once assessment is done, you can upgrade any time. System will automatically analyze all career paths and generate comprehensive report. Our powerful Artificial intelligence engine will unlock all the career path analysis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingSix">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                            Is it too early for me for career counselling?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>Candidates who are opting career counseling in early stages of their education life cycle, will be having high ratio of success. You will be having enough time to plan and execute the suggestions. Before venturing into career, take informed career decision. It will save lots of time and money.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingSeven">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            Can I get face to face counseling near me?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            Yes, definitely. We are having more than 1400+ empanelled career counselors across 48 + Locations. You can see their profiles, ratings, experience and book appointment online. No charges upfront.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingEight">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                            What are the charges for face to face career counselling.
                                        </button>
                                    </h2>
                                    <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            We provide counseling at most affordable price without compromising on quality. However it depends on location and years of experience. Charges start from as low as INR 2000
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingNine">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                            Who will be counselling me?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" class="accordion-collapse collapse show" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>We are highest rated career counseling platform in India ( Source- Google reviews). Our empanelled career counselors are highly qualified, experienced and well trained. Our empaneled counselors have delivered more than 90,000 career counselings with highest ratings. You have the flexibility to choose the counsellor based on their experience and background.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTen">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                            Can I upgrade from free suitability to Face to face Career Counselling
                                        </button>
                                    </h2>
                                    <div id="collapseTen" class="accordion-collapse collapse show" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>Yes, definitely. After getting free suitability report of your selected career path, if you decide later to get detailed guidance from our career counsellors, you always have the option to upgrade to face to face counseling session near you. You can do so after completion of the assessment. You do not need to do separate assessment once aga11</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading11">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                            How can I make the payment?
                                        </button>
                                    </h2>
                                    <div id="collapse11" class="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>We do not charge upfront for career assessment. Post completion of the assessment, you will be connected with best career counselor near you. You can pay directly to your career counselor through cash or online payment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading12">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="true" aria-controls="collapse12">
                                            What is the duration of the career assessment?
                                        </button>
                                    </h2>
                                    <div id="collapse12" class="accordion-collapse collapse show" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                                        <div class="accordion-body font-low">
                                            <p>Comprehensive career assessment takes around 45 minutes to complete.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Career
