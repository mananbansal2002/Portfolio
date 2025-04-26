import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Manan Bansal</span>
            from <span className='purple'>New Delhi, India.</span>
            <br />I am a 2024 graduate from{' '}
            <span className='purple'>
              Galgotias College of Engineering and Technology
            </span>
            .
            <br />
            <br />I have hands-on experience building fullstack applications,
            developing custom tools, and solving real-world problems. I interned
            at <span className='purple'>Chakr Innovation</span> where I worked
            on internal platforms like knowledge banks, form-based PDF
            generators, and task management systems.
            <br />
            <br />
            My core tech stack includes{' '}
            <span className='purple'>
              React, Next.js, Django, DRF, Node.js, MongoDB, and PostgreSQL
            </span>
            . I also have experience working with Cloudinary, Railway, and
            building custom integrations.
          </p>

          <p style={{ color: 'rgb(155 126 172)', marginTop: '20px' }}>
            "Keep building. Keep solving. Keep evolving."
          </p>
          <footer className='blockquote-footer'>Manan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
