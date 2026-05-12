import { Users, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "2.000+",
    label: "Alunos Transformados",
    description: "Praticantes confiantes no tatame",
  },
  {
    icon: BookOpen,
    number: "500+",
    label: "Manuais Vendidos",
    description: "Guias completos entregues",
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Evolução Acelerada",
    description: "Média de progresso dos alunos",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Milhares de Praticantes como{" "}
          <span className="text-primary">VOCÊ</span> já transformaram
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          seu Jiu-Jitsu com o Manual de Sobrevivência
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card-gradient border border-border rounded-xl p-8 text-center hover:border-primary transition-all group"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mb-8">
          Isso significa mais confiança, mais evolução e mais conquistas no tatame para nossos alunos.
        </p>

        <div className="text-center">
          <button
            onClick={() =>
              document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-primary hover:text-primary/80 font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            Veja Como É Possível Também →
          </button>
        </div>
      </div>
    </section>
  );
};
