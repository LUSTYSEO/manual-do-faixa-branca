import { Smartphone, PlayCircle, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Smartphone,
    title: "App Exclusivo de Técnicas",
    description: "Aplicativo com posições e técnicas para Faixa Branca (graus 1 a 4) e Faixa Azul (grau 1), na metodologia do Mestre Guilherme Gaya"
  },
  {
    icon: PlayCircle,
    title: "Vídeos Passo a Passo",
    description: "Aprimore cada técnica assistindo vídeos detalhados direto do celular, quantas vezes precisar"
  },
  {
    icon: Target,
    title: "Estratégia de Treino Semanal",
    description: "Otimize cada sessão com um plano estruturado seguindo o app como guia"
  },
  {
    icon: Shield,
    title: "Sobrevivência no Tatame",
    description: "Técnicas práticas para se defender e ganhar confiança desde o primeiro dia"
  }
];

export const MethodSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          O que é o <span className="text-primary">Manual de Sobrevivência</span> do Faixa Branca?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Um curso completo + app exclusivo com vídeos para você aprimorar suas técnicas no celular, a qualquer hora
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border p-8 hover:border-primary transition-all hover:shadow-glow-red group"
            >
              <pillar.icon className="w-16 h-16 text-primary mb-6 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
