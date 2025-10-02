import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Video, Mic, Radio, Camera, Lightbulb, Users } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videoclipes & DVDs",
    description: "Narrativa cinematográfica que dá vida à sua música com direção profissional, edição e pós-produção."
  },
  {
    icon: Users,
    title: "Eventos & Shows Ao Vivo",
    description: "Produção completa de eventos desde reuniões íntimas até grandes shows com palco e cobertura profissional."
  },
  {
    icon: Radio,
    title: "Transmissões Ao Vivo",
    description: "Soluções de streaming e transmissão em tempo real com áudio cristalino e vídeo em alta definição."
  },
  {
    icon: Camera,
    title: "Vídeo Corporativo",
    description: "Conteúdo corporativo profissional incluindo apresentações, vídeos de treinamento e materiais promocionais."
  },
  {
    icon: Mic,
    title: "Produção de Áudio",
    description: "Serviços completos de áudio desde gravação até mixagem e masterização com equipamentos de última geração."
  },
  {
    icon: Lightbulb,
    title: "Iluminação Cênica",
    description: "Design de iluminação dinâmica e unidades móveis que criam a atmosfera perfeita para qualquer produção."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços Completos de <span className="text-glow">Produção</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do conceito à entrega, cuidamos de todos os aspectos da sua produção com precisão, criatividade e tecnologia de ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to="/portfolio">
              <Card 
                className="service-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-glow transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;