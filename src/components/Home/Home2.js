import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

function Home2() {
  return (
    <Container
      fluid
      className='home-about-section'
      id='about'
    >
      <Container>
        <Row>
          <Col
            md={8}
            className='home-about-description'
          >
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className='purple'> C++, Javascript AND DSA. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Technologies and Products </b> and
                also in areas related to{' '}
                <b className='purple'>
                  Frontend Development and Problem Solving.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js and Node.js</b>
              </i>
            </p>
          </Col>
          <Col
            md={4}
            className='myAvtar'
          >
            <Tilt>
              <img
                src={myImg}
                className='img-fluid'
                alt='avatar'
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className='home-about-social'
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/mananbansal2002'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/mananexpert/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.leetcode.com/1806manan'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.codeforces.com/profile/manan.bansal.1806'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <SiCodeforces />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
