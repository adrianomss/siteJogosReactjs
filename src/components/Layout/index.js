import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Content from '../../components/Content';

const Layout = () => {
  return (
    <div className="main">
      <header>
        <nav className="links-nav">
        <button className="btnnav"> <Link to='/'>Lobby</Link></button>
        <button className="btnnav"> <Link to='/jogos/arcade'> Jogos Arcade</Link></button>
        <button className="btnnav"><Link to='/jogos/fps'>Jogos FPS</Link></button>
        </nav>
      </header>

      <Content>
        <Outlet />
      </Content>

      <footer>
      </footer>
    </div>
  );
};

export default Layout;
