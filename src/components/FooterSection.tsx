export const FooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            Manual de Sobrevivência do <span className="text-primary">Faixa Branca</span>
          </h3>
          <p className="text-muted-foreground">Por Mestre Guilherme Gaya</p>
        </div>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>© 2025 Manual de Sobrevivência do Faixa Branca. Todos os direitos reservados.</p>
          <p>contato@manualfaixabranca.com.br</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
