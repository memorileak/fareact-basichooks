import {FC} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {};

const Login: FC<Props> = () => {
  return (
    <Row>
      <Col md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
        <div className="pt-5">
          <h2 className="text-center">Sign In</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button block variant="primary" type="submit" className="mt-4">
              Let's Go
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
