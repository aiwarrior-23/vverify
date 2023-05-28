import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';

const data = [
    { date: '1/01/2023', checks: 10 },
    { date: '2/01/2023', checks: 15 },
    { date: '3/01/2023', checks: 50 },
    { date: '4/01/2023', checks: 20 },
    { date: '5/01/2023', checks: 5 },
    { date: '6/01/2023', checks: 90 },
    { date: '7/01/2023', checks: 120 },
    { date: '8/01/2023', checks: 85 },
    { date: '9/01/2023', checks: 44 },
    { date: '10/01/2023', checks: 2 },
    { date: '11/01/2023', checks: 65 },
    { date: '12/01/2023', checks: 192 },
    { date: '13/01/2023', checks: 111 },
    { date: '14/01/2023', checks: 125 },
    { date: '15/01/2023', checks: 50 },
    { date: '16/01/2023', checks: 70 },
    { date: '17/01/2023', checks: 80 },
    { date: '18/01/2023', checks: 10 },
    { date: '19/01/2023', checks: 20 },
    { date: '20/01/2023', checks: 15 },
    { date: '21/01/2023', checks: 50 },
    { date: '22/01/2023', checks: 150 },
    { date: '23/01/2023', checks: 140 },
    { date: '24/01/2023', checks: 122 },
    { date: '25/01/2023', checks: 44 },
    { date: '26/01/2023', checks: 34 },
    { date: '27/01/2023', checks: 11 },
    { date: '28/01/2023', checks: 15 },
    { date: '29/01/2023', checks: 180 },
    { date: '30/01/2023', checks: 185 }
];

const data2 = [
    { name: 'RTW Checks', value: 50 },
    { name: 'Basic DBS Check', value: 30 },
    { name: 'Enhanced DBS Check', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
  paddingTop: '1%',
};

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(83, 83, 233)',
  marginBottom: '1%',
};

const boxStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "5%",
    fontFamily: "sans-serif",
    width: "90%"
};

const imageStyle = {
  maxWidth: '100%',
  marginTop: "5vh"
};

function Statistics() {
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h3 style={{ color: 'white', fontSize: "2.25rem", fontWeight:"800" }}>Number of Checks per day</h3>
        <p style={{ color: 'white', maxWidth: '90%' }}>
          At V-Verify, we prioritize safety and integrity. Our robust daily operations include conducting hundreds of
          background checks, a testament to our commitment to a secure and transparent work environment. This impressive
          figure isn't just about quantity, it’s about building trust and mitigating risk. Each check is a step towards
          unearthing potential discrepancies, ensuring our team's reliability, and upholding our reputation. We're proud
          to set the benchmark in comprehensive background check procedures, fostering a safer, more trustworthy business
          landscape.
        </p>
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          style={imageStyle}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="date" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip wrapperStyle={{ color: '#ffffff', backgroundColor: '#ffffff' }} />
          <Line type="monotone" dataKey="checks" stroke="white" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      <div style={boxStyle2}>
        <h3 style={{ color: '#333b40', fontSize: "2.25rem", fontWeight:"800"}}>Our Checks Till Now</h3>
        <p style={{ color: '#546072' }}>
          At V-Verify, we are committed to maintaining a safe, compliant, and trustworthy workplace. Our diligence is
          reflected in the extensive number of background checks we conduct daily. We have proudly completed thousands
          of checks in two primary categories: DBS (Disclosure and Barring Service) and RTW (Right to Work) checks.
          These checks are crucial in our hiring process, ensuring that we only hire individuals suitable for their roles
          and who have the legal right to work in the country. By upholding these high standards, we create an environment
          of trust and safety, reinforcing our reputation as a responsible employer. We're proud to share these numbers
          as a testament to our unwavering dedication to transparency and ethical business practices.
        </p>
        <BarChart width={700} height={400} data={data} style={imageStyle}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333b40" />
          <XAxis dataKey="date" stroke="#333b40" />
          <YAxis stroke="#333b40" />
          <Tooltip wrapperStyle={{ color: '#333b40'}} />
          <Legend wrapperStyle={{ color: '#333b40'}} />
          <Bar dataKey="checks" fill="#333b40" />
        </BarChart>
      </div>
    </div>
  );
}

export default Statistics;