/* eslint-disable react-hooks/exhaustive-deps */
import './home.css';
import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostLoginMutation, usePrefetch } from 'Service/Auth';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const navigate = useNavigate();

  return <div className="container"></div>;
};

export default HomePage;
