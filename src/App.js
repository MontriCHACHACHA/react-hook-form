import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <FormGroup className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="Enter password" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>ประเภทสมาชิก</Form.Label>
          <Form.Select {...register("userType")}>
            <option value="1" selected>ทั่วไป</option>
            <option value="2">VIP</option>
            <option value="3">ผู้ดูแลระบบ</option>
          </Form.Select>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Group>
            <Form.Check {...register("remember")} type="checkbox" label="Remember me" />
          </Form.Group>
        </FormGroup>
        <Button type="submit" className="btn-dark">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
