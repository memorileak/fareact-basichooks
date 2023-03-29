import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/login/Login';
import People from './pages/people/People';

type Props = {};

const App: FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
};

export default App;
