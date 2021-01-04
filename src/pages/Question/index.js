import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, logout } from '@/model/actions/user';
// import { user as userHttpService } from '@/services/http';

const Login = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  // const dispatch = useDispatch();
  // const history = useHistory();

  return (
    <div className="page-dashboard">
      <h1>
        Question Page
      </h1>
      <div className="page-body" />
    </div>
  );
};

export default Login;
