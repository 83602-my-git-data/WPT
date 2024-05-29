import data from "../dummy/dummy.json";
import "./Persons2.css";
import Per from "./person1";
import { useState } from "react";
function Person() {
  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>MobileNo</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => {
            return <Per props={person}></Per>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Person;
