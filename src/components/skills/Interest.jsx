import React, { Component } from 'react';
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
        <div className={classes.Interest}>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>📈 Metrics-Driven Success</h3>
              <p>
              Driven by a love for data, I'm not just a marketer; I'm a results-driven strategist. Whether it's increasing online visibility, growing engagement, or boosting conversions, I leverage analytics to fine-tune campaigns, turning numbers into actionable insights.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.app}>
              <h3> 🔍 Innovative Problem Solver</h3>
              <p>
              In a digital world filled with challenges, I see opportunities. I love tackling marketing puzzles, finding innovative solutions, and transforming obstacles into stepping stones for success. Adapting to the latest trends and technologies is not just a choice—it's a commitment.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.other}>
              <h3>🤝 Collaborative Approach</h3>
              <p>
              I believe in the power of collaboration. Working closely with cross-functional teams, I ensure that marketing efforts align seamlessly with broader business objectives. From startups to established brands, I've had the privilege of contributing to diverse projects and industries.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
