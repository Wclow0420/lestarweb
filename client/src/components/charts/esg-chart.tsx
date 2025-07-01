import { useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const mockESGData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 72 },
  { month: 'Mar', score: 68 },
  { month: 'Apr', score: 78 },
  { month: 'May', score: 82 },
  { month: 'Jun', score: 85 }
];

export default function ESGChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockESGData}>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            fontSize={12}
            color="#6B7280"
          />
          <YAxis 
            domain={[60, 100]}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            color="#6B7280"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="hsl(172, 100%, 41%)"
            strokeWidth={3}
            dot={{ fill: 'hsl(172, 100%, 41%)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'hsl(172, 100%, 41%)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
