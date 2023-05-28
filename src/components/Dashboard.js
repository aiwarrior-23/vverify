import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, CartesianGrid } from 'recharts';
import styles from "./Dashboard.module.css"
// Assuming data is passed in the following format
const data = [
  { name: 'aiwarrior-23', email: 'himanshuit3036@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'incomplete' },
  { name: 'pvc-23', email: 'abc@gmail', loginStatus: 'pending', checks: 'DBS Check', checkStatus: 'not_started' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abcd23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  { name: 'abc23', email: 'pvs@gmail', loginStatus: 'activated', checks: 'DBS Check', checkStatus: 'success' },
  // ...more data
];

// Preprocessing data for charts
// Replace these functions with actual data processing logic
const getBarChartData = (data) => {
    const loginStatusCounts = data.reduce((counts, user) => {
      counts[user.loginStatus] = (counts[user.loginStatus] || 0) + 1;
      return counts;
    }, {});
  
    return Object.entries(loginStatusCounts).map(([loginStatus, count]) => ({
      name: loginStatus,
      count,
    }));
  };

  const getPieChartData = (data) => {
    const checkStatusCounts = data.reduce((counts, user) => {
      counts[user.checkStatus] = (counts[user.checkStatus] || 0) + 1;
      return counts;
    }, {});
  
    return Object.entries(checkStatusCounts).map(([checkStatus, count]) => ({
      name: checkStatus,
      value: count,
    }));
  };
  
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const barChartData = getBarChartData(data);
  const pieChartData = getPieChartData(data);

  return (
    <div style={{backgroundColor: "rgb(83, 83, 233)"}}><h1 style={{color: "white"}}>User Dashboard</h1>
    <div className={styles["dashboard"]}>
      <div className={styles["chart"]}>
        <h2>Bar Chart</h2>
        <h3>Analysis of accounts active and not active</h3>
        <BarChart width={500} height={300} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      <div className={styles["chart"]}>
        <h2>Pie Chart</h2>
        <h3>Analysis of all the check statuses</h3>
        <PieChart width={400} height={400}>
          <Pie data={pieChartData} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          outerRadius={150} 
          fill="#8884d8" 
          className={styles["imageStyle"]}>
            {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* <div className="chart">
        <h2>Heatmap</h2>
        <XYPlot width={300} height={300}>
          <XAxisRV />
          <YAxisRV />
          <HeatmapSeries data={heatmapData} />
        </XYPlot>
      </div> */}
    </div>
    </div>
  );
};

export default Dashboard;