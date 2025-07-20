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
  );
};

export default VTUContacts;
