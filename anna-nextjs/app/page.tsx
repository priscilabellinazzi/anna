import { ShuffleCards } from "@/components/ShuffleCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-900 border-b border-white/10">
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 bg-stone-950/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest mb-6">
                Método Anna Con Te
              </span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-2xl font-display">
                O método completo para você conduzir o reconhecimento da sua{" "}
                <span className="text-accent block mt-2 opacity-90">
                  cidadania italiana
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-12 text-stone-300 max-w-2xl leading-relaxed">
                Aprenda a conduzir seu processo de forma independente, com orientação técnica especializada e sem gastar dezenas de milhares de reais em consultoria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#investimento"
                  className="bg-accent text-primary px-10 py-4 rounded-xl font-bold hover:scale-105 transition shadow-xl inline-block uppercase tracking-widest text-sm text-center"
                >
                  Quero começar agora
                </a>
                <a
                  href="#metodo"
                  className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition inline-block uppercase tracking-widest text-sm text-center"
                >
                  Conhecer o método
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-background-light relative border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center">
            {/* Stat 1 */}
            <div className="group md:border-r border-stone-200 last:border-0 px-4">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl text-accent transition-transform group-hover:scale-110 duration-500">👥</span>
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold mb-3 text-primary">500+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Famílias Ajudadas</p>
            </div>
            {/* Stat 2 */}
            <div className="group md:border-r border-stone-200 last:border-0 px-4">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl text-accent transition-transform group-hover:scale-110 duration-500">🏆</span>
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold mb-3 text-primary">10+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Anos de Experiência</p>
            </div>
            {/* Stat 3 */}
            <div className="group md:border-r border-stone-200 last:border-0 px-4">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl text-accent transition-transform group-hover:scale-110 duration-500">⭐</span>
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold mb-3 text-primary">98%</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Satisfação Alunos</p>
            </div>
            {/* Stat 4 */}
            <div className="group px-4">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl text-accent transition-transform group-hover:scale-110 duration-500">📚</span>
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold mb-3 text-primary">5</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Módulos Completos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Interactive */}
      <div id="depoimentos">
        <ShuffleCards />
      </div>

      {/* Investment Section */}
      <section className="py-24 bg-primary text-white" id="investimento">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display italic">Módulos & Investimento</h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              O Anna con Te foi criado para tornar o reconhecimento da cidadania italiana acessível e seguro.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="bg-accent text-primary text-center py-2 text-xs font-bold uppercase tracking-widest">
                Oferta Exclusiva
              </div>
              <div className="p-12 text-slate-800">
                <div className="flex justify-center mb-10">
                  <div className="text-3xl font-display font-bold text-primary">ANNA CON TE</div>
                </div>

                <div className="bg-background-light p-10 rounded-[2.5rem] text-center mb-10 border border-primary/5">
                  <p className="text-sm text-slate-500 mb-2 font-bold uppercase tracking-widest">12x de</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-bold">R$</span>
                    <span className="text-7xl font-bold text-primary italic font-display">70,02</span>
                  </div>
                  <p className="text-xs mt-4 text-slate-400 font-medium">ou R$ 697 à vista</p>
                </div>

                <a
                  href="https://pay.hotmart.com/V97148810K?off=pt7y71r5"
                  className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition mb-4 shadow-xl flex items-center justify-center uppercase tracking-widest"
                >
                  Quero começar meu processo agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer temporário */}
      <footer className="bg-primary py-10 text-white/80 text-center">
        <p className="text-sm">© 2024 Anna Con Te. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
