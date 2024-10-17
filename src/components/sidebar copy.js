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
    <nav className={`pc-sidebar ${sidebarHide? "pc-sidebar-hide" : ""}`}>
        <div className="navbar-wrapper">
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
                <li>
                    <div className="card pc-user-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                            {/* <div className="flex-shrink-0">
                                <img
                                src="../assets/images/user/avatar-1.jpg"
                                alt="user-image"
                                className="user-avtar wid-45 rounded-circle"
                                />
                            </div> */}
                            <div className="flex-grow-1 ms-0 me-2">
                                <h6 className="mb-0">Jonh Smith</h6>
                                {/* <small>Administrator</small> */}
                            </div>
                            <a
                                className="btn btn-icon btn-link-secondary avtar"
                                data-bs-toggle="collapse"
                                href="#pc_sidebar_dashboard"
                            >
                                <svg className="pc-icon">
                                <use xlinkHref="#custom-sort-outline" />
                                </svg>
                            </a>
                            </div>
                            <div className="collapse pc-user-links" id="pc_sidebar_dashboard">
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
                </li>
                
            </ul>
        </div>
        </div>
    </nav> 
  )
}
 

export default Sidebar

