import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Report = () => {
  const data = [
    { name: 1, uv: 100, pv: 1000, amt: 1000 },
    { name: 2, uv: 200, pv: 1200, amt: 2400 },
    { name: 3, uv: 300, pv: 1300, amt: 100 },
    { name: 4, uv: 400, pv: 100, amt: 50 },
    { name: 5, uv: 500, pv: 1500, amt: 2400 },
    { name: 6, uv: 600, pv: 1400, amt: 400 },
    { name: 7, uv: 700, pv: 300, amt: 2400 },
    { name: 8, uv: 800, pv: 40, amt: 200 },
    { name: 9, uv: 900, pv: 1900, amt: 100 },
    { name: 10, uv: 1000, pv: 2000, amt: 500 },
    { name: 11, uv: 1100, pv: 2100, amt: 50 },
    { name: 12, uv: 1200, pv: 2200, amt: 100 },
  ];

  return (
    <div>
      <LineChart className="chart" width={800} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Report;
