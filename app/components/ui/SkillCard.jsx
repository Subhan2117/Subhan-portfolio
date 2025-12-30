export default function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="min-w-[220px] md:min-w-0 shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur bg-gradient-to-br from-slate-950/40 via-indigo-900/30 to-transparent p-6 shadow-[0_20px_60px_rgba(5,5,15,0.6)]">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-amber-300 mr-3" />
        <h3 className="text-white font-semibold">{skill.name}</h3>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
