'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  useExecutions,
  useExecutionLogs,
  ExecutionTable,
  ExecutionStatusBadge,
  LogViewer,
} from '@/modules/executions';
import { useJob } from '@/modules/jobs';
import { formatDuration } from '@/shared/lib/utils';
import { HiOutlineXMark } from 'react-icons/hi2';
import { FiChevronDown } from 'react-icons/fi';
import LoadingIndicator from '@/shared/components/loading-indicator';
import type { Execution } from '@/modules/executions';

function DarkSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border border-[#393939] bg-neutral-900 px-3 py-2 text-[12px] text-white rounded-[3px] cursor-pointer flex items-center gap-2 hover:border-neutral-500 transition"
      >
        {selected?.label || 'Select...'}
      </button>
      <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-neutral-500" />
      {open && (
        <div className="absolute z-50 top-full mt-1 right-0 w-full bg-[#1A1A1A] border border-[#393939] rounded-[3px] py-1 shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-[12px] transition cursor-pointer hover:bg-[#2A2A2A] ${
                opt.value === value
                  ? 'text-white bg-[#2A2A2A]'
                  : 'text-neutral-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function JobExecutions() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { data: job } = useJob(id);
  const [statusFilter, setStatusFilter] = useState('');
  const {
    data: executions,
    isLoading,
    isError,
    refetch,
  } = useExecutions({
    jobId: id,
    status: statusFilter || undefined,
  });
  const [selected, setSelected] = useState<Execution | null>(null);
  const { data: logs } = useExecutionLogs(selected?.id ?? '');

  return (
    <div className="w-full h-screen overflow-y-auto bg-[#0D0D0D] pr-2">
      <div className="py-3 bg-[#0D0D0D] flex items-center justify-between">
        <div>
          <button
            onClick={() => router.push(`/jobs/${id}`)}
            className="text-[12px] text-neutral-500 hover:text-white transition mb-1"
          >
            &larr; {job?.name || 'Job'}
          </button>
          <h1 className="text-[20px] -tracking-[1px] text-white">
            Execution History
          </h1>
        </div>
        <DarkSelect
          value={statusFilter}
          onChange={setStatusFilter}
          options={[
            { label: 'All Status', value: '' },
            { label: 'Success', value: 'SUCCESS' },
            { label: 'Failed', value: 'FAILED' },
            { label: 'Running', value: 'RUNNING' },
            { label: 'Pending', value: 'PENDING' },
          ]}
        />
      </div>
      <div className="bg-[#1F1F1F] rounded-[10px] h-[92vh] overflow-y-auto">
        {isLoading ? (
          <LoadingIndicator />
        ) : isError ? (
          <div className="flex flex-col items-center justify-center p-12">
            <p className="text-[13px] text-neutral-500">
              Failed to load executions
            </p>
            <button
              onClick={() => refetch()}
              className="mt-3 cursor-pointer border border-neutral-700 px-4 py-2 text-[12px] font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="p-6">
            <ExecutionTable
              executions={executions?.items ?? []}
              onSelect={setSelected}
            />
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-neutral-900 border border-neutral-700 shadow-lg">
            <div className="sticky top-0 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 px-6 py-4">
              <h2 className="text-lg font-semibold text-white">
                Execution Detail
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="cursor-pointer text-neutral-400 hover:text-white transition"
              >
                <HiOutlineXMark className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-neutral-500">
                    Status
                  </p>
                  <div className="mt-1">
                    <ExecutionStatusBadge status={selected.status} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-neutral-500">
                    Trigger
                  </p>
                  <p className="mt-1 text-sm capitalize text-white">
                    {selected.trigger.toLowerCase()}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-neutral-500">
                    Attempt
                  </p>
                  <p className="mt-1 text-sm text-white">{selected.attempt}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-neutral-500">
                    Duration
                  </p>
                  <p className="mt-1 text-sm text-white">
                    {formatDuration(selected.duration)}
                  </p>
                </div>
              </div>

              {selected.error && (
                <div>
                  <p className="mb-1 text-xs font-medium uppercase text-red-500">
                    Error Message
                  </p>
                  <div className="bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                    {selected.error}
                  </div>
                </div>
              )}

              <div>
                <p className="mb-1 text-xs font-medium uppercase text-neutral-500">
                  Logs
                </p>
                <LogViewer logs={logs ?? []} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
