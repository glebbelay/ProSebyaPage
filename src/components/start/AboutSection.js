import React from 'react'

import '../../css/components/_about.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/global/_fonts.scss'

function AboutSection() {
  return (
    <div>
        <section class="about" id="about">
            <div class="about_content">
                <div class="text">
                    <h2>Больше о нас</h2>
                        <p>Данная веб-платформа представляет собой инновационный инструмент для тех, 
                            кто стремится разобраться в разнообразии IT-направлений. 
                            С ее помощью пользователи могут проходить интерактивные тесты, 
                            выявлять свои сильные стороны и интересы, 
                            а также получать персонализированные рекомендации по выбору профессии в области информационных технологий. 
                            Эффективное и легкодоступное решение для всех, кто ищет свой путь в динамичном мире IT-индустрии.
                        </p>
                     
                </div>
                <div class="image">

                    <img src="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="" />
                </div>
            </div>
            <div class="about_stats">
                <div class="card card-1">
                    <h1>8000</h1>
                    <p>Студентов</p>
                </div>
                <div class="card card-1">
                    <h1>30</h1>
                    <p>Экспертов</p>
                </div>
                <div class="card card-1">
                    <h1>15</h1>
                    <p>Курсов</p>
                </div>
                <div class="card card-1">
                    <h1>5</h1>
                    <p>Стран</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection