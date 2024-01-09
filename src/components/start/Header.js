import React from 'react'

import '../../css/components/_header.scss'
import '../../css/components/_classes.scss'


import logo from '../../images/pslogo.png'

function Header() {
  return (
    
    <header class="header" id="header">
    <div class="logo">
        <img src={logo} alt="logo" style={{marginBottom: '10px'}}/>
    </div>
    <div class="menu-hamburger" id="toggle">

    </div>
    <nav class="navbar" id="navbar">
        <ul class="navbar-list" id="primary-navbar" data-visiable="false">
            <li><a href="/" class="navbar-links">Главное</a></li>
            <li><a href="#features" class="navbar-links">Мероприятия</a></li>
            <li><a href="/about" class="navbar-links">О нас</a></li>
            <li><a href="/contact" class="navbar-links">Контакты</a></li>
            <li><a class="navbar-links">Курсы</a></li>
            <li><a href="/blog" class="navbar-links">Блог</a></li>
            <li><a href="/reg" class="btn btn-get-courses"><span>Регистрация</span></a></li>
        </ul>
    </nav>
    </header>

  )
}

export default Header