import { Card } from "@/components/ui/card";
import { Award, Users, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por Que Escolher a <span className="text-glow">Machine Produtora ?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Na Machine Produtora, não apenas criamos conteúdo – criamos experiências que emocionam pessoas. 
              Nossa paixão por contar histórias impulsiona cada projeto, desde a primeira sessão de brainstorming até a entrega final.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Qualidade Premium</h4>
                  <p className="text-sm text-muted-foreground">Equipamentos de última geração e expertise do setor</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Equipe Especializada</h4>
                  <p className="text-sm text-muted-foreground">Profissionais experientes com anos de mercado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Entrega Rápida</h4>
                  <p className="text-sm text-muted-foreground">Fluxos eficientes sem comprometer a qualidade</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Movidos pela Paixão</h4>
                  <p className="text-sm text-muted-foreground">Cada projeto recebe nossa completa dedicação criativa</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats Cards */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              <Card className="service-card text-center p-6">
                <div className="text-3xl font-bold text-glow mb-2">500+</div>
                <div className="text-muted-foreground">Projetos Realizados</div>
              </Card>
              
              <Card className="service-card text-center p-6">
                <div className="text-3xl font-bold text-glow mb-2">10+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </Card>
              
              <Card className="service-card text-center p-6">
                <div className="text-3xl font-bold text-glow mb-2">50+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </Card>
              
              <Card className="service-card text-center p-6">
                <div className="text-3xl font-bold text-glow mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte Disponível</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;