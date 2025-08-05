import React from 'react';
import SummaryCard from '../components/SummaryCard';
import { Shield, Lock, Database, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const SecurityMonitor: React.FC = () => {
  const securityFeatures = [
    { name: 'End-to-End Encryption', status: 'active', description: 'All data encrypted in transit and at rest' },
    { name: 'PII Detection & Masking', status: 'active', description: 'Automatic detection and protection of sensitive data' },
    { name: 'Zero Data Retention', status: 'active', description: 'Documents purged after processing completion' },
    { name: 'Access Audit Logging', status: 'active', description: 'Complete audit trail of all system access' },
    { name: 'SOC 2 Compliance', status: 'active', description: 'Industry-standard security controls' },
    { name: 'HIPAA Compliance', status: 'active', description: 'Healthcare data protection standards' }
  ];

  const securityEvents = [
    { id: 1, timestamp: '2024-01-15 14:32:18', event: 'PII Detected', source: 'Document Upload', severity: 'info' },
    { id: 2, timestamp: '2024-01-15 14:28:45', event: 'Data Encrypted', source: 'Processing Pipeline', severity: 'info' },
    { id: 3, timestamp: '2024-01-15 14:25:12', event: 'Document Purged', source: 'Retention Policy', severity: 'info' },
    { id: 4, timestamp: '2024-01-15 14:20:33', event: 'Access Granted', source: 'User Authentication', severity: 'info' },
    { id: 5, timestamp: '2024-01-15 14:15:47', event: 'Failed Login Attempt', source: 'Authentication', severity: 'warning' },
    { id: 6, timestamp: '2024-01-15 14:10:22', event: 'File Upload Blocked', source: 'Security Filter', severity: 'warning' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Security Monitor</h1>
        <p className="text-gray-600">Real-time security monitoring and compliance tracking</p>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="PII Detected"
          value="1,247"
          change="Protected & Masked"
          changeType="positive"
          icon={Shield}
          iconColor="text-blue-600"
        />
        <SummaryCard
          title="Encrypted Payloads"
          value="100%"
          change="All transmissions secure"
          changeType="positive"
          icon={Lock}
          iconColor="text-green-600"
        />
        <SummaryCard
          title="Zero Retention Events"
          value="2,847"
          change="Documents purged"
          changeType="positive"
          icon={Database}
          iconColor="text-purple-600"
        />
        <SummaryCard
          title="Blocked Submissions"
          value="23"
          change="Security violations prevented"
          changeType="neutral"
          icon={AlertTriangle}
          iconColor="text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Security Features Checklist */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Features Status</h2>
          
          <div className="space-y-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    feature.status === 'active' ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <CheckCircle className={`w-5 h-5 ${
                      feature.status === 'active' ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{feature.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      feature.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Event Feed */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Live Security Events</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Real-time</span>
            </div>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {securityEvents.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  event.severity === 'warning' ? 'bg-orange-400' : 
                  event.severity === 'error' ? 'bg-red-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900 truncate">{event.event}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      event.severity === 'warning' ? 'bg-orange-100 text-orange-800' :
                      event.severity === 'error' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {event.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{event.source}</p>
                  <p className="text-xs text-gray-500 mt-1">{event.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMonitor;