# Projeto React - Anna Con Te

Esta é a versão React da Landing Page "Anna Con Te", otimizada para performance e com animações fluidas usando **Framer Motion**.

## Como usar

1. **Dependências**: Certifique-se de ter as seguintes bibliotecas instaladas no seu projeto React:
   ```bash
   npm install framer-motion lucide-react
   # Ou yarn add framer-motion lucide-react
   ```

2. **Fontes e Ícones**: Adicione as fontes e o FontAwesome no seu `index.html` ou importe-os:
   - Google Fonts: Playfair Display e Lato.
   - FontAwesome 6.0+.

3. **Assets**: Certifique-se de que a pasta `assets/` com todas as imagens da Anna esteja na pasta `public/` do seu projeto React ou ajuste os `import` conforme sua configuração.

4. **Estrutura sugerida**:
   - `src/LandingPage.jsx`: Componente principal.
   - `src/LandingPage.css`: Estilos globais.
   - `src/components/`: Sub-componentes separados (opcional).

## Destaques da versão React
- **Animações de Scroll**: Usando `IntersectionObserver` via Framer Motion (`whileInView`).
- **Carrossel Inteligente**: Gerenciado por estado React com auto-play e animações de fade.
- **Navbar Dinâmica**: Altera a cor e estilo automaticamente ao fazer scroll.
- **Responsividade Nativa**: Todo o layout se adapta a qualquer tela.
