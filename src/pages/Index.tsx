import { Button } from "@/components/ui/button";
import heroMoto from "@/assets/hero-moto.jpg";
import logoCarlos from "@/assets/logo-carlos-dasmotos.png";
import { Phone } from "lucide-react";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-primary py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <img 
              src={logoCarlos} 
              alt="Carlos Das Motos - Moto Barata - Especialista em Vendas" 
              className="h-32 md:h-48 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroMoto})`,
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
            Encontre a moto
            <br />
            <span className="text-primary">dos seus sonhos!</span>
          </h1>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToContact}
            className="animate-pulse hover:animate-none"
          >
            CLIQUE AQUI
          </Button>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 md:px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-12">
            ENTRE EM <span className="text-primary">CONTATO</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact 1 */}
            <a 
              href="tel:+5511999999999"
              className="group relative overflow-hidden rounded-xl bg-secondary border-2 border-primary/20 hover:border-primary p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    CONTATO 1
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-primary">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </a>

            {/* Contact 2 */}
            <a 
              href="tel:+5511888888888"
              className="group relative overflow-hidden rounded-xl bg-secondary border-2 border-primary/20 hover:border-primary p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    CONTATO 2
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-primary">
                    (11) 88888-8888
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 py-8 px-4 text-center">
        <p className="text-muted-foreground">
          © 2025 <span className="text-primary font-bold">Carlos Das Motos</span> - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
