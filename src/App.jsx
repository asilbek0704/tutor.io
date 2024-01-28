import { NotFound } from "./routes/404"
import { Home } from "./routes/Home";
import { Registration } from "./routes/Registration";
import { Login } from "./routes/Login";
import { Result } from "./routes/Result"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chats } from "./routes/Chats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        <Route path="result/:subject" element={<Result />} />
        <Route path="chats" element={<Chats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
