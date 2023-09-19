import "./Analytics.css"

import {
    XAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,
    Bar,
    PieChart,
    Pie,
    LineChart,
    YAxis,
    Line
} from "recharts";

const Analytics = ({ chart_i, chart_ii, chart_iii, title, value, illustration }) => {

    const data01 = [
        {
          "name": "Page A",
          "Followers": 400,
          "Earnings": 240
        },
        {
          "name": "Page B",
          "Followers": 300,
          "Earnings": 139
        },
        {
          "name": "Page C",
          "Followers": 200,
          "Earnings": 980
        },
        {
          "name": "Page D",
          "Followers": 278,
          "Earnings": 390
        },
        {
          "name": "Page E",
          "Followers": 189,
          "Earnings": 480
        },
        {
          "name": "Page F",
          "Followers": 239,
          "Earnings": 380
        },
        {
          "name": "Page G",
          "Followers": 349,
          "Earnings": 430
        }
      ];

      const data02 = [
        {
          "name": "Page A",
          "Followers": 4000,
          "Earnings": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "Followers": 3000,
          "Earnings": 1390,
          "amt": 2210
        },
        {
          "name": "Page C",
          "Followers": 2000,
          "Earnings": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "Followers": 2780,
          "Earnings": 3900,
          "amt": 2000
        },
        {
          "name": "Page E",
          "Followers": 189,
          "Earnings": 4800,
          "amt": 2180
        },
        {
          "name": "Page F",
          "Followers": 2390,
          "Earnings": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "Followers": 3490,
          "Earnings": 4300,
          "amt": 2100
        }
      ];
      
      const data03 = [
        {
          "Earnings": "Group A",
          "Followers": 400
        },
        {
          "Earnings": "Group B",
          "Followers": 300
        },
        {
          "Earnings": "Group C",
          "Followers": 300
        },
        {
          "Earnings": "Group D",
          "Followers": 200
        },
        {
          "Earnings": "Group E",
          "Followers": 278
        },
        {
          "Earnings": "Group F",
          "Followers": 189
        }
      ];
      const data04 = [
        {
          "Earnings": "Group A",
          "Followers": 2400
        },
        {
          "Earnings": "Group B",
          "Followers": 4567
        },
        {
          "Earnings": "Group C",
          "Followers": 1398
        },
        {
          "Earnings": "Group D",
          "Followers": 800
        },
        {
          "Earnings": "Group E",
          "Followers": 3908
        },
        {
          "Earnings": "Group F",
          "Followers": 4800
        }
      ];

  return (
  <div className="analytics">
    {chart_i && (
    <>
    <header>
        <span className="Followers">Buyers:</span>
        <span className="Earnings">Earnings:</span>
    </header>

    <BarChart className="chart" width={240} height={210} data={data01}>
    <CartesianGrid strokeDasharray="100 10" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Followers" fill="#DD2476" />
    <Bar dataKey="Earnings" fill="#FF512F" />
    </BarChart>
</>
)}
    {chart_ii && (
     <LineChart 
        width={260} 
        height={220} 
        data={data02}
     margin={{ right: 5, top: 5 }}>
     <CartesianGrid strokeDasharray="100 10" />
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="Followers" stroke="#DD2476" />
     <Line type="monotone" dataKey="Earnings" stroke="#FF512F" />
   </LineChart>   
    )}

    {chart_iii && (
      <>
      <PieChart width={300} height={300}>
  <Pie data={data03} dataKey="Followers" nameKey="Earnings" cx="50%" cy="50%" outerRadius={50} fill="#DD2476" />
  <Pie data={data04} dataKey="Followers" nameKey="Earnings" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#FF512F" label />
</PieChart>
      </>
    )}

      {title && (
        <>
        <h1 className="title"> {title} </h1>
        <h2 className="value">{value}</h2>
        <h2 className="extra-text">
          I can do it.
          <br />
          ✌️👻
        </h2>

        <img src={illustration} alt="illustration" className="illustration" />
        </>
      )}

    </div>
    );
};

export default Analytics;