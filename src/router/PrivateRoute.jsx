import React, { use } from 'react'
import { AuthContext } from '../provider/AuthContext'
import { Navigate } from 'react-router';

function PrivateRoute({ children }) {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div> Loading... </div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to='/auth/login'>  </Navigate>
    }

    return children
}

export default PrivateRoute
