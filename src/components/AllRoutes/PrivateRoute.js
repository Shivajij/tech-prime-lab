import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("primelab");
    if (!login) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default PrivateRoute;
