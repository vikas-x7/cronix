'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useExecution, useExecutionLogs } from '@/modules/executions';
import StatusBadge from '@/shared/components/status-badge';
import LoadingIndicator from '@/shared/components/loading-indicator';

interface ExecutionDetailProps {
  executionId: string | null;
  onClose: () => void;
}

export default function ExecutionDetail({
  executionId,
  onClose,
}: ExecutionDetailProps) {
  const { data: execution, isLoading: loadingExecution } = useExecution(
    executionId ?? '',
  );
  const { data: logs, isLoading: loadingLogs } = useExecutionLogs(
    executionId ?? '',
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (executionId) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [executionId, onClose]);

  const isLoading = loadingExecution || loadingLogs;

  return (
    <AnimatePresence>
      {executionId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-145 bg-[#1A1A1A] border-l border-neutral-800 z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 shrink-0">
              <h2 className="text-[15px] font-medium text-white">
                Execution Details
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-[3px] hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <FiX size={16} className="text-white/60" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto slim-scrollbar p-5">
              {isLoading ? (
                <LoadingIndicator />
              ) : execution ? (
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <StatusBadge
                      status={
                        execution.status === 'SUCCESS' ? 'success' : 'failed'
                      }
                    />
                    <span className="text-[13px] text-neutral-400 capitalize">
                      {execution.trigger?.toLowerCase()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      Job
                    </h3>
                    <div className="bg-neutral-900 rounded-[6px] p-3 space-y-2">
                      <DetailRow
                        label="Name"
                        value={execution.job?.name ?? '—'}
                      />
                      <DetailRow
                        label="Method"
                        value={execution.job?.method ?? '—'}
                      />
                      <DetailRow
                        label="Endpoint"
                        value={execution.job?.endpoint ?? '—'}
                      />
                      {execution.job?.workspace && (
                        <DetailRow
                          label="Workspace"
                          value={execution.job.workspace.name}
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      Execution
                    </h3>
                    <div className="bg-neutral-900 rounded-[6px] p-3 space-y-2">
                      <DetailRow
                        label="Trigger"
                        value={execution.trigger ?? '—'}
                      />
                      <DetailRow
                        label="Attempt"
                        value={String(execution.attempt ?? '—')}
                      />
                      <DetailRow
                        label="HTTP Status"
                        value={String(execution.httpStatus ?? '—')}
                      />
                      <DetailRow
                        label="Duration"
                        value={
                          execution.duration != null
                            ? `${execution.duration}ms`
                            : '—'
                        }
                      />
                      <DetailRow
                        label="Started"
                        value={
                          execution.startedAt
                            ? new Date(execution.startedAt).toLocaleString()
                            : '—'
                        }
                      />
                      <DetailRow
                        label="Finished"
                        value={
                          execution.finishedAt
                            ? new Date(execution.finishedAt).toLocaleString()
                            : '—'
                        }
                      />
                    </div>
                  </div>

                  {execution.job?.body &&
                    Object.keys(execution.job.body).length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                          Payload
                        </h3>
                        <div className="bg-neutral-900 rounded-[6px] p-3">
                          <pre className="text-[12px] text-neutral-400 font-mono whitespace-pre-wrap break-all">
                            {JSON.stringify(execution.job.body, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}

                  {execution.job?.headers &&
                    Object.keys(execution.job.headers).length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                          Headers
                        </h3>
                        <div className="bg-neutral-900 rounded-[6px] p-3">
                          <pre className="text-[12px] text-neutral-400 font-mono whitespace-pre-wrap break-all">
                            {JSON.stringify(execution.job.headers, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}

                  {execution.error && (
                    <div className="space-y-3">
                      <h3 className="text-[11px] uppercase tracking-wider text-red-500 font-medium">
                        Error
                      </h3>
                      <div className="bg-red-950/30 border border-red-900/30 rounded-[6px] p-3">
                        <pre className="text-[12px] text-red-400 font-mono whitespace-pre-wrap break-all">
                          {execution.error}
                        </pre>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h3 className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      Logs{' '}
                    </h3>
                    {logs && logs.length > 0 ? (
                      <div className="bg-neutral-900 rounded-[6px] p-3 space-y-1 font-mono text-[12px]">
                        {logs.map((log) => (
                          <div key={log.id} className="py-0.5">
                            <span className="text-neutral-500">
                              [{new Date(log.timestamp).toLocaleTimeString()}]
                            </span>{' '}
                            <span
                              className={
                                log.level === 'ERROR'
                                  ? 'text-red-400'
                                  : log.level === 'WARN'
                                    ? 'text-yellow-400'
                                    : 'text-neutral-400'
                              }
                            >
                              {log.level}
                            </span>{' '}
                            <span className="text-white/80">{log.message}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[13px] text-neutral-500">
                        No logs available
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-[13px] text-neutral-500">
                  Execution not found
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[12px] text-neutral-500">{label}</span>
      <span className="text-[12px] text-white/80 font-mono">{value}</span>
    </div>
  );
}
