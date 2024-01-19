import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const Register = ()=> {
  let navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const { onClickRegister } = useContext(NoteContext);

  const onClick = async () => {
    (await onClickRegister(
      input.fname,
      input.lname,
      input.email,
      input.password,
      input.confirmPassword
    ))
      ? navigate("/login")
      : navigate("/register");
  };

  const [input, setInput] = useState({ fname:"" ,lname:"", email: "", password: "", confirmPassword: "" })

  useEffect(()=>{
    setIsFormValid(input.fname && input.lname && input.email && input.password && input.confirmPassword);
  },[input]);

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}

  const Damian = (window.innerWidth < 768)?"unset":"61rem";
  const Wayne = (window.innerWidth < 768)?"unset":"31rem";

  return (
    <MDBContainer className="my-5" style={{height:Wayne,width:Damian}}>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage style={{height:"33.7rem",width:"61rem"}} src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <h3 className="fw-normal pb-1" style={{letterSpacing: '1px'}}>Sign into your account</h3>
                <MDBInput wrapperClass='mb-1 me-2' label='First Name' name='fname' id='fname' value={input.fname} onChange={onChange} type='text'/>
                <MDBInput wrapperClass='mb-1' label='Last Name' name='lname' id='lname' value={input.lname} onChange={onChange} type='text'/>
                <MDBInput wrapperClass='mb-1' label='Email address' name='email' id='email' value={input.email} onChange={onChange} type='email'/>
                <MDBInput wrapperClass='mb-1' label='Password' name='password' id='password' value={input.password} onChange={onChange} type='password'/>
                <MDBInput wrapperClass='mb-1' label='Confirm Password' name='confirmPassword' id='confirmPassword' value={input.confirmPassword} onChange={onChange} type='password'/>

              <Button className="mt-1 mb-1 px-5 btn-dark" disabled={!isFormValid} onClick={onClick}>Sign Up</Button>
              <p className="pb-lg-2 my-2" style={{color: '#393f81'}}>Already have an account? <Link to="/login" style={{color: '#393f81'}}>Sign in</Link></p>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;