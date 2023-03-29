import {FC, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/login/Login';
import People from './pages/people/People';

type Props = {};

const App: FC<Props> = () => {
  const [token, setToken] = useState<string>('');

  const handleLoggedIn = (tk: string) => {
    setToken(tk);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={<Login userInfo={token} onLoginSucceeded={handleLoggedIn} />}
      />
      <Route path="/people" element={<People userInfo={token} />} />
    </Routes>
  );
};

export default App;
