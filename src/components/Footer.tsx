import webgestLogo from "@/assets/webgest-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-background/95 to-background py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-glow mb-2">Machine Produtora</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transformando visões em experiências inesquecíveis através de produção profissional de vídeo e áudio.
            </p>
          </div>
          
          {/* Selo único da Webgest */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <img src={webgestLogo} alt="Webgest Solutions" className="w-12 h-12" />
                <span className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                  Desenvolvido com paixão pela Webgest Solutions
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            © 2025 Machine Produtora. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;