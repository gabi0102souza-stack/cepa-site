# Cepa — cozinha de estação

One-page editorial em português do Brasil. Projeto novo: a pasta inicial não continha código, assets ou identidade oficial. Implementação estática em HTML, CSS e JavaScript, sem instalação ou build.

## Direção

Ingrediente, técnica e tempo. Marfim quente, carvão, vinho terroso e oliva; Cormorant Garamond e Manrope hospedadas localmente sob SIL Open Font License. O lettering `cepa.` e o favicon são propostas tipográficas provisórias, não reproduções da marca oficial.

As nove seções cobrem hero, casa, filosofia, experiência, sala e vinho, espaço, reconhecimento, informações práticas e convite final. Os botões abrem uma conversa com a casa; nenhum clique confirma uma reserva.

## Abrir localmente

Com Python instalado, execute na raiz do projeto:

```sh
python -m http.server 4173 --directory dist
```

Acesse `http://localhost:4173`. Sem servidor, `dist/index.html` também pode ser aberto diretamente no navegador. O site não usa backend, cookies, rastreadores ou bibliotecas de interface.

## Arquivos

| Arquivo | Função |
|---|---|
| `dist/index.html` | Copy final, nove seções, links, SEO, favicon e dados estruturados Restaurant |
| `dist/styles.css` | Tokens, composição, tipografia, responsividade e movimento reduzido |
| `dist/assets.js` | Cadastro de imagens oficiais, descrições e pontos de recorte |
| `dist/main.js` | Menu acessível, carregamento de imagens e revelações leves |
| `dist/fonts/` | Três fontes WOFF2 e duas licenças SIL OFL |
| `dist/images/README.md` | Orientação para fornecimento das fotografias |
| `.openai/hosting.json` | Identidade e diretório estático da publicação Sites |
| `.gitignore` | Exclusão de arquivos locais e segredos |
| `AUTOCRITICA.md` | Avaliação estratégica e prioridades futuras |

## Substituir as fotografias

Foram usados placeholders identificados, como solicitado. Não foram coletadas imagens do Instagram, utilizadas fotografias de terceiros ou geradas imagens apresentadas como reais.

Salve as fotografias em `dist/images/` e preencha o respectivo registro em `dist/assets.js`:

```js
'hero-space-or-signature-dish': {
  src: 'images/hero-space-or-signature-dish.webp',
  alt: 'Descrição fiel da fotografia fornecida',
  position: '50% 50%'
}
```

`src` e `alt` devem estar preenchidos. Imagens ausentes ou com erro preservam o placeholder. O hero é carregado com prioridade; as demais imagens usam lazy loading e decodificação assíncrona. Os recortes mantêm proporções estáveis.

Slots: `hero-space-or-signature-dish`, `chef-or-kitchen-detail`, `ingredient-or-process-texture`, `dish-detail-01`, `dish-detail-02`, `wine-or-service-detail`, `terrace-or-counter-seating`.

Priorize o ambiente ou prato no hero, Gabrielli/serviço/vinho e terraço/balcão. Recomenda-se WebP/AVIF, largura de 1200–1600 px e aproximadamente 100–250 KB conforme o detalhe. A excelência sensorial depende dessas fotografias.

## Conteúdo e fontes

Endereço, telefone, Instagram e horários seguem o briefing. A presença atual do Cepa, Lucas Dante e Gabrielli Fleming foi conferida no [Guia Michelin](https://guide.michelin.com/br/pt_BR/sao-paulo-region/sao-paulo/restaurant/cepa), consultado em 6 de outubro de 2026. A página não atribui estrelas, prêmios adicionais nem apresenta pratos como permanentes.

O Guia consultado exibe almoço na sexta e no sábado, enquanto o briefing também informa jantar nesses dias. Foi preservado o briefing, inclusive nos dados estruturados. A equipe da casa deve validar os dois serviços antes da abertura pública definitiva.

## Validação

Sintaxe dos dois scripts verificada com `node --check`. Prévia HTTP funcional; âncoras, menu, fechamento por Escape e navegação para informações práticas conferidos no navegador. Não houve erros de console na verificação. O navegador integrado exibiu aproximadamente 587 px de largura; a tentativa de alterar seu viewport não foi aplicada, portanto não há alegação de testes reais em 390/1280 px. Os breakpoints e o encaixe em 320 px foram revisados no CSS.

Antes da divulgação definitiva: inserir fotografia e logo oficiais, confirmar horários e funcionamento do WhatsApp com a equipe, configurar domínio próprio e validar a página em dispositivos reais e com texto ampliado.
