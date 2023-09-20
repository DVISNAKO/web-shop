import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../util/consts";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}>КупиДевайс</NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button 
              variant={"outline-light"} 
              onClick={() => navigate(ADMIN_ROUTE)} 
              >Админ панель</Button>
              <Button 
              variant={"outline-light"} 
              onClick={() => navigate(LOGIN_ROUTE)} 
              style={{marginLeft: 7}}
              >Выйти</Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Аторизация</Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
