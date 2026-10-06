# Cepa | Cozinha de estação em Pinheiros

Página editorial em português do Brasil, refinada sobre a implementação existente. HTML, CSS e JavaScript estáticos, sem instalação ou build.

## Mantido e refinado

Preservados: paleta marfim, carvão, vinho e oliva; tipografia Cormorant Garamond e Manrope, com fontes e licenças SIL OFL locais; sequência editorial e caminho até a reserva pelo WhatsApp. Um clique não confirma a reserva: a equipe confirma diretamente com o cliente.

Copy mais direta, sem travessões ou frases de manifesto. O hero apresenta cozinha de estação e localização. Removidos um bloco repetido de vinho, o segundo cartão de pratos, a frase decorativa sobre a estação e os três blocos redundantes do espaço. A composição da mesa agora combina uma imagem e uma orientação prática sobre o cardápio.

Seis imagens geradas substituem os placeholders. São ilustrações fotográficas para apresentação do projeto, não fotografias oficiais dos pratos, equipe ou arquitetura do Cepa. Há identificação no rodapé e nos textos alternativos. O lettering `cepa` e o favicon continuam propostas tipográficas provisórias.

## Abrir localmente

Na raiz do projeto, com Python instalado:

```sh
python -m http.server 4173 --directory dist
```

Acesse `http://localhost:4173`. Conteúdo e imagens também aparecem ao abrir `dist/index.html` diretamente, inclusive sem JavaScript. Sem backend, cookies, rastreadores ou bibliotecas de interface.

## Arquivos editados e adicionados no refinamento

| Arquivo | Alteração |
|---|---|
| `dist/index.html` | Copy final revisada, seções compactadas, imagens responsivas, SEO e JSON-LD |
| `dist/styles.css` | Composição da mesa, limites de texto e identificação das imagens |
| `dist/main.js` | Reutiliza imagens do HTML, mantendo menu e movimento reduzido |
| `dist/assets.js` | Cadastro das seis imagens, srcset, descrições e recortes |
| `dist/images/*.webp` | Seis imagens em duas resoluções, 12 arquivos |
| `dist/images/README.md` | Origem e substituição dos assets |
| `dist/og-cepa.jpg` | Cartão social de 1200 × 630 px |
| `dist/favicon.svg` | Ícone tipográfico local |
| `PROMPTS-IMAGENS.md` | Prompts completos das sete imagens geradas |
| `README.md` e `AUTOCRITICA.md` | Operação, validação, avaliação e prioridades |

## Imagens e performance

WebP e srcset selecionam a resolução conforme a tela. O hero é prioritário; as demais imagens usam lazy loading e decodificação assíncrona. Width, height e aspect-ratio reservam espaço antes do carregamento. Os PNGs grandes não entram na publicação. Prompts completos e limitações estão em `PROMPTS-IMAGENS.md`.

Ao receber fotografias oficiais, salvar em `dist/images/` e atualizar src, srcset, sizes, alt, dimensões e recortes em `dist/assets.js` e no img correspondente de `dist/index.html`, preservando a experiência sem JavaScript. Manter a identificação ilustrativa enquanto algum asset gerado permanecer, incluindo o cartão social.

## SEO e compartilhamento

Título, descrição, canonical, Open Graph, Twitter com cartão JPEG de 1200 × 630 px, favicon SVG e dados estruturados Restaurant configurados. A origem corresponde à publicação Sites existente. A hospedagem Sites permanece privada para o proprietário; robôs externos não conseguem acessar uma publicação privada. O cartão está preparado para um endereço público autorizado. Ao trocar de domínio, atualizar canonical, og:url, URLs das imagens sociais e url no JSON-LD.

## Conteúdo e fontes

Endereço, telefone, Instagram e horários seguem o briefing. Cepa, Lucas Dante e Gabrielli Fleming foram conferidos no [Guia Michelin](https://guide.michelin.com/br/pt_BR/sao-paulo-region/sao-paulo/restaurant/cepa), consultado em 6 de outubro de 2026. Não foram inventados pratos permanentes, estrelas ou prêmios adicionais.

O Guia consultado exibe almoço na sexta e no sábado; o briefing também informa jantar nesses dias. Foi preservado o briefing, inclusive no JSON-LD. A equipe deve validar os horários antes da divulgação oficial.

## Validação

Verificados: sintaxe dos scripts, um H1, IDs únicos, âncoras, imagens, srcsets e fontes locais, JSON-LD, cartão social e ausência de travessões. Menu móvel abre e fecha por Escape; navegação por âncora conferida. Nenhum erro ou aviso de console observado.

Layout medido em iframes de 320, 390, 768 e 1280 px. As larguras úteis foram 305, 375, 753 e 1265 px por causa das barras de rolagem; scrollWidth coincidiu com clientWidth em todos. Cabeçalhos, parágrafos e tabela não excederam a largura útil. Imagens conferidas na prévia em computador e celular. A verificação não substitui aparelhos físicos ou uma auditoria completa de acessibilidade.

## Acesso ao código

[Repositório público no GitHub](https://github.com/gabi0102souza-stack/cepa-site). Qualquer pessoa com o link pode consultar e baixar sem login. GitHub não oferece público não listado: o repositório também pode aparecer em buscas.
