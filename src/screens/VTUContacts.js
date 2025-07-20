import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const contactData = [
  {
    id: 1,
    region: 'UG Courses Bangalore Region',
    phone: '0831-2498139',
    email: 'exambangalore[@]vtu.ac.in',
  },
  {
    id: 2,
    region: 'UG Courses Belgaum Region',
    phone: '0831-2498156',
    email: 'exambelgaum[@]vtu.ac.in',
  },
  {
    id: 3,
    region: 'UG Courses Gulbarga Region',
    phone: '0831-2498156',
    email: 'examgulbarga[@]vtu.ac.in',
  },
  {
    id: 4,
    region: 'UG Courses Mysore Region',
    phone: '0831-2498150',
    email: 'exammysore[@]vtu.ac.in',
  },
  {
    id: 5,
    region: 'PG Courses All Regions',
    phone: '0831-2498140',
    email: 'exampg[@]vtu.ac.in',
  },
  {
    id: 6,
    region: 'Ph.D & M.Sc (engg) by research',
    phone: '0831-2498142',
    email: 'research[@]vtu.ac.in',
  },
  {
    id: 7,
    region: 'Marks card / Grade card',
    phone: '0831-2498138',
    email: 'markscardenquiry[@]vtu.ac.in',
  },
  {
    id: 8,
    region: 'Examination matters Autonomous section',
    phone: '0831-2498255',
    email: 'examautonomous[@]vtu.ac.in',
  },
  {
    id: 9,
    region: 'General helpline numbers of Examination Section',
    phone: '0831-2498131, 0831-2498136',
    email: null,
  },
  {
    id: 10,
    region: 'Personal attention of registrar (Evaluation)',
    phone: null,
    email: 're[@]vtu.ac.in',
  },
  {
    id: 11,
    region: 'EDDTS Services',
    phone: '0831-2498136/256',
    email: 'eddts[@]vtu.ac.in',
  },
  {
    id: 12,
    region: 'Migration Certificate',
    phone: '0831-2498136',
    email: 'migration[@]vtu.ac.in',
  },
  {
    id: 13,
    region: 'Verification of Genuineness of Documents',
    phone: '0831-2498136',
    email: 're[@]vtu.ac.in',
  },
  {
    id: 14,
    region: 'Results',
    phone: '0831-2498139/140/156/150',
    email: 'examresults[@]vtu.ac.in',
  },
  {
    id: 15,
    region: 'Examination Remuneration Bills',
    phone: '0831-2498152',
    email: 'examfol[@]vtu.ac.in',
  },
];

const VTUContacts = () => {
  return (
    <>
    <Container className="my-4">
      <Row >
        {contactData.map((contact) => (
          <Col key={contact.id} sm={12} md={6} lg={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body className='vtu-enquiry'>
                <Card.Title><strong>{contact.id}</strong></Card.Title><hr/>
                <Card.Text>
                  Queries in respect of examination matters <b>{contact.region}</b>*
                </Card.Text>
                <Card.Text>
                  <FaPhoneAlt style={{ color: '#f39c12' }} /> <span className="ms-2">{contact.phone}</span>
                </Card.Text>
                <Card.Text>
                  <FaEnvelope style={{ color: '#f39c12' }} /> <span className="ms-2">{contact.email}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
    <Row>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4960612344908!2d74.4634341!3d15.7777762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6589aaaaaaa9%3A0xce6d455b3335886!2sVisvesvaraya%20Technological%20University%20(VTU)!5e0!3m2!1sen!2sin!4v1753041993834!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
     </Row>
     </>
  );
};

export default VTUContacts;
