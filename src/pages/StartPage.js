import React from 'react'

import Header from '../components/start/Header'
import BannerSection from '../components/start/BannerSection'
import FeaturesSection from '../components/start/FeaturesSection'
import CoursesSection from '../components/start/CoursesSection'
import AboutSection from '../components/start/AboutSection'
import FeedbackSection from '../components/start/FeedbackSection'
import ContactSection from '../components/start/ContactSection'
import Footer from '../components/start/Footer'



function StartPage() {
  return (
    <>
    <Header/>
    <BannerSection/>
    <FeaturesSection/>
    <CoursesSection/>
    <AboutSection/>
    <FeedbackSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default StartPage