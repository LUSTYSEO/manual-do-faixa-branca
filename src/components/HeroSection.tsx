import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Shield, Zap } from "lucide-react";
import bjjBackground from "@/assets/bjj-background.jpg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/6dVljIu";

export const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image with 40% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bjjBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 px-4 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Manual de Sobrevivência do{" "}
            <span className="text-accent">FAIXA BRANCA</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            Descubra o Roteiro Passo a Passo do{" "}
            <span className="text-primary font-bold">Mestre Guilherme Gaya</span>{" "}
            que vai Eliminar a Frustração e{" "}
            <span className="text-accent font-bold">Acelerar Sua Evolução</span>{" "}
            no Jiu-Jitsu – Para Você se Tornar o Faixa Branca Mais Confiante do Tatame!
          </p>

          {/* Highlight Box */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-10 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl">
              <span className="text-primary font-bold">OFERTA ESPECIAL:</span>{" "}
              O Manual Completo + 4 Bônus Exclusivos (valor total de R$ 987,00) estão disponíveis agora!{" "}
              <span className="text-accent font-bold">TODOS</span> os recursos para transformar seu Jiu-Jitsu.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto mb-8"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl md:text-2xl px-12 py-8 h-auto font-bold shadow-glow-gold hover:shadow-glow-gold hover:scale-105 transition-all w-full"
            >
              <Zap className="w-6 h-6 mr-2" />
              QUERO MEU MANUAL AGORA
            </Button>
          </a>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 60 30'%3E%3Ctext x='5' y='20' fill='%23888' font-size='10'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-6" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 60 30'%3E%3Ctext x='5' y='20' fill='%23888' font-size='8'%3EMasterCard%3C/text%3E%3C/svg%3E" alt="MasterCard" className="h-6" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 60 30'%3E%3Ctext x='5' y='20' fill='%23888' font-size='10'%3EPIX%3C/text%3E%3C/svg%3E" alt="PIX" className="h-6" />
            </div>
            <div className="flex items-center gap-2">
              <span>✓ Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
