import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom';
import ProtectedRecruiter from './routes/ProtectedRecruiter';
import ProtectedCandidate from './routes/ProtectedCandidate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import MyApplications from './pages/MyApplications';
import RecruiterApplications from './pages/RecruiterApplications';
import ApplyPage from './pages/ApplyPage';

function App() {
return ( <BrowserRouter>

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/login"
element={<Login />}
/>

<Route
path="/register"
element={<Register />}
/>

<Route
path="/jobs"
element={<Jobs/>}
/>

<Route
path="/jobs/:jobId"
element={<JobDetails />}
/>
<Route

path='/create-job'
element={ <ProtectedRecruiter>
            <CreateJob/>
        </ProtectedRecruiter>}

/>
<Route
path="/apply/:jobId"
element={
<ProtectedCandidate>

<ApplyPage/>

</ProtectedCandidate>

}
/>

<Route
path="/my-applications"
element={

<ProtectedCandidate>

<MyApplications/>

</ProtectedCandidate>

}
/>

<Route
path="/recruiter-applications/:jobId"
element={<RecruiterApplications/>}
/>

</Routes>



</BrowserRouter>
);
}

export default App;
