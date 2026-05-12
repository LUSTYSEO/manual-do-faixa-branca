import mentorImage from "@/assets/mentor-portrait.jpg";

export const MentorSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Quem Será Seu Guia Nesta Jornada?{" "}
          <span className="text-primary">Mestre Guilherme Gaya</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <img 
              src={mentorImage} 
              alt="Mestre Guilherme Gaya" 
              className="rounded-lg border-4 border-primary shadow-glow-red w-full"
            />
          </div>
          
          <div className="lg:w-2/3 space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Conheci o Jiu-Jitsu aos 21 anos e, desde então, uma nova jornada começou na minha vida. O tatame me deu novos valores e me ensinou a ter um discernimento muito melhor entre a ilusão e a realidade.
            </p>
            
            <p className="text-lg leading-relaxed">
              No início não foi fácil. Levei escorregões, tombos, me lesionei e fui finalizado incontáveis vezes. Tudo parecia muito difícil, mas aprendi a ter humildade e caminhar em frente. Sempre acreditei em mim mesmo e, com muita fé, continuei o meu caminho.
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-lg border border-primary/30 mt-8 text-center">
              <p className="text-lg italic leading-relaxed">
                Uma frase que levo comigo é: <br className="hidden md:block" />
                <span className="text-primary font-bold">"Nenhuma situação ruim dura por muito tempo, e nenhuma boa também."</span>
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-bold">O equilíbrio é a base de tudo.</span> Essa dinâmica é fantástica, ela nos obriga a evoluir e nos torna verdadeiramente fortes. A cada ano que passa, continuo aprendendo. O tatame e meus alunos são meus maiores professores.
            </p>
            
            <p className="text-lg leading-relaxed">
              As lições que aprendo todos os dias me motivam e me fazem acreditar cada vez mais no Jiu-Jitsu. São essas mesmas lições e atalhos que eu estruturei neste Manual, para que você também <span className="text-primary font-bold">construa uma base sólida dentro e fora do tatame.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
