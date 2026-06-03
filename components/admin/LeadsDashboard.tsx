'use client';

import React, { useEffect, useState } from 'react';
import { Users, Mail, Phone, Calendar, Activity, CheckCircle, Clock } from 'lucide-react';

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    // Check if previously authenticated in this session
    const authStatus = sessionStorage.getItem('meva_crm_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchLeads = () => {
    setLoading(true);
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.leads) {
          setLeads(data.leads);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch leads', err);
        setLoading(false);
      });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('meva_crm_auth', 'true');
        setAuthError(false);
        fetchLeads();
      } else {
        setAuthError(true);
        setLoading(false);
      }
    } catch (err) {
      setAuthError(true);
      setLoading(false);
    }
  };

  if (loading && isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-prime border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-prime text-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users size={32} />
            </div>
            <h1 className="text-2xl font-serif font-bold text-prime">Meva CRM Login</h1>
            <p className="text-gray-500 text-sm mt-2">Authorized personnel only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-prime mb-2">Admin Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Enter password"
                required
              />
              {authError && <p className="text-red-500 text-xs font-bold mt-2">Invalid password. Access denied.</p>}
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-prime hover:bg-[#0d2a4a] text-white font-bold py-3 rounded-xl transition-all shadow-lg flex justify-center items-center h-12"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-serif font-bold text-prime flex items-center gap-3">
              <Users className="text-accent" size={32} />
              Meva CRM: Patient Leads
            </h1>
            <p className="text-sm text-gray-500 mt-2 font-medium">
              Real-time incoming requests from AI Assistant, Quizzes, and Contact Forms.
            </p>
          </div>
          <div className="bg-prime text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-3xl font-bold text-accent">{leads.length}</span>
            <span className="text-sm uppercase tracking-widest font-bold opacity-80">Total Leads</span>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-prime text-white text-xs uppercase tracking-widest">
                  <th className="p-5 font-bold">Status</th>
                  <th className="p-5 font-bold">Patient Details</th>
                  <th className="p-5 font-bold">Treatment & Source</th>
                  <th className="p-5 font-bold">Medical Notes / Metrics</th>
                  <th className="p-5 font-bold">Date Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-gray-400">
                      No leads yet. Submit a form to see it here.
                    </td>
                  </tr>
                ) : (
                  leads.map(lead => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                          <Clock size={14} /> New
                        </div>
                      </td>
                      <td className="p-5">
                        <p className="font-bold text-prime text-lg">{lead.name}</p>
                        {lead.email && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <Mail size={14} /> {lead.email}
                          </div>
                        )}
                        {lead.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <Phone size={14} /> {lead.phone}
                          </div>
                        )}
                      </td>
                      <td className="p-5">
                        <span className="inline-block bg-accent/10 text-prime font-bold px-3 py-1 rounded-lg text-sm mb-2">
                          {lead.treatment.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase tracking-widest">
                          <Activity size={12} /> Source: {lead.source}
                        </div>
                      </td>
                      <td className="p-5 max-w-xs">
                        {lead.metrics && (
                          <div className="mb-2 p-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                            <strong>Metrics:</strong> {lead.metrics}
                          </div>
                        )}
                        {lead.medicalCondition && (
                          <div className="mb-2 p-2 bg-red-50 text-red-700 rounded-lg text-xs font-medium">
                            <strong>Condition:</strong> {lead.medicalCondition}
                          </div>
                        )}
                        {lead.message && (
                          <p className="text-sm text-gray-600 line-clamp-2" title={lead.message}>
                            "{lead.message}"
                          </p>
                        )}
                      </td>
                      <td className="p-5">
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                          <Calendar size={16} className="text-accent" />
                          {new Date(lead.date).toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
