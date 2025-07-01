import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Download, ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_TABLE_DATA } from "@/lib/constants";

export default function DataTable() {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [data, setData] = useState(MOCK_TABLE_DATA);

  const handleSort = (field: string) => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
    
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[field as keyof typeof a];
      const bValue = b[field as keyof typeof b];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return newDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return newDirection === 'asc' 
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    
    setData(sortedData);
  };

  return (
    <div>
      {/* Table Controls */}
      <div className="flex space-x-2 mb-4">
        <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50 transition-colors">
          <Filter size={16} className="mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50 transition-colors">
          <Download size={16} className="mr-2" />
          Export
        </Button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {[
                { key: 'department', label: 'Department' },
                { key: 'score', label: 'Score' },
                { key: 'trend', label: 'Trend' },
                { key: 'status', label: 'Status' }
              ].map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="text-left px-4 py-3 text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    <ArrowUpDown size={12} className="text-gray-400" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-sm text-gray-800">{row.department}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.score}</td>
                <td className="px-4 py-3 text-sm">
                  <div className={`inline-flex items-center ${row.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {row.positive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                    {row.trend}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant="secondary" className={row.statusColor}>
                    {row.status}
                  </Badge>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing 1 to 3 of 12 results
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button size="sm" className="bg-[var(--lestar-blue)] text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}
