import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/ManageUsers.css";
import Header from "./Header";

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
            <th>Student Username</th>
            <th>Student Name</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Student Username</td>
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
            <th>Student UserName</th>
            <th>Student Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Student UserName</td>
            <td>Student Name</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function ManageUsers() {
  let { slug } = useParams();
  let [userType, setUserType] = useState(slug);
  useEffect(() => {
    document
      .getElementsByClassName("dropdown-toggle")[0]
      .classList.add("active");
  }, [slug]);
  return (
    <>
      <Header />
      <main>
        <h2 id="webpageTitle" className="text-center">
          Manage {userType}
        </h2>
        <hr />
        <div id="manageUsersContainer">
          <nav className="nav nav-tabs nav-fill">
            <a
              className="nav-link active"
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
            <div className="tab-pane fade show active" id="ManageCompanies">
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
