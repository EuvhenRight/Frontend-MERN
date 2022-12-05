import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route to={"/"} element={<Home />} />
          <Route to={"/posts/:id"} element={<FullPost />} />
          <Route to={"/add-post"} element={<AddPost />} />
          <Route to={"/login"} element={<Login />} />
          <Route to={"/register"} element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
