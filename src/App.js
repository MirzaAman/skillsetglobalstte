
// images
import meat from './assets/img/er.png'
import homechips from './assets/img/1.png'
import chips1 from './assets/img/chips-1.png'
import chips2 from './assets/img/chips-2.png'
import chips3 from './assets/img/chips-3.png'
import tomato1 from './assets/img/tomato-1.png'
import tomato2 from './assets/img/tomato-2.png'
import leaf3 from './assets/img/leaf-3.png'
import chease from './assets/img/er.png'
import favoritechips1 from './assets/img/favorite-chips-1.png'
import favoritechips2 from './assets/img/favorite-chips-2.png'
import favoritechips3 from './assets/img/favorite-chips-3.png'
import leaf1 from './assets/img/leaf-1.png'
import leaf2 from './assets/img/leaf-2.png'
import careChips from './assets/img/1.png'
import contactMan from './assets/img/contact-man.png'
import shrimp from './assets/img/er.png'
import crab from './assets/img/er.png'
import welcome from './assets/img/welcome.png'

// css
import './assets/css/styles.css'
import './assets/css/swiper-bundle.min.css'

// essentials
import { useEffect,useRef } from 'react'
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleAddMemberClick = () => {
    navigate('/join');
  };

  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const navLinks = document.querySelectorAll('.nav__link');
    const linkAction = () => {
      navMenu.classList.remove('show-menu');
    };
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    const swiperFavorites = new Swiper('.favorites__swiper', {
      loop: true,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: 'auto',
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 300,
      reset: true,
    });
    
    sr.reveal(`.home__data, .favorites__container, .footer__container`);
    sr.reveal(`.home__circle, .home__img`, { delay: 600, scale: 0.5 });
    sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, { delay: 1000, interval: 100 });
    sr.reveal(`.home__leaf`, { delay: 1200 });
    sr.reveal(`.home__tomato-1, .home__tomato-2`, { delay: 1400, interval: 100 });
    sr.reveal(`.care__img, .contact__img`, { origin: 'left' });
    sr.reveal(`.care__list, .contact__data`, { origin: 'right' });
    sr.reveal(`.banner__item`, { interval: 100 });
    sr.reveal(`.programs__item`, { delay: 300, interval: 200 });
    
    // Join Us section
    sr.reveal('.join-us__content', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      opacity: 0,
      easing: 'ease-in-out',
      delay: 300
    });
    
    // Get Involved section
    sr.reveal(`.get-involved__title`, { delay: 300, origin: 'top', distance: '20px' });
    sr.reveal(`.get-involved__description`, { delay: 500, origin: 'bottom', distance: '20px', interval: 200 });
    
    // FAQ section
    sr.reveal(`.faq__title`, { delay: 300, origin: 'top', distance: '20px' });
    sr.reveal(`.faq__item`, { delay: 500, origin: 'bottom', distance: '20px', interval: 200 });
    

  }, [])

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">SKILLSET GLOBAL</a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li>
                <a href="#home" className="nav__link">Home</a>
              </li>
              <li>
                <a href="#faq" className="nav__link">FAQ</a>
              </li>
              <li>
                <a href="#programs" className="nav__link">Programs</a>
              </li>
              <li>
                <a href="#aboutus" className="nav__link">About Us</a>
              </li>
              <li>
                <a href="#contact" className="nav__link">Contact</a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-large-line"></i>
            </div>
            <div className="nav__social">
              <a href="" target="_blank" className="nav__social-link">
                <i className="ri-facebook-circle-line"></i>
              </a>
              <a href="https://www.instagram.com/upskilld_?igsh=MXI5c3JtM24wd2k3MA==" target="_blank" className="nav__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="" target="_blank" className="nav__social-link">
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-apps-2-line"></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">Skills <br /> Beyond <br /> Limits</h1>
              <p className="home__description">Empowering today’s learners to become tomorrow’s leaders, innovators, and change-makers.</p>
              <img src={meat} alt="" className="home__meat" />
              <div className="home__buttons">
                <a  className="button" onClick={handleAddMemberClick} style={{cursor:'pointer'}} >Join Us</a>
                <a href="#" className="button button__ghost">Online Courses</a>
              </div>
            </div>
            <div className="home__images">
              <div className="home__circle">
                <div className="home__subcircle"></div>
              </div>

              <img src={homechips} alt="" className="home__img" />

              {/* <img src={chips1} alt="" className="home__chips-1" />
              <img src={chips2} alt="" className="home__chips-2" />
              <img src={chips3} alt="" className="home__chips-3" />

              <img src={tomato1} alt="" className="home__tomato-1" />
              <img src={tomato2} alt="" className="home__tomato-2" />

              <img src={leaf3} alt="" className="home__leaf" /> */}
            </div>
          </div>
        </section>

        <section className="favorite section" id="favorites">
          <div className="favorites__container container grid">
            <div className="favorites__data">
              <h2 className="section__title">WELCOME TO <br /> SKILLSET GLOBAL</h2>
              <p className="favorites__description">
                At SkillSetGlobal, we are committed to bridging the gap between academic theories and real-world applications. Our mission is to transform the educational experience for college students and professionals by providing practical tools, advanced knowledge, and immersive experiences. We strive to empower individuals with the skills they need to excel in their careers, adapt to evolving industry demands, and make a meaningful contribution to the global economy. Through our diverse range of programs—including hands-on workshops, internships, professional development courses, and online learning opportunities—we foster innovation, creativity, and critical thinking. Our goal is to equip our members with the confidence and expertise required to navigate their careers with success and drive positive change in their communities and beyond. Join us on this journey of growth and transformation, and unlock your potential with SkillSetGlobal.
              </p>
              <img src={chease} alt="image" className="favorites__cheese-1" />
              <img src={chease} alt="image" className="favorites__cheese-2" />
            </div>
            {/* <div class="favorites__swiper swiper">
               <div class="swiper-wrapper">
                  <article class="favorites__article swiper-slide">
                     <img src="/assets/img/favorite-chips-1.png" alt="" class="favorites__img"/>

                     <img src="assets/img/leaf-1.png" alt="" class="favorites__leaf-1"/>
                     <img src="assets/img/leaf-2.png" alt="" class="favorites__leaf-2"/>
                  </article>
                  <article class="favorites__article swiper-slide">
                     <img src="/assets/img/favorite-chips-2.png" alt="" class="favorites__img"/>

                     <img src="assets/img/leaf-1.png" alt="" class="favorites__leaf-1"/>
                     <img src="assets/img/leaf-2.png" alt="" class="favorites__leaf-2"/>
                  </article>
                  <article class="favorites__article swiper-slide">
                     <img src="/assets/img/favorite-chips-3.png" alt="" class="favorites__img"/>

                     <img src="assets/img/leaf-1.png" alt="" class="favorites__leaf-1"/>
                     <img src="assets/img/leaf-2.png" alt="" class="favorites__leaf-2"/>
                  </article>
               </div>
            </div> */}
            <div class="favorites__swiper">
              <div class="swiper-wrapper">
                <article class="s">
                  <img src={welcome} alt="" class="favorites__img" />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="care section" id="aboutus">
          <h2 className="section__title">DISCOVER MORE <br /> ABOUT OUR MISSION AND VALUES</h2>
          <div className="care__container container grid">
            <ul className="care__list">
              <li className="care__item">
                <i className="ri-plant-line"></i>
                <p>
                  <b> Our Mission: </b> SkillSet Global equips students and employees with practical skills and experiences to excel in the modern workforce. Our programs focus on critical thinking, creativity, and innovation for real-world success.
                </p>
              </li>
              <li className="care__item">
                <i className="ri-fire-line"></i>
                <p>
                  <b>Our Vision: </b> To be a leading provider of skill development programs that inspire and empower individuals to reach their full potential, driving positive change in their communities and beyond.
                </p>
              </li>
              <li className="care__item">
                <i className="ri-heart-pulse-line"></i>
                <p>
                  <b>Our Values: </b> <br />
                  ❏ Excellence: We strive for the highest standards in everything we do. <br />
                  ❏ Innovation: We encourage creative thinking and problem-solving. <br />
                  ❏ Integrity: We conduct our business with honesty and transparency.<br />
                  ❏ Inclusivity: We believe in providing equal opportunities for all individuals.
                </p>
              </li>
              {/* <li className="care__item">
                <i className="ri-hand-heart-line"></i>
                <p>
                  They contain fewer calories and less fat for good health.
                </p>
              </li> */}
            </ul>
            <img src={careChips} alt="" className="care__img" style={{ backgroundColor: '#fff', borderRadius: 50 }} />
          </div>
        </section>

        <section className="banner">
          <div className="banner__container">
            <ul className="banner__list">
              <li className="banner__item">
                <i class="ri-wireless-charging-line"></i>
                <span>EMPOWERING FUTURE LEADERS</span>
              </li>
              <li className="banner__item">
                <i class="ri-code-s-slash-line"></i>
                <span>INNOVATIVE SKILL BUILDING</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="products section" id="products">
          {/* Products content goes here */}
        </section>

        {/* programs section */}
        <section className="programs section" id="programs">
          <h2 className="section__title">OUR PROGRAMS</h2>
          <div className="programs__container container grid">
            <div className="programs__item">
              <h3 className="programs__title">Skill Development Workshops</h3>
              <p className="programs__description">
                Our interactive workshops cover a wide range of topics, from technical skills like coding and data analysis to soft skills such as communication and leadership. Each workshop is designed to be hands-on, ensuring that participants can apply what they learn in real-world scenarios.
              </p>
            </div>
            <div className="programs__item">
              <h3 className="programs__title">Internships and Project Assistance</h3>
              <p className="programs__description">
                We partner with industry leaders to offer internships and project assistance, providing college students with invaluable experience and exposure to the professional world. These opportunities help students build their resumes and develop a network of professional contacts.
              </p>
            </div>
            <div className="programs__item">
              <h3 className="programs__title">Professional Development Courses</h3>
              <p className="programs__description">
                Our courses for employees are designed to help them advance in their careers. We offer training in leadership, project management, advanced technical skills, and more. These courses are tailored to meet the needs of professionals looking to enhance their expertise and achieve their career goals.
              </p>
            </div>
            <div className="programs__item">
              <h3 className="programs__title">Online Courses</h3>
              <p className="programs__description">
                Our online courses offer flexible learning options for both students and employees who want to gain new skills at their own pace. With expert instructors and engaging content, our courses cover the latest trends and technologies in various fields.
              </p>
            </div>
            <div className="programs__item">
              <h3 className="programs__title">One-Day Workshops</h3>
              <p className="programs__description">
                Our one-day workshops are intensive sessions focused on specific skills or topics. These workshops are perfect for individuals who want to dive deep into a subject and gain practical knowledge in a short amount of time.
              </p>
            </div>
          </div>
        </section>

        {/* join us section */}
        <section class="join-us">
          <div class="container">
            <h2 class="section__title">Join Us</h2>
            <div class="join-us__content">
              <h3 class="join-us__title">Become a Member</h3>
              <p class="join-us__description">
                Join our community of motivated students, professionals, and industry experts. As a member, you'll have access to all of our programs, events, and resources. Whether you're looking to enhance your skills, network with industry experts, or gain hands-on experience, SkillSetGlobal has something for you.
              </p>
              <a onClick={handleAddMemberClick} class="button1" style={{cursor:'pointer'}} >Join</a>
            </div>
          </div>
        </section>

        {/* get involved section */}
        <section class="get-involved">
          <div class="container get-involved__container">
            <div class="get-involved__content">
              <h2 class="get-involved__title">Get Involved</h2>
              <p class="get-involved__description">
                As a Student: Sign up for our programs and start your journey towards a successful career.
              </p>
              <p class="get-involved__description">
                As a Professional: Enhance your career with our professional development courses and workshops.
              </p>
              <p class="get-involved__description">
                As a Partner: Collaborate with us to provide opportunities for students and employees and contribute to their development.
              </p>
              <p class="get-involved__description">
                As a Mentor: Share your expertise and experience with the next generation of leaders.
              </p>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section class="faq" id="faq">
          <div class="faq__container">
            <h2 class="faq__title">Frequently Asked Questions</h2>
            <div class="faq__item">
              <h3 class="faq__question">What is SkillSetGlobal?</h3>
              <p class="faq__answer">
                SkillSetGlobal is an organization dedicated to skill development for college students and employees. We offer a range of programs, including workshops, internships, professional development courses, and online courses, to help individuals gain the skills they need for their careers.
              </p>
            </div>
            <div class="faq__item">
              <h3 class="faq__question">How can I join SkillSetGlobal?</h3>
              <p class="faq__answer">
                You can join SkillSetGlobal by signing up for our programs through our website. Membership provides access to all our resources, events, and networking opportunities.
              </p>
            </div>
            <div class="faq__item">
              <h3 class="faq__question">What types of programs do you offer?</h3>
              <p class="faq__answer">
                We offer skill development workshops, internships, project assistance, professional development courses, online courses, and one-day workshops. Our programs cover both technical and soft skills to provide a well-rounded education.
              </p>
            </div>
            <div class="faq__item">
              <h3 class="faq__question">Can I become a mentor or partner with SkillSetGlobal?</h3>
              <p class="faq__answer">
                Yes! We are always looking for experienced professionals to mentor our participants and for organizations to partner with us. Please contact us for more information on how to get involved.
              </p>
            </div>
          </div>
        </section>


        {/* contact section */}
        <section className="contact section" id="contact">
          <div className="contact__container container">
            <h2 className="section__title">CONTACT US</h2>
            <div className="contact__content grid">
              <div className="contact__data grid">
                <div>
                  <h3 className="contact__title">Write to us</h3>
                  <div className="contact__social">
                    <a href="#" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                    <a href="mailto:info@skillsetglobal.com" target="_blank">
                      <i className="ri-mail-fill"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="contact__title">Call us</h3>
                  <address className="contact__info">
                    +91 9995197981 <br />
                  </address>
                </div>
                <div>
                  <h3 className="contact__title">Find us here</h3>
                  <address className="contact__info">
                    123 SkillSetGlobal Lane <br /> Innovation City, Cochin
                  </address>
                </div>
              </div>
              <img src={contactMan} alt="" className="contact__img" />
            </div>
            <img src={shrimp} alt="image" className="contact__shrimp" />
            <img src={crab} alt="image" className="contact__crab" />
            <img src={meat} alt="image" className="contact__meat" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container grid">
          <a href="#" className="footer__logo">SKILLSET GLOBAL</a>

          <div className="footer__content grid">
            <a href="#" className="footer__link"></a>
            <a href="#" className="footer__link"></a>

            <span className="footer__copy">
              &#169; All Rights Reserved By Skillset Global
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
