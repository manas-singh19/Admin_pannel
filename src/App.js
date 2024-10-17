import logo from './logo.svg';
import './App.css';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';

import { useState } from 'react';
function App() {

  const [sidebarHide,setSidebarHide] = useState(false);

  const sideBarHandler = ()=>{
    setSidebarHide(!sidebarHide);
  }

  return (
     <>
      <Sidebar sideBarState={sidebarHide}/>
      <Header sideBarHandler={sideBarHandler}/>
      <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="../dashboard/index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Online Courses</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Course Add
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="page-header-title">
                  <h2 className="mb-0">Course Add</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Course Add</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Course Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Course Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start From</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Course Duration"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Course Price"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Teacher Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Teacher Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Maximum Students</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Maximum Students"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Status</label>
                      <select className="form-select">
                        <option>Deactive</option>
                        <option>Active</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Course Details</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter Course Details"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <form
                        action="../assets/json/file-upload.php"
                        className="dropzone"
                      >
                        <div className="fallback">
                          <input name="file" type="file" multiple="multiple" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <button className="btn btn-primary">Create Course</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
    <Footer/>
     </>
  );
}

export default App;
