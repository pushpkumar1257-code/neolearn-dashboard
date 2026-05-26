import Sidebar from "../../components/sidebar";

export default function SettingsPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white flex overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <Sidebar />

      <section className="relative z-10 flex-1 p-6 md:p-10">

        <h1 className="text-5xl font-bold mb-10">
          Settings
        </h1>

        <div className="max-w-3xl space-y-6">

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-4">
              Profile
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-purple-500"
              />

            </div>

          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-4">
              Preferences
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Dark Mode</span>

                <button className="bg-purple-500 px-4 py-2 rounded-xl">
                  Enabled
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>Email Notifications</span>

                <button className="bg-cyan-500 px-4 py-2 rounded-xl">
                  Active
                </button>
              </div>

            </div>

          </div>

          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold text-lg">
            Save Changes
          </button>

        </div>

      </section>

    </main>
  );
}