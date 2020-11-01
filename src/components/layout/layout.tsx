import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import { Footer } from "../footer";

const Container = styled.div.attrs({
  // Sticky footer
  // https://stackoverflow.com/questions/59812003/make-footer-fixed-on-the-bottom-with-tailwindcss
  className: "flex flex-col h-screen justify-between",
})``;

const Separator = styled.hr.attrs({
  className: "border-b border-gray-100 opacity-25 my-0 py-0",
})``;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Separator />
      <main className="flex flex-grow">
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export { Layout };
