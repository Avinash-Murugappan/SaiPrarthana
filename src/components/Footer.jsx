import React from 'react'
import "./Footer.css";

export default function Footer() {
    return (
         <div className="main-footer">

          <p className="col-sm">
            &copy;{new Date().getFullYear()} Avinash Murugappan | All rights reserved |
            Terms Of Service | Privacy
          </p>

    </div>
    )
}
