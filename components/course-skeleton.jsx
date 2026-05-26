export default function CourseSkeleton() {
  return (
    <div className="bg-zinc-900/40 rounded-2xl p-4 border border-zinc-800 animate-pulse">
      <div className="h-4 w-1/2 bg-zinc-700 rounded mb-3" />
      <div className="h-3 w-1/3 bg-zinc-700 rounded mb-4" />
      <div className="h-2 w-full bg-zinc-800 rounded" />
    </div>
  );
}