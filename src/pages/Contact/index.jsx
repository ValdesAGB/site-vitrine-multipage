import React from 'react'
import { contactElements, networks } from '../../data'

function Contact() {
  return (
    <React.Fragment>
      <section className="row p-5 " style={{ backgroundColor: '#f7f9f8' }}>
        <div className="container p-0 p-md-5 ">
          <h1 className="fw-bold">Contacez-nous</h1>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0 ">
              <p className="mt-3 mt-md-0 text-center text-md-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                minima, dignissimos corporis cum sint saepe quisquam delectus,
                quam culpa rerum nihil dicta.
                <br />
                <br />
                Architecto alias accusantium, soluta natus consectetur possimus
                temporibus.
              </p>
              <div className="row my-4 ">
                {networks.map(({ id, icone }) => (
                  <i
                    className={`col col-md-2 col-xl-1 fs-3 bi ${icone}`}
                    key={id}
                  ></i>
                ))}
              </div>
              <div>
                {contactElements.map(({ id, title, text }) => (
                  <div key={id}>
                    <h5 className="fw-bold">{title}</h5>
                    <p className="col-12 col-md-6">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <form>
                <div className="mb-3 row">
                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nom*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Mail*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Sujet
                  </label>
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="mb-3">* important</div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  Envoyé
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
