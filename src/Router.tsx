import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { UserProfile } from "./pages/UserProfile";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
