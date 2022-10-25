import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const areaData = [
  { year: 2022, value: 30 },
  { year: 2023, value: 40 },
  { year: 2024, value: 50 },
  { year: 2025, value: 35 },
];

const AreaChartCreator = () => {
  return (
    <div className="AREA-CHART h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={areaData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#245187" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#245187" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#245187" fill="url(#color)" />
          <XAxis dataKey="year" />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={5}
          />
          <Tooltip />
          <CartesianGrid opacity={0.3} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartCreator;
