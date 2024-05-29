import { useState } from 'react'
import Navbar from '../components/navbar'
import usersData from '../dummy/users.json'

function Users() {
  const [users, setUsers] = useState(usersData)
  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Users</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {user['firstName']} {user['lastName']}
                </td>
                <td>{user['email']}</td>
                <td>{user['phone']}</td>
                <td>{user['gender']}</td>
                <td>{user['address']}</td>
                <td>{user['city']}</td>
                <td>{user['state']}</td>
                <td>{user['zipCode']}</td>
                <td>
                  <button className='btn btn-sm btn-success me-2'>
                    Deactivate
                  </button>
                  <button className='btn btn-sm btn-primary'>Details</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Users
