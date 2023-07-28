import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Stacked } from '../../components';

const Stack = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Project Cost Breakdown" />
    <div className="w-full">
      <Stacked />
    </div>
  </div>
);

export default Stack;