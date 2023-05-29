import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import { ClientHome } from './client/ClientHome'
import { About } from './client/About'
import { LoginAdmin } from './components/LoginAdmin'
import { RDVClient } from './client/RDVClient'

const AuthPage = () => (
  <Routes>
          <Route index element={<ClientHome />} />
          <Route path="About" element={<About />}/>
          <Route path='loginAdmin' element={<LoginAdmin />} />
<Route path='/auth/login/RDVC' element={<RDVClient/>}/>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
    </Route>
  </Routes>
)

export {AuthPage}
