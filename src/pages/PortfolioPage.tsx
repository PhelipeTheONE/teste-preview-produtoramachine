import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Festival de Rock 2024",
    category: "Show Ao Vivo",
    image: portfolio1,
    description: "Festival de rock multi-palco com produção audiovisual completa e transmissão ao vivo."
  },
  {
    id: 2,
    title: "Summit Corporativo",
    category: "Vídeo Corporativo",
    image: portfolio2,
    description: "Conferência executiva com setup profissional multi-câmera e transmissão em tempo real."
  },
  {
    id: 3,
    title: "Produção de Videoclipe",
    category: "Videoclipe",
    image: portfolio3,
    description: "Videoclipe cinematográfico com iluminação dinâmica e cinematografia criativa."
  },
  {
    id: 4,
    title: "Festival de Rock 2024",
    category: "Show Ao Vivo",
    image: portfolio1,
    description: "Festival de rock multi-palco com produção audiovisual completa e transmissão ao vivo."
  },
  {
    id: 5,
    title: "Summit Corporativo",
    category: "Vídeo Corporativo",
    image: portfolio2,
    description: "Conferência executiva com setup profissional multi-câmera e transmissão em tempo real."
  },
  {
    id: 6,
    title: "Produção de Videoclipe",
    category: "Videoclipe",
    image: portfolio3,
    description: "Videoclipe cinematográfico com iluminação dinâmica e cinematografia criativa."
  },
  {
    id: 7,
    title: "Festival de Rock 2024",
    category: "Show Ao Vivo",
    image: portfolio1,
    description: "Festival de rock multi-palco com produção audiovisual completa e transmissão ao vivo."
  },
  {
    id: 8,
    title: "Summit Corporativo",
    category: "Vídeo Corporativo",
    image: portfolio2,
    description: "Conferência executiva com setup profissional multi-câmera e transmissão em tempo real."
  },
  {
    id: 9,
    title: "Produção de Videoclipe",
    category: "Videoclipe",
    image: portfolio3,
    description: "Videoclipe cinematográfico com iluminação dinâmica e cinematografia criativa."
  }
];

const PortfolioPage = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background/95 to-background">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar para Home
              </Link>
              <div className="text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Nosso <span className="text-glow">Portfólio</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore nossa coleção completa de produções audiovisuais impressionantes criadas para clientes de diversos setores.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="portfolio-item group animate-fade-in-up cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-primary/90 rounded-full p-4 shadow-[var(--shadow-glow)]">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-secondary text-sm font-medium mb-2 block">
                            {item.category}
                          </span>
                          <h3 className="text-white text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-background border-border">
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Player de vídeo seria integrado aqui</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Exibindo: {selectedItem?.title}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
