import { Flame } from "lucide-react";

export const AnnouncementBar = () => {
  return (
    <div className="bg-accent text-black py-3 px-4 text-center font-bold">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Flame className="w-5 h-5" />
        <span className="text-sm md:text-base">
          OFERTA ESPECIAL DE LANÇAMENTO - GARANTA SEU MANUAL AGORA!
        </span>
        <Flame className="w-5 h-5" />
      </div>
    </div>
  );
};
