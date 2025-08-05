import React from 'react';
import SummaryCard from '../components/SummaryCard';
import { FileText, Clock, CheckCircle, DollarSign, TrendingUp, Building2 } from 'lucide-react';

const Analytics: React.FC = () => {
  // Mock data for charts
  const volumeData = [32, 45, 38, 52, 67, 59, 73, 81];
  const timeStageData = [
    { stage: 'Upload', time: 0.8 },
    { stage: 'Analysis', time: 2.1 },
    { stage: 'Decision', time: 0.5 }
  ];

  const insurerData = [
    { name: 'Blue Cross Blue Shield', requests: 1247, flagged: 23 },
    { name: 'Aetna', requests: 892, flagged: 15 },
    { name: 'UnitedHealth', requests: 756, flagged: 31 },
    { name: 'Cigna', requests: 634, flagged: 8 },
    { name: 'Humana', requests: 523, flagged: 12 }
  ];

  const maxVolumeValue = Math.max(...volumeData);
  const maxTimeValue = Math.max(...timeStageData.map(d => d.time));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Comprehensive insights into your PA automation performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Documents Processed"
          value="2,847"
          change="+12% from last week"
          changeType="positive"
          icon={FileText}
          iconColor="text-blue-600"
        />
        <SummaryCard
          title="Avg Processing Time"
          value="3.2 min"
          change="-8% improvement"
          changeType="positive"
          icon={Clock}
          iconColor="text-green-600"
        />
        <SummaryCard
          title="Approval Rate"
          value="94.2%"
          change="+2.1% increase"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-emerald-600"
        />
        <SummaryCard
          title="Cost Savings"
          value="$47,830"
          change="+$5,200 this month"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-yellow-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Processing Volume Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Processing Volume Over Time</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <TrendingUp className="w-4 h-4" />
              <span>Last 8 weeks</span>
            </div>
          </div>
          
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-end justify-between space-x-1">
              {volumeData.map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-600"
                    style={{ height: `${(value / maxVolumeValue) * 200}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">W{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time per Stage Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Average Time per Stage</h2>
            <div className="text-sm text-gray-500">Minutes</div>
          </div>
          
          <div className="space-y-4">
            {timeStageData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm text-gray-600">{item.stage}</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${(item.time / maxTimeValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-sm font-medium text-gray-900 text-right">
                  {item.time} min
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* High Volume Insurers Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">High Volume Insurers</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Building2 className="w-4 h-4" />
            <span>This month</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Insurer</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Requests</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Flagged Requests</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Flag Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {insurerData.map((insurer, index) => {
                const flagRate = ((insurer.flagged / insurer.requests) * 100).toFixed(1);
                const isHighRisk = parseFloat(flagRate) > 3;
                
                return (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{insurer.name}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{insurer.requests.toLocaleString()}</td>
                    <td className="py-4 px-4 text-gray-600">{insurer.flagged}</td>
                    <td className="py-4 px-4 text-gray-600">{flagRate}%</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        isHighRisk ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {isHighRisk ? 'High Risk' : 'Normal'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;