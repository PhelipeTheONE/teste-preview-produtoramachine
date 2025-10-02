import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import portfolioBoston from '@/assets/portfolio-boston.jpg';
import portfolioAlexandre from '@/assets/portfolio-alexandre.jpg';
import portfolioGerson from '@/assets/portfolio-gerson.jpg';

export function PortfolioSection() {
  const portfolioItems = [
    {
      category: 'Evento Corporativo',
      title: 'Boston Scientifics',
      image: portfolioBoston,
    },
    {
      category: 'Show Ao Vivo',
      title: 'Alexandre Pires',
      image: portfolioAlexandre,
    },
    {
      category: 'Gravação de DVD',
      title: 'Gerson Rufino',
      image: portfolioGerson,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nosso <span className="text-magenta">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Confira alguns dos projetos incríveis que tivemos o prazer de produzir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link to="/portfolio" key={index} className="group block relative rounded-lg overflow-hidden shadow-lg">
              {/* LINHA ALTERADA ABAIXO */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-magenta text-sm font-semibold">{item.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-lg font-semibold text-magenta hover:text-white transition-colors duration-300"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}