import React, { useEffect } from 'react';
import axios from 'axios';

import { login } from '../redux/state/loginReducer';
import { useDispatch, useSelector } from 'react-redux';

const LogedLogic = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/2').then((response) => {
      const { data } = response;
      console.log('data:', data);
      dispatch(login(data));
    });
  }, []);

  return (
    <div>
      <h1>if logged show text cool</h1>
      {user ? <h4>secret data</h4> : <h4>fuck off</h4>}
    </div>
  );
};

export default LogedLogic;
