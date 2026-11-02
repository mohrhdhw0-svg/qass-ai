"use client";

const sampleJobs = [
  { id: "job-1", status: "rendering", format: "mp4", progress: 72 },
  { id: "job-2", status: "queued", format: "webm", progress: 12 },
];

export function ExportQueuePanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Export Queue</p>
        <button className="rounded-md bg-[#00B8DB] px-2 py-1 text-xs text-white">Export</button>
      </div>

      <div className="space-y-3">
        {sampleJobs.map((job) => (
          <div key={job.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-800">{job.format.toUpperCase()}</span>
              <span className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{job.status}</span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-[#00B8DB]" style={{ width: `${job.progress}%` }} />
            </div>

            <div className="mt-2 text-[10px] text-slate-500">{job.progress}% complete</div>
          </div>
        ))}
      </div>
    </div>
  );
}
