import Sidebar from "../../components/sidebar";

export default function AnalyticsPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white flex overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <Sidebar />

      <section className="relative z-10 flex-1 p-6 md:p-10">

        <h1 className="text-5xl font-bold mb-10">
          Analytics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <p className="text-zinc-400 text-sm mb-2">
              Total Courses
            </p>

            <h2 className="text-5xl font-bold">
              12
            </h2>
          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <p className="text-zinc-400 text-sm mb-2">
              Completed
            </p>

            <h2 className="text-5xl font-bold text-green-400">
              7
            </h2>
          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <p className="text-zinc-400 text-sm mb-2">
              In Progress
            </p>

            <h2 className="text-5xl font-bold text-cyan-400">
              5
            </h2>
          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <p className="text-zinc-400 text-sm mb-2">
              Learning Hours
            </p>

            <h2 className="text-5xl font-bold text-purple-400">
              48h
            </h2>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <h2 className="text-3xl font-bold mb-6">
            Weekly Progress
          </h2>

          <div className="flex items-end gap-4 h-72">

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[40%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[70%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[55%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[90%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[65%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[80%]" />

            <div className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-3xl h-[50%]" />

          </div>

        </div>

      </section>

    </main>
  );
}