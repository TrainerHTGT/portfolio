import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            DIGITAL MARKETING MANAGER AT DATAMAN <span>DEC 2022-Present</span>
                          </h2>
                          <p>
                            I am currently working as <b>DIGITAL MARKETING MANAGER</b> at{' '}
                            <a target='_blank' href='https://www.dataman.in/'>
                              <b>Dataman Computer System</b>
                            </a>{' '}
                            <i>
                              (Founded in 1990, Dataman is an INDIA-headquartered provider of IT solutions and services with 250+ IT professionals working full-time. For over 30+ years, we have been working hard to build trust at every step. We work closely with our clients to ensure that all communication and business requirements are transparent and clearly resolved in a timely manner.

)
                            </i>{' '}
                            and boosting my professional skills.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                        <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          DIGITAL MARKETING MANAGER AT REDMILL BUSINESS MALL <span>APR 2022 - NOV 2022</span>
                          </h2>
                          <p>
                          8 months experience in Redmil Business Mall as an Digital Marketing Manager.<a href='https://redmil.in/'>REDMIL BUSINESS MALL PVT.LTD</a>
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                        <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          SOCIAL MEDIA MARKETING MANAGER <span>Apr 2020 - Jan 2022</span>
                          </h2>
                          <p>
                      Two years experience as an Social Media Manager at QuickBizs
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>SEO ASSISTANT & CONTENT ENHANCING </h2>
                          <p>
                          One year experience in Universal Medical Directory  as an SEO Assistant & Content Enhancing.  
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
