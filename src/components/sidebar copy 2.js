import React, { useState, useEffect } from 'react';

const Sidebar = (props) => {
  // Initialize state for sidebar visibility
   // Initialize state for sidebar visibility
   const [sidebarHide, setSidebarHide] = useState(props.sideBarState || false);
 
   // Effect to update sidebarHide when props.sideBarState changes
   useEffect(() => {
     setSidebarHide(props.sideBarState || false);
   }, [props.sideBarState]);

  return (
    <>
    
    <nav className="pc-sidebar">
        <div className="navbar-wrapper" style={{ overflowY: 'auto' }}>
            <div className="m-header">
            <a href="../dashboard/index.html" className="b-brand text-primary">
                {/* ========   Change your logo from here   ============ */}{" "}
                <img
                src="../assets/images/logo-dark.svg"
                className="img-fluid logo-lg"
                alt="logo"
                style={{ width: "auto", height: 60 }}
                />{" "}
                {/* <span className="badge bg-light-success rounded-pill ms-2 theme-version">v9.4.3</span> */}
            </a>
            </div>
            <div className="navbar-content">
            <div className="card pc-user-card">
                <div className="card-body">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                    <img
                        src="../assets/images/user/avatar-1.jpg"
                        alt="user-image"
                        className="user-avtar wid-45 rounded-circle"
                    />
                    </div>
                    <div className="flex-grow-1 ms-3 me-2">
                    <h6 className="mb-0">Jonh Smith</h6>
                    <small>Administrator</small>
                    </div>
                    <a
                    className="btn btn-icon btn-link-secondary avtar"
                    data-bs-toggle="collapse"
                    href="#pc_sidebar_userlink"
                    >
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-sort-outline" />
                    </svg>
                    </a>
                </div>
                <div className="collapse pc-user-links" id="pc_sidebar_userlink">
                    <div className="pt-3">
                    <a href="#!">
                        <i className="ti ti-user" /> <span>My Account</span>{" "}
                    </a>
                    <a href="#!">
                        <i className="ti ti-settings" /> <span>Settings</span>{" "}
                    </a>
                    <a href="#!">
                        <i className="ti ti-lock" /> <span>Lock Screen</span>{" "}
                    </a>
                    <a href="#!">
                        <i className="ti ti-power" /> <span>Logout</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <ul className="pc-navbar">
                <li className="pc-item pc-caption">
                    <label>Navigation</label>
                </li>
                <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                    <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-status-up" />
                    </svg>
                    </span>
                    <span className="pc-mtext">Dashboard</span>
                    <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                    </span> 
                    <span className="pc-badge">2</span>
                </a>
                <ul className="pc-submenu" style={{ display:'none', boxSizing:'border-box'}}>
                    <li className="pc-item">
                        <a className="pc-link" href="../dashboard/index.html">
                            Default
                        </a>
                    </li>
                    <li className="pc-item">
                        <a className="pc-link" href="../dashboard/analytics.html">
                            Analytics
                        </a>
                    </li>
                    <li className="pc-item">
                    <a className="pc-link" href="../dashboard/finance.html">
                        Finance
                    </a>
                    </li>
                </ul>
                </li>
                <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                    <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-document" />
                    </svg>
                    </span>
                    <span className="pc-mtext">Layouts</span>{" "}
                    <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                    </span>
                </a>
                <ul className="pc-submenu">
                    <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-vertical.html">
                        Vertical
                    </a>
                    </li>
                    <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-horizontal.html">
                        Horizontal
                    </a>
                    </li>
                    <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-color-header.html">
                        Layouts 2
                    </a>
                    </li>
                    <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-compact.html">
                        Compact
                    </a>
                    </li>
                    <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-tab.html">
                        Tab
                    </a>
                    </li>
                </ul>
                </li>
                <li className="pc-item pc-caption">
                <label>Widget</label>
                <svg className="pc-icon">
                    <use xlinkHref="#custom-presentation-chart" />
                </svg>
                </li>
                <li className="pc-item">
                <a href="../widget/w_statistics.html" className="pc-link">
                    <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-story" />
                    </svg>
                    </span>
                    <span className="pc-mtext">Statistics</span>
                </a>
                </li>
                <li className="pc-item">
                <a href="../widget/w_data.html" className="pc-link">
                    <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-fatrows" />
                    </svg>
                    </span>
                    <span className="pc-mtext">Data</span>
                </a>
                </li>
                <li className="pc-item">
                <a href="../widget/w_chart.html" className="pc-link">
                    <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-presentation-chart" />
                    </svg>
                    </span>
                    <span className="pc-mtext">Chart</span>
                </a>
                </li>
                  
            </ul>
            </div>
        </div>
    </nav>
 
   
    </>
  )
}
 

export default Sidebar

