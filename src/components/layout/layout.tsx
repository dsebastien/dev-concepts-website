import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import { Footer } from "../footer";
import { Helmet } from "react-helmet";

const Container = styled.div.attrs({
  // Sticky footer
  // https://stackoverflow.com/questions/59812003/make-footer-fixed-on-the-bottom-with-tailwindcss
  className: "flex flex-col h-screen justify-between",
})``;

const Separator = styled.hr.attrs({
  className: "border-b-1 border-gray-100 opacity-25 my-0 py-0",
})``;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <script nonce="fcd8146f-6701-4dca-9165-3ed4c96a3b5a">
          {`

        `}
        </script>
      </Helmet>
      <header className="mx-2 sm:mx-0">
        <Header />
      </header>
      <Separator />
      <main className="flex flex-grow mt-5 mx-2 sm:mx-0">{children}</main>
      <Footer />
    </Container>
  );
};

export { Layout };
