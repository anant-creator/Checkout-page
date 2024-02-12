import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function FormInput({label, name, type}) {
  return (
    <FloatingLabel controlId="floatingInputGrid" label={label}>
        <Form.Control type={type} name={name} placeholder={label} required />
    </FloatingLabel>
  )
}


