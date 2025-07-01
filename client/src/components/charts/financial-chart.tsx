import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const mockFinancialData = [
  { quarter: 'Q1', revenue: 2.1 },
  { quarter: 'Q2', revenue: 2.3 },
  { quarter: 'Q3', revenue: 2.4 },
  { quarter: 'Q4', revenue: 2.6 }
];

export default function FinancialChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockFinancialData}>
          <XAxis 
            dataKey="quarter" 
            axisLine={false}
            tickLine={false}
            fontSize={12}
            color="#6B7280"
          />
          <YAxis 
            domain={[1.5, 3]}
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
            formatter={(value) => [`$${value}M`, 'Revenue']}
          />
          <Bar 
            dataKey="revenue" 
            fill="hsl(207, 100%, 50%)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
