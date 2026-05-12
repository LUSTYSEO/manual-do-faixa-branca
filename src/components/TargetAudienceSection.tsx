import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const profiles = [
  {
    title: "INICIANTES PERDIDOS",
    description: "Você começou no Jiu-Jitsu mas não sabe por onde ir, o que priorizar ou como acelerar sua evolução"
  },
  {
    title: "ESTAGNADOS FRUSTRADOS",
    description: "Já treina há algum tempo mas sente que não está evoluindo como deveria e está pensando em desistir"
  },
  {
    title: "INTIMIDADOS(AS)",
    description: "Tem medo de ir ao treino, se sente inseguro(a) no tatame e quer ganhar confiança rapidamente"
  },
  {
    title: "DEDICADOS QUE QUEREM MAIS",
    description: "Está comprometido com o Jiu-Jitsu e quer um plano estruturado para maximizar seu potencial"
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Se você se encaixa em um destes perfis,{" "}
          <span className="text-primary">este Manual foi desenhado para você</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border p-8 hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{profile.title}</h3>
                  <p className="text-muted-foreground">{profile.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
