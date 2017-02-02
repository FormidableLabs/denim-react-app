import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './home.css';

const Home = () => (
  <div>
    <Helmet title="Home" />
    <h1 className={styles.heading}>Welcome to <%= name %></h1>
    <Link to="/page2">Go to page 2</Link>
  </div>
);

export default Home;
