import React, { useState, useEffect } from 'react';

import { apiRawg } from '../../../services/apiRawg';

const Fps = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({});
  const [page, setPage] = useState(1);

  async function loadGames(page) {
    try {
      setLoading(true);
      const response = await apiRawg.get(`/games`, {
        params: {
          page,
          page_size: 40
        }
      });

      const { data } = response;

      // console.log(data.results);

      //armazenar várias requisições
      //setGames([...games, ...data.results]);
      setGames(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadGame(gameId) {
    try {
      const response = await apiRawg.get(`/games/${gameId}`);

      const { data } = response;
      // console.log(data);
      setGameDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    const prevPage = page - 1 <= 0 ? 1 : page - 1;

    setPage(prevPage);
  }

  async function showGameDetails(gameId) {
    await loadGame(gameId);
    setIsModalOpen(true);
  }

  useEffect(() => {
    loadGames(page);
  }, [page]);

  return (
    // Iniciomodal com detalhes do jogo
    <div>
      {console.log('render')}
      {isModalOpen && (
        <div className="modal">
          <span>{gameDetails.description}</span>
          <span>rating: {gameDetails.rating}</span>
          <span>playtime: {gameDetails.playtime}</span>

          <button className="btnmodal" onClick={() => setIsModalOpen(false)}>Fechar</button>
        </div>
        // Fim modal
      )}
      <div>
 
    <div class="curved-div">
      <h1>Bem Vindo , Jogos do Jão!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lorem, porttitor nec vulputate sit amet, fermentum a purus. Curabitur ullamcorper tellus orci, vel mattis sapien pretium eget. Sed iaculis sit amet elit non molestie. Vestibulum sit amet massa nunc. Donec ante tortor, molestie in augue vitae, vestibulum posuere est. Phasellus sed maximus purus. Praesent justo massa, porta sit amet lacinia non, tincidunt vitae nunc. Praesent sagittis elit at lacus condimentum ullamcorper. Mauris eu leo nec dolor molestie fermentum.
      </p>
    </div>  
        <div className="sessaotext">
          <p>Jogos Mais Baixados</p>
        </div>
        <div className="paginacao">
            <button onClick={prevPage}>Página Anterior</button>
            || Página {page} ||
            {/* {loading && (<div>Carregando</div>)} */}
            <button onClick={nextPage}>Próxima Página</button>
          </div>
      </div>
      {/* Inicio de cards dos jogos que seram buscados na API*/}

      <div className="cards">
        {loading ? (<div>Carregando</div>) : games.map(game => (
          <div className="card2" key={String(game.id)}>

            <a onClick={() => showGameDetails(game.id)}>{game.name}</a>

            <img src={game.background_image} width="200" height="200" />
          </div>
        ))}
      </div>
      {/* Cards fim*/}

      {/* Footer inicio */}
      <footer>

        <nav>
          <a href="some-url" target="_blank">Footer link</a>
          <a href="some-url">Footer link</a>
          <a href="some-url">Footer link</a>
        </nav>

        &copy; 2020 Todos direitos reservados.

        <address>
           <a href="mailto:adriano.mss@outlook.com">Fale conosco</a>
        </address>
      </footer>
      {/* Footer fim */}
    </div>
  );
};

export default Fps;

