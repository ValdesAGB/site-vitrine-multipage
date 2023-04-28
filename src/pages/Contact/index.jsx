import React from 'react'
import { contactElements, networks } from '../../data'

function Contact() {
  return (
    <React.Fragment>
      <section className="row p-5 " style={{ backgroundColor: '#f7f9f8' }}>
        <div className="container p-5 ">
          <h1 className="fw-bold">Contacez-nous</h1>
          <div className="row align-items-center">
            <div className="col-6 ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                minima, dignissimos corporis cum sint saepe quisquam delectus,
                quam culpa rerum nihil dicta. Architecto alias accusantium,
                soluta natus consectetur possimus temporibus.
              </p>
              <div className="row my-4">
                {networks.map(({ id, icone }) => (
                  <i className={`col-1 fs-3 bi ${icone}`} key={id}></i>
                ))}
              </div>
              <div>
                {contactElements.map(({ id, title, text }) => (
                  <div>
                    <h5 className="fw-bold">{title}</h5>
                    <p className="col-6">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-6">
              <form>
                <div class="mb-3 row">
                  <div className="col-6">
                    <label for="exampleInputEmail1" class="form-label">
                      Nom*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="col-6">
                    <label for="exampleInputEmail1" class="form-label">
                      Mail*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Sujet
                  </label>
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
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
