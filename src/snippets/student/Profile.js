import React from "react";
import Header from "./Header";

function Profile() {
  return (
    <>
      <Header />
      <main id="main">
        <h2 id="webpageTitle" className="text-center">
          Profile
        </h2>
        <hr />
        <form id="profileForm" action="" method="POST">
          <div className="container-fluid">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10 input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="name"
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Middle Name (Optional)"
                  name="studentProfileMiddleName"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="studentProfileLastName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-6">
                <label className="col-form-label">E-mail Address</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="E-mail Address"
                  name="email"
                  required
                />
              </div>
              <div className="col-sm-6">
                <label className="col-form-label">Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <label className="col-form-label">Address</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Address"
                  name="address"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <label className="col-form-label">Department</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Department"
                  name="department"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <label
                  htmlFor="studentProfilePortfolioLink"
                  className="col-form-label"
                >
                  Portfolio Link
                </label>
                <input
                  id="studentProfilePortfolioLink"
                  className="form-control"
                  type="text"
                  placeholder="Portfolio Link"
                  name="portfolio"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="studentProfileLink" className="col-form-label">
                  Link
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Link"
                  id="studentProfileLink"
                  name="links"
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary float-end"
            type="submit"
          >
            Save Changes
          </button>
          <button className="btn btn-danger float-end me-3" type="button">
            Cancel
          </button>
        </form>
      </main>
    </>
  );
}

export default Profile;
