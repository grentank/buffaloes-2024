import axios from 'axios';
import React, { useState } from 'react';
import {
  Col, Form, Image, Row,
} from 'react-bootstrap';

export default function ProfilePicEdit() {
  const [profilePic, setProfilePic] = useState('/images/no-profile-pic.jpg');
  const editProfilePic = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const res = await axios.patch('/api/account/profilepic', formData);
    if (res.status === 200) {
      setProfilePic(res.data.image);
    }
  };
  return (
    <Row>
      <Col xs={12}>
        <Image src={profilePic} style={{ width: '100%' }} />
      </Col>
      <Col xs={12}>
        <Form onSubmit={editProfilePic}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Загрузить фото</Form.Label>
            <Form.Control name="img" type="file" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="submit" value="Обновить" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
