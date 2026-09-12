'use client';

import { useRouter } from 'next/navigation';
import {
  FiClock,
  FiRefreshCw,
  FiPlus,
  FiTrash2,
  FiPause,
  FiPlay,
  FiExternalLink,
} from 'react-icons/fi';
import {
  useJobs,
  usePauseJob,
  useResumeJob,
  useDeleteJob,
} from '@/modules/jobs';
import type { Workspace } from '../types/workspace.types';
import { formatDate } from '@/shared/lib/utils';
import LoadingIndicator from '@/shared/components/loading-indicator';

interface WorkspaceDetailModalProps {
  workspace: Workspace | null;
  onClose: () => void;
}

export default function WorkspaceDetailModal({
  workspace,
  onClose,
}: WorkspaceDetailModalProps) {
  const router = useRouter();
  const { data: jobsData, isLoading } = useJobs({
    workspaceId: workspace?.id,
    limit: 100,
  });
  const pauseMutation = usePauseJob();
  const resumeMutation = useResumeJob();
  const deleteMutation = useDeleteJob();

  if (!workspace) return null;

  const jobs = jobsData?.items || [];

  const handleNewJob = () => {
    onClose();
    router.push(`/schedule?workspaceId=${workspace.id}`);
  };

  const handleJobClick = (jobId: string) => {
    onClose();
    router.push(`/jobs/${jobId}`);
  };

  const methodColors: Record<string, string> = {
    GET: 'text-green-400',
    POST: 'text-blue-400',
    PUT: 'text-yellow-400',
    PATCH: 'text-orange-400',
    DELETE: 'text-red-400',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 rounded-[5px] w-[50%] max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-neutral-800">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg text-white font-medium">
                {workspace.name}
              </h2>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <FiClock size={11} />
                  <span>Created {formatDate(workspace.createdAt)}</span>
                </div>
                {workspace.updatedAt &&
                  workspace.updatedAt !== workspace.createdAt && (
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                      <FiRefreshCw size={11} />
                      <span>Updated {formatDate(workspace.updatedAt)}</span>
                    </div>
                  )}
              </div>
            </div>
            <span className="text-[11px] text-white/70 bg-neutral-800 px-2 py-0.5 rounded-[3px]">
              {workspace.jobsCount} {workspace.jobsCount === 1 ? 'job' : 'jobs'}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto slim-scrollbar min-h-0">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[13px] text-white/80 font-medium">
                Cron Jobs
              </h3>
              <button
                onClick={handleNewJob}
                className="cursor-pointer flex items-center gap-1 px-3 py-1 text-[12px] rounded-[3px] text-black bg-white hover:bg-neutral-200 transition"
              >
                <FiPlus size={12} />
                New Job
              </button>
            </div>

            {isLoading ? (
              <LoadingIndicator />
            ) : jobs.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-[13px] text-neutral-500">
                  No jobs in this workspace
                </p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Create your first cron job to get started
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-neutral-800 rounded-[3px] p-3 hover:bg-neutral-750 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleJobClick(job.id)}
                            className="text-[13px] text-white/90 hover:text-white font-medium truncate cursor-pointer transition-colors"
                          >
                            {job.name}
                          </button>
                          <span
                            className={`text-[10px] font-medium px-1.5 py-0. rounded-[2px] ${
                              job.type === 'CRON'
                                ? 'bg-blue-500/15 text-blue-400'
                                : 'bg-purple-500/15 text-purple-400'
                            }`}
                          >
                            {job.type}
                          </span>
                          <span
                            className={`text-[10px] font-medium px-1.5 py-0. rounded-[2px] ${
                              job.status === 'ACTIVE'
                                ? 'bg-green-500/15 text-green-400'
                                : job.status === 'PAUSED'
                                  ? 'bg-yellow-500/15 text-yellow-400'
                                  : 'bg-red-500/15 text-red-400'
                            }`}
                          >
                            {job.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span
                            className={`text-[11px] font-medium ${methodColors[job.method] || 'text-neutral-400'}`}
                          >
                            {job.method}
                          </span>
                          <span className="text-[11px] text-neutral-500 truncate max-w-[200px]">
                            {job.endpoint}
                          </span>
                        </div>
                        {job.schedule && (
                          <div className="mt-1.5 text-[11px] text-neutral-500">
                            {job.schedule}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 ml-2 shrink-0">
                        <button
                          onClick={() => handleJobClick(job.id)}
                          className="cursor-pointer p-1.5 rounded-[3px] text-neutral-500 hover:text-white hover:bg-neutral-700 transition"
                          title="View details"
                        >
                          <FiExternalLink size={12} />
                        </button>
                        {job.status === 'ACTIVE' ? (
                          <button
                            onClick={() => pauseMutation.mutate(job.id)}
                            disabled={pauseMutation.isPending}
                            className="cursor-pointer p-1.5 rounded-[3px] text-neutral-500 hover:text-yellow-400 hover:bg-neutral-700 transition disabled:opacity-50"
                            title="Pause"
                          >
                            <FiPause size={12} />
                          </button>
                        ) : (
                          <button
                            onClick={() => resumeMutation.mutate(job.id)}
                            disabled={resumeMutation.isPending}
                            className="cursor-pointer p-1.5 rounded-[3px] text-neutral-500 hover:text-green-400 hover:bg-neutral-700 transition disabled:opacity-50"
                            title="Resume"
                          >
                            <FiPlay size={12} />
                          </button>
                        )}
                        <button
                          onClick={() => deleteMutation.mutate(job.id)}
                          disabled={deleteMutation.isPending}
                          className="cursor-pointer p-1.5 rounded-[3px] text-neutral-500 hover:text-red-400 hover:bg-neutral-700 transition disabled:opacity-50"
                          title="Delete"
                        >
                          <FiTrash2 size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="w-full px-4 py-1.5 text-[12px] rounded-[3px] text-white bg-neutral-800 hover:bg-neutral-700 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
