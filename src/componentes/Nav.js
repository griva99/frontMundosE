import React from "react";
import "./css/index.css";
import logo from "./css/imagen/top-logo.png";


function Nav(){
    return(<div class="contenedor-menu">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent nav_menu" >
            <div class="container-fluid top_logo">
                <image src={logo} alt="Logo top 25 Watts " class="d-inline-block align-text-top"></image>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav_menu_link" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item fuente_menu">
                        <a href="#home" class="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item fuente_menu">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item fuente_menu">
                        <a href="#products" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item fuente_menu">
                        <a href="#corredor" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item fuente_menu">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</div>);
}
export default Nav;
