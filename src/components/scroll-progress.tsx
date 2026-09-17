import { useScrollProgress } from "@/hooks/use-scroll-reveal";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-dark to-gold transition-[width] duration-75 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
