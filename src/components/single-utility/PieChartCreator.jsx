import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const pieData = [
  { name: "Types of database", value: 60 },
  { name: "OLAP", value: 20 },
  { name: "Data Reduction", value: 10 },
  { name: "Association rule mining", value: 20 },
  { name: "Data warehousing", value: 10 },
  { name: "KNN", value: 40 },
];

const renderColorfulLegendText = (value, entry) => {
  const { color } = "red";

  return <span style={{ color }}>{value}</span>;
};

const renderedLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="text-white">
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>{entry.value}</li>
      ))}
    </ul>
  );
};

const PieChartCreator = () => {
  return (
    <div
      className="PIE-CHART row-span-2
                border border-[#00bd7e]"
    >
      <ResponsiveContainer width="80%" height="100%">
        <PieChart>
          <Legend
            content={renderedLegend}
            formatter={renderColorfulLegendText}
            verticalAlign="middle"
            align="right"
            width="auto"
            height="auto"
            iconType="square"
          />
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartCreator;
