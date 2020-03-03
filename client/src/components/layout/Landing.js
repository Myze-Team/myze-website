import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div>
        <div id="overlayer" />
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="site-wrap" id="home-section">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-3 col-xl-4  d-block">
                  <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">myze<span className="text-primary" /> </a></h1>
                </div>
                <div className="col-12 col-md-9 col-xl-8 main-menu">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                      <li><a href="#about-section" className="nav-link">About Us</a></li>
                      <li><a href="#contact-section" className="nav-link">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3" /></a></div>
              </div>
            </div>
          </header>
          <div className="site-blocks-cover" style={{overflow: 'hidden'}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-12" style={{position: 'relative'}} data-aos="fade-up" data-aos-delay={200}>
                  <img src="images/undraw_investing_7u74.svg" alt="Image" className="img-fluid img-absolute" />
                  <div className="row mb-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-6 mr-auto">
                      <h1>Make Your Business More Profitable</h1>
                      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                      <div>
                        <a href="#" className="btn btn-primary mr-2 mb-2">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section" id="features-section">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
                <div className="col-7 text-center  mb-5">
                  <h2 className="section-title">Imagine Features</h2>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                </div>
              </div>
              <div className="row align-items-stretch">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-autorenew" /></span>
                    </div>
                    <div>
                      <h3>Marketing Consulting</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-store_mall_directory" /></span>
                    </div>
                    <div>
                      <h3>Market Analysis</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-shopping_basket" /></span>
                    </div>
                    <div>
                      <h3>Easy Purchase</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-settings_backup_restore" /></span>
                    </div>
                    <div>
                      <h3>Free Updates</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-sentiment_satisfied" /></span>
                    </div>
                    <div>
                      <h3>100% Satistified</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="unit-4 d-block">
                    <div className="unit-4-icon mb-3">
                      <span className="icon-wrap"><span className="text-primary icon-power" /></span>
                    </div>
                    <div>
                      <h3>Easy Plugin</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-big">
            <div className="container">
              <div className="row mb-5 site-section">
                <div className="col-lg-7" data-aos="fade-right">
                  <img src="images/undraw_gift_card_6ekc.svg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                  <h2 className="text-black">Communicate and gather feedback</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
                  <div className="author-box" data-aos="fade-left">
                    <div className="d-flex mb-4">
                      <div className="mr-3">
                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle" />
                      </div>
                      <div className="mr-auto text-black">
                        <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br />
                        Co-Founder, XYZ Inc.
                      </div>
                    </div>
                    <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                  </div>
                </div>
              </div>
              <div className="mt-5 row mb-5 site-section ">
                <div className="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                  <img src="images/undraw_metrics_gtu7.svg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                  <h2 className="text-black">Communicate and gather feedback</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>
                  <div className="author-box" data-aos="fade-right">
                    <div className="d-flex mb-4">
                      <div className="mr-3">
                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle" />
                      </div>
                      <div className="mr-auto text-black">
                        <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br />
                        Co-Founder, XYZ Inc.
                      </div>
                    </div>
                    <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                  </div>
                </div>
              </div>
              <div className="row mb-5 site-section">
                <div className="col-lg-7" data-aos="fade-right">
                  <img src="images/undraw_gift_card_6ekc.svg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                  <h2 className="text-black">Communicate and gather feedback</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
                  <div className="author-box" data-aos="fade-left">
                    <div className="d-flex mb-4">
                      <div className="mr-3">
                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle" />
                      </div>
                      <div className="mr-auto text-black">
                        <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br />
                        Co-Founder, XYZ Inc.
                      </div>
                    </div>
                    <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                  </div>
                </div>
              </div>
              <div className="mt-5 row mb-5 site-section ">
                <div className="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                  <img src="images/undraw_metrics_gtu7.svg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                  <h2 className="text-black">Communicate and gather feedback</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>
                  <div className="author-box" data-aos="fade-right">
                    <div className="d-flex mb-4">
                      <div className="mr-3">
                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle" />
                      </div>
                      <div className="mr-auto text-black">
                        <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br />
                        Co-Founder, XYZ Inc.
                      </div>
                    </div>
                    <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section bg-light" id="about-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3">About Us</h2>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-6" data-aos="fade-right">
                  <img src="images/undraw_bookmarks_r6up.svg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 ml-auto pl-lg-5">
                  <h2 className="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
                  <p className="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                  <ul className="ul-check mb-5 list-unstyled success">
                    <li>Laborum enim quasi at modi</li>
                    <li>Ad at tempore</li>
                    <li>Labore quaerat esse</li>
                  </ul>
                  <p><a href="#" className="btn btn-primary">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section" id="our-team-section">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
                <div className="col-7 text-center  mb-5">
                  <h2 className="section-title">Our Team</h2>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">Cloe Marena</h2>
                    <span className="sub-title d-block mb-3">President</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">John Rooster</h2>
                    <span className="sub-title d-block mb-3">Marketing</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">Will Turner</h2>
                    <span className="sub-title d-block mb-3">Marketing</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">Nicolas Stainer</h2>
                    <span className="sub-title d-block mb-3">Financing</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_5.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">George Brook</h2>
                    <span className="sub-title d-block mb-3">Founder</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="person">
                    <div className="bio-img">
                      <figure>
                        <img src="images/person_6.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <div className="social">
                        <a href="#"><span className="icon-facebook" /></a>
                        <a href="#"><span className="icon-twitter" /></a>
                        <a href="#"><span className="icon-instagram" /></a>
                      </div>
                    </div>
                    <h2 className="text-black h1">Emely Hopson</h2>
                    <span className="sub-title d-block mb-3">Marketing</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section bg-image2 overlay" id="contact-section" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3 text-white">Contact Us</h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7 mb-5">
                  <form action="#" className="p-5 bg-white">
                    <h2 className="h4 text-black mb-5">Contact Form</h2>
                    <div className="row form-group">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="text-black" htmlFor="fname">First Name</label>
                        <input type="text" id="fname" className="form-control rounded-0" />
                      </div>
                      <div className="col-md-6">
                        <label className="text-black" htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" className="form-control rounded-0" />
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control rounded-0" />
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" htmlFor="subject">Subject</label>
                        <input type="subject" id="subject" className="form-control rounded-0" />
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols={30} rows={7} className="form-control rounded-0" placeholder="Leave your message here..." defaultValue={""} />
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary mr-2 mb-2" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer py-5 text-center">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12">
                  <p className="mb-0">
                    <a href="#" className="p-3"><span className="icon-facebook" /></a>
                    <a href="#" className="p-3"><span className="icon-twitter" /></a>
                    <a href="#" className="p-3"><span className="icon-instagram" /></a>
                    <a href="#" className="p-3"><span className="icon-linkedin" /></a>
                    <a href="#" className="p-3"><span className="icon-pinterest" /></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="mb-0">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    );
  }
}
export default Landing;
