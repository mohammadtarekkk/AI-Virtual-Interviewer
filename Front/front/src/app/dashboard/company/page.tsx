'use client';

import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface JobPosting {
  id: string;
  title: string;
  applicants: number;
  status: 'active' | 'closed';
  createdAt: string;
}

interface CandidateInterview {
  id: string;
  candidateName: string;
  position: string;
  scheduledFor: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export default function CompanyDashboard() {
  const { isLoading, user } = useAuth({
    required: true,
    allowedRoles: ['company'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-400">Manage your job postings and interviews</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Job Postings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Active Job Postings</h2>
            <button
              onClick={() => window.location.href = '/job-postings/new'}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-150 ease-in-out"
            >
              New Posting
            </button>
          </div>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-300">No active job postings</p>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Interviews */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-300">No upcoming interviews scheduled</p>
            </div>
          </div>
        </motion.div>

        {/* Analytics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-blue-500">0</p>
              <p className="text-gray-400">Active Postings</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-500">0</p>
              <p className="text-gray-400">Total Applicants</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-yellow-500">0</p>
              <p className="text-gray-400">Interviews Conducted</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-500">0</p>
              <p className="text-gray-400">Positions Filled</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        <button
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-150 ease-in-out"
          onClick={() => window.location.href = '/analytics'}
        >
          View Detailed Analytics
        </button>
        <button
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition duration-150 ease-in-out"
          onClick={() => window.location.href = '/profile/company'}
        >
          Company Settings
        </button>
      </motion.div>
    </div>
  );
}