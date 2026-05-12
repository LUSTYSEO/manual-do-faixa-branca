import { Button } from "@/components/ui/button";
import { Zap, CheckCircle2, AlertCircle } from "lucide-react";
import bjjBackground from "@/assets/bjj-background.jpg";
import confetti from "canvas-confetti";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bjjBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      <div className="container relative z-10 px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            OSS! Seja bem-vindo à nossa <span className="text-accent">família</span>, Guerreiro!
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-12 text-foreground/90 leading-relaxed">
            Sua vaga no <span className="text-primary font-bold">Manual do Faixa Branca</span> está garantida. 
            Você acaba de dar o passo mais importante para mudar seu jogo no Jiu-Jitsu.
          </p>

          {/* Steps Box */}
          <div className="bg-secondary/80 backdrop-blur border border-primary/30 rounded-xl p-8 mb-12 max-w-2xl mx-auto text-left shadow-glow-red">
            <h2 className="text-2xl font-bold mb-6 text-center text-white border-b border-primary/20 pb-4">Três Passos Simples</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-white">Passo 1:</h3>
                  <p className="text-gray-300">Verifique seu e-mail agora. Você recebeu os dados de acesso da plataforma Kiwify.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-white">Passo 2:</h3>
                  <p className="text-gray-300">Clique no botão abaixo para ir direto para a nossa Área de Membros.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-white">Passo 3:</h3>
                  <p className="text-gray-300">Entre no nosso Grupo VIP de Alunos (o link está lá dentro).</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://dashboard.kiwify.com/login?redirect=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto mb-10"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl md:text-2xl px-12 py-8 h-auto font-bold shadow-glow-gold hover:shadow-glow-gold hover:scale-105 transition-all w-full"
            >
              <Zap className="w-6 h-6 mr-2" />
              ACESSAR MINHA ÁREA DE MEMBROS AGORA
            </Button>
          </a>

          {/* Warning */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground bg-black/40 py-3 px-6 rounded-full inline-flex border border-gray-800">
            <AlertCircle className="w-5 h-5 text-primary" />
            <p>Se tiver qualquer dificuldade, me chame no suporte pelo Instagram <a href="https://instagram.com/guilhermegaya" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">@guilhermegaya</a>.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
