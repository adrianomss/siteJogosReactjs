import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Arcade from '../views/Jogos/Arcade';
import Fps from '../views/Jogos/Fps';

const JogosRoutes = () => {
  return (
    <Routes>
      {/* http://site.com.br/jogos */}
      {/* <Route path="/" element={<HomeJogos />} /> */}
      {/* http://site.com.br/jogos/arcade */}
      <Route path="arcade" element={<Arcade />} />
      <Route path="fps" element={<Fps />} />
    </Routes>
  );
};

export default JogosRoutes;
