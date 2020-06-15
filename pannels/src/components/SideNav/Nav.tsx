import React from "react";
import HeaderItem from "./SideNavItems/HeaderItem";
import SubHeaderItem from "./SideNavItems/SubHeaderNavItem";
import Menu from "./SideNavItems/Menu";
import {
  adminDashboardItems,
  siteManagementItems,
} from "./SideNavItems/subItems";
import SubHeaderNav from "./SideNavItems/SubHeaderNav";
import Can from "../Can";
import { useUserState } from "../../services/contexts/UserContext/UserContext";
import { menuItems } from "./SideNavItems/mainItem";
const Nav = () => {
  return (
    <nav className="sidebar-nav">
      <ul id="sidebarnav">
        {menuItems.map((item) => (
          <Can
            perform={item.toHavePermissions}
            yes={() => (
              <SubHeaderNav
                title={item.title}
                news={item.news ? item.news : undefined}
                items={item.items}
                icon={item.icon} 
              />
            )}
          />
        ))}
      </ul>
    </nav>
  );
};

// <SubHeaderNav
//   title="مدیریت سایت اصلی"
//   items={siteManagementItems}
//   icon="ti-layout-grid2"
// />
export default Nav;

{
  /* <li className="nav-small-cap">--- EXTRA COMPONENTS</li>
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
      Sample Pages <span className="badge badge-pill badge-info">25</span>
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
      <a href="pages-utility-classNamees.html">Helper classNamees</a>
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
</li> */
}
