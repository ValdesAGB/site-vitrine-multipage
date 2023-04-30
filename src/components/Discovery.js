import React from 'react'
import { advice, needed } from '../data'
import styled from 'styled-components'

function Discovery() {
  const Section = styled.section`
    background-color: #e0e5eb;
  `
  return (
    <React.Fragment>
      <Section className="py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6  text-center">
            <h1 className="fw-bold">
              Découvrez et répondez aux besoins des clients.
            </h1>
            <h5 className="fw-light">
              La plupart des équipes cherchent à comprendre les besoins des
              clients, mais ne sont pas en mesure d'embaucher un chercheur
              dédié. Maintenant, il y a une autre option.
            </h5>
          </div>
        </div>

        <div className="row justify-content-center mx-2 mx-md-0">
          {needed.slice(0, 2).map(({ id, title }) => (
            <div
              className="card col-12 col-md-5 col-lg-4 border-0 rounded-4 m-2 p-0 my-3 my-md-0"
              key={id}
              style={{ backgroundColor: '#34c1f4' }}
            >
              <div className="card-body bg-white ms-3 rounded-4">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="card-link text-dark">
                  SUITE
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h1 className="fw-bold">
              Nous conseillons les organisations dans leurs stratégies de
              création de valeur
            </h1>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            {advice.map(({ id, icone, title }) => (
              <div
                className="card col-12 col-md-6 col-lg my-2 my-lg-0 mx-2 border-0 rounded-4 "
                key={id}
              >
                <div className="card-body bg-white  rounded-4  text-center">
                  <i
                    className={`bi fs- ${icone}`}
                    style={{ fontSize: '3em' }}
                  ></i>
                  <h5 className="card-title fw-bold my-2">{title}</h5>
                  <p className="card-text my-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <a href="#" className="card-link text-dark">
                    SUITE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Discovery
