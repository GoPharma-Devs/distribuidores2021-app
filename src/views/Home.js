import React, { useContext} from "react";
//import { Link } from "react-router-dom";
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import Event from "../img/event.png";
import CountDown from "../components/CountDown";
import LogoHome from "../img/logo.svg";
import Fade from 'react-reveal/Fade';


//import { FormattedMessage } from "react-intl";
import { LangContext } from "../context/LangContext";

function Home() {
  var imageLogo;
  var EventImage;
  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");
  
  if (lang) {
    if (lang === "es") {
      imageLogo = Imparables;
      EventImage = Evento;
    } else if (lang === "en") {
      imageLogo = Unstoppable;
      EventImage = Event;
    } else {
      imageLogo = Unstoppable;
      EventImage = Event;
    }
  }

  return (
    <Fade> 
    <section className="start">
           
      <br />
      <img className="img-inicio" src={imageLogo} alt="Baxter Somos" />
      <br />
      <Fade  effect="fadeInUp" >
      <CountDown/>
      </Fade>
      <br />
      <br />
      {/* <Link to="/login">
        <button className="btn-primary">
          <FormattedMessage id="button.start" defaultMessage="Entrar" />
        </button>
      </Link> */}
      <img className="img-inicio2" src={EventImage} alt="Baxter Somos" />
      <br />
      <br />

      <img className="img-logo" src={LogoHome} alt="Baxter" />
      <div className="idiomas">
        <button
          className="btn-primary"
          onClick={() => idioma.establecerLenguaje("es")}
        >
          {" "}
          🇲🇽
        </button>
        <button
          className="btn-primary"
          onClick={() => idioma.establecerLenguaje("en")}
        >
          🇬🇧
        </button>
      </div>
      
    </section>
    </Fade>
  );
}

export default Home;
