import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  Login,
  Register,
  ForgotPassword,
  EnterOTP,
  ResetPassword
} from './pages/Auth';


import { AuthLayout, DashboardLayout } from './layouts';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/forget-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/enter-otp"
          element={
            <AuthLayout>
              <EnterOTP />
            </AuthLayout>
          }
        />
        <Route
          path="/reset-password/:Token"
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />
        <Route
          path='/'
          element={
            <DashboardLayout />
          }
        >
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;