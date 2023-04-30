import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function APropos() {
  const Section = styled.section`
    background-color: #1738a1;
    color: white;
  `

  const Button = styled(Link)`
    &:hover {
      color: black;
    }
  `
  const H1 = styled.h1`
    @media (max-width: 320px) {
      font-size: em;
    }
  `

  const DIV = styled.div`
    @media (max-width: 767px) {
      height: 370px;
    }
  `

  return (
    <React.Fragment>
      <Section>
        <div className="text-center my-5">
          <h2 className="fw-bold">Au sujet de notre compagnie</h2>
        </div>
        <div className="row justify-content-center">
          <div className="row col-12 col-md-10">
            <p className="fw-light  ">
              I help agencies & brands to turn their ideas into designs. My
              heart is creativity and design and my head has always been
              business led. Which to this day has served me very well! Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 row">
            <Button
              to="/contact"
              className="btn p-4 rounded-5 bg-white border-0 col-12    mx-0 mx-md-1 my-3 my-m-0"
            >
              NOUS CONTACTER
            </Button>
            <Link
              to="/conception-travail/#conceptiontravail"
              className="btn  fw-bolder rounded-5 text-white border border-white border-5 col-12 p-3 px-xl-"
            >
              VOIR LE TRAVAIL DE LA CONCEPTION
            </Link>
          </div>
        </div>

        <div className="row m-2 m-md-5">
          <div className="col-12 col-md bg-white rounded-2 text-dark text-start me-0 me-md-5 p-2 p-md-5 ">
            <H1 className=" fw-bold ">
              Nous aidons et résolvons votre problème commercial.
            </H1>
            <div
              className="p-1 mb-3 col-5"
              style={{ backgroundColor: '#34c1f4' }}
            ></div>
          </div>

          <DIV className="col bg-white rounded-2 text-dark text-start p-4 mt-3 mt-md-0">
            <p className="mt-3">
              Pretium aenean pharetra magna ac placerat vestibulum lectus
              mauris. Placerat vestibulum lectus mauris ultrices eros in.
              Viverra nibh cras pulvinar mattis nunc sed.
            </p>
            <button
              className="btn border-0 text-white p-2 col-12 col-xl-5 rounded-5 fw-bold"
              style={{ backgroundColor: '#34c1f4' }}
            >
              LIRE LA SUITE
            </button>
          </DIV>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default APropos
/*


 

  <div className="row m-5">
              <div className="col bg-white rounded-2 text-dark text-start me-5 p-5">
                <h1 className=" fw-bold" style={{ fontSize: '4em' }}>
                  Nous aidons et résolvons votre problème commercial.
                </h1>
              </div>
              <div className="col bg-white rounded-2 text-dark text-start p-4">
                <p>
                  Pretium aenean pharetra magna ac placerat vestibulum lectus
                  mauris. Placerat vestibulum lectus mauris ultrices eros in.
                  Viverra nibh cras pulvinar mattis nunc sed.
                </p>
                <button
                  className="btn border-0 text-white p-2 col-4 rounded-5 fw-bold"
                  style={{ backgroundColor: '#34c1f4' }}
                >
                  LIRE LA SUITE
                </button>
              </div>
            </div>
*/
