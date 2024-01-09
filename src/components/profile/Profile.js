import React from 'react'
import avatar from '../../images/avatar.jpg'
import { Col } from 'react-bootstrap'

import '../../css/components/_banner.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function Profile() {
  return (
    <div style={{marginTop: '100px'}}>
    <Col style={{display: 'flex', alignItems: 'center'}}>
        <img src={avatar} alt="logo" style={{marginBottom: '10px', marginLeft: '8%', width: '20%', borderRadius: '10px'}}/>
        <div className='text-area' style={{width: '20%', paddingLeft: '10%'}}>
            <p>* Имя</p>
            <p>* Фамилия</p>
            <p>* Отчество</p>
        </div>
    </Col>
    </div>
  )
}

export default Profile