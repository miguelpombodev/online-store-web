import { Outlet } from "react-router-dom";
import { PageContainer } from "./styles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DefaultLayout() {
  return (
    <PageContainer>
      <Header />
      <Outlet />
      <Footer />
    </PageContainer>
  );
}
