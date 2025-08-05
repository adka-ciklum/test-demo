import React, { useState } from 'react';
import { Settings, Code, Users, Mail, Shield } from 'lucide-react';

const Configuration: React.FC = () => {
  const [qualityThreshold, setQualityThreshold] = useState(85);
  const [timeoutDuration, setTimeoutDuration] = useState(300);
  const [smartMatching, setSmartMatching] = useState(true);
  const [deduplication, setDeduplication] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const users = [
    { id: 1, name: 'John Smith', email: 'john@company.com', role: 'Admin', permissions: { read: true, write: true, delete: true } },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Operator', permissions: { read: true, write: true, delete: false } },
    { id: 3, name: 'Michael Brown', email: 'michael@company.com', role: 'Viewer', permissions: { read: true, write: false, delete: false } },
    { id: 4, name: 'Emily Davis', email: 'emily@company.com', role: 'Operator', permissions: { read: true, write: true, delete: false } }
  ];

  const mockRulesCode = `# Prior Authorization Rules Engine
# Define custom processing rules and conditions

rule "High Priority Conditions" {
  when:
    condition.category == "EMERGENCY" ||
    condition.urgency == "STAT" ||
    patient.age < 18
  then:
    process.priority = "HIGH"
    process.timeout = 60
}

rule "Insurance Verification" {
  when:
    insurance.provider in ["BCBS", "Aetna", "UnitedHealth"]
    and insurance.status == "ACTIVE"
  then:
    verification.required = true
    verification.method = "REAL_TIME"
}

rule "Document Quality Check" {
  when:
    document.quality_score < threshold.minimum
  then:
    process.action = "REJECT"
    process.reason = "INSUFFICIENT_QUALITY"
    notification.send = true
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuration</h1>
        <p className="text-gray-600">Customize system settings and manage user permissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Processing Controls */}
        <div className="lg:col-span-2 space-y-8">
          {/* Slider Controls */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Processing Controls</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Document Quality Threshold</label>
                  <span className="text-sm text-gray-500">{qualityThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={qualityThreshold}
                  onChange={(e) => setQualityThreshold(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">Timeout Duration</label>
                  <span className="text-sm text-gray-500">{timeoutDuration}s</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="600"
                  value={timeoutDuration}
                  onChange={(e) => setTimeoutDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 min</span>
                  <span>5 min</span>
                  <span>10 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Feature Controls</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Smart Matching</h3>
                  <p className="text-sm text-gray-600">Enable AI-powered condition matching</p>
                </div>
                <button
                  onClick={() => setSmartMatching(!smartMatching)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    smartMatching ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      smartMatching ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">De-duplication</h3>
                  <p className="text-sm text-gray-600">Automatically detect and merge duplicate requests</p>
                </div>
                <button
                  onClick={() => setDeduplication(!deduplication)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    deduplication ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      deduplication ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Send alerts for processing completion</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Rules Editor */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-900">Rules Editor</h2>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <pre className="text-green-400 whitespace-pre-wrap overflow-x-auto">
                {mockRulesCode}
              </pre>
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Reset
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Rules
              </button>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
          </div>
          
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                    user.role === 'Operator' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Read</span>
                    <input
                      type="checkbox"
                      checked={user.permissions.read}
                      className="h-4 w-4 text-blue-600 rounded"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Write</span>
                    <input
                      type="checkbox"
                      checked={user.permissions.write}
                      className="h-4 w-4 text-blue-600 rounded"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Delete</span>
                    <input
                      type="checkbox"
                      checked={user.permissions.delete}
                      className="h-4 w-4 text-blue-600 rounded"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            <Users className="w-4 h-4" />
            <span>Add New User</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;