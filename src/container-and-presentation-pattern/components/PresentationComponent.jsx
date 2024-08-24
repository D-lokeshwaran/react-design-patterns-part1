import React from "react";

const PresentationComponent = ({ users }) => {
    return (
        <table className="presentation-component">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email address</td>
                    <td>Phone</td>
                    <td>Company name</td>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.company?.name}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default PresentationComponent