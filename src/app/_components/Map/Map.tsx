type MapProps = {
  address: string;
  className?: string;
};

export default function Map({ address, className = "" }: MapProps) {
  const query = encodeURIComponent(address);

  return (
    <div className={`relative overflow-hidden bg-[#0b0a08] ${className}`}>
      <iframe
        src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
        title={`Map showing ${address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale invert-[90%] hue-rotate-180 brightness-[85%] contrast-[90%]"
      />

      <div className="pointer-events-none absolute inset-0 border border-white/10" />
    </div>
  );
}