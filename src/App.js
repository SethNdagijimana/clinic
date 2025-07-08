import React, { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { initializeAuth } from "./slices/user_management_slice"

const Signin = React.lazy(() => import("./components/auth/SignIn/Signin"))
const Dashboard = React.lazy(() => import("./views/dashboards/Dashboard"))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const AppRoutes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAuth())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  )
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
