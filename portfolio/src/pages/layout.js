import { Outlet} from "react-router-dom";
import React from "react";
import Nav from "../Nav"
import "../App.css";
const Layout = () => {
  return (
    <>
      <div className="App">
    <Nav />
      <header className="header">
        <h1 className="header__title">Welcome to my site!</h1>
        <p className="header__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          dignissim magna, ut tristique ipsum pulvinar vel.
        </p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section__title">Section 1</h2>
          <p className="section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            dignissim magna, ut tristique ipsum pulvinar vel.
          </p>
        </section>
        <section className="section">
          <h2 className="section__title">Section 2</h2>
          <p className="section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            dignissim magna, ut tristique ipsum pulvinar vel.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">&copy; 2023 My Site. All rights reserved.</p>
      </footer>
    </div>

      {/* <Outlet /> */}
    </>
  )
};

export default Layout;
