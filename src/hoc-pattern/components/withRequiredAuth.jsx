import React from "react";
import { Navigate } from "react-router-dom"

const withRequiredAuth = (WrappedComponent, allowedRoles) => {
    return (props) => {
        const isAuthenticated = true,
              role = "admin"; // Replace with actual auth check (e.g., using token or session storage)

        if (isAuthenticated && allowedRoles.includes(role)) {
            return <WrappedComponent {...props} />
        }

        return <Navigate to="/login" />
    }
}

export default withRequiredAuth;