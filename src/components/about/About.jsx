import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
            Hello there! I'm <b>Karan Chandra</b>, a dynamic digital marketer with a passion for navigating the ever-evolving landscape of online marketing. With a proven track record of 4+ years in the industry, I specialize in crafting and executing comprehensive digital strategies that proper brands to new heights.
               at
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://www.dataman.in/'>
                Dataman Computer System
                </a>
              </b>
              . I completed my degree in  Mathematics and Computer Science
              from Chatrapati Shauji Maharaj University , Kanpur . 
            </p>
            
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
