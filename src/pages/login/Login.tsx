import {FC, FormEvent, useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Navigate} from 'react-router-dom';

import classnames from './Login.module.css';

type Props = {
  userInfo: string;
  onLoginSucceeded: (token: string) => void;
};

// let renderCount: number = 0;

const Login: FC<Props> = ({userInfo, onLoginSucceeded}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', {
        username: email,
        password: password,
      })
      .then((res) => {
        if (res.data.error) {
          throw new Error(res.data.error);
        } else {
          const token = res.data.data;
          onLoginSucceeded(token);
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  return userInfo ? (
    <Navigate to="/people" />
  ) : (
    <Row className={classnames['high-light']}>
      <Col md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
        <div className="pt-5">
          <h2 className="text-center">Sign In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button type="submit" block variant="primary" className="mt-4">
              Let's Go
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
