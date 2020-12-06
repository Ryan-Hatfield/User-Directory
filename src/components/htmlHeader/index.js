import React from "react";
import "./style.css";


function htmlHeader(props) {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand" >User Directory</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" placeholder="Enter Name" aria-label="Search" type="text" required></input>
                        <button type="button" className="btn btn-primary" onClick={props.filterName}>Search</button>
                        <button type="button" className="btn btn-primary" onClick={props.filterDepartment}>Sort by Department</button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default htmlHeader;