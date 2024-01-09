import React from 'react'

import '../../css/components/_faq.scss'

function Blog() {
  return (
    <div style={{marginTop: '160px', marginLeft: '115px', marginRight: '115px'}}>
        <a  className="navbar-links">Все статьи</a>
        <a><p style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>/</p></a>
        <a  className="navbar-links">Видео</a>
        <div class="faq_main">
        <div class="accordian">
        <div class={`accordian_item`}>
            <a href="#q1" class="link">
            <p>Статья́ — это жанр журналистики, в котором автор ставит задачу проанализировать 
                общественные ситуации, процессы, явления, прежде всего с точки зрения закономерностей,
                 лежащих в их основе. В статье автор рассматривает отдельные ситуации как часть более широкого явления. 
                 Автор аргументированно пишет о своей точке зрения.</p>
                
            </a>
        </div>
        </div>
        </div>
        <div class="faq_main">
        <div class="accordian">
        <div class={`accordian_item`}>
            <a href="#q1" class="link">
            <p>Статья́ — это жанр журналистики, в котором автор ставит задачу проанализировать 
                общественные ситуации, процессы, явления, прежде всего с точки зрения закономерностей,
                 лежащих в их основе. В статье автор рассматривает отдельные ситуации как часть более широкого явления. 
                 Автор аргументированно пишет о своей точке зрения.</p>
                
            </a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Blog