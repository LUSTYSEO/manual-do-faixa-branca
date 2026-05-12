import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const testimonialsData = [
  {
    name: "Aluno 1",
    belt: "Faixa Branca",
    vimeoId: "76979871"
  },
  {
    name: "Aluno 2",
    belt: "Faixa Branca",
    vimeoId: "76979871"
  },
  {
    name: "Aluno 3",
    belt: "Faixa Branca",
    vimeoId: "76979871"
  }
];

const CHECKOUT_URL = "https://pay.kiwify.com.br/6dVljIu";

export const SocialProofSection = () => {

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Veja o Que Nossos <span className="text-primary">Alunos Dizem</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Depoimentos reais de praticantes que estão usando o Manual para acelerar a evolução no tatame
        </p>
        
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card-gradient border-primary/30 p-4 h-full hover:border-primary transition-all group hover:shadow-glow-red">
                  <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden bg-secondary mb-4">
                    <iframe
                      src={`https://player.vimeo.com/video/${testimonial.vimeoId}?title=0&byline=0&portrait=0`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`Depoimento ${testimonial.name}`}
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.belt}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground -left-12 hidden md:flex" />
          <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground -right-12 hidden md:flex" />
        </Carousel>

        <div className="mt-16 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl md:text-2xl px-12 py-8 h-auto font-bold shadow-glow-gold hover:shadow-glow-gold hover:scale-105 transition-all w-full"
            >
              <Zap className="w-6 h-6 mr-2" />
              QUERO ACELERAR MINHA EVOLUÇÃO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
