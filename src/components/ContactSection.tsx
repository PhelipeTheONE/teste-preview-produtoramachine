import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem Enviada com Sucesso!",
      description: "Retornaremos o contato em até 24 horas.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Criar <span className="text-glow">Algo Incrível?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos discutir seu projeto e dar vida à sua visão. Entre em contato com nossa equipe hoje mesmo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card p-8 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Seu Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  placeholder="Digite seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Endereço de Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  placeholder="Digite seu endereço de email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Detalhes do Projeto
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Conte-nos sobre seu projeto, cronograma e requisitos específicos..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-hero w-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              <Card className="service-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Nos Envie um Email</h4>
                    <p className="text-muted-foreground">produtoramachine@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Respondemos em até 24 horas</p>
                  </div>
                </div>
              </Card>
              
              <Card className="service-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Nos Ligue</h4>
                    <p className="text-muted-foreground">+55 (11) 99155-2263</p>
                    <p className="text-sm text-muted-foreground mt-1">Seg-Sex, 8h-18h</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;