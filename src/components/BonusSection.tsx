import { Card } from "@/components/ui/card";
import { Video, Users, Book, Dumbbell } from "lucide-react";

const bonuses = [
  {
    icon: Video,
    title: "Vídeo-Aula Exclusiva",
    subtitle: "'Aquecimento Inteligente'",
    description: "Aprenda a preparar seu corpo corretamente antes dos treinos para prevenir lesões e maximizar performance",
    value: "R$ 147,00"
  },
  {
    icon: Users,
    title: "Acesso ao Grupo VIP",
    subtitle: "Comunidade no Telegram",
    description: "Entre em um grupo exclusivo de praticantes, tire dúvidas diretas e receba suporte contínuo na sua evolução",
    value: "R$ 197,00"
  },
  {
    icon: Book,
    title: "E-book Complementar",
    subtitle: "'Nutrição para Lutadores'",
    description: "Guia completo sobre alimentação estratégica para maximizar energia, recuperação e performance no tatame",
    value: "R$ 297,00"
  },
  {
    icon: Dumbbell,
    title: "Programa de Condicionamento",
    subtitle: "'Força e Mobilidade para o Jiu-Jitsu'",
    description: "Rotina de exercícios específicos de 12 semanas para desenvolver força funcional e mobilidade essencial para o Jiu-Jitsu",
    value: "R$ 346,00"
  }
];

export const BonusSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Compre Hoje e Receba{" "}
          <span className="text-primary">4 Bônus Exclusivos</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Valor total dos bônus: <span className="text-primary font-bold">R$ 987,00</span>
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-primary/50 p-8 relative overflow-hidden group hover:border-primary transition-all"
            >
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                BÔNUS #{index + 1}
              </div>
              
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <bonus.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-primary text-lg font-semibold mb-4">{bonus.subtitle}</p>
              <p className="text-muted-foreground mb-4">{bonus.description}</p>
              <p className="text-foreground font-bold">
                Valor: <span className="text-primary">{bonus.value}</span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
