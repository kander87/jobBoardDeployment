import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import JobView from './views/JobView'
import JobEdit from './views/JobEdit'
import JobCreate from './views/JobCreate'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<JobView />} path="/job/view/:id" />
        <Route element={<JobEdit />} path="/job/edit/:id" />
        <Route element={<JobCreate />} path="/job/create" />
      </Routes>
    </div>
  );
}
export default App;