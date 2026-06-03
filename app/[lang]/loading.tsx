export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b1626] flex flex-col">
      {/* Header skeleton */}
      <div className="h-[72px] bg-white/5 border-b border-white/5 animate-pulse" />

      {/* Hero skeleton */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="h-6 w-48 bg-white/10 rounded-full animate-pulse" />
            <div className="space-y-3">
              <div className="h-12 w-full bg-white/10 rounded-xl animate-pulse" />
              <div className="h-12 w-4/5 bg-white/10 rounded-xl animate-pulse" />
              <div className="h-12 w-3/5 bg-white/10 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-2 pt-4">
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-5 bg-white/5 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 space-y-5 border border-white/10">
              <div className="h-8 w-40 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-12 w-full bg-white/10 rounded-xl animate-pulse" />
              <div className="h-12 w-full bg-white/10 rounded-xl animate-pulse" />
              <div className="h-12 w-full bg-white/10 rounded-xl animate-pulse" />
              <div className="h-14 w-full bg-accent/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Central loading pulse indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0f1d2f]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl z-50">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Loading</span>
      </div>
    </div>
  );
}
