import React, { Component } from "react";

class App extends Component {
  state = {
    resultCard: false
  };
  render() {
    return (
      <div className="page">
        <div class="text-center my-5">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            class="h-8"
            alt=""
          />
        </div>
        <div className="row mx-0">
          <div>
            <form className="card mx-auto" action="" method="post">
              <div className="card-body">
                {false && <i class="fe fe-ICON_NAME" />}
                <h3 className="page-title text-color-primary font-weight-normal mb-5 text-center text-uppercase">
                  Sweet Park Interface 1
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
                    pattern="[0-9]{9}"
                    maxlength="10"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Recharge Parking :</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Montant en Dhs"
                      type="tel"
                      id="RechPark"
                      name="rechPark"
                      pattern="[0-9]"
                      maxlength="5"
                      required
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
                      placeholder="Montant en Dhs"
                      type="tel"
                      id="PaieAmende"
                      name="paieAmende"
                      pattern="[0-9]"
                      maxlength="5"
                      required
                    />
                    <span class="input-group-append">
                      <span class="input-group-text">DH</span>
                    </span>
                  </div>
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary btn-block">
                    Send
                  </button>
                </div>
              </div>
            </form>

            {this.state.resultCard && (
              <form className="card mx-auto" action="" method="post">
                <div className="card-body p-6">
                  {false && <i class="fe fe-ICON_NAME" />}
                  <h3 className="page-title text-color-primary font-weight-normal mb-5 text-center text-uppercase">
                    Sweet Park Interface 1
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
                      pattern="[0-9]{9}"
                      maxlength="10"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Recharge Parking :</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Montant en Dhs"
                        type="tel"
                        id="RechPark"
                        name="rechPark"
                        pattern="[0-9]"
                        maxlength="5"
                        required
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
                        placeholder="Montant en Dhs"
                        type="tel"
                        id="PaieAmende"
                        name="paieAmende"
                        pattern="[0-9]"
                        maxlength="5"
                        required
                      />
                      <span class="input-group-append">
                        <span class="input-group-text">DH</span>
                      </span>
                    </div>
                  </div>
                  <div className="form-footer">
                    <button type="submit" className="btn btn-primary btn-block">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        <div class="text-center text-muted mb-3">
          Contact information:
          <a className="ml-3" href="mailto:contact@qweb-tech.com">
            contact@qweb-tech.com
          </a>
        </div>
        <div class="text-center text-white pb-5">Qweb Technology</div>
      </div>
    );
  }
}

export default App;
