import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, CartesianGrid } from 'recharts';
import styles from "./Dashboard.module.css"
import { parseISO, startOfWeek, format } from 'date-fns';
import { Button } from '@mui/material';

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

const data2 = [
  { date: '2023-01-01', checks: 10 },
  { date: '2023-01-02', checks: 15 },
  { date: '2023-01-03', checks: 50 },
  { date: '2023-01-04', checks: 20 },
  { date: '2023-01-05', checks: 5 },
  { date: '2023-01-06', checks: 90 },
  { date: '2023-01-07', checks: 120 },
  { date: '2023-01-08', checks: 85 },
  { date: '2023-01-09', checks: 44 },
  { date: '2023-01-10', checks: 2 },
  { date: '2023-01-11', checks: 65 },
  { date: '2023-01-12', checks: 192 },
  { date: '2023-01-13', checks: 111 },
  { date: '2023-01-14', checks: 125 },
  { date: '2023-01-15', checks: 50 },
  { date: '2023-01-16', checks: 70 },
  { date: '2023-01-17', checks: 80 },
  { date: '2023-01-18', checks: 10 },
  { date: '2023-01-19', checks: 20 },
  { date: '2023-01-20', checks: 15 },
  { date: '2023-01-21', checks: 50 },
  { date: '2023-01-22', checks: 150 },
  { date: '2023-01-23', checks: 140 },
  { date: '2023-01-24', checks: 122 },
  { date: '2023-01-25', checks: 44 },
  { date: '2023-01-26', checks: 34 },
  { date: '2023-01-27', checks: 11 },
  { date: '2023-01-28', checks: 15 },
  { date: '2023-01-29', checks: 180 },
  { date: '2023-01-30', checks: 185 }
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

  const getWeeklyData = (data) => {
    const weeklyData = data.reduce((accum, curr) => {
      const date = parseISO(curr.date);
      const weekStart = format(startOfWeek(date), 'yyyy-MM-dd');

  
      if (!accum[weekStart]) {
        accum[weekStart] = { date: weekStart, checks: 0 };
      }
  
      accum[weekStart].checks += curr.checks;
      return accum;
    }, {});
  
    return Object.values(weeklyData);
  };
  
  
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const [chart1Visible, setChart1Visible] = useState(true);
  const [chart2Visible, setChart2Visible] = useState(false);
  const [weekly, setWeekly] = useState(false);

  const barChartData = getBarChartData(data);
  const checksData = weekly ? getWeeklyData(data2) : data2;

  const buttonStyle = {
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
    width: "10%",
    border: "black"
  };

  const buttonStyle2 = {
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
    width: "10%"
  };

  return (
    <div style={{ backgroundColor: "rgb(83, 83, 233)" }}>
      <h1 style={{ color: "white", paddingTop: "2%" }}>User Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='outlined' style={{borderColor: "white", color: "white", width: "30%", marginRight: "2%"}} onClick={() => { setChart1Visible(true); setChart2Visible(false) }}>Account Status</Button>
        <Button variant='outlined' style={{borderColor: "white", color: "white", width: "30%"}} onClick={() => { setChart1Visible(false); setChart2Visible(true) }}>Checks Done</Button>
      </div>
      {/* {chart2Visible && (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
          <button onClick={() => setWeekly(false)} style={buttonStyle}>Daily</button>
          <button onClick={() => setWeekly(true)} style={buttonStyle}>Weekly</button>
        </div>
      )} */}
      <div className={styles["dashboard"]}>
      {chart2Visible && (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", marginRight: "12%", marginBottom: "5%"}}>
          <Button variant='outlined' style={{borderColor: "white", color: "white"}} onClick={() => setWeekly(false)} >Daily</Button>
          <Button variant='outlined' style={{borderColor: "white", color: "white", marginTop: "5%"}} onClick={() => setWeekly(true)} >Weekly</Button>
        </div>
      )}
        <div className={styles["chart"]} style={{ marginTop: "-2%" }}>
          {chart1Visible &&
            <BarChart width={700} height={400} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="white" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Bar dataKey="count" fill="white" />
            </BarChart>
          }

          {chart2Visible &&
            <BarChart width={700} height={400} data={checksData} style={{paddingRight: "35%"}}>
              <CartesianGrid strokeDasharray="3 3" stroke="white" />
              <XAxis dataKey="date" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Bar dataKey="checks" fill="white" />
            </BarChart>
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
