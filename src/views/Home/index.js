import React from 'react';

const Home = () => {
//mesma funcionalidade só escrita de forma diferente
//function Home() {
    return (
      <div className="content-home">
        <div>
          Inserir um slide
        </div>
        <div>
          <div>
            Inserir cards maiores para jogos em destaque
          </div>
        </div>
        <footer id="footer">

          <nav>
            <a href="some-url" target="_blank">Nossos Games</a>
            <a href="some-url">Novos Lançamentos </a>
            <a href="some-url">Fale conosco</a>
          </nav>

          &copy; 2020 Some copyright message.

          <address>
            email <a href="adriano.mss@outlok.com">adriano.mss@outlok.com</a>
          </address>
        </footer>

      </div>
    );
};

export default Home;
