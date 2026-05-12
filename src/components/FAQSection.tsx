import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Este manual é só para quem está começando agora?",
    answer: "Embora seja focado em faixas brancas, o conteúdo é valioso para qualquer praticante que sente estar estagnado ou quer solidificar seus fundamentos. Muitos faixas azuis e roxas relatam ter descoberto conceitos que nunca tinham sido explicados com tanta clareza."
  },
  {
    question: "Vou receber o manual imediatamente após a compra?",
    answer: "Sim! Assim que o pagamento for confirmado, você receberá acesso imediato ao e-book em PDF e aos bônus exclusivos no seu e-mail. Tudo em menos de 5 minutos."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Simples: você tem 7 dias para ler todo o conteúdo e aplicar no tatame. Se por qualquer motivo não ficar satisfeito, basta enviar um único e-mail e devolvemos 100% do seu investimento. Sem burocracia."
  },
  {
    question: "Preciso ter equipamento especial ou treinar em uma academia específica?",
    answer: "Não! O manual foi desenvolvido para ser aplicado em qualquer academia de Jiu-Jitsu. Os conceitos são universais e funcionam independente do estilo ou linhagem da sua equipe."
  },
  {
    question: "O conteúdo serve para Gi e No-Gi?",
    answer: "O manual foca principalmente em Jiu-Jitsu com kimono (Gi), que é a base tradicional. No entanto, os princípios de mentalidade, estratégia de treino e muitos conceitos técnicos se aplicam também ao No-Gi."
  },
  {
    question: "Quantas vezes posso baixar o manual?",
    answer: "Quantas vezes quiser! Uma vez adquirido, o manual é seu para sempre. Você pode baixar em múltiplos dispositivos e terá acesso a todas as atualizações futuras gratuitamente."
  },
  {
    question: "Tenho mais de 40 anos, o manual ainda funciona para mim?",
    answer: "Com certeza! Temos alunos de todas as idades aplicando o método com sucesso. Na verdade, praticantes mais maduros frequentemente têm ainda mais sucesso por aplicarem os conceitos com mais disciplina e consciência."
  },
  {
    question: "Como funciona o grupo VIP no Telegram?",
    answer: "Após a compra, você receberá o link de acesso ao nosso grupo exclusivo onde poderá tirar dúvidas, compartilhar sua evolução e se conectar com outros praticantes que também estão aplicando o método."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Tire suas últimas dúvidas antes de começar
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card-gradient border border-border rounded-lg px-6 data-[state=open]:border-primary transition-all"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
