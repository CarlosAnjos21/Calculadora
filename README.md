🧮 Reactive Calculator Engine

Calculadora moderna desenvolvida com foco em Clean Code e Separation of Concerns (SoC).  
O projeto explora o estado da arte do ecossistema React, isolando a lógica de negócio em hooks customizados e utilizando a nova engine CSS-first do Tailwind v4.

🎯 Key Features
- Arquitetura Desacoplada: Toda a lógica matemática reside no hook `useCalculadora`, permitindo que a UI (`Teclado` e `Display`) seja puramente funcional e independente da regra de negócio.
- Tailwind v4 Stack: Implementação sem arquivos de configuração JavaScript, utilizando `@theme` nativo e variáveis CSS para um build mais rápido e previsível.
- UX Responsiva: Design Mobile-First com feedback visual de interação (escala e brilho) para melhor experiência do usuário.
- Normalização de Input: Suporte a padrões decimais brasileiros (`,`) com conversão interna para operações JavaScript (`.`).

🛠️ Tech Stack
- Core: React 18 + Vite
- Styling: Tailwind CSS v4 (CSS-first configuration)
- Logic: Custom Hooks & Composition Pattern

📂 Modular Structure
src/
 ├── components/       # Stateless UI Components
 ├── hooks/            # Business Logic & State Management
 ├── styles/           # Tailwind Directives & Global Theme
 └── App.jsx           # Application Orchestrator

🚀 Setup & Execution
Requisitos:
- Node.js >= 18

# Clone e instalação
git clone https://github.com/seu-usuario/calculadora-react.git
npm install

# Ambiente de desenvolvimento
npm run dev

🧠 Design Pattern Note
O uso de Prop Spreading no componente `App` foi adotado para reduzir boilerplate e facilitar a escalabilidade da comunicação entre o hook de estado e os componentes de UI, mantendo o código limpo e extensível.
