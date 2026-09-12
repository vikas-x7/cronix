import type { ReactNode } from 'react';
import CodeBlock from '../components/code-block';
import TableWrapper from '../components/table-wrapper';

export interface DocSubSection {
  id: string;
  title: string;
}

export interface DocSection {
  id: string;
  title: string;
  subSections: DocSubSection[];
  content: ReactNode;
}

export const sections: DocSection[] = [
  {
    id: 'updates',
    title: "What's New in Cronix",
    subSections: [
      { id: 'upd-jul-25', title: 'July 2026' },
      { id: 'upd-jun-25', title: 'June 2026' },
    ],
    content: (
      <div className="space-y-8">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Track all the latest features, improvements, and fixes shipped to
          Cronix.
        </p>

        <div className="space-y-6">
          <div className="border border-neutral-800 rounded-[5px] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-medium text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-[3px]">
                New
              </span>
              <h3
                id="upd-jul-25"
                className="text-[16px] font-semibold text-white"
              >
                July 2026
              </h3>
            </div>
            <ul className="space-y-2.5 text-[14px] text-neutral-300">
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">Manual Run</strong> Execute API
                  requests directly from the Schedule page with instant response
                  preview. No need to create a cron job first.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">Response Tab</strong> View
                  response body and headers in a dedicated tab after running a
                  request manually.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">SDK Page</strong> New SDK
                  integration page added (coming soon).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">
                    Workspace Delete Confirmation
                  </strong>{' '}
                  Type workspace name to confirm deletion for safety.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">
                    Workspace Pagination Fix
                  </strong>{' '}
                  All workspaces now load correctly regardless of count.
                </span>
              </li>
            </ul>
          </div>

          <div className="border border-neutral-800 rounded-[5px] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-medium text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-[3px]">
                Improved
              </span>
              <h3
                id="upd-jun-25"
                className="text-[16px] font-semibold text-white"
              >
                June 2026
              </h3>
            </div>
            <ul className="space-y-2.5 text-[14px] text-neutral-300">
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">Delete Modal Fix</strong>{' '}
                  Confirmation modal now closes properly after deleting a cron
                  job.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">Workspace Cards Scroll</strong>{' '}
                  Fixed card overflow issue on the Workspaces page.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-500 mt-1.5 shrink-0">•</span>
                <span>
                  <strong className="text-white">Sidebar Updates</strong> Added
                  &quot;What&apos;s New&quot; card and SDK navigation item.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'dashboard',
    title: 'Understanding the Dashboard',
    subSections: [
      { id: 'dash-what', title: "What You'll See" },
      { id: 'dash-actions', title: 'Quick Actions' },
      { id: 'dash-recent', title: 'Recent Executions' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          After signing in, you land on the Dashboard. This is your main control
          panel - it shows everything at a glance.
        </p>

        <h3
          id="dash-what"
          className="text-[18px] font-semibold text-white pt-2"
        >
          What You&apos;ll See
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            <strong className="text-white">Jobs Registered</strong> - Total
            number of jobs you&apos;ve created, along with how many are active
            and how many are paused.
          </li>
          <li>
            <strong className="text-white">Currently Running</strong> - How many
            jobs are active right now.
          </li>
          <li>
            <strong className="text-white">Total Executions</strong> - All job
            runs in the last 24 hours, including how many failed.
          </li>
          <li>
            <strong className="text-white">Performance Score</strong> - Your
            overall success rate. Green means healthy, yellow means some
            failures, red means things need attention.
          </li>
        </ul>

        <h3
          id="dash-actions"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Quick Actions
        </h3>
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          From the dashboard you can also:
        </p>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            Click <strong className="text-white">Schedule New Job</strong> to
            create a new cron job.
          </li>
          <li>
            Click <strong className="text-white">View All Jobs</strong> to go to
            the full jobs list.
          </li>
          <li>
            Click <strong className="text-white">Refresh</strong> to pull the
            latest data.
          </li>
        </ul>

        <h3
          id="dash-recent"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Recent Executions
        </h3>
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Below the stats cards, you&apos;ll see a table of your 10 most recent
          executions. Each row shows the job name, status (success or failed),
          trigger type (scheduled, manual, or webhook), duration, and timestamp.
        </p>
      </div>
    ),
  },
  {
    id: 'cron-jobs',
    title: 'Creating a Cron Job',
    subSections: [
      { id: 'cron-steps', title: 'Step by Step' },
      { id: 'cron-fields', title: 'Form Fields' },
      { id: 'cron-schedule', title: 'Schedule Guide' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          A cron job is a task that runs automatically on a schedule you define.
          For example, you can make it call an API every hour, or send a report
          every morning at 9 AM.
        </p>

        <h3
          id="cron-steps"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Step by Step
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Go to <strong className="text-white">Cron Jobs</strong> in the
            sidebar.
          </li>
          <li>
            Click the <strong className="text-white">New Cron Job</strong>{' '}
            button in the top right.
          </li>
          <li>Fill in the form with the details below.</li>
          <li>
            Click <strong className="text-white">Create</strong> - your job is
            now live and will run on schedule.
          </li>
        </ol>

        <h3
          id="cron-fields"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Form Fields
        </h3>
        <TableWrapper
          headers={['Field', 'What to Enter', 'Example']}
          rows={[
            ['Name', 'A label you&apos;ll recognize', 'Send daily report'],
            [
              'Endpoint',
              'The URL Cronix should call',
              'https://api.example.com/report',
            ],
            ['Method', 'GET, POST, PUT, PATCH, or DELETE', 'POST'],
            ['Schedule', 'A cron expression (see below)', '0 9 * * *'],
            [
              'Headers',
              'Extra headers (optional)',
              '{"Authorization": "Bearer ..."}',
            ],
            [
              'Body',
              'Request body for POST/PUT (optional)',
              '{"key": "value"}',
            ],
            ['Retry Count', 'How many times to retry on failure (0-10)', '3'],
            ['Retry Delay', 'Seconds to wait between retries (10-300)', '30'],
            ['Timeout', 'Max seconds to wait for a response (5-300)', '30'],
            ['Failure Email', 'Get an email if the job fails', 'On / Off'],
          ]}
        />

        <h3
          id="cron-schedule"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Schedule Guide
        </h3>
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Not sure about cron syntax? Here are some common patterns:
        </p>
        <TableWrapper
          headers={['I Want It To Run...', 'Cron Expression']}
          rows={[
            ['Every minute', '* * * * *'],
            ['Every hour', '0 * * * *'],
            ['Every day at midnight', '0 0 * * *'],
            ['Every day at 9 AM', '0 9 * * *'],
            ['Every Sunday', '0 0 * * 0'],
            ['First of every month', '0 0 1 * *'],
            ['Every weekday (Mon-Fri)', '0 0 * * 1-5'],
          ]}
        />

        <div className="border border-neutral-800 bg-neutral-900/50 p-4 rounded-[4px]">
          <p className="text-[14px] text-neutral-300 leading-relaxed">
            <strong className="text-white">Tip:</strong> Use a site like
            crontab.guru to double-check your expression before saving. The five
            positions mean: minute, hour, day of month, month, day of week.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'webhooks',
    title: 'Using Webhook Jobs',
    subSections: [
      { id: 'wh-when', title: 'When to Use' },
      { id: 'wh-setup', title: 'How to Set Up' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Webhook jobs don&apos;t run on a schedule. Instead, they wait for you
          (or another service) to send a request to a special URL. When that
          happens, Cronix triggers the job immediately.
        </p>

        <h3 id="wh-when" className="text-[18px] font-semibold text-white pt-2">
          When to Use
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>Trigger a deployment when you push code to GitHub.</li>
          <li>Run a cleanup script after a form is submitted.</li>
          <li>Ping an API from another tool or automation.</li>
        </ul>

        <h3 id="wh-setup" className="text-[18px] font-semibold text-white pt-2">
          How to Set Up
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Create a new job and choose type{' '}
            <strong className="text-white">Event</strong> instead of Cron.
          </li>
          <li>
            Fill in the endpoint, method, headers, and body just like a cron
            job.
          </li>
          <li>
            After saving, go to the{' '}
            <strong className="text-white">Webhooks</strong> page in the
            sidebar.
          </li>
          <li>
            You&apos;ll see a unique{' '}
            <strong className="text-white">Webhook URL</strong> for your job -
            copy it.
          </li>
          <li>
            Send a <strong className="text-white">POST</strong> request to that
            URL whenever you want to trigger the job.
          </li>
        </ol>

        <CodeBlock>{`POST https://your-cronix-domain.com/api/v1/webhooks/trigger/YOUR_TOKEN_HERE`}</CodeBlock>

        <p className="text-[15px] text-neutral-300 leading-relaxed">
          The job will execute immediately and you&apos;ll see the result in
          your execution history.
        </p>
      </div>
    ),
  },
  {
    id: 'workspaces',
    title: 'Managing Workspaces',
    subSections: [
      { id: 'ws-first', title: 'Your First Workspace' },
      { id: 'ws-what', title: 'What You Can Do' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Workspaces are folders for your jobs. They help you keep things
          organized - for example, you might have one workspace for monitoring
          scripts and another for scheduled reports.
        </p>

        <h3 id="ws-first" className="text-[18px] font-semibold text-white pt-2">
          Your First Workspace
        </h3>
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          When you sign up, Cronix creates a default workspace for you called{' '}
          <strong className="text-white">
            &quot;Your Name&apos;s Space&quot;
          </strong>
          . You can rename it or create new ones.
        </p>

        <h3 id="ws-what" className="text-[18px] font-semibold text-white pt-2">
          What You Can Do
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            <strong className="text-white">Create</strong> a new workspace from
            the Workspaces page.
          </li>
          <li>
            <strong className="text-white">Rename</strong> a workspace by
            clicking on it.
          </li>
          <li>
            <strong className="text-white">Delete</strong> a workspace - all
            jobs inside it will also be removed.
          </li>
          <li>
            <strong className="text-white">Assign jobs</strong> to a workspace
            when creating or editing them.
          </li>
        </ul>

        <div className="border border-neutral-800 bg-neutral-900/50 p-4 rounded-[4px]">
          <p className="text-[14px] text-neutral-300 leading-relaxed">
            <strong className="text-white">Note:</strong> Workspace names must
            be unique across all your workspaces. You can&apos;t have two with
            the same name.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'executions',
    title: 'Checking Execution History',
    subSections: [
      { id: 'ex-how', title: 'How to View' },
      { id: 'ex-status', title: 'Status Meanings' },
      { id: 'ex-details', title: 'What Details Are Shown' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Every time a job runs, Cronix logs the result. This lets you see what
          happened, whether it succeeded or failed, and how long it took.
        </p>

        <h3 id="ex-how" className="text-[18px] font-semibold text-white pt-2">
          How to View
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Click <strong className="text-white">Executions</strong> in the
            sidebar.
          </li>
          <li>
            You&apos;ll see a list of all recent executions across all your
            jobs.
          </li>
          <li>Use the filters to narrow down by job or status.</li>
          <li>Click on any row to see full details and logs.</li>
        </ol>

        <h3
          id="ex-status"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Status Meanings
        </h3>
        <TableWrapper
          headers={['Status', 'What It Means']}
          rows={[
            ['RUNNING', 'The job is currently executing.'],
            [
              'SUCCESS',
              'The job completed and the endpoint responded with a success status.',
            ],
            [
              'FAILED',
              'The job failed - either the endpoint returned an error or timed out.',
            ],
            [
              'RETRYING',
              'The job failed once and is now retrying automatically.',
            ],
          ]}
        />

        <h3
          id="ex-details"
          className="text-[18px] font-semibold text-white pt-2"
        >
          What Details Are Shown
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            <strong className="text-white">Trigger</strong> - How it was
            started: SCHEDULED (automatic), MANUAL (you clicked Run Now), or
            WEBHOOK.
          </li>
          <li>
            <strong className="text-white">Attempt</strong> - Which attempt
            number this was (1 of 4 means it succeeded on the first try with 3
            retries available).
          </li>
          <li>
            <strong className="text-white">HTTP Status</strong> - The response
            code from the endpoint (200 means OK, 500 means server error).
          </li>
          <li>
            <strong className="text-white">Duration</strong> - How long the
            request took in milliseconds.
          </li>
          <li>
            <strong className="text-white">Logs</strong> - Detailed step-by-step
            log of what happened during execution.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'pause-resume',
    title: 'Pausing & Resuming Jobs',
    subSections: [
      { id: 'pr-pause', title: 'How to Pause' },
      { id: 'pr-resume', title: 'How to Resume' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          You don&apos;t have to delete a job to stop it. Pausing a job keeps
          everything intact - the schedule, the endpoint, the settings - it just
          stops running until you resume it.
        </p>

        <h3 id="pr-pause" className="text-[18px] font-semibold text-white pt-2">
          How to Pause
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Go to <strong className="text-white">Cron Jobs</strong>.
          </li>
          <li>Find the job you want to pause.</li>
          <li>
            Click the <strong className="text-white">pause icon</strong> (the
            square button) in the Actions column.
          </li>
          <li>
            Confirm in the popup - the job status will change to{' '}
            <strong className="text-white">PAUSED</strong>.
          </li>
        </ol>

        <h3
          id="pr-resume"
          className="text-[18px] font-semibold text-white pt-2"
        >
          How to Resume
        </h3>
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Click the same button again (now showing a play icon) and confirm. The
          job will start running on its schedule again.
        </p>
      </div>
    ),
  },
  {
    id: 'run-now',
    title: 'Running a Job Manually',
    subSections: [
      { id: 'rn-how', title: 'How to Run Now' },
      { id: 'rn-limit', title: 'Rate Limit' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Sometimes you want to test a job right away without waiting for the
          next scheduled run. The Run Now feature lets you trigger it
          immediately.
        </p>

        <h3 id="rn-how" className="text-[18px] font-semibold text-white pt-2">
          How to Run Now
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Go to <strong className="text-white">Cron Jobs</strong> and click on
            the job name.
          </li>
          <li>
            On the job detail page, click the{' '}
            <strong className="text-white">Run Now</strong> button.
          </li>
          <li>
            The job will execute immediately and you&apos;ll see the result in
            your executions.
          </li>
        </ol>

        <h3 id="rn-limit" className="text-[18px] font-semibold text-white pt-2">
          Rate Limit
        </h3>
        <div className="border border-neutral-800 bg-neutral-900/50 p-4 rounded-[4px]">
          <p className="text-[14px] text-neutral-300 leading-relaxed">
            You can trigger manual runs up to{' '}
            <strong className="text-white">10 times per minute</strong>. If you
            hit the limit, wait a moment and try again.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'notifications',
    title: 'Email Notifications',
    subSections: [
      { id: 'en-enable', title: 'How to Enable' },
      { id: 'en-content', title: 'What the Email Contains' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Cronix can email you when a job fails. This is useful for critical
          jobs where you need to know immediately if something goes wrong.
        </p>

        <h3
          id="en-enable"
          className="text-[18px] font-semibold text-white pt-2"
        >
          How to Enable
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            When creating or editing a job, turn on the{' '}
            <strong className="text-white">Failure Email</strong> toggle.
          </li>
          <li>
            That&apos;s it - if the job fails after all retry attempts,
            you&apos;ll get an email.
          </li>
        </ol>

        <h3
          id="en-content"
          className="text-[18px] font-semibold text-white pt-2"
        >
          What the Email Contains
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>The name of the job that failed.</li>
          <li>The endpoint URL it was trying to call.</li>
          <li>The HTTP method used.</li>
          <li>How many attempts were made.</li>
          <li>The error message from the last attempt.</li>
        </ul>

        <div className="border border-neutral-800 bg-neutral-900/50 p-4 rounded-[4px]">
          <p className="text-[14px] text-neutral-300 leading-relaxed">
            <strong className="text-white">Note:</strong> The email is sent to
            the address linked to your Google or GitHub account. Make sure your
            OAuth provider has your correct email.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'security',
    title: 'Your Account & Security',
    subSections: [
      { id: 'sec-private', title: 'Your Data Is Private' },
      { id: 'sec-auth', title: 'How Authentication Works' },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Cronix takes your security seriously. Here&apos;s how your account and
          data are protected.
        </p>

        <h3
          id="sec-private"
          className="text-[18px] font-semibold text-white pt-2"
        >
          Your Data Is Private
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            Each user can only see their own workspaces, jobs, and executions.
          </li>
          <li>
            No one else - not even other Cronix users - can access your data.
          </li>
          <li>
            Your session is secured with encrypted tokens stored in httpOnly
            cookies.
          </li>
        </ul>

        <h3 id="sec-auth" className="text-[18px] font-semibold text-white pt-2">
          How Authentication Works
        </h3>
        <ul className="space-y-3 text-[15px] text-neutral-300 list-disc list-inside">
          <li>
            <strong className="text-white">OAuth Login</strong> - You sign in
            through Google or GitHub. Cronix never sees or stores your password.
          </li>
          <li>
            <strong className="text-white">Auto Refresh</strong> - Your session
            stays active for 7 days. After that, you&apos;ll need to sign in
            again.
          </li>
          <li>
            <strong className="text-white">Logout</strong> - Click your profile
            in the sidebar and select Logout to end your session immediately.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'delete-job',
    title: 'Deleting a Job',
    subSections: [{ id: 'dj-how', title: 'How to Delete' }],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          If you no longer need a job, you can delete it. This is a soft delete
          - the job stops running immediately and is removed from your list.
        </p>

        <h3 id="dj-how" className="text-[18px] font-semibold text-white pt-2">
          How to Delete
        </h3>
        <ol className="space-y-3 text-[15px] text-neutral-300 list-decimal list-inside">
          <li>
            Go to <strong className="text-white">Cron Jobs</strong>.
          </li>
          <li>Find the job you want to delete.</li>
          <li>
            Click the <strong className="text-white">trash icon</strong> in the
            Actions column.
          </li>
          <li>Confirm in the popup - the job is now deleted.</li>
        </ol>

        <div className="border border-neutral-800 bg-neutral-900/50 p-4 rounded-[4px]">
          <p className="text-[14px] text-neutral-300 leading-relaxed">
            <strong className="text-white">Warning:</strong> Deleting a job also
            removes its execution history. If you need the data, check your
            executions before deleting.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cleanup',
    title: 'Automatic Data Cleanup',
    subSections: [],
    content: (
      <div className="space-y-6">
        <p className="text-[15px] text-neutral-300 leading-relaxed">
          Cronix automatically cleans up old data to keep your account fast and
          your database lean. Here&apos;s what gets cleaned and when:
        </p>

        <TableWrapper
          headers={[
            'What',
            'How Long It&apos;s Kept',
            'When It&apos;s Cleaned',
          ]}
          rows={[
            ['Execution Logs', '7 days', 'Every night at midnight'],
            ['Execution Records', '30 days', 'Every night at midnight'],
          ]}
        />

        <p className="text-[15px] text-neutral-300 leading-relaxed">
          This happens in the background - you don&apos;t need to do anything.
          Just keep in mind that if you want to review old executions, check
          them within 30 days.
        </p>
      </div>
    ),
  },
];
