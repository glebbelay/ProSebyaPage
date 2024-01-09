import React from 'react'

import '../../css/components/_expert.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function ExpertSection() {
  return (
    <div>
        <section id="expert" class="expert">
            <div class="circle blur-neon expert_circle"></div>
            <div class="expert_text">
                <h1>Meet With Our Professional Experts</h1>
            </div>
            <div class="expert_main">
      
                <div class="card card-1">
                    <div class="card_image">
                        <div class="overlay-gradient"></div>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="Alex Suprun"/>
                    </div>
                    <div class="card_name">
                        <h1>Alex Suprun</h1>
                    </div>
                    <div class="card_job">
                        <p>Software Developer</p>
                    </div>
                    <div class="card_social">
                        <a href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
                
                <div class="card card-2">
                    <div class="card_image">
                        <div class="overlay-gradient"></div>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="Julian Wan" />
                    </div>
                    <div class="card_name">
                        <h1>Julian Wan</h1>
                    </div>
                    <div class="card_job">
                        <p>Ethical Hacker</p>
                    </div>
                    <div class="card_social">
                        <a href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
              
                <div class="card card-3">
                    <div class="card_image">
                        <div class="overlay-gradient"></div>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Romina Farías"/>
                    </div>
                    <div class="card_name">
                        <h1>Romina Farías</h1>
                    </div>
                    <div class="card_job">
                        <p>UI/UX Developer</p>
                    </div>
                    <div class="card_social">
                        <a href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lowerpart">

                <button class="btn btn-viewall">
                    View All
                </button>
            </div>
        </section>

    </div>
  )
}

export default ExpertSection