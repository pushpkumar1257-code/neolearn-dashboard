export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">

      <div className="flex flex-col items-center gap-4">

        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />

        <p className="text-white text-lg">
          Loading Dashboard...
        </p>

      </div>

    </main>
  );
}