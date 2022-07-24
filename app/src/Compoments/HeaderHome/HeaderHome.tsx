// import { NavLink } from "react-router-dom";
import React from 'react';
import Sass from './HeadHome.module.scss';

type Props = {};

const HeaderHome = (props: Props) => {
    return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="images/logo.jpg" alt="logo"  className="navbar-logo1"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-text  " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ps-5">
        <li className="nav-item ms-3">
          <a className="nav-link active" aria-current="page" href="#">Lịch Chiếu</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="#">Cụm Rạp</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="#">Tin Tức</a>
        </li>
        <li className="nav-item  ms-3">
          <a className="nav-link" href="#">Ứng Dụng</a>
        </li>
        <li className="nav-item dropdown ms-4">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Liên Hệ
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Are you looking for..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
    </nav>
    );
}
export default HeaderHome;
