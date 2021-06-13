import React from "react";
import "../../css/ManageUsers.css";
import Header from "./Header";

function PendingPlacementCoordinators() {
  return (
    <>
      <h3 id="webpageTitle" className="text-center">
        Pending Placement Coordinators
      </h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Placement Coordinator Username</th>
            <th>Placement Coordinator Name</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Placement Coordinator Username</td>
            <td>Placement Coordinator Name</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function AllPlacementCoordinators() {
  return (
    <>
      <h3 id="webpageTitle" className="text-center">
        All Placement Coordinators
      </h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Placement Coordinator Username</th>
            <th>Placement Coordinator Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Placement Coordinator Username</td>
            <td>Placement Coordinator Name</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function PendingCompanies() {
  return (
    <>
      <h3 id="webpageTitle" className="text-center">
        Pending Companies
      </h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Username</th>
            <th>Company Name</th>
            <th>Company E-mail</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Company Username</td>
            <td>Company Name</td>
            <td>Company E-mail</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function AllCompanies() {
    return (
      <>
        <h3 id="webpageTitle" className="text-center">
          All Companies
        </h3>
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Company Username</th>
              <th>Company Name</th>
              <th>Company E-mail</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#</td>
              <td>Company Username</td>
              <td>Company Name</td>
              <td>Company E-mail</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </>
    );
}

function PendingStudents() {
  return (
    <>
      <h3 id="webpageTitle" className="text-center">
        Pending Students
      </h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Enrollment Number</th>
            <th>Student Name</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Student Enrollment Number</td>
            <td>Student Name</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function AllStudents() {
  return (
    <>
      <h3 id="webpageTitle" className="text-center">
        All Students
      </h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Enrollment Number</th>
            <th>Student Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Student Enrollment Number</td>
            <td>Student Name</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function ManageUsers() {
  return (
    <>
      <Header />
      <main>
        <h2 id="webpageTitle" className="text-center">
          Manage Users
        </h2>
        <hr />
        <div id="manageUsersContainer">
          <nav className="nav nav-tabs nav-fill">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#ManagePlacementCoordinators"
            >
              Placement Coordinators
            </a>
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#ManageCompanies"
            >
              Companies
            </a>
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#ManageStudents"
            >
              Students
            </a>
          </nav>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="ManagePlacementCoordinators"
            >
              <PendingPlacementCoordinators />
              <AllPlacementCoordinators />
            </div>
            <div className="tab-pane fade" id="ManageCompanies">
              <PendingCompanies />
              <AllCompanies />
            </div>
            <div className="tab-pane fade" id="ManageStudents">
              <PendingStudents />
              <AllStudents />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ManageUsers;
