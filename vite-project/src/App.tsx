import logo from "./assets/Logo.png";
import background from "./assets/undraw_Savings_re_eq4w.png";
import calc from "./components/calc";
import { LuArrowLeftRight } from "react-icons/lu";
import "./App.scss";

function App() {
  return (
    <body>
      <header className="header-container">
        <img src={logo} />
        <div className="info__container">
          <span className="info__date-bold">7 de outubro 2023 | 21:00 UTC</span>
          <span className="info__regular">
            Dados de câmbio disponibilizados pela Morningstar.
          </span>
        </div>
      </header>
      <main>
        <section className="home-container">
          <form className="home__form off">
            <div className="row">
              <div className="colum">
                <label>Dólar</label>
                <input
                  className="home__input-number"
                  type="number"
                  placeholder="$ 1,00"
                />
              </div>
              <div className="colum">
                <label>Taxa do Estado</label>
                <input
                  className="home__input-number"
                  type="number"
                  placeholder="0%"
                />
              </div>
            </div>
            <p className="home__text-bold">Tipo de comprar</p>
            <div className="row">
              <div className="home__input">
                <label>Dinheiro</label>
                <input
                  className="home__input-radio"
                  type="radio"
                  name="radio"
                  placeholder="$1,0"
                />
              </div>
              <div className="home__input">
                <label>Cartão</label>
                <input
                  className="home__input-radio"
                  type="radio"
                  name="radio"
                  placeholder="0%"
                />
              </div>
            </div>
            <button className="home__button" onClick={calc}>
              <LuArrowLeftRight className="icon__btn" />
              Converter
            </button>
          </form>
          <div className="home__resultado">
            <button>Voltar</button>
            <p>O resultado do calculo é</p>
            <h1>R$ 255,55</h1>
            <p>Compra no dinheiro taxa de 5,3%</p>
            <p>Cotação do dólar: R$1,00 = R$ 5,20</p>
          </div>
          <div className="home__img">
            <img className="home__background" src={background} />
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
