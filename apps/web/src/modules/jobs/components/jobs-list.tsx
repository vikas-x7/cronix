'use client';

import React, { Suspense, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  FiPause,
  FiPlay,
  FiTrash2,
  FiExternalLink,
  FiMoreVertical,
  FiClock,
  FiRefreshCw,
  FiSearch,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { useJobs, useDeleteJob, useUpdateJob } from '@/modules/jobs';
import { useWorkspaces } from '@/modules/workspaces';
import { useJobStore } from '@/store/jobStore';
import { useUIStore } from '@/store/uiStore';
import StatusBadge from '@/shared/components/status-badge';
import PageLoader from '@/shared/components/page-loader';
import LoadingIndicator from '@/shared/components/loading-indicator';
import ConfirmationModal from '@/shared/components/confirmation-modal';
import { IoAddSharp } from 'react-icons/io5';

function JobsPageContent() {
  const { data, isLoading, isFetching, error, refetch } = useJobs();
  const jobs = data?.items;
  const { data: workspaces } = useWorkspaces();
  const deleteJob = useDeleteJob();
  const updateJob = useUpdateJob();
  const addToast = useUIStore((s) => s.addToast);
  const { statusFilter, workspaceFilter, searchQuery, setSearchQuery } =
    useJobStore();

  const [statusFilterOpen, setStatusFilterOpen] = useState(false);
  const [workspaceFilterOpen, setWorkspaceFilterOpen] = useState(false);
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const workspaceDropdownRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(e.target as Node)
      )
        setStatusFilterOpen(false);
      if (
        workspaceDropdownRef.current &&
        !workspaceDropdownRef.current.contains(e.target as Node)
      )
        setWorkspaceFilterOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [confirmConfig, setConfirmConfig] = React.useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText: string;
    confirmButtonClass?: string;
    action: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    action: () => {},
  });

  const closeConfirm = () =>
    setConfirmConfig((prev) => ({ ...prev, isOpen: false }));

  const filteredJobs = jobs?.filter((job) => {
    if (statusFilter !== 'all' && job.status !== statusFilter) return false;
    if (workspaceFilter !== 'all' && job.workspace?.id !== workspaceFilter)
      return false;
    if (
      searchQuery &&
      !job.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const selectedWorkspaceName =
    workspaceFilter === 'all'
      ? 'All Workspaces'
      : (workspaces?.find((w) => w.id === workspaceFilter)?.name ??
        'All Workspaces');

  useEffect(() => {
    setPage(1);
  }, [statusFilter, workspaceFilter, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil((filteredJobs?.length ?? 0) / limit),
  );
  const safePage = Math.min(page, totalPages);
  const paginatedJobs =
    filteredJobs?.slice((safePage - 1) * limit, safePage * limit) ?? [];

  async function handleToggle(id: string, currentStatus: string) {
    const newStatus = currentStatus === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
    setConfirmConfig({
      isOpen: true,
      title: currentStatus === 'ACTIVE' ? 'Pause Cron Job' : 'Resume Cron Job',
      message: `Are you sure you want to ${newStatus === 'ACTIVE' ? 'resume' : 'pause'} this job?`,
      confirmText: currentStatus === 'ACTIVE' ? 'Pause' : 'Resume',
      confirmButtonClass: 'bg- text-black hover:bg-neutral-200',
      action: async () => {
        try {
          await updateJob.mutateAsync({
            id,
            data: { status: newStatus } as any,
          });
          addToast({
            type: 'success',
            message: `Job ${newStatus === 'ACTIVE' ? 'activated' : 'paused'}`,
          });
        } catch {
          addToast({ type: 'error', message: 'Failed to update job status' });
        }
      },
    });
  }

  async function handleDelete(id: string) {
    setConfirmConfig({
      isOpen: true,
      title: 'Delete Cron Job',
      message:
        'Are you sure you want to delete this cron job? This action cannot be undone.',
      confirmText: 'Delete',
      confirmButtonClass: 'bg-red-600 hover:bg-red-700',
      action: async () => {
        try {
          await deleteJob.mutateAsync(id);
          addToast({ type: 'success', message: 'Job deleted' });
          closeConfirm();
        } catch {
          addToast({ type: 'error', message: 'Failed to delete job' });
        }
      },
    });
  }

  if (isLoading) return <PageLoader />;

  if (error) {
    return (
      <div className="w-full h-screen bg-[#0D0D0D]">
        <div className="py-3 bg-[#0D0D0D]">
          <h1 className="text-[20px] tracking-[-1px] text-white">Cron Jobs</h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <p className="text-[13px] text-neutral-500">Failed to load jobs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col bg-[#0D0D0D] overflow-hidden">
      <div className="py-3 px-0 bg-[#0D0D0D] shrink-0 flex justify-between items-center">
        <h1 className="text-[20px] tracking-[-1px] text-white">Cron Jobs</h1>
        <Link href="/schedule">
          <button className="bg-white/90 text-black px-3 py-1.5 rounded-[3px] text-[12px] font-medium flex items-center gap-1.5 hover:bg-neutral-200 transition cursor-pointer mr-2">
            <IoAddSharp size={14} />
            Schedule New Job
          </button>
        </Link>
      </div>

      <div className="bg-[#1F1F1F] rounded-[10px] flex flex-col flex-1 min-h-0">
        <div className="p-4 border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative" ref={statusDropdownRef}>
              <button
                onClick={() => setStatusFilterOpen(!statusFilterOpen)}
                className="flex items-center gap-2 px-2 p-0.75 border border-[#393939] text-[13px] rounded-[3px] font-light text-white/90 hover:bg-neutral-800 transition-colors cursor-pointer outline-none min-w-[120px]"
              >
                {statusFilter === 'all'
                  ? 'All Status'
                  : statusFilter === 'ACTIVE'
                    ? 'Active'
                    : statusFilter === 'PAUSED'
                      ? 'Paused'
                      : 'Failed'}
                <FiChevronDown
                  size={14}
                  className={`ml-auto transition-transform ${statusFilterOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {statusFilterOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-neutral-900 border border-[#393939] rounded-[3px] z-50 overflow-hidden">
                  {[
                    { value: 'all', label: 'All Status' },
                    { value: 'ACTIVE', label: 'Active' },
                    { value: 'PAUSED', label: 'Paused' },
                    { value: 'FAILED', label: 'Failed' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        useJobStore.setState({ statusFilter: opt.value });
                        setStatusFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[13px] font-light transition-colors cursor-pointer ${statusFilter === opt.value ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-neutral-800 hover:text-white'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" ref={workspaceDropdownRef}>
              <button
                onClick={() => setWorkspaceFilterOpen(!workspaceFilterOpen)}
                className="flex items-center gap-2 px-2 p-0.75 border border-[#393939] text-[13px] rounded-[3px] font-light text-white/90 hover:bg-neutral-800 transition-colors cursor-pointer outline-none min-w-[140px]"
              >
                {selectedWorkspaceName}
                <FiChevronDown
                  size={14}
                  className={`ml-auto transition-transform ${workspaceFilterOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {workspaceFilterOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-neutral-900 border border-[#393939] rounded-[3px] z-50 overflow-hidden max-h-60 overflow-y-auto">
                  <button
                    onClick={() => {
                      useJobStore.setState({ workspaceFilter: 'all' });
                      setWorkspaceFilterOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-[13px] font-light transition-colors cursor-pointer ${workspaceFilter === 'all' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-neutral-800 hover:text-white'}`}
                  >
                    All Workspaces
                  </button>
                  {workspaces?.map((ws) => (
                    <button
                      key={ws.id}
                      onClick={() => {
                        useJobStore.setState({ workspaceFilter: ws.id });
                        setWorkspaceFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[13px] font-light transition-colors cursor-pointer ${workspaceFilter === ws.id ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-neutral-800 hover:text-white'}`}
                    >
                      {ws.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-2 px-3 p-0.75 border border-[#393939] text-[13px] rounded-[3px] font-light text-white/90 hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer"
            >
              <FiRefreshCw
                className={isFetching ? 'animate-spin' : ''}
                size={14}
              />
              Refresh
            </button>
            <Link href="/jobs/new">
              <button className="flex items-center gap-1  px-3 p-0.75 border border-[#393939] text-[13px] rounded-[3px] font-light text-white/90 hover:bg-neutral-800 transition-colors cursor-pointer">
                <IoAddSharp className="mb-0.5" /> New Job
              </button>
            </Link>
            <div className="flex items-center gap-2 border border-[#393939] rounded-[3px] px-2 p-0.75 ml-auto">
              <FiSearch size={14} className="text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs..."
                className="text-[13px] font-light text-white/90 outline-none w-60 transition placeholder:text-neutral-500"
              />
            </div>
          </div>
        </div>

        {!filteredJobs?.length ? (
          <div className="p-4 h-full">
            <div className=" h-[98%] border border-dashed border-neutral-700 flex-1 py-20 flex flex-col items-center justify-center ">
              <FiClock className="text-neutral-500 mb-2" size={24} />
              <p className="text-[16px] tracking-normal text-white">
                No cron jobs found
              </p>
              <p className="text-[12px] text-neutral-500 mt-1">
                Create a new job to get started
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col flex-1 min-h-0">
            <div className="px-5 bg-neutral-900/50 border-b border-neutral-800">
              <div className="grid grid-cols-12 py-2.5 text-[12px] text-white/90 shrink-0">
                <div className="col-span-2">Title</div>
                <div className="col-span-2">Workspace</div>
                <div className="col-span-2">URL</div>
                <div className="col-span-1">Method</div>
                <div className="col-span-2">Schedule</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2 ml-30">Actions</div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto slim-scrollbar min-h-0 relative">
              {isFetching
                ? Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="grid grid-cols-12 items-center py-3 border-b border-neutral-800/50 px-4"
                    >
                      <div className="col-span-2">
                        <div className="h-3 w-24 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-2">
                        <div className="h-3 w-16 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-2">
                        <div className="h-3 w-32 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-1">
                        <div className="h-5 w-12 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-2">
                        <div className="h-3 w-16 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-1">
                        <div className="h-5 w-14 rounded-[3px] bg-neutral-800 animate-pulse" />
                      </div>
                      <div className="col-span-2">
                        <div className="h-5 w-16 rounded-[3px] bg-neutral-800 animate-pulse ml-auto" />
                      </div>
                    </div>
                  ))
                : paginatedJobs.map((job, idx) => (
                    <div
                      key={job.id}
                      className="grid grid-cols-12 items-center px-5 py-3 border-b border-neutral-800/50 last:border-0 cursor-pointer relative z-10 hover:bg-white/5 transition-colors duration-150"
                    >
                      <div className="col-span-2 relative z-10">
                        <Link href={`/jobs/${job.id}`}>
                          <p className="text-[13px] text-white/90 truncate hover:underline">
                            {job.name}
                          </p>
                        </Link>
                        <p className="text-[10px] text-neutral-500 mt-0.5">
                          {job.type}
                        </p>
                      </div>
                      <div className="col-span-2 relative z-10">
                        <span className="text-[12px] text-neutral-400 truncate block">
                          {job.workspace?.name ?? '—'}
                        </span>
                      </div>
                      <div className="col-span-2 relative z-10">
                        <a
                          href={job.endpoint}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-blue-400 truncate flex items-center gap-1"
                        >
                          {job.endpoint}
                          <FiExternalLink size={10} className="shrink-0" />
                        </a>
                      </div>
                      <div className="col-span-1 relative z-10">
                        <span className="text-[11px] font-mono font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5">
                          {job.method}
                        </span>
                      </div>
                      <div className="col-span-2 relative z-10">
                        <p className="text-[11px] font-mono text-neutral-400">
                          {job.schedule || '—'}
                        </p>
                      </div>
                      <div className="col-span-1 relative z-10">
                        <StatusBadge
                          status={
                            job.status === 'ACTIVE'
                              ? 'active'
                              : job.status === 'PAUSED'
                                ? 'paused'
                                : 'failed'
                          }
                        />
                      </div>
                      <div className="col-span-2 flex justify-end gap-1 relative z-10">
                        <button
                          onClick={() => handleToggle(job.id, job.status)}
                          title={job.status === 'ACTIVE' ? 'Pause' : 'Resume'}
                          className={`p-1.5 border transition rounded-[3px] cursor-pointer ${job.status === 'ACTIVE' ? 'border-neutral-700 text-neutral-400 hover:text-amber-400 hover:border-amber-500/50' : 'border-neutral-700 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50'}`}
                        >
                          {job.status === 'ACTIVE' ? (
                            <FiPause size={12} />
                          ) : (
                            <FiPlay size={12} />
                          )}
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          title="Delete"
                          className="p-1.5 border cursor-pointer rounded-[3px] border-neutral-700 text-neutral-400 hover:text-red-400 hover:border-red-500/50 transition"
                        >
                          <FiTrash2 size={12} />
                        </button>
                        <Link href={`/jobs/${job.id}`}>
                          <button
                            title="Details"
                            className="p-1.5 rounded-[3px] cursor-pointer border border-neutral-700 text-neutral-400 hover:text-white hover:border-white/50 transition"
                          >
                            <FiMoreVertical size={12} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        )}

        {filteredJobs && filteredJobs.length > 0 && (
          <div className="flex items-center justify-center px-4 py-3 border-t border-neutral-800 shrink-0 gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="flex items-center gap-1 px-3 py-1.5 text-[12px] text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <FiChevronLeft size={13} /> Previous
            </button>
            {(() => {
              const pages: (number | '...')[] = [];
              if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) pages.push(i);
              } else {
                pages.push(1);
                if (safePage > 3) pages.push('...');
                const start = Math.max(2, safePage - 1);
                const end = Math.min(totalPages - 1, safePage + 1);
                for (let i = start; i <= end; i++) pages.push(i);
                if (safePage < totalPages - 2) pages.push('...');
                pages.push(totalPages);
              }
              return pages.map((p, i) =>
                p === '...' ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="px-2 py-1.5 text-[12px] text-neutral-500"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p as number)}
                    className={`w-6 h-6 text-[12px] rounded-[2px] transition-colors cursor-pointer ${safePage === p ? 'bg-neutral-700 text-white font-medium border border-neutral-600' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
                  >
                    {p}
                  </button>
                ),
              );
            })()}
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={safePage >= totalPages}
              className="flex items-center gap-1 px-3 py-1.5 text-[12px] text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next <FiChevronRight size={13} />
            </button>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={confirmConfig.isOpen}
        title={confirmConfig.title}
        message={confirmConfig.message}
        confirmText={confirmConfig.confirmText}
        confirmButtonClass={confirmConfig.confirmButtonClass}
        onConfirm={confirmConfig.action}
        onCancel={closeConfirm}
      />
    </div>
  );
}

export default function JobsList() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center bg-[#0D0D0D]">
          <LoadingIndicator />
        </div>
      }
    >
      <JobsPageContent />
    </Suspense>
  );
}
