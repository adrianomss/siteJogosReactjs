import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../views/Home';
import JogosRoutes from '../routes/jogos.routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Layout>
        <Route path="/" element={<Home />} />
        <Route path="jogos/*" element={<JogosRoutes />} />
      </Layout>
      {
        //rota coringa, qualquer endereço que não for algum dos acima cairá nessa rota redirecionando para o / => home
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
