import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                type="number"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                type="number"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/57244916?s=460&v=4" alt="Apokrypho"/>
              <div className="user-info">
              <strong>Apokrypho</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
            </header>
            <p>Amante da tecnologia, Desenvolvedor, Estudante de segurança.</p>
            <a href="https://github.com/Apokrypho">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/57244916?s=460&v=4" alt="Apokrypho"/>
              <div className="user-info">
              <strong>Apokrypho</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
            </header>
            <p>Amante da tecnologia, Desenvolvedor, Estudante de segurança.</p>
            <a href="https://github.com/Apokrypho">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/57244916?s=460&v=4" alt="Apokrypho"/>
              <div className="user-info">
              <strong>Apokrypho</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
            </header>
            <p>Amante da tecnologia, Desenvolvedor, Estudante de segurança.</p>
            <a href="https://github.com/Apokrypho">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/57244916?s=460&v=4" alt="Apokrypho"/>
              <div className="user-info">
              <strong>Apokrypho</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
            </header>
            <p>Amante da tecnologia, Desenvolvedor, Estudante de segurança.</p>
            <a href="https://github.com/Apokrypho">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;