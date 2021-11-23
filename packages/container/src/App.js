import React from 'react';
import MarketingApp from './components/MarketingApp';
import DashboardApp from './components/DashboardApp';
import DetailsApp from './components/DetailsApp';

export default () => {
  return (
    <div>
      <h1>It's a Mian Container</h1>
      <hr />
      <hr />
      <MarketingApp />
      <hr />
      <hr />
      <DashboardApp />
      <hr />
      <hr />
      <DetailsApp />
    </div>
  );
};
