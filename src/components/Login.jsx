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

const Login = ()=> {
  let navigate = useNavigate();
  const { onClickLogin } = useContext(NoteContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" })

  const onClick = async () => {
    (await onClickLogin(input.email, input.password))
      ? navigate("/")
      : navigate("/login");
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    setIsFormValid(input.email && input.password);
  },[input]);

  const Damian = (window.innerWidth < 768)?"unset":"61rem";
  const Wayne = (window.innerWidth < 768)?"unset":"31rem";

return (
    <MDBContainer className="my-5" style={{height:Wayne,width:Damian}}>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage style={{height:"33.5rem",width:"61rem"}} src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h3>
                <MDBInput wrapperClass='mb-4' label='Email address' value={input.email} id='email' autoComplete='true' name='email' onChange={onChange} type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' value={input.password} id='password' autoComplete='true' name='password' onChange={onChange} type='password' size="lg"/>
              <Button className="mb-4 px-5 btn-dark" disabled={!isFormValid} onClick={onClick} size='lg'>Login</Button>
              <Link className="small text-muted my-2" to="#!">Forgot password?</Link>
              <p className="mb-5 pb-lg-2 my-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/register" style={{color: '#393f81'}}>Register here</Link></p>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;