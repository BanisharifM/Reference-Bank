import React from "react";
import img2 from "../assets/images/users/2.jpg";

const sideNav = () => {
  return (
    <aside className="left-sidebar">
      {/* <!-- Sidebar scroll--> */}
      <div className="scroll-sidebar">
        {/* <!-- User Profile--> */}
        <div className="user-profile">
          <div className="user-pro-body">
            <div>
              <img src={img2} alt="user-img" className="img-circle" />
            </div>
            <div className="dropdown">
              <a
                href="javascript:void(0)"
                className="dropdown-toggle u-dropdown link hide-menu"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Steave Gection <span className="caret"></span>
              </a>
              <div className="dropdown-menu animated flipInY">
                {/* <!-- text--> */}
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="ti-user"></i> پروفایل
                </a>
                {/* <!-- text--> */}
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="ti-wallet"></i> My Balance
                </a>
                {/* <!-- text--> */}
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="ti-email"></i> Inbox
                </a>
                {/* <!-- text--> */}
                <div className="dropdown-divider"></div>
                {/* <!-- text--> */}
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="ti-settings"></i> Account Setting
                </a>
                {/* <!-- text--> */}
                <div className="dropdown-divider"></div>
                {/* <!-- text--> */}
                <a href="pages-login.html" className="dropdown-item">
                  <i className="fa fa-power-off"></i> Logout
                </a>
                {/* <!-- text--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="nav-small-cap">--- PERSONAL</li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="icon-speedometer"></i>
                <span className="hide-menu">
                  داشبورد{" "}
                  <span className="badge badge-pill badge-cyan ml-auto">4</span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="index.html">Minimal </a>
                </li>
                <li>
                  <a href="index2.html">Analytical</a>
                </li>
                <li>
                  <a href="index3.html">Demographical</a>
                </li>
                <li>
                  <a href="index4.html">Modern</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-layout-grid2"></i>
                <span className="hide-menu">اپ ها</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="app-calendar.html">Calendar</a>
                </li>
                <li>
                  <a href="app-chat.html">Chat app</a>
                </li>
                <li>
                  <a href="app-ticket.html">Support Ticket</a>
                </li>
                <li>
                  <a href="app-contact.html">Contact / Employee</a>
                </li>
                <li>
                  <a href="app-contact2.html">Contact Grid</a>
                </li>
                <li>
                  <a href="app-contact-detail.html">Contact Detail</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-email"></i>
                <span className="hide-menu">Inbox</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="app-email.html">Mailbox</a>
                </li>
                <li>
                  <a href="app-email-detail.html">Mailbox Detail</a>
                </li>
                <li>
                  <a href="app-compose.html">Compose Mail</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-palette"></i>
                <span className="hide-menu">
                  Ui Elements{" "}
                  <span className="badge badge-pill badge-primary text-white ml-auto">
                    25
                  </span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-user-card.html">User Cards</a>
                </li>
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-modals.html">Modals</a>
                </li>
                <li>
                  <a href="ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a>
                </li>
                <li>
                  <a href="ui-tooltip-stylish.html">Tooltip stylish</a>
                </li>
                <li>
                  <a href="ui-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="ui-notification.html">Notification</a>
                </li>
                <li>
                  <a href="ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="ui-nestable.html">Nestable</a>
                </li>
                <li>
                  <a href="ui-range-slider.html">Range slider</a>
                </li>
                <li>
                  <a href="ui-timeline.html">Timeline</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-horizontal-timeline.html">Horizontal Timeline</a>
                </li>
                <li>
                  <a href="ui-session-timeout.html">Session Timeout</a>
                </li>
                <li>
                  <a href="ui-session-ideal-timeout.html">
                    Session Ideal Timeout
                  </a>
                </li>
                <li>
                  <a href="ui-bootstrap.html">Bootstrap Ui</a>
                </li>
                <li>
                  <a href="ui-breadcrumb.html">Breadcrumb</a>
                </li>
                <li>
                  <a href="ui-bootstrap-switch.html">Bootstrap Switch</a>
                </li>
                <li>
                  <a href="ui-list-media.html">List Media</a>
                </li>
                <li>
                  <a href="ui-ribbons.html">Ribbons</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-date-paginator.html">Date-paginator</a>
                </li>
                <li>
                  <a href="ui-dragable-portlet.html">Dragable Portlet</a>
                </li>
                <li>
                  <a href="ui-spinner.html">Spinner</a>
                </li>
                <li>
                  <a href="ui-scrollspy.html">Scrollspy</a>
                </li>
                <li>
                  <a href="ui-toasts.html">Toasts</a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">--- FORMS, TABLE &amp; WIDGETS</li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-layout-media-right-alt"></i>
                <span className="hide-menu">Forms</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="form-basic.html">Basic Forms</a>
                </li>
                <li>
                  <a href="form-layout.html">Form Layouts</a>
                </li>
                <li>
                  <a href="form-addons.html">Form Addons</a>
                </li>
                <li>
                  <a href="form-material.html">Form Material</a>
                </li>
                <li>
                  <a href="form-float-input.html">Floating Lable</a>
                </li>
                <li>
                  <a href="form-pickers.html">Form Pickers</a>
                </li>
                <li>
                  <a href="form-upload.html">File Upload</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-bootstrap-validation.html">
                    Form Bootstrap Validation
                  </a>
                </li>
                <li>
                  <a href="form-dropzone.html">File Dropzone</a>
                </li>
                <li>
                  <a href="form-icheck.html">Icheck control</a>
                </li>
                <li>
                  <a href="form-img-cropper.html">Image Cropper</a>
                </li>
                <li>
                  <a href="form-bootstrapwysihtml5.html">HTML5 Editor</a>
                </li>
                <li>
                  <a href="form-typehead.html">Form Typehead</a>
                </li>
                <li>
                  <a href="form-wizard.html">Form Wizard</a>
                </li>
                <li>
                  <a href="form-xeditable.html">Xeditable Editor</a>
                </li>
                <li>
                  <a href="form-summernote.html">Summernote Editor</a>
                </li>
                <li>
                  <a href="form-tinymce.html">Tinymce Editor</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-layout-accordion-merged"></i>
                <span className="hide-menu">Tables</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="table-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="table-layout.html">Table Layouts</a>
                </li>
                <li>
                  <a href="table-data-table.html">Data Tables</a>
                </li>
                <li>
                  <a href="table-footable.html">Footable</a>
                </li>
                <li>
                  <a href="table-jsgrid.html">Js Grid Table</a>
                </li>
                <li>
                  <a href="table-responsive.html">Responsive Table</a>
                </li>
                <li>
                  <a href="table-bootstrap.html">Bootstrap Tables</a>
                </li>
                <li>
                  <a href="table-editable-table.html">Editable Table</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-settings"></i>
                <span className="hide-menu">Widgets</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="widget-data.html">Data Widgets</a>
                </li>
                <li>
                  <a href="widget-apps.html">Apps Widgets</a>
                </li>
                <li>
                  <a href="widget-charts.html">Charts Widgets</a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">--- EXTRA COMPONENTS</li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-gallery"></i>
                <span className="hide-menu">Page Layout</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="layout-single-column.html">1 Column</a>
                </li>
                <li>
                  <a href="layout-fix-header.html">Fix header</a>
                </li>
                <li>
                  <a href="layout-fix-sidebar.html">Fix sidebar</a>
                </li>
                <li>
                  <a href="layout-fix-header-sidebar.html">
                    Fixe header &amp; Sidebar
                  </a>
                </li>
                <li>
                  <a href="layout-boxed.html">Boxed Layout</a>
                </li>
                <li>
                  <a href="layout-logo-center.html">Logo in Center</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-files"></i>
                <span className="hide-menu">
                  Sample Pages{" "}
                  <span className="badge badge-pill badge-info">25</span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="starter-kit.html">Starter Kit</a>
                </li>
                <li>
                  <a href="pages-blank.html">Blank page</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="has-arrow">
                    Authentication{" "}
                    <span className="badge badge-pill badge-success pull-right">
                      6
                    </span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="pages-login.html">Login 1</a>
                    </li>
                    <li>
                      <a href="pages-login-2.html">Login 2</a>
                    </li>
                    <li>
                      <a href="pages-register.html">Register</a>
                    </li>
                    <li>
                      <a href="pages-register2.html">Register 2</a>
                    </li>
                    <li>
                      <a href="pages-register3.html">Register 3</a>
                    </li>
                    <li>
                      <a href="pages-lockscreen.html">Lockscreen</a>
                    </li>
                    <li>
                      <a href="pages-recover-password.html">Recover password</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="pages-profile.html">Profile page</a>
                </li>
                <li>
                  <a href="pages-animation.html">Animation</a>
                </li>
                <li>
                  <a href="pages-fix-innersidebar.html">Sticky Left sidebar</a>
                </li>
                <li>
                  <a href="pages-fix-inner-right-sidebar.html">
                    Sticky Right sidebar
                  </a>
                </li>
                <li>
                  <a href="pages-invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="pages-treeview.html">Treeview</a>
                </li>
                <li>
                  <a href="pages-utility-classNamees.html">
                    Helper classNamees
                  </a>
                </li>
                <li>
                  <a href="pages-search-result.html">Search result</a>
                </li>
                <li>
                  <a href="pages-scroll.html">Scrollbar</a>
                </li>
                <li>
                  <a href="pages-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="pages-lightbox-popup.html">Lighbox popup</a>
                </li>
                <li>
                  <a href="pages-gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="pages-faq.html">Faqs</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="has-arrow">
                    Error Pages
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="pages-error-400.html">400</a>
                    </li>
                    <li>
                      <a href="pages-error-403.html">403</a>
                    </li>
                    <li>
                      <a href="pages-error-404.html">404</a>
                    </li>
                    <li>
                      <a href="pages-error-500.html">500</a>
                    </li>
                    <li>
                      <a href="pages-error-503.html">503</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-pie-chart"></i>
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="chart-morris.html">Morris Chart</a>
                </li>
                <li>
                  <a href="chart-chartist.html">Chartis Chart</a>
                </li>
                <li>
                  <a href="chart-echart.html">Echarts</a>
                </li>
                <li>
                  <a href="chart-flot.html">Flot Chart</a>
                </li>
                <li>
                  <a href="chart-knob.html">Knob Chart</a>
                </li>
                <li>
                  <a href="chart-chart-js.html">Chartjs</a>
                </li>
                <li>
                  <a href="chart-sparkline.html">Sparkline Chart</a>
                </li>
                <li>
                  <a href="chart-extra-chart.html">Extra chart</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity Charts</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-light-bulb"></i>
                <span className="hide-menu">Icons</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="icon-material.html">Material Icons</a>
                </li>
                <li>
                  <a href="icon-fontawesome.html">Fontawesome Icons</a>
                </li>
                <li>
                  <a href="icon-themify.html">Themify Icons</a>
                </li>
                <li>
                  <a href="icon-weather.html">Weather Icons</a>
                </li>
                <li>
                  <a href="icon-simple-lineicon.html">Simple Line icons</a>
                </li>
                <li>
                  <a href="icon-flag.html">Flag Icons</a>
                </li>
                <li>
                  <a href="icon-iconmind.html">Mind Icons</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-location-pin"></i>
                <span className="hide-menu">Maps</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="map-google.html">Google Maps</a>
                </li>
                <li>
                  <a href="map-vector.html">Vector Maps</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
                <i className="ti-align-left"></i>
                <span className="hide-menu">Multi level dd</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="javascript:void(0)">item 1.1</a>
                </li>
                <li>
                  <a href="javascript:void(0)">item 1.2</a>
                </li>
                <li>
                  {" "}
                  <a
                    className="has-arrow"
                    href="javascript:void(0)"
                    aria-expanded="false"
                  >
                    Menu 1.3
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="javascript:void(0)">item 1.3.1</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">item 1.3.2</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">item 1.3.3</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">item 1.3.4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">item 1.4</a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">--- SUPPORT</li>
            <li>
              {" "}
              <a
                className="waves-effect waves-dark"
                href="../documentation/documentation.html"
                aria-expanded="false"
              >
                <i className="far fa-circle text-danger"></i>
                <span className="hide-menu">Documentation</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className="waves-effect waves-dark"
                href="pages-login.html"
                aria-expanded="false"
              >
                <i className="far fa-circle text-success"></i>
                <span className="hide-menu">Log Out</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className="waves-effect waves-dark"
                href="pages-faq.html"
                aria-expanded="false"
              >
                <i className="far fa-circle text-info"></i>
                <span className="hide-menu">FAQs</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Sidebar navigation --> */}
      </div>
      {/* <!-- End Sidebar scroll--> */}
      {/* <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
        <div
          class="ps__scrollbar-x"
          tabindex="0"
          style="left: 0px; width: 0px;"
        ></div>
      </div>
      <div
        class="ps__scrollbar-y-rail"
        style="top: 0px; height: 242px; right: 214px;"
      >
        <div
          class="ps__scrollbar-y"
          tabindex="0"
          style="top: 0px; height: 47px;"
        ></div>
      </div> */}
    </aside>
  );
};

export default sideNav;
