import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {Outlet } from 'react-router-dom';
import { MyContext } from "./common";
import React, {useContext} from 'react';

 export const  NavBar = ()=>{
  const {order,setorder,logindata,setlogin} = useContext(MyContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const {login} = useContext(MyContext)

        const loginnnn = ()=>{
            if(login){
                localStorage.removeItem("token")
                navigate("/Login")
                setlogin(false)
            }else{
                 navigate("/Login")
            }
        }
    return(
        <>
      
        <Navbar bg="light" variant="light" className="navsbar border-bottom" >
        <Container>
          <Navbar.Brand href="/" className="font-weight-bold">Behance</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/discover" className="navname font-weight-bold">Discover</Nav.Link>
            <Nav.Link as={Link} to="/live" className="navname font-weight-bold">LiveStream</Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="navname font-weight-bold">Jobs</Nav.Link>
          </Nav>
          <Nav className="me-auto">
          <Nav.Link   onClick={() =>loginnnn()} className ="logins border">{!login?"login":"logout"}</Nav.Link>
          <Nav.Link   onClick={() =>navigate("/signin")}className ="signs border">SignIn</Nav.Link>
          <Nav.Link  className="navname font-weight-bold text-center " style={{marginLeft:30}}><i class="fa fa-adn fa-2x " aria-hidden="true"></i>Adobe</Nav.Link>
          </Nav>
        </Container>  
        
      </Navbar>
      
      <div>
         <Outlet/>
     </div>
     
         
        </>
    )
}