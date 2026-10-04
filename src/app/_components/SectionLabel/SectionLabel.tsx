type SectionLabelProps = {
  index?: string;
  label: string;
};

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#D4AF37]" />

      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
        {index ? `${index} · ${label}` : label}
      </span>
    </div>
  );
}