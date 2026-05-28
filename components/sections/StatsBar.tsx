export function StatsBar() {
  const stats = [
    { num: '5+', label: 'Años de experiencia' },
    { num: '6', label: 'Terapias integradas' },
    { num: '3h', label: 'Experiencia RUAH' },
    { num: '1', label: 'Centro holointegrativo' },
  ]
  return (
    <div className="border-t border-b border-[#0E9A4C]/15" style={{background:'#EDE6D8'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`py-6 px-4 text-center ${i < stats.length - 1 ? 'border-r border-[#0E9A4C]/15' : ''}`}>
            <span className="font-serif text-[2.6rem] text-[#0E9A4C] leading-none block font-bold">{s.num}</span>
            <span className="text-[0.66rem] tracking-widest uppercase text-[#7A7060] mt-1 block font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
