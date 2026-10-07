# Conteúdo Estruturado da Landing Page
## RP Soluções Inteligentes — Energia Solar Fotovoltaica

> **Arquivo de Especificação e Textos da Landing Page**  
> **Empresa:** RP Soluções Inteligentes Ltda. (Sanclerlândia - GO)  
> **Diretrizes:** Conteúdo estritamente adaptado para se encaixar na arquitetura e nos componentes TSX pré-existentes da Landing Page. Não adaptar o componente ao conteúdo; o conteúdo preenche os campos e interfaces dos componentes existentes.

---

## Índice das Seções
1. [Hero Section (SolarFramedHero)](#1-hero-section-solarframedhero)
2. [Marquee de Fabricantes e Parceiros (SolarLogoMarquee)](#2-marquee-de-fabricantes-e-parceiros-solarlogomarquee)
3. [Sobre Nós — Bento Grid (AboutUs)](#3-sobre-nós--bento-grid-aboutus)
4. [Como Funciona — Timeline (HowItWorks)](#4-como-funciona--timeline-howitworks)
5. [Nossas Soluções / Serviços (Services)](#5-nossas-soluções--serviços-services)
6. [Depoimentos e Prova Social (Testimonials)](#6-depoimentos-e-prova-social-testimonials)
7. [Perguntas Frequentes (FAQ)](#7-perguntas-frequentes-faq)
8. [CTA Final de Simulação (CTA)](#8-cta-final-de-simulação-cta)
9. [Rodapé Institucional (Footer)](#9-rodapé-institucional-footer)
10. [Formulário de Simulação (formulario)](#10-formulário-de-simulação-formulario)

---

## 1. Hero Section (SolarFramedHero)

Componente: `src/components/SolarFramedHero.tsx`

### 1.1 Configuração Superior (Notch / Navbar)
* **Logotipo no Notch:** `/downloaded-assets/logo-rp-solucoes.png` (alt: "RP Soluções Inteligentes - Energia Solar")
* **Links de Navegação do Notch:**
  * Sobre Nós (`#about`)
  * Como Funciona (`#how-it-works`)
  * Soluções (`#services`)
  * Depoimentos (`#testimonials`)
  * FAQ (`#faq`)
* **Botão CTA no Notch:**
  * Texto: `"Simular Economia"`
  * Link: `/simulador/` (ou WhatsApp: `https://api.whatsapp.com/send?phone=5562994633753&text=Ol%C3%A1,%20vim%20pelo%20site.`)

### 1.2 Imagem de Fundo (Background Hero Canvas)
* **Imagem Desktop & Mobile:** `/downloaded-assets/projeto-residencial-telhado.jpg` ou `/downloaded-assets/projeto-usina-solo-destaque.png`
* **Alt Text:** "Instalação fotovoltaica de alta eficiência realizada pela RP Soluções Inteligentes"
* **Gradientes de Legibilidade:** Vignette direcional esquerda-para-direita e base escura para leitura perfeita de tipografia.

### 1.3 Textos e Copywriting da Hero
* **Pill Eyebrow Tag:**
  * Versão Mobile: `RP Soluções Inteligentes`
  * Versão Desktop: `Projetos e Instalação Solar em Sanclerlândia e Goiás • Até 95% de Economia`
* **Headline Principal (H1):**
  * Versão Mobile:  
    `Reduza em até 95% a sua conta de luz com `**`energia solar.`**
  * Versão Desktop:  
    `Energia `*`solar.`*  
    `Reduza até `**`95% da sua conta.`**
* **Subheadline / Descrição:**
  * Versão Mobile:  
    `Projetos de engenharia solar e instalação de alta eficiência. Residencial, Comercial e Rural em Sanclerlândia e em todo o estado de Goiás.`
  * Versão Desktop:  
    `Projetos de engenharia e instalação de energia solar fotovoltaica para residências, empresas e produtores rurais em Sanclerlândia e em todo o estado de Goiás. Descubra quanto você pode economizar com uma simulação gratuita e sem compromisso.`
* **Botões de Ação (Dual Pill CTAs):**
  * **Botão Primário:**
    * Texto Mobile: `"Simular minha economia"`
    * Texto Desktop: `"Faça uma simulação gratuita"`
    * Link: `/simulador/` (ou link WhatsApp oficial)
  * **Botão Secundário:**
    * Texto: `"Conheça as soluções"`
    * Link: `#services`
* **Trust Badges de Credibilidade (Inferior do Hero):**
  * Badge 1: `Simulação 100% gratuita`
  * Badge 2: `Sem compromisso de contratação`
  * Badge 3: `Residencial, Comercial e Rural (On-Grid e Off-Grid)`
  * Badge 4: `Avaliação 4.8 no Google Maps`
* **Marca D'água Gigante Mobile:** `"RP"`

---

## 2. Marquee de Fabricantes e Parceiros (SolarLogoMarquee)

Componente: `src/components/SolarLogoMarquee.tsx`  
Arquivo de Dados: `src/data/partnerLogos.ts`

### 2.1 Módulos Fotovoltaicos e Equipamentos Tier 1
1. **Osda Solar:**
   * Categoria: Módulos Fotovoltaicos Tier 1
   * Descrição: Tecnologia N-Type TOPCon de alta geração e 25 anos de garantia linear.
   * Logo: `/downloaded-assets/parceiro-osda-solar.jpg`
2. **Sunova Solar:**
   * Categoria: Módulos Fotovoltaicos Tier 1
   * Descrição: Alta eficiência, resistência mecânica superior e homologação global.
   * Logo: `/downloaded-assets/parceiro-sunova.jpg`

### 2.2 Inversores, Microinversores e Eletrônica de Potência
3. **APsystems:**
   * Categoria: Microinversores Globais MLPE
   * Descrição: Líder mundial em microinversores inteligentes com monitoramento individual por módulo.
   * Logo: `/downloaded-assets/parceiro-apsystems.jpg`
4. **Growatt:**
   * Categoria: Inversores Residenciais e Comerciais
   * Descrição: Referência global em eficiência energética e inversores string/híbridos.
   * Logo: `/downloaded-assets/parceiro-growatt.png`
5. **Deye:**
   * Categoria: Inversores Híbridos e Microinversores
   * Descrição: Pioneira mundial em soluções com baterias para sistemas híbridos e off-grid.
   * Logo: `/downloaded-assets/parceiro-deye.jpg`

### 2.3 Concessionária de Distribuição de Energia
6. **Equatorial Energia Goiás:**
   * Categoria: Concessionária Homologadora
   * Descrição: Projetos 100% protocolados e homologados conforme as normas técnicas da Equatorial Goiás.
   * Logo: `/downloaded-assets/concessionaria-equatorial.svg` (ou logo vetorial Equatorial)

### 2.4 Parceiros Financeiros e Linhas de Financiamento
7. **Meu Financiamento Solar (Banco BV):**
   * Categoria: Financiamento Solar até 120x
   * Logo: `/downloaded-assets/financiamento-meufinanciamento-bv.png`
8. **Banco do Brasil (BB Solar / FCO):**
   * Categoria: Crédito Rural e Empresarial
   * Logo: `/downloaded-assets/financiamento-banco-do-brasil.png`
9. **Caixa Econômica Federal (Caixa Solar):**
   * Categoria: Financiamento Imobiliário e Energia Limpa
   * Logo: `/downloaded-assets/financiamento-caixa.png`
10. **Sicoob:**
    * Categoria: Linhas de Cooperativismo Solar
    * Logo: `/downloaded-assets/financiamento-sicoob.png`
11. **Sicredi:**
    * Categoria: Energia Solar Sustentável
    * Logo: `/downloaded-assets/financiamento-sicredi.png`
12. **Solfácil:**
    * Categoria: Fintech Especialista em Energia Solar
    * Logo: `/downloaded-assets/financiamento-solfacil.png`
13. **Santander Solar:**
    * Categoria: Financiamento sem Entrada com Carência
    * Logo: `/downloaded-assets/financiamento-santander.png`

---

## 3. Sobre Nós — Bento Grid (AboutUs)

Componente: `src/components/AboutUs.tsx`

### 3.1 Cabeçalho da Seção
* **Pill Eyebrow:** `Sobre a RP Soluções Inteligentes`
* **Título com Block Reveal no Destaque:**
  * Texto: `Invista em energia solar com `**`[segurança]`**` em cada etapa.`
  * Palavra de Destaque animada com ícone de Sol: **`segurança`** (ou **`eficiência`**)
* **Subtítulo / Parágrafo Explicativo:**  
  `Antes de contratar, entenda quanto investir, quanto pode economizar e como a sua usina será instalada. A RP Soluções Inteligentes conduz todas as fases: viabilidade técnica, projeto elétrico de engenharia com ART, homologação completa na Equatorial Goiás e pós-venda permanente.`

### 3.2 Cards do Bento Grid

#### Card 1 (Destaque Principal de Engenharia — Col 1-7 no Desktop)
* **Tipo:** Imagem de Fundo com Overlay Escuro e Conteúdo
* **Imagem:** `/downloaded-assets/projeto-usina-solo-destaque.png`
* **Badge Superior:** `Engenharia Solar & Projetos com ART`
* **Título:** `A economia definitiva começa com um projeto bem dimensionado`
* **Descrição:** `Seu padrão de consumo, a orientação solar da sua cobertura ou solo e a proteção contra sombreamento orientam cada detalhe. É assim que garantimos a máxima geração de kWh para sua casa, empresa ou fazenda em Goiás.`

#### Card 2 (Card Solar Gradiente — Economia e Retorno)
* **Tipo:** Gradiente Solar Amber-to-Orange (`from-[#FFBE00] to-[#F86A0A]`)
* **Label Superior:** `Economia Imediata`
* **Texto de Apoio:** `Redução garantida de até`
* **Contador Numérico Animado (AnimatedCounter):** `95%`
* **Subtexto:** `na conta de luz da concessionária, gerando retorno sobre o investimento entre 4 e 7 anos.`

#### Card 3 (Card Escuro Institucional — Tradição e Sede Própria)
* **Tipo:** Fundo Dark Navy / Neutral-950 com acentos em Amarelo Solar
* **Ícone:** Sol / Raio Solar
* **Título:** `Energia limpa no coração de Goiás.`
* **Cidade / Destaque:** `Sanclerlândia - GO`
* **Descrição:** `Atendimento especializado a mais de 20 municípios no Oeste e Centro Goiano, unindo engenharia de ponta a suporte humano próximo.`

#### Card 4 (Card de Aplicações e Bombeamento Solar)
* **Tipo:** Imagem de Fundo de Alta Resolução
* **Imagem:** `/downloaded-assets/projeto-bombeamento-solar-represa.jpg`
* **Badge:** `Especialidade Rural & Agro`
* **Título:** `Bombeamento solar autônomo e sistemas isolados sem custos de diesel.`
* **Botão com Seta de Ação:** Link direto para a simulação ou WhatsApp da RP Soluções.

---

## 4. Como Funciona — Timeline (HowItWorks)

Componente: `src/components/HowItWorks.tsx`

### 4.1 Cabeçalho da Seção
* **Badge:** `Como Funciona`
* **Título:** `Do estudo de viabilidade ao sistema conectado, cada etapa conduzida com rigor técnico.`
* **Subtítulo:** `Nossa equipe assume 100% da responsabilidade: visita técnica, projeto de engenharia com ART, homologação burocrática junto à Equatorial Goiás e instalação qualificada. Estimativa de tempo total:`
* **Duração Total em Destaque:** `30 a 60 dias`
* **Texto do Botão:** `Simular minha economia`

### 4.2 Etapas Sequenciais (Timeline Steps)

| Etapa | Duração Estimada | Título | Descrição Detalhada |
| :---: | :---: | :--- | :--- |
| **01** | `1 a 2 dias` | **Estudo de Viabilidade & Consumo** | Análise minuciosa do histórico de faturas elétricas dos últimos 12 meses, irradiação solar de Sanclerlândia/região, integridade estrutural e índice de sombreamento. |
| **02** | `3 a 5 dias` | **Engenharia & Projeto Executivo com ART** | Dimensionamento elétrico preciso, especificação técnica dos módulos Tier 1 e inversores homologados, e emissão de Anotação de Responsabilidade Técnica (ART) no CREA-GO. |
| **03** | `até 15 dias` | **Parecer de Acesso na Equatorial Goiás** | Protocolo completo da documentação técnica e solicitação do Parecer de Acesso junto à concessionária Equatorial Energia Goiás, gerenciando prazos e normas da ANEEL. |
| **04** | `1 a 3 dias` | **Montagem e Instalação Especializada** | Fixação mecânica das estruturas, instalação dos painéis, quadros de proteção CC/CA e inversores por eletricistas capacitados e certificados em NR-10 e NR-35. |
| **05** | `até 7 dias` | **Vistoria Técnica e Substituição do Medidor** | Acompanhamento presencial da inspeção técnica da distribuidora e substituição do relógio de luz convencional pelo medidor bidirecional homologado. |
| **06** | `no mesmo dia` | **Sistema Ativado & Monitoramento no Celular** | Conexão do inversor ao Wi-Fi, liberação de acesso ao aplicativo de monitoramento em tempo real e início imediato de até 95% de economia na fatura de luz. |

---

## 5. Nossas Soluções / Serviços (Services)

Componente: `src/components/Services.tsx`  
Interface: `ServiceItem`

### 5.1 Serviço 1: Energia Solar Residencial
* **ID:** `residencial`
* **Número:** `01`
* **Título:** `Energia Solar Residencial`
* **Categoria:** `Casas Térreas, Sobrados e Condomínios Fechados`
* **Badge:** `Mais Procurado`
* **Avaliação:** `5.0`
* **Preço / Condição de Entrada:** `Financiamento 100% sem entrada em até 120x`
* **Imagem:** `/downloaded-assets/projeto-residencial-telhado.jpg`
* **Descrição:** `Gere sua própria energia limpa em casa e reduza até 95% do valor da sua fatura de luz. Use ar-condicionado em todos os cômodos com tranquilidade enquanto valoriza seu imóvel de 10% a 15% imediatamente.`
* **Diferenciais / Features:**
  * Economia mensal de até 95% na conta da Equatorial Goiás.
  * Valorização patrimonial imediata no mercado imobiliário regional.
  * Instalação rápida, silenciosa e sem quebra-quebra em 1 a 2 dias.
  * Monitoramento da produção diária em tempo real na tela do celular.

### 5.2 Serviço 2: Energia Solar Comercial
* **ID:** `comercial`
* **Número:** `02`
* **Título:** `Energia Solar Comercial e Varejo`
* **Categoria:** `Supermercados, Postos, Açougues e Lojas`
* **Badge:** `ROI Acelerado`
* **Avaliação:** `5.0`
* **Preço / Condição de Entrada:** `Carência de até 120 dias para o primeiro pagamento`
* **Imagem:** `/downloaded-assets/projeto-usina-solo-destaque.png`
* **Descrição:** `Elimine o peso das contas de luz no fluxo de caixa da sua empresa. Solução sob medida para comércios com alta carga contínua (câmaras frias, freezers, iluminação e climatização), garantindo previsibilidade de custos por décadas.`
* **Diferenciais / Features:**
  * Redução substancial e permanente das despesas operacionais fixas.
  * Retorno do investimento (payback) médio entre 3 e 5 anos.
  * Parcelas de financiamento cobertas pelo próprio valor economizado.
  * Selo de sustentabilidade corporativa e conformidade ESG para o seu negócio.

### 5.3 Serviço 3: Solar Rural & Agronegócio
* **ID:** `rural`
* **Número:** `03`
* **Título:** `Energia Solar Rural & Agropecuária`
* **Categoria:** `Fazendas, Barracões, Confinamento e Ordenhas`
* **Badge:** `Crédito Rural FCO/Pronaf`
* **Avaliação:** `5.0`
* **Preço / Condição de Entrada:** `Linhas facilitadas Pronaf, Pronamp e FCO Rural`
* **Imagem:** `/downloaded-assets/projeto-usina-solo-agro.jpg`
* **Descrição:** `Autonomia e estabilidade para a produção no campo. Projetos para barracões de máquinas, galpões de confinamento de gado, resfriadores de leite e pivôs de irrigação, imunes às constantes oscilações da rede elétrica rural.`
* **Diferenciais / Features:**
  * Operação contínua para motores de ordenha, resfriamento e galpões.
  * Suporte técnico no acesso a linhas de crédito do agronegócio goiano.
  * Estruturas robustas em solo galvanizado ou coberturas metálicas.
  * Redução drástica dos custos de produção agropecuária.

### 5.4 Serviço 4: Bombeamento Solar Especializado
* **ID:** `bombeamento-solar`
* **Número:** `04`
* **Título:** `Bombeamento Solar de Água`
* **Categoria:** `Poços Artesianos, Represas, Lagos e Bebedouros`
* **Badge:** `Economia de Diesel`
* **Avaliação:** `5.0`
* **Preço / Condição de Entrada:** `Soluções completas com bomba e inversor solar`
* **Imagem:** `/downloaded-assets/projeto-bombeamento-solar-represa.jpg`
* **Descrição:** `Mova água de rios, represas e poços artesianos até caixas d'água e bebedouros de pasto sem gastar um único centavo com combustível fóssil ou energia elétrica da rede. O sistema liga automaticamente com a luz do sol.`
* **Diferenciais / Features:**
  * Zero gasto contínuo com combustível diesel ou óleo lubrificante.
  * Acionamento 100% autônomo: bombeia durante todo o dia com a luz do sol.
  * Ideal para pastagens distantes e áreas sem alcance da rede elétrica.
  * Equipamento de alta durabilidade com manutenção praticamente nula.

### 5.5 Serviço 5: Sistemas Off-Grid & Armazenamento em Baterias
* **ID:** `offgrid-baterias`
* **Número:** `05`
* **Título:** `Sistemas Off-Grid & Baterias LiFePO4`
* **Categoria:** `Sistemas Isolados, Retiros Rurais e Backup No-Break`
* **Badge:** `Energia 24h sem Rede`
* **Avaliação:** `5.0`
* **Preço / Condição de Entrada:** `Projetos de alta autonomia dimensionados sob medida`
* **Imagem:** `/downloaded-assets/projeto-lampada-conceito.jpg`
* **Descrição:** `Tenha energia elétrica estável 24 horas por dia, 7 dias por semana, mesmo em locais totalmente isolados da rede da concessionária. Equipado com bancos de baterias de Lítio (LiFePO4) e inversores híbridos de comutação ultrarrápida.`
* **Diferenciais / Features:**
  * Autonomia completa para retiros de fazendas, antenas e sedes isoladas.
  * Baterias de Lítio de alta ciclagem com vida útil superior a 10 anos.
  * Backup no-break instantâneo que impede interrupções em equipamentos sensíveis.
  * Inversores híbridos inteligentes homologados (Deye e Growatt).

---

## 6. Depoimentos e Prova Social (Testimonials)

Componente: `src/components/Testimonials.tsx`  
Interface: `TestimonialItem`  
Classificação Google Maps: **4.8 / 5.0 estrelas**

### Feedbacks Reais Adaptados de Clientes de Goiás:

#### Depoimento 1: Marcos Antônio Oliveira (Produtor Rural — Sanclerlândia/GO)
* **ID:** `marcos-fazenda-santa-maria`
* **Nome:** `Marcos Antônio Oliveira`
* **Papel:** `Produtor Rural • Bombeamento Solar em Represa`
* **Cidade / Economia:** `Sanclerlândia - GO (Economia: R$ 3.850/mês)`
* **Avatar:** `/images/avatar-guilherme.jpg` (ou avatar corporativo)
* **Imagem da Instalação:** `/downloaded-assets/projeto-bombeamento-solar-represa.jpg`
* **Nota:** `5.0 / 5.0 estrelas`
* **Depoimento:**  
  `"O bombeamento solar instalado pela RP Soluções na nossa represa resolveu definitivamente o problema da água para os bebedouros do gado. Antes nós dependíamos de motor a diesel, que dava manutenção toda semana e gastava muito combustível. Hoje a bomba começa a rodar cedo com o sol e abastece tudo no automático. Equipe nota 10 do Raul Prado, atendimento honesto e muito prestativo."`

#### Depoimento 2: Divino Pereira da Silva (Comerciante — Sanclerlândia/GO)
* **ID:** `divino-supermercado-central`
* **Nome:** `Divino Pereira da Silva`
* **Papel:** `Comércio Varejista • 64 módulos fotovoltaicos`
* **Cidade / Economia:** `Sanclerlândia - GO (Economia: R$ 4.200/mês)`
* **Avatar:** `/images/avatar-carlos.jpg`
* **Imagem da Instalação:** `/downloaded-assets/projeto-usina-solo-destaque.png`
* **Nota:** `5.0 / 5.0 estrelas`
* **Depoimento:**  
  `"Quem tem mercado sabe que a conta de luz com câmaras frias e balcões de congelados é um sufoco todo mês. A RP Soluções fez todo o projeto, cuidou da homologação junto à Equatorial e instalou tudo sem atrapalhar nosso atendimento na loja. Minha conta foi para a taxa mínima. O investimento já está praticamente se pagando sozinho."`

#### Depoimento 3: Dra. Camila Rezende (Residencial — São Luís de Montes Belos/GO)
* **ID:** `camila-residencial-slmb`
* **Nome:** `Dra. Camila Rezende`
* **Papel:** `Residencial Sobrado • 16 módulos com microinversores`
* **Cidade / Economia:** `São Luís de Montes Belos - GO (Economia: R$ 1.150/mês)`
* **Avatar:** `/images/avatar-mariana.jpg`
* **Imagem da Instalação:** `/downloaded-assets/projeto-residencial-telhado.jpg`
* **Nota:** `5.0 / 5.0 estrelas`
* **Depoimento:**  
  `"Optamos pelos microinversores da APsystems recomendados pela RP Soluções por questão de segurança e tecnologia. Foi a melhor decisão! A instalação no telhado ficou impecável, os cabos todos organizados e sem nenhuma bagunça na casa. Pelo aplicativo eu consigo acompanhar o que cada placa gera diariamente. Recomendo de olhos fechados."`

#### Depoimento 4: João Batista Ferreira (Agropecuária — Região de Anicuns / Sanclerlândia/GO)
* **ID:** `joao-fazenda-primavera`
* **Nome:** `João Batista Ferreira`
* **Papel:** `Sede & Ordenha Mecânica • Sistema Híbrido com Baterias`
* **Cidade / Economia:** `Região Anicuns - GO (Economia: R$ 2.900/mês)`
* **Avatar:** `/images/avatar-roberto.jpg`
* **Imagem da Instalação:** `/downloaded-assets/projeto-usina-solo-agro.jpg`
* **Nota:** `5.0 / 5.0 estrelas`
* **Depoimento:**  
  `"Na nossa região a rede da concessionária costuma oscilar muito e já chegamos a perder ordenha por falta de energia. A RP Soluções montou um sistema híbrido com baterias de lítio da Deye. Agora, se a rede cai, a fazenda nem percebe, tudo continua ligado. Segurança total para o produtor rural."`

#### Depoimento 5: Carlos Eduardo Guimarães (Residência Urbana — Sanclerlândia/GO)
* **ID:** `carlos-residencial-cidade-velha`
* **Nome:** `Carlos Eduardo Guimarães`
* **Papel:** `Residencial Unifamiliar • 10 módulos Sunova Solar`
* **Cidade / Economia:** `Sanclerlândia - GO (Economia: R$ 780/mês)`
* **Avatar:** `/images/avatar-fabiana.jpg`
* **Imagem da Instalação:** `/downloaded-assets/projeto-residencial-telhado.jpg`
* **Nota:** `5.0 / 5.0 estrelas`
* **Depoimento:**  
  `"Fizemos o financiamento 100% pelo Banco do Brasil com a ajuda da equipe da RP Soluções. Não precisamos desembolsar nada de entrada e o valor da parcela ficou mais barato do que a gente pagava na fatura da Equatorial. Hoje usamos ar-condicionado todo dia com a casa fresca e a conta zerada."`

---

## 7. Perguntas Frequentes (FAQ)

Componente: `src/components/FAQ.tsx`  
Interface: `FAQItem`

### 1. Como funciona o sistema fotovoltaico no dia a dia?
* **Categoria:** `Técnico`
* **Pergunta:** `Como funciona a geração de energia solar fotovoltaica?`
* **Resposta:**  
  `Os painéis solares instalados no telhado ou em solo absorvem a radiação solar e geram eletricidade em corrente contínua (CC). O inversor solar ou microinversor converte essa eletricidade em corrente alternada (CA), que é o padrão usado em todas as tomadas, aparelhos e iluminação. A energia produzida abastece o imóvel imediatamente. Se houver excesso de geração, essa energia é injetada na rede da concessionária Equatorial Goiás, gerando créditos que podem ser abatidos em até 60 meses.`

### 2. O que é o modelo de entrega "Turn-Key" da RP Soluções?
* **Categoria:** `Serviços`
* **Pergunta:** `O que significa a entrega no modelo Turn-Key (chave na mão)?`
* **Resposta:**  
  `Significa que o cliente não precisa se preocupar com nenhuma etapa técnica ou burocrática. A RP Soluções cuida de tudo: visita técnica e dimensionamento, projeto de engenharia com emissão de ART, protocolo e aprovação na Equatorial Goiás, fornecimento de equipamentos certificados, instalação com profissionais habilitados, vistoria técnica e liberação do relógio bidirecional.`

### 3. Quanto posso economizar na minha fatura de energia?
* **Categoria:** `Financeiro`
* **Pergunta:** `Qual é o percentual real de economia na conta de energia?`
* **Resposta:**  
  `Em sistemas On-Grid (conectados à rede), a economia chega a até 95% do valor da sua fatura mensal. O consumidor passa a pagar apenas o custo de disponibilidade obrigatório da rede da concessionária (taxa mínima monofásica, bifásica ou trifásica) e a taxa de iluminação pública municipal. Em sistemas rurais com bombeamento solar, a economia com óleo diesel e manutenção chega a 100%.`

### 4. Preciso pagar algum valor de entrada no financiamento?
* **Categoria:** `Financeiro`
* **Pergunta:** `É necessário dar entrada para financiar a instalação?`
* **Resposta:**  
  `Não! A RP Soluções possui parcerias homologadas com instituições como Meu Financiamento Solar (BV), Banco do Brasil, Caixa Econômica, Sicoob, Sicredi, Solfácil e Santander. É possível financiar 100% do projeto em até 120 meses com carência de até 120 dias para começar a pagar. Na grande maioria dos casos, a economia imediata gerada na conta já paga o valor da parcela mensal.`

### 5. O que acontece em dias de chuva, com céu nublado ou à noite?
* **Categoria:** `Técnico`
* **Pergunta:** `O que acontece com a geração em dias nublados, chuvosos ou durante a noite?`
* **Resposta:**  
  `Mesmo em dias nublados ou de chuva, os painéis continuam produzindo eletricidade através da radiação solar difusa, em proporção à luminosidade do dia. Durante a noite, o imóvel utiliza automaticamente a energia da rede da concessionária, consumindo os créditos gerados durante o dia. Em sistemas Off-Grid, a energia armazenada nos bancos de baterias de lítio mantém tudo ligado sem interrupções.`

### 6. Como funciona a solução de bombeamento solar para o campo?
* **Categoria:** `Rural`
* **Pergunta:** `Como funciona o sistema de bombeamento solar em fazendas e represas?`
* **Resposta:**  
  `O bombeamento solar utiliza módulos fotovoltaicos conectados a um inversor/driver especial que aciona motobombas de água em poços artesianos, represas ou lagos. O sistema opera de forma 100% autônoma com a luz solar, sem necessidade de operador, sem cabos de rede elétrica extensos e eliminando por completo o gasto diário com geradores a diesel.`

### 7. Quais são as garantias reais dos equipamentos instalados?
* **Categoria:** `Garantia`
* **Pergunta:** `Quais são as garantias dos módulos e inversores?`
* **Resposta:**  
  `Nossos módulos fotovoltaicos de primeira linha (Tier 1) contam com 25 anos de garantia de eficiência linear de geração (assegurando mais de 80% a 84% da capacidade original após duas décadas e meia) e 10 a 15 anos contra defeitos de fábrica. Os inversores e microinversores parceiros (APsystems, Growatt e Deye) contam com garantias de 10 a 15 anos, além da garantia de montagem e suporte técnico direto da RP Soluções.`

### 8. Qual é o tempo médio entre o contrato e o sistema estar gerando?
* **Categoria:** `Instalação`
* **Pergunta:** `Quanto tempo leva entre fechar o projeto e o sistema estar funcionando?`
* **Resposta:**  
  `A instalação física no local costuma levar entre 1 e 3 dias úteis para residências e comércios médios. O processo completo de engenharia — que compreende elaboração dos projetos elétricos, parecer de acesso na Equatorial Goiás, vistoria técnica e troca pelo medidor bidirecional — leva em média de 30 a 60 dias corridos, totalmente conduzidos pela equipe da RP Soluções.`

---

## 8. CTA Final de Simulação (CTA)

Componente: `src/components/CTA.tsx`

### Textos e Elementos de Conversão:
* **Pill Eyebrow:** `Economia Garantida em Goiás`
* **Headline Principal:**  
  `Pronto para zerar até 95% da sua conta de luz com a RP Soluções Inteligentes?`
* **Subheadline Persuasiva:**  
  `Descubra o dimensionamento ideal para o seu imóvel ou propriedade rural. Faça uma simulação 100% gratuita, sem compromisso, e receba um estudo de viabilidade completo com cálculo de economia e opções de financiamento sem entrada em até 120 parcelas.`
* **Botão CTA Principal:**  
  * Texto: `"Simular Minha Economia Gratuitamente"`
  * Link: `/simulador/` (ou WhatsApp: `https://api.whatsapp.com/send?phone=5562994633753&text=Ol%C3%A1,%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20energia%20solar%20para%20o%20meu%20im%C3%B3vel.`)
* **Botão CTA Secundário:**  
  * Texto: `"Falar com Engenharia pelo WhatsApp"`
  * Link: `https://api.whatsapp.com/send?phone=5562994633753&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20energia%20solar.`
* **Selos de Segurança e Tranquilidade:**
  * Selo 1: `Até 95% de economia garantida`
  * Selo 2: `Financiamento 100% sem entrada`
  * Selo 3: `Garantia de 25 anos nos painéis`
  * Selo 4: `Atendimento ágil em todo o estado de Goiás`

---

## 9. Rodapé Institucional (Footer)

Componente: `src/components/Footer.tsx`

### 9.1 Dados Cadastrais e Institucionais
* **Razão Social:** `RP Solucoes Inteligentes Ltda. - ME`
* **Nome Fantasia:** `RP Soluções Inteligentes Energia Solar`
* **CNPJ:** `37.205.997/0001-26`
* **Responsável Técnico / Fundador:** `Raul Prado Nunes`
* **Slogan:** `Gerando energia de forma renovável.`
* **Endereço Completo:**  
  `Avenida 5 de Janeiro, Quadra 10, Lote 10, Sala 01 — Setor Cidade Velha, Sanclerlândia - GO, CEP: 76160-000`
* **Localização Google Maps:** `https://maps.google.com/?q=Avenida+5+de+Janeiro+Setor+Cidade+Velha+Sanclerl%C3%A2ndia+GO+76160-000`

### 9.2 Canais de Contato e Atendimento
* **WhatsApp Comercial:** `(62) 9 9463-3753` (`+55 (62) 99463-3753`)
* **Telefone 0800 Nacional:** `0800 062 9000`
* **E-mail Oficial:** `rpsolucoesintelignetes@gmail.com`
* **Horário de Atendimento:**  
  `Segunda a Sexta-feira: 08:00 às 18:00 | Sábado: 08:00 às 12:00`

### 9.3 Redes Sociais Oficiais
* **Instagram:** [instagram.com/rpsolucoesinteligentes](https://www.instagram.com/rpsolucoesinteligentes/)
* **Facebook:** [facebook.com/rpsolucoesinteligentes](https://www.facebook.com/rpsolucoesinteligentes)
* **Website:** [https://rpsolucoesinteligentes.com.br/](https://rpsolucoesinteligentes.com.br/)

### 9.4 Links de Navegação do Rodapé
* **Institucional:**
  * Sobre Nós (`#about`)
  * Como Funciona (`#how-it-works`)
  * Nossas Soluções (`#services`)
  * Casos de Sucesso (`#testimonials`)
  * Perguntas Frequentes (`#faq`)
* **Soluções:**
  * Solar Residencial
  * Solar Comercial
  * Solar Rural e Agronegócio
  * Bombeamento Solar
  * Sistemas Off-Grid com Baterias
* **Regulatório & Segurança:**
  * Homologação Equatorial Energia Goiás
  * Resolução Normativa ANEEL 1.059/2023
  * Marco Legal da Geração Distribuída (Lei 14.300)
  * Registro e ART CREA-GO

### 9.5 Copyright e Créditos
`© 2026 RP Soluções Inteligentes Ltda. Todos os direitos reservados. CNPJ: 37.205.997/0001-26. Sanclerlândia - Goiás.`

---

## 10. Formulário de Simulação (formulario)

Diretório / Módulo: `formulario/`

### 10.1 Objetivo do Formulário
Capturar com facilidade e zero atrito as informações de perfil do cliente para gerar uma proposta técnica e estimativa financeira instantânea via WhatsApp ou equipe técnica.

### 10.2 Etapas de Captura do Lead

#### Etapa 1: Perfil do Imóvel / Tipo de Instalação
* **Pergunta:** `Qual é o tipo do seu imóvel ou propriedade?`
* **Opções Selecionáveis:**
  1. 🏠 **Residencial** (Casa própria, sobrado ou condomínio fechado)
  2. 🏢 **Comercial / Empresarial** (Loja, supermercado, posto, clínica ou galpão)
  3. 🌾 **Rural / Agronegócio** (Fazenda, confinamento, ordenha mecânica ou barracão)
  4. 💧 **Bombeamento Solar** (Poço artesiano, represa ou bebedouros de pasto)
  5. 🔋 **Off-Grid / Isolado** (Local sem rede elétrica ou para backup com baterias)

#### Etapa 2: Média de Consumo e Gasto Mensal com Energia
* **Pergunta:** `Qual é o valor médio da sua conta de luz mensal com a Equatorial Goiás?`
* **Faixas Rápidas de Seleção:**
  1. `Até R$ 350 / mês`
  2. `R$ 350 a R$ 800 / mês`
  3. `R$ 800 a R$ 1.500 / mês`
  4. `R$ 1.500 a R$ 3.500 / mês`
  5. `R$ 3.500 a R$ 7.000 / mês`
  6. `Acima de R$ 7.000 / mês` (Grande Porte / Agro / Comercial)
* **Pergunta de Conexão:**  
  `O imóvel já possui ligação de energia na rede da Equatorial Goiás?` (Sim / Não - Sistema Isolado)

#### Etapa 3: Dados de Contato para Envio da Simulação
* **Campos Obrigatórios:**
  * **Nome Completo:** `ex: Marcos Antônio`
  * **Cidade / Município:** `ex: Sanclerlândia, São Luís de Montes Belos, Anicuns, Goiás...`
  * **WhatsApp / Telefone com DDD:** `ex: (62) 9 9999-9999`
  * **E-mail (opcional):** `ex: seuemail@gmail.com`
* **Botão de Envio:**  
  `"Calcular Minha Economia Agora"`
* **Mensagem de Sucesso / Redirecionamento:**  
  `Redirecionamento automático para atendimento com o engenheiro ou especialista técnico no WhatsApp oficial: (62) 9 9463-3753 com mensagem contextualizada contendo o perfil selecionado e valor da conta informado.`
