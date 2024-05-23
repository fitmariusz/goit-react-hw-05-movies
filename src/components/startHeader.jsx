import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./App.styled";

export const StartHeader = () => {
  return <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>Home</Link>
            <Link to='/movies'>Movies</Link> 
          </nav>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet/>
        </Suspense>
      </Container>
    </>
 };