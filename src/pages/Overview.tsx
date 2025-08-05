import React from 'react';
import SummaryCard from '../components/SummaryCard';
import { FileText, Clock, CheckCircle, DollarSign, Calendar } from 'lucide-react';

const Overview: React.FC = () => {
  const mockActivityData = [
    { id: 1, patient: 'John Smith', condition: 'MRI Scan', status: 'approved', time: '2 minutes ago' },
    { id: 2, patient: 'Sarah Johnson', condition: 'Physical Therapy', status: 'pending', time: '5 minutes ago' },
    { id: 3, patient: 'Michael Brown', condition: 'Cardiac Catheterization', status: 'approved', time: '8 minutes ago' },
    { id: 4, patient: 'Emily Davis', condition: 'Orthopedic Surgery', status: 'denied', time: '12 minutes ago' },
    { id: 5, patient: 'Robert Wilson', condition: 'Diagnostic Testing', status: 'approved', time: '15 minutes ago' },
  ];

  // Mock chart data points for the line chart
  const chartData = [45, 52, 38, 67, 73, 58, 82];
  const maxValue = Math.max(...chartData);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
        <p className="text-gray-600">Monitor your PA automation system performance</p>
      </div>

      {/* Summary Cards */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Trends Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Weekly Processing Trends</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Last 7 days</span>
            </div>
          </div>
          
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-end justify-between space-x-2">
              {chartData.map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-600"
                    style={{ height: `${(value / maxValue) * 200}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {mockActivityData.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.patient}</p>
                  <p className="text-sm text-gray-500">{activity.condition}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
                <div className="ml-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activity.status === 'approved' ? 'bg-green-100 text-green-800' :
                    activity.status === 'denied' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;