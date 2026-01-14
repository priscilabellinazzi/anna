import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShuffleCards } from './components/ShuffleCards';
import './LandingPage.css';

// --- Sub-componentes ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo-text">Anna Con Te</a>
                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#metodo" onClick={() => setMobileMenuOpen(false)}>O Método</a>
                    <a href="#modulos" onClick={() => setMobileMenuOpen(false)}>Módulos</a>
                    <a href="#anna" onClick={() => setMobileMenuOpen(false)}>Quem é Anna</a>
                    <a href="#investimento" className="btn btn-outline" onClick={() => setMobileMenuOpen(false)}>Quero Começar</a>
                </div>
                <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="carousel-slide active"
                    >
                        <img src={images[current].src} alt={images[current].alt} />
                    </motion.div>
                </AnimatePresence>
            </div>
            <button className="carousel-btn carousel-prev" onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="carousel-btn carousel-next" onClick={() => setCurrent(current === images.length - 1 ? 0 : current + 1)}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${current === i ? 'active' : ''}`}
                        onClick={() => setCurrent(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

const LandingPage = () => {
    const images = [
        { src: 'assets/anna-passaporte.jpg', alt: 'Anna com passaporte' },
        { src: 'assets/anna-florenca.jpg', alt: 'Anna em Florença' },
        { src: 'assets/anna-coliseu.png', alt: 'Anna no Coliseu' },
        { src: 'assets/anna-cinqueterre.png', alt: 'Anna em Cinque Terre' },
        { src: 'assets/anna-trevi.png', alt: 'Anna na Fontana di Trevi' },
        { src: 'assets/anna-profissional.jpg', alt: 'Anna Profissional' },
        { src: 'assets/anna-janela.jpg', alt: 'Anna na Itália' },
    ];

    return (
        <div className="landing-page">
            <Navbar />

            <header className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge">Método Anna Con Te</span>
                        <h1>O método completo para você conduzir o reconhecimento da sua <span className="highlight">cidadania italiana</span></h1>
                        <p>Com autonomia, método e orientação técnica. O suporte da Anna em cada fase.</p>
                        <a href="#investimento" className="btn btn-primary btn-lg">Quero Começar Agora</a>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="assets/anna-profissional.jpg" alt="Anna Favaretto" />
                    </motion.div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="stats-section section-padding bg-wine">
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { val: '500+', label: 'Famílias Ajudadas' },
                            { val: '10+', label: 'Anos de Experiência' },
                            { val: '98%', label: 'Satisfação dos Alunos' },
                            { val: '5', label: 'Módulos Completos' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="stat-item"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="stat-number">{stat.val}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section-padding bg-cream">
                <div className="container overflow-hidden">
                    <div className="text-center mb-16">
                        <span className="badge mb-4">Prova Social</span>
                        <h2 className="section-title">O que nossos alunos dizem</h2>
                        <p className="section-subtitle">Resultados reais de quem já iniciou a jornada</p>
                    </div>

                    <ShuffleCards />
                </div>
            </section>

            {/* About Anna */}
            <section id="anna" className="about-anna section-padding">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-carousel"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Carousel images={images} />
                        </motion.div>
                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Quem é Anna?</h2>
                            <p><strong>Anna Favaretto</strong> é especialista em cidadania italiana e já ajudou centenas de famílias.</p>
                            <div className="quote-box">
                                <p><em>"Anna Con Te significa 'Anna com você'."</em></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="footer bg-wine section-padding">
                <div className="container text-center text-white">
                    <span className="footer-brand">Anna Con Te</span>
                    <p className="mt-3">&copy; 2024. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
