import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Modal, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function SalaMx() {
  useEffect(() => {
    setModalShow(true);
  },[]);
  
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

<iframe id="JotFormIFrame-212609285006048" title="Certificado de Asistencia - Distribuidores" onload="window.parent.scrollTo(0,0)"  allow="geolocation; microphone; camera" src="https://form.jotform.com/212609285006048" frameBorder={0} style={{minWidth: '100%', height: 539, border: 'none'}} scrolling="no">
</iframe>

          <Button onClick={props.onHide}>cerrar</Button>
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
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="Sala Mexico"
                  src="https://player.vimeo.com/video/617945710?h=23eec85a39&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: "600px",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="video"
                />
              </div>
              <p className="disapear">
                <a href="https://vimeo.com/617945710">
                  Test Distribuidores 2021
                </a>
                from
                <a href="https://vimeo.com/user126120699">GoPharma Streaming</a>
                on <a href="https://vimeo.com">Vimeo</a>.
              </p>
            </div>

            <Iframe
              className="chat"
              src="https://minnit.chat/MX?embed&&nickname="
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
