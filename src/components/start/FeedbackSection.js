import React from 'react'
import { useState } from 'react'

import '../../css/components/_faq.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'


function FeedbackSection() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const toggleAccordion1 = () => {
      setIsActive1(!isActive1);
    };
    const toggleAccordion2 = () => {
        setIsActive2(!isActive2);
      };
    const toggleAccordion3 = () => {
        setIsActive3(!isActive3);
      };
    const toggleAccordion4 = () => {
        setIsActive4(!isActive4);
      };
    const toggleAccordion5 = () => {
        setIsActive5(!isActive5);
      };
    const toggleAccordion6 = () => {
        setIsActive6(!isActive6);
      };
  return (

    <div>
        
            <section class="faq" id="faq">
            <div class="faq_text">
                <h1>FAQ</h1>
                <hr class="line"/>
            </div>
            <div class="faq_main">
                <div class="accordian">
                    <div class={`accordian_item ${isActive1 ? 'active' : ''}`}>
                        <a href="#q1" class="link" onClick={toggleAccordion1}>
                            <p>Как зарегистрироваться на платформе тестирования и получить доступ к профориентационным тестам?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                            Для регистрации на платформе пройдите по ссылке "Регистрация",
                             заполните необходимую информацию и следуйте инструкциям. 
                             После завершения регистрации вы получите доступ к тестам.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive2 ? 'active' : ''}`}>
                        <a href="#q2" class="link" onClick={toggleAccordion2}>
                            <p>Какая информация предоставляется после завершения тестирования, 
                                и какие рекомендации могут быть получены на основе результатов?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                            После завершения тестирования вы получите подробные результаты, 
                            включая оценки по различным областям. Рекомендации будут основаны на ваших сильных и слабых сторонах, 
                            помогая вам определить свою профессиональную траекторию в IT.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive3 ? 'active' : ''}`}>
                        <a href="#q3" class="link" onClick={toggleAccordion3}>
                            <p>Какие преимущества предоставляет консультация с экспертами на платформе для профориентации в IT?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                            Консультация с экспертами на нашей платформе в IT обеспечивает персональное руководство, 
                            целенаправленные советы и помощь в выборе профессионального пути в сфере информационных технологий.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive4 ? 'active' : ''}`}>
                        <a href="#q4" class="link" onClick={toggleAccordion4}>
                            <p>Каков процесс получения консультации от эксперта на веб-платформе?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                            Для получения консультации от эксперта, вы можете выбрать нужную тему или область, 
                            оставить запрос, и эксперт свяжется с вами для дальнейшего обсуждения.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive5 ? 'active' : ''}`}>
                        <a href="#q5" class="link" onClick={toggleAccordion5}>
                            <p>Какие возможности предоставляются для обратной связи по результатам тестирования?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                            Мы ценим ваше мнение и стремимся обеспечить максимально полезный опыт на платформе. 
                            После завершения тестирования вы получите подробный отчет о ваших результатах. 
                            Кроме того, у нас есть система обратной связи, где вы можете оставить комментарии, предложения или вопросы. 
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeedbackSection