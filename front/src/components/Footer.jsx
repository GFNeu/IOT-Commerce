import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/fa";

import logo from "../../src/assets/logo3.png";

const Footer = () => {
  return (
    <div>
      <footer class="mt-5 bg-primary py-2 text-light">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-4 text-center pt-5 my-2">
            <h3>Seguinos en:</h3>
            <h4>FACEBOOK- INSTAGRAM</h4>
            <div className="d-flex justify-content-center">
              <div className="p-3">
                <a>
                  {" "}
                  <FaFacebookSquare style={{ fontSize: 40 }} />
                </a>
              </div>
              <div className="p-3">
                <a>
                  <FaInstagramSquare style={{ fontSize: 40 }} />
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 text-center pt-1 d-flex align-items-center justify-content-center">
            <img src={logo} width="300px" />
          </div>

          <div className="col-sm-12 col-md-3 mt-5 text-center">
            <div className=" ">
              <div>
                <h8 className="textNav greenContacto my-2">DIRECCIÓN</h8>
                <p className="font-weight-light ">
                  <a
                    href="https://www.google.com/maps/dir/-26.8101893,-65.2026019/buenos+aires+plataforma+5+google+map/@-30.6221439,-66.4010069,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bcb5858f2fea89:0x78546381071fb889!2m2!1d-58.4408567!2d-34.5887037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-light"
                  >
                    <h7 className="">Castillo 1332, C1414 CABA</h7>
                    <p>Buenos Aires Argentina</p>
                  </a>
                </p>

                <h7 className="text34">Contacto</h7>
                <p className="font-weight-light ">
                  <a
                    href="https://wa.me/5493815195446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letrasfooter text-light"
                  >
                    <h7 className="mb-3">+5411123456789</h7>
                    <h7 className=" letrasfooter">
                      <br />
                      iotcommerce@tienda.com.ar
                    </h7>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center no-gutters">
          <div class="col-sm-12">
            <p>&copy;Todos los derechos reservados</p>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;