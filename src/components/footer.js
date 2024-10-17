import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer className="pc-footer">
    <div className="footer-wrapper container-fluid">
       <div className="row">
          <div className="col my-1">
             <p className="m-0">-&#9829; crafted by Team <a href="" target="_blank"></a></p>
          </div>
          <div className="col-auto my-1">
             <ul className="list-inline footer-link mb-0">
                <li className="list-inline-item"><a href="../index.html">Home</a></li>
                <li className="list-inline-item"><a href="https://.gitbook.io/able-pro/" target="_blank">Documentation</a></li>
                <li className="list-inline-item"><a href="https://.authordesk.app/" target="_blank">Support</a></li>
             </ul>
          </div>
       </div>
    </div>
</footer>
  )
}
 
export default Footer

