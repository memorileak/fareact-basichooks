import {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

type Props = {
  userInfo: string;
};

const People: FC<Props> = ({userInfo}) => {
  // Route Guard
  // UnauthenticatedGuard
  // AuthenticatedGuard

  const [people, setPeople] = useState<Array<Record<string, string>>>([]);
  // const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (userInfo) {
      axios
        .get('http://localhost:3001/people', {headers: {Authorization: userInfo}})
        .then((res) => {
          if (res.data.error) {
            throw new Error(res.data.error);
          } else {
            const people = res.data.data;
            console.log(people);
            setPeople(people);
          }
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });
    }
    return () => {
      // Cancel request
      console.log('Cleanup triggered' /* count */);
    };
  }, [userInfo]);

  return userInfo ? (
    <>
      {people.map((p) => (
        <h1 className="highlight" key={p.id}>{p.name}</h1>
      ))}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default People;
