import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Modal, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function SalaMx() {
  useEffect(() => {
    setModalShow(true);
  }, []);

  let [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <iframe
            id="JotFormIFrame-212609285006048"
            title="Certificado de Asistencia - Distribuidores"
            onload="window.parent.scrollTo(0,0)"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/212609285006048"
            frameBorder={0}
            style={{ minWidth: "100%", height: 439, border: "none" }}
            scrolling="no"
          ></iframe>
          <br />
          <small className="frase-modal">
            Es necesario finalizar el formulario antes de cerrar de lo contrario
            no obtendra su asistencia
          </small>
          <Button className="mb-3" onClick={props.onHide}>
            cerrar
          </Button>
          <br />
        </Modal>
      </div>
    );
  }
  return (
    <>
      <Fade>
        <section className="sala">
          <div className="contenedor">
            <h1>Sala MX</h1>

            <div className="contenedor-video">
              {/* Español */}
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                 title="SalaMx"
                  src="https://vimeo.com/event/1384779/embed"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Ingles */}

              {/* <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://vimeo.com/event/1384779/embed" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} /></div> */}
            </div>

            <Iframe
              className="chat"
              src="https://minnit.chat/Distribuidores2021?embed&&nickname="
              allowTransparency="true"
            />

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </section>
      </Fade>
    </>
  );
}

export default SalaMx;
