import React, { Component } from "react";

import { _logo } from "./logo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultCard: false,
      nomClient: "ABDELAZIZ EL ARASSI",
      info: "OK",
      soldeParking: "1732.95",
      heureFinParking: "2019-08-04 16:31:40",
      montantAmende: "0.00"
    };
  }

  _submit = (e, status) => {
    e.preventDefault();
    this.setState({ resultCard: status });
  };

  render() {
    const {
      nomClient,
      info,
      soldeParking,
      heureFinParking,
      montantAmende
    } = this.state;
    return (
      <div className="page">
        <div class="text-center my-5">
          <img class="h-8" alt="" src={_logo} />
        </div>
        <div className="row mx-0">
          <div>
            {!this.state.resultCard && (
              <form
                className="card mx-auto"
                action=""
                method="post"
                // onSubmit={() => this._submit()}
              >
                <div className="card-body">
                  {false && <i class="fe fe-ICON_NAME" />}
                  <h3 className="page-title text-color-primary font-weight-normal mb-5 text-center text-uppercase">
                    Sweet Park Interface
                  </h3>
                  <div className="form-group">
                    <label className="form-label">
                      Mobile de l'utilisateur :
                    </label>
                    <input
                      className="form-control"
                      placeholder="Numéro du mobile"
                      type="tel"
                      id="mobUser"
                      name="mobUser"
                      pattern="[0-9]{10}"
                      maxlength="10"
                      // required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Recharge Parking :</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Montant en FCFA, FCFA/dhs etc.."
                        type="number"
                        id="RechPark"
                        name="rechPark"
                        pattern="[0-9]"
                        maxlength="5"
                        // required
                      />
                      <span class="input-group-append">
                        <span class="input-group-text">DH</span>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Paiement Amende :</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Montant en FCFA, FCFA/dhs etc.."
                        type="number"
                        id="PaieAmende"
                        name="paieAmende"
                        pattern="[0-9]"
                        maxlength="5"
                        // required
                      />
                      <span class="input-group-append">
                        <span class="input-group-text">DH</span>
                      </span>
                    </div>
                  </div>
                  <div className="form-footer">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={e => this._submit(e, true)}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            )}
            {this.state.resultCard && (
              <div className="card mx-auto">
                <div className="card-body p-6">
                  {false && <i class="fe fe-ICON_NAME" />}
                  <h3 className="page-title text-color-primary font-weight-normal mb-5 text-center text-uppercase">
                    SWEET PARK: DONNEES CLIENT
                  </h3>
                  <div className="form-group">
                    <label className="form-label">Nom du client</label>
                    <h6 class="ml-2 text-color-primary">{nomClient}</h6>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Info</label>
                    <h6 class="ml-2 text-color-primary">{info}</h6>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Solde Parking(FCFA/dhs)
                    </label>
                    <h6 class="ml-2 text-color-primary">{soldeParking}</h6>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Heure de Fin de Parking
                    </label>
                    <h6 class="ml-2 text-color-primary">{heureFinParking}</h6>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Montant Amende(FCFA/dhs)
                    </label>
                    <h6 class="ml-2 text-color-primary">{montantAmende}</h6>
                  </div>

                  <div className="form-footer">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={e => this._submit(e, false)}
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class="text-center text-white">Qweb Technology</div>
        <a
          href="https://github.com/aelarassi"
          class="text-center text-color-primary pb-5"
        >
          aelarassi ©
        </a>
      </div>
    );
  }
}

export default App;
