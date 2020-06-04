import React from "react";
import img1 from "../assets/images/logo-icon.png";
import img2 from "../assets/images/logo-light-icon.png";
import img3 from "../assets/images/logo-text.png";
import img4 from "../assets/images/logo-light-text.png";
import img5 from "../assets/images/users/1.jpg";
import img6 from "../assets/images/big/img1.jpg";

const Header = () => {
  return (
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        {/**LOGO */}
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">
            {/* LOGOICON */}
            <b>
              {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //--> */}
              {/* <!-- Dark Logo icon --> */}
              <img src={img1} alt="homepage" className="dark-logo" />
              {/* <!-- Light Logo icon --> */}
              <img src={img2} alt="homepage" className="light-logo" />
            </b>
            {/* <!--End Logo icon --> */}
            {/* <!-- Logo text --> */}
            <span>
              {/* <!-- dark Logo text --> */}
              <img src={img3} alt="homepage" className="dark-logo" />
              {/* <!-- Light Logo text -->     */}
              <img src={img4} className="light-logo" alt="homepage" />
            </span>{" "}
          </a>
        </div>
        {/* <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== --> */}
        <div className="navbar-collapse">
          {/* <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== --> */}
          <ul className="navbar-nav mr-auto">
            {/* <!-- This is  --> */}
            <li className="nav-item">
              {" "}
              <a
                className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                href="javascript:void(0)"
              >
                <i className="ti-menu"></i>
              </a>{" "}
            </li>
            <li className="nav-item">
              <a
                className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                href="javascript:void(0)"
              >
                <i className="icon-menu"></i>
              </a>{" "}
            </li>
            {/* <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== --> */}
            <li className="nav-item">
              <form className="app-search d-none d-md-block d-lg-block">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search & enter"
                />
              </form>
            </li>
          </ul>
          {/* <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== --> */}
          <ul className="navbar-nav my-lg-0">
            {/* <!-- ============================================================== -->
                    <!-- Comment -->
                    <!-- ============================================================== --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="ti-email"></i>
                <div className="notify">
                  {" "}
                  <span className="heartbit"></span>{" "}
                  <span className="point"></span>{" "}
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                <ul>
                  <li>
                    <div className="drop-title">Notifications</div>
                  </li>
                  <li>
                    <div className="message-center">
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="btn btn-danger btn-circle">
                          <i className="fa fa-link"></i>
                        </div>
                        <div className="mail-contnet">
                          <h5>Luanch Admin</h5>{" "}
                          <span className="mail-desc">
                            Just see the my new admin!
                          </span>{" "}
                          <span className="time">9:30 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="btn btn-success btn-circle">
                          <i className="ti-calendar"></i>
                        </div>
                        <div className="mail-contnet">
                          <h5>Event today</h5>{" "}
                          <span className="mail-desc">
                            Just a reminder that you have event
                          </span>{" "}
                          <span className="time">9:10 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="btn btn-info btn-circle">
                          <i className="ti-settings"></i>
                        </div>
                        <div className="mail-contnet">
                          <h5>Settings</h5>{" "}
                          <span className="mail-desc">
                            You can customize this template as you want
                          </span>{" "}
                          <span className="time">9:08 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="btn btn-primary btn-circle">
                          <i className="ti-user"></i>
                        </div>
                        <div className="mail-contnet">
                          <h5>Pavan kumar</h5>{" "}
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>{" "}
                          <span className="time">9:02 AM</span>{" "}
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link text-center link"
                      href="javascript:void(0);"
                    >
                      {" "}
                      <strong>Check all notifications</strong>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!-- ============================================================== -->
                    <!-- End Comment -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Messages -->
                    <!-- ============================================================== --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                id="2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="icon-note"></i>
                <div className="notify">
                  {" "}
                  <span className="heartbit"></span>{" "}
                  <span className="point"></span>{" "}
                </div>
              </a>
              <div
                className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown"
                aria-labelledby="2"
              >
                <ul>
                  <li>
                    <div className="drop-title">You have 4 new messages</div>
                  </li>
                  <li>
                    <div className="message-center">
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="user-img">
                          {" "}
                          <img
                            src={img5}
                            alt="user"
                            className="img-circle"
                          />{" "}
                          <span className="profile-status online pull-right"></span>{" "}
                        </div>
                        <div className="mail-contnet">
                          <h5>Pavan kumar</h5>{" "}
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>{" "}
                          <span className="time">9:30 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="user-img">
                          {" "}
                          <img
                            src={img5}
                            alt="user"
                            className="img-circle"
                          />{" "}
                          <span className="profile-status busy pull-right"></span>{" "}
                        </div>
                        <div className="mail-contnet">
                          <h5>Sonu Nigam</h5>{" "}
                          <span className="mail-desc">
                            I've sung a song! See you at
                          </span>{" "}
                          <span className="time">9:10 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="user-img">
                          {" "}
                          <img
                            src={img5}
                            alt="user"
                            className="img-circle"
                          />{" "}
                          <span className="profile-status away pull-right"></span>{" "}
                        </div>
                        <div className="mail-contnet">
                          <h5>Arijit Sinh</h5>{" "}
                          <span className="mail-desc">I am a singer!</span>{" "}
                          <span className="time">9:08 AM</span>{" "}
                        </div>
                      </a>
                      {/* <!-- Message --> */}
                      <a href="javascript:void(0)">
                        <div className="user-img">
                          {" "}
                          <img
                            src={img5}
                            alt="user"
                            className="img-circle"
                          />{" "}
                          <span className="profile-status offline pull-right"></span>{" "}
                        </div>
                        <div className="mail-contnet">
                          <h5>Pavan kumar</h5>{" "}
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>{" "}
                          <span className="time">9:02 AM</span>{" "}
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link text-center link"
                      href="javascript:void(0);"
                    >
                      {" "}
                      <strong>See all e-Mails</strong>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!-- ============================================================== -->
                    <!-- End Messages -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- mega menu -->
                    <!-- ============================================================== --> */}
            <li className="nav-item dropdown mega-dropdown">
              {" "}
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ti-layout-width-default"></i>
              </a>
              <div className="dropdown-menu animated bounceInDown">
                <ul className="mega-dropdown-menu row">
                  <li className="col-lg-3 col-xlg-2 m-b-30">
                    <h4 className="m-b-20">CAROUSEL</h4>
                    {/* <!-- CAROUSEL --> */}
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <div className="container">
                            {" "}
                            <img
                              className="d-block img-fluid"
                              src={img6}
                              alt="First slide"
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="container">
                            <img
                              className="d-block img-fluid"
                              src={img6}
                              alt="Second slide"
                            />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="container">
                            <img
                              className="d-block img-fluid"
                              src={img6}
                              alt="Third slide"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                      >
                        {" "}
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>{" "}
                        <span className="sr-only">Previous</span>{" "}
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                      >
                        {" "}
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>{" "}
                        <span className="sr-only">Next</span>{" "}
                      </a>
                    </div>
                    {/* <!-- End CAROUSEL --> */}
                  </li>
                  <li className="col-lg-3 m-b-30">
                    <h4 className="m-b-20">ACCORDION</h4>
                    {/* <!-- Accordian --> */}
                    <div className="accordion" id="accordionExample">
                      <div className="card m-b-0">
                        <div
                          className="card-header bg-white p-0"
                          id="headingOne"
                        >
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Collapsible Group Item #1
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high.
                          </div>
                        </div>
                      </div>
                      <div className="card m-b-0">
                        <div
                          className="card-header bg-white p-0"
                          id="headingTwo"
                        >
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Collapsible Group Item #2
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high.
                          </div>
                        </div>
                      </div>
                      <div className="card m-b-0">
                        <div
                          className="card-header bg-white p-0"
                          id="headingThree"
                        >
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Collapsible Group Item #3
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-lg-3  m-b-30">
                    <h4 className="m-b-20">CONTACT US</h4>
                    {/* <!-- Contact --> */}
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputname1"
                          placeholder="Enter Name"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                          rows={3}
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-info">
                        Submit
                      </button>
                    </form>
                  </li>
                  <li className="col-lg-3 col-xlg-4 m-b-30">
                    <h4 className="m-b-20">List style</h4>
                    {/* <!-- List style --> */}
                    <ul className="list-style-none">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-check text-success"></i> You can
                          give link
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-check text-success"></i> Give link
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-check text-success"></i> Another
                          Give link
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-check text-success"></i> Forth
                          link
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-check text-success"></i> Another
                          fifth link
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!-- ============================================================== -->
                    <!-- End mega menu -->
                    <!-- ============================================================== --> */}
            <li className="nav-item right-side-toggle">
              {" "}
              <a
                className="nav-link  waves-effect waves-light"
                href="javascript:void(0)"
              >
                <i className="ti-settings"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
