import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    company: "Eventos Premium",
    content: "A Produtora Machine transformou nosso evento corporativo em uma experiência inesquecível. A atenção aos detalhes e equipamentos profissionais fizeram toda a diferença.",
    rating: 5,
    initials: "MS"
  },
  {
    name: "João Santos",
    company: "Rock Nation Band",
    content: "O videoclipe que produziram para nós superou todas as expectativas. A visão criativa e execução técnica foram absolutamente excepcionais.",
    rating: 5,
    initials: "JS"
  },
  {
    name: "Ana Costa",
    company: "Tech Solutions Ltda",
    content: "Profissionais, confiáveis e incrivelmente talentosos. Entregaram nosso vídeo corporativo no prazo e dentro do orçamento. Altamente recomendados!",
    rating: 5,
    initials: "AC"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossos <span className="text-glow">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes satisfeitos têm a dizer sobre trabalhar com a Produtora Machine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="service-card p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;