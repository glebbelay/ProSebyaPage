import React from 'react'

import '../../css/components/_footer.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

import logo from '../../images/pslogo.png'

function Footer() {
  return (
    <div>
            <footer class="footer" id="footer">
        <div class="footer_main">
            <div class="logo">
                <img src={logo} alt="Webook logo"/>
                
            </div>
            <div class="company">
                <h1>
                     Компания
                </h1>
                <ul>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Тестирование</a>
                    </li>
                    <li>
                        <a href="#">Пользовательское соглашение</a>
                    </li>
                </ul>
            </div>
            <div class="resources">
                <h1>
                    Ресурсы
                </h1>
                <ul>
                    <li>
                        <a href="#">Оплата</a>
                    </li>
                    <li>
                        <a href="#">Блог</a>
                    </li>
                    <li>
                        <a href="#">Поддержка</a>
                    </li>
                </ul>
            </div>
            <div class="quick">
                <h1>
                    Навигация
                </h1>
                <ul>
                    <li>
                        <a href="#">Главное</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
         
        </div>
    </footer>
    </div>
  )
}

export default Footer