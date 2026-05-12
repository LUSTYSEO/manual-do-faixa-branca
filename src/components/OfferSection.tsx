import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Check } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/6dVljIu";

export const OfferSection = () => {

  return (
    <section id="offer" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card-gradient border-primary p-12 relative overflow-hidden shadow-glow-red">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

          <Badge className="bg-primary text-primary-foreground mb-6 text-base px-6 py-2">
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Garanta Seu <span className="text-primary">Manual de Sobrevivência</span> Hoje
          </h2>

          <div className="mb-8">
            <p className="text-2xl text-muted-foreground line-through mb-2">
              DE: R$ 148,00
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl md:text-7xl font-bold text-primary">R$ 67</span>
              <span className="text-3xl text-muted-foreground">,00</span>
            </div>
            <p className="text-lg text-muted-foreground mt-2">
              ou 12x de <span className="text-foreground font-bold">R$ 7,05</span> no cartão
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Acesso imediato ao Manual Completo Interativo+PDF",
              "8 módulos de conteúdo estratégico",
              "4 bônus exclusivos (valor R$ 987,00)",
              "Atualizações gratuitas do conteúdo",
              "Suporte via grupo VIP no Telegram"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.kiwify.com.br/6dVljIu"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-8"
          >
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-2xl py-8 h-auto font-bold shadow-glow-green hover:shadow-glow-green hover:scale-105 transition-all"
            >
              SIM, QUERO TRANSFORMAR MEU JIU-JITSU AGORA!
            </Button>
          </a>

          <div className="bg-secondary/50 p-6 rounded-lg border border-primary/30">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Garantia de 7 Dias</h3>
                <p className="text-muted-foreground">
                  Se você não ficar 100% satisfeito com o conteúdo, devolvemos seu dinheiro.
                  Sem perguntas, sem complicação. O risco é todo nosso.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
