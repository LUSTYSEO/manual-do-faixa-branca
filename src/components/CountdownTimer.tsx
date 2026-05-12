import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent text-black font-bold text-3xl md:text-4xl lg:text-5xl rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[90px] border-4 border-accent/30">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-card-gradient border border-border rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-primary" />
        <p className="text-primary font-bold text-sm md:text-base uppercase">
          Oferta Expira em:
        </p>
      </div>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};
