import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Map, 
  AlertTriangle, 
  Shield, 
  Smartphone, 
  Dumbbell, 
  Award, 
  Calendar 
} from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Mentalidade Faixa Branca",
    description: "Como desenvolver a atitude certa desde o primeiro dia"
  },
  {
    icon: Map,
    title: "O Mapa do Tesouro",
    description: "Entenda o caminho completo da faixa branca até a preta"
  },
  {
    icon: AlertTriangle,
    title: "Os 5 Pecados Capitais do Iniciante",
    description: "Erros comuns que atrasam sua evolução e como evitá-los"
  },
  {
    icon: Shield,
    title: "Guia de Sobrevivência",
    description: "Técnicas defensivas essenciais para o faixa branca"
  },
  {
    icon: Smartphone,
    title: "Acesso ao App Exclusivo",
    description: "+50 vídeos de técnicas no celular para Faixa Branca (graus 1-4) e Faixa Azul grau 1 — o grande diferencial do curso"
  },
  {
    icon: Dumbbell,
    title: "Treinando Fora do Tatame",
    description: "Exercícios e preparação física específica para o Jiu-Jitsu"
  },
  {
    icon: Award,
    title: "O Código de Honra",
    description: "Etiqueta, respeito e os valores do verdadeiro jiujiteiro"
  },
  {
    icon: Calendar,
    title: "Seu Plano de Evolução de 6 Meses",
    description: "Roteiro detalhado mês a mês para acelerar sua progressão"
  }
];

export const ContentSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          O Que Você Vai <span className="text-primary">Encontrar no Curso</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          8 módulos estratégicos para transformar sua jornada no Jiu-Jitsu
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-primary/30 p-8 hover:border-primary transition-all hover:shadow-glow-red group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary">
                MÓDULO {index + 1}
              </div>
              
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                <module.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">{module.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
