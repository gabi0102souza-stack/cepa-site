# CEPA_FINAL_REFINEMENT

Atualização de publicação após esta auditoria: o [site no GitHub Pages](https://gabi0102souza-stack.github.io/cepa-site/) está público, com HTTPS e acesso sem login verificado. A prévia Sites também foi liberada a pedido do usuário. As referências abaixo à hospedagem privada e à pendência de acesso descrevem o estado anterior a esses pedidos; essa pendência foi resolvida. Logo/fotos oficiais e validação dos dados operacionais continuam necessários.

Auditoria e refinamento final para apresentação comercial, 6 de outubro de 2026. Esta é uma proposta de site, sem aprovação ou vínculo oficial presumido com o restaurante. O trabalho foi feito na base existente, após leitura dos arquivos, inspeção das sete imagens e navegação completa na prévia.

## 1. SUMMARY

Retirada a arquitetura fictícia. A antiga seção de espaço agora apresenta o endereço real em uma composição tipográfica e leva ao mapa, sem ilustrar uma casa inventada. As cinco imagens restantes continuam identificadas como ilustrativas.

Mantido o hero “Cozinha de estação. Em Pinheiros.”. A seção da casa apresenta Lucas Dante e Gabrielli Fleming, e a cozinha nomeia as técnicas documentadas. Foram enxugadas generalidades sobre hospitalidade e a escolha do vinho. Os botões iguais de reserva passaram de quatro para dois: header e hero. Informações práticas não repetem o botão; o encerramento mantém a frase acolhedora e um único link “Converse com a casa”.

O cartão social foi simplificado para texto com as fontes da própria página, sem comida fictícia ou logo criado. Sua identificação “Proposta de site” ajuda a contextualizar a apresentação. A atualização também corrige cache de CSS e melhora os alvos de toque.

Arquivos alterados/adicionados: `dist/index.html`, `dist/styles.css`, `dist/assets.js`, `dist/og-cepa.png`, `design/og-card.html`, `dist/images/README.md`, `README.md`, `AUTOCRITICA.md`, `PROMPTS-IMAGENS.md` e este relatório. Removidos da distribuição: `dist/og-cepa.jpg` e as duas resoluções de `terrace-or-counter-seating`. O JavaScript do menu e das revelações, as fontes e o favicon foram mantidos.

## 2. KEPT

| Elemento | Decisão | Motivo |
|---|---|---|
| Marfim, vinho, oliva, seção escura de vinho | KEEP | Coesão e contraste adequados à direção existente |
| Cormorant Garamond e Manrope locais | KEEP | Boa hierarquia editorial e nenhuma requisição a um provedor de fontes |
| Hero, quebras de linha e foto principal | KEEP / REFINE | Headline clara; apenas o parágrafo foi encurtado |
| HTML/CSS/JS estáticos | KEEP | Sem build obrigatório, dependências de interface ou complexidade nova |
| Estrutura casa, cozinha, mesa, vinho, localização, visita | KEEP | Mantém a narrativa e a navegação existentes |
| Assimetria das fotos da cozinha | KEEP | Já organiza bem preparo e matéria-prima |
| Menu, Escape, âncoras, IntersectionObserver | KEEP | Comportamento funcional e movimento discreto |
| Dimensões, srcset, lazy loading e prioridade do hero | KEEP | Reservam espaço e limitam a transferência de imagens |
| Wordmark tipográfico e favicon “c” | KEEP, provisórios | Não há material oficial no repositório |
| Foto do interior e dois botões redundantes | REMOVE | Evitam afirmação visual falsa e repetição de landing page |

## 3. COPY CHANGES

| Antes | Depois | Justificativa |
|---|---|---|
| “A cozinha de Lucas Dante acompanha o mercado, com ingredientes frescos e sabores trabalhados com tempo e técnica.” | “Cozinha contemporânea e sazonal, com ingredientes frescos e atenção aos produtores locais.” | Mais curto; os nomes e funções continuam logo abaixo no hero |
| “Cozinha, vinho e hospitalidade.” | “Lucas Dante e Gabrielli Fleming.” | Apresenta quem conduz a casa, em vez de uma categoria genérica |
| “Lucas Dante trabalha com o que chega fresco do mercado. Defumações, maturações e fermentações dão profundidade aos ingredientes da estação.” | “Lucas Dante conduz a cozinha do Cepa, com ingredientes frescos e pratos que acompanham a estação.” | Apresentação da casa mais simples; técnicas ficam na seção própria |
| “O cuidado com o serviço e a escolha do vinho acompanham cada refeição.” | “Gabrielli Fleming está à frente da sala e do serviço de vinhos.” | Função concreta, sem promessa vaga de experiência |
| “Do mercado para a cozinha.” | “A cozinha de Lucas Dante.” | Identificação específica do chef já documentado |
| “O mercado orienta o cardápio. Frescor e disponibilidade fazem parte de cada escolha.” | “O cardápio acompanha a estação e o frescor dos ingredientes.” | Mesmo conteúdo em uma frase direta |
| “Tempo e técnica” | “Defumar, maturar, fermentar” | Nomeia os processos existentes, sem criar técnicas novas |
| “Pequenos produtores” e texto sobre qualidade da matéria-prima | “Produtores locais. O Cepa valoriza pequenos produtores locais.” | Não inventa nomes, origens ou relações comerciais |
| “Uma adega de vinhos orgânicos e biodinâmicos” e “o momento de quem está à mesa” | “Gabrielli Fleming conduz a sala e seleciona vinhos orgânicos e biodinâmicos para a adega.” | Especifica a função e evita sugerir que toda a adega é exclusivamente desses vinhos |
| “Mesa, balcão ou terraço” com imagem fictícia | “Praça dos Omaguás, 110. Pinheiros, São Paulo.” | Prioriza um dado verificável e deixa a fotografia do espaço para material real |
| “Reserve sua mesa” e terceiro botão de reserva | “Planeje sua visita”, sem botão repetido | Informações práticas assumem sua função de orientação |
| Botão final de reserva + segundo link WhatsApp | Um link “Converse com a casa” | O convite final continua acolhedor, com uma ação só |
| “Imagens ilustrativas para apresentação do projeto.” | “Proposta de site para o Cepa. Imagens ilustrativas.” | Explicita a natureza da proposta, discretamente |

O título do hero, a headline do vinho, a presença no Michelin, os contatos, o endereço, a nota de confirmação de reserva e o convite final foram deliberadamente preservados. Redução estimada: **386 para 337 palavras visíveis, 12,7%**, incluindo navegação e informações práticas e excluindo head, scripts e textos auxiliares de leitor de tela.

**CONTENT OPPORTUNITY:** obter da casa um exemplo atual de prato e como ele muda com a estação; uma relação real com produtor que possa ser citada; um detalhe do trabalho de Lucas; uma descrição própria da seleção e do serviço de Gabrielli. Esses dados melhorariam a especificidade. Não foram preenchidos com suposições ou pratos encontrados em páginas externas.

## 4. IMAGE AUDIT

Todos os assets fotográficos recebidos deste projeto foram inspecionados. Não há fotografia oficial, retrato real ou logo aprovado no repositório. As duas resoluções de cada foto são o mesmo asset, com redução de tamanho.

| Asset | Classificação inicial | Status do relatório | Resultado e limite |
|---|---|---|---|
| `hero-space-or-signature-dish` | ACCEPTABLE FOR CONCEPT | CONCEPT ONLY | Mantido. Legumes e louça plausíveis, sem pessoas ou arquitetura. Não é apresentado como prato-assinatura ou item real do cardápio. Textura e arranjo muito cuidados ainda revelam direção de arte |
| `chef-or-kitchen-detail` | ACCEPTABLE FOR CONCEPT | CONCEPT ONLY | Mantido. Frigideira, vapor e utensílio plausíveis; não mostra Lucas nem uma cozinha identificável. Não documenta o processo real da casa |
| `ingredient-or-process-texture` | ACCEPTABLE FOR CONCEPT | CONCEPT ONLY | Mantido. Tomates e ervas legíveis; brilho e gotas uniformes têm aparência publicitária. Sem texto que atribua cultivar, origem ou uso ao Cepa |
| `dish-detail-01` | ACCEPTABLE FOR CONCEPT | CONCEPT ONLY | Mantido. Mesa e talheres sem deformação evidente em uso na página. Repete o universo visual do hero e não comprova pratos reais |
| `wine-or-service-detail` | ACCEPTABLE FOR CONCEPT | CONCEPT ONLY | Mantido. Taças, garrafa sem marca e luz coerentes. Não atribui produtor, rótulo, safra ou interior à casa |
| `terrace-or-counter-seating`, duas resoluções | MUST REPLACE | REPLACE / REAL ASSET REQUIRED | Retirado do HTML, cadastro e distribuição. Representava balcão, terraço, materiais e mobiliário inventados. Substituição por localização tipográfica factual |
| Cartão antigo `og-cepa.jpg` | SHOULD REPLACE | REPLACE | Removido. Foto de prato fictício e lettering diferente do sistema do site eram inadequados como primeira impressão externa |
| Cartão novo `og-cepa.png` | SAFE para esta proposta | SAFE | Texto, cores e fontes do site, sem logo oficial presumido, prêmio ou foto. Contém “Proposta de site”. Fonte reproduzível em `design/og-card.html` |

**REAL ASSET REQUIRED:** para versão oficial, substituir as fotos conceituais por material autorizado da casa. A aprovação aqui é de uso em uma proposta identificada, não de autenticidade documental. O sistema foi reduzido de seis para cinco imagens, sem produzir novos cenários ou repetir uma foto como falso espaço. A diversidade documental real segue dependendo de um ensaio, não de mais imagens geradas.

## 5. FACT CHECK

Fonte externa primária consultada novamente em 6 de outubro de 2026: [página do Cepa no Guia Michelin](https://guide.michelin.com/br/pt_BR/sao-paulo-region/sao-paulo/restaurant/cepa). A consulta foi usada para conferir fatos já existentes, não para acrescentar histórias, pratos ou prêmios.

### CONFIRMED

- Endereço Praça dos Omaguás, 110, Pinheiros, São Paulo, CEP 05419-020.
- Telefone +55 11 2096-0687, correspondente ao link `tel:` e ao número formado no link WhatsApp.
- Lucas Dante na cozinha; Gabrielli Fleming na sala e no vinho.
- Cozinha sazonal contemporânea, defumações, maturações, fermentações, produtores locais e vinhos orgânicos/biodinâmicos.
- Presença no Guia Michelin e reservas diretamente com o restaurante. Nenhuma estrela ou prêmio adicional foi atribuído.

### UNCONFIRMED

- Atividade e titularidade atual do WhatsApp nesse número. A URL está estruturalmente correta; não foi enviado contato ou testada uma reserva.
- Perfil `@restaurante.cepa` fornecido no briefing. A consulta automática ao Instagram não retornou conteúdo verificável; não foi tratado como perfil confirmado nesta auditoria.
- Resultado exibido pelo Google Maps. A URL de busca contém nome e endereço corretos, mas a ferramenta não conseguiu abrir o resultado. Não foram fabricadas coordenadas ou um place ID.
- Logo, material de marca, fotografias reais, nomes de fornecedores e cardápio atual não foram fornecidos.

### NEEDS CLIENT VERIFICATION

**VERIFY BEFORE OUTREACH:** horários de sexta e sábado. O briefing informa almoço e jantar; o Michelin consultado mostra apenas 12h–16h nesses dias. A tabela do briefing foi mantida e recebeu “Confirme os horários com a equipe ao reservar”. Os horários foram removidos do JSON-LD para não apresentar a informação divergente como um dado estruturado confirmado. Terça a quinta e os dias fechados coincidem entre as fontes, mas toda a grade deve receber a confirmação operacional da casa.

**VERIFY BEFORE OUTREACH:** Instagram, atendimento no WhatsApp, política e fluxo de reservas, conteúdo do mapa e permissão para uso de imagens/identidade. Informações públicas ajudam a verificar coerência; não substituem aprovação do restaurante.

## 6. IDENTITY

**OFFICIAL LOGO REQUIRED.** Nenhum logo oficial foi encontrado. O wordmark em texto e o favicon tipográfico foram mantidos discretamente, sem desenho novo ou alegação de identidade aprovada. O cartão social usa “CEPA” como nome em Manrope, não como logotipo redesenhado.

O ponto de entrada para material oficial continua sendo o link `.wordmark` no header e no footer. Receber SVG/PNG autorizado, proporções, margens de proteção e variantes clara/escura antes de substituir o texto. Não foi incluído um logo quebrado, espaço vazio ou selo “em breve” no fluxo público.

## 7. PERFORMANCE

| Medida | Antes | Depois |
|---|---:|---:|
| Distribuição estática completa, incluindo variantes das imagens e licenças | 1.416.651 bytes | 1.154.257 bytes |
| Fotos distintas na página | 6 | 5 |
| Cartão social | JPEG, 93.027 bytes | PNG, 25.870 bytes |
| Bibliotecas de interface | 0 | 0 |

Redução de aproximadamente **18,5%** no conjunto estático. Esses números não são o peso de cada primeira visita: o navegador escolhe versões via srcset e as fotos abaixo da dobra usam lazy loading. Os PNGs grandes de geração continuam fora da distribuição.

Mantidos: fontes WOFF2 locais, prioridade alta no hero, dimensões intrínsecas, aspect-ratio e decodificação assíncrona. As imagens e seus srcsets foram conferidos contra as dimensões reais dos arquivos. O espaço reservado reduz mudanças de layout durante o carregamento; não foi realizada medição de CLS ou Core Web Vitals em aparelhos reais.

Adicionado parâmetro de versão ao CSS e ao cadastro de imagens para evitar a reapresentação do CSS antigo observado no navegador. Nenhum pacote, servidor de produção novo, build ou efeito foi adicionado. O cartão social é um export estático do HTML tipográfico.

## 8. MOBILE

| Largura pedida | Largura útil no iframe | scrollWidth | Overflow |
|---:|---:|---:|---|
| 360 | 345 | 345 | nenhum |
| 390 | 375 | 375 | nenhum |
| 430 | 415 | 415 | nenhum |
| 768 | 753 | 753 | nenhum |
| 1440 | 1425 | 1425 | nenhum |

Simulações em iframes, com 15 px reservados pela barra de rolagem. Nenhum h1/h2/h3 apresentou overflow interno; header, seções, parágrafos, tabela e footer ficaram dentro da largura útil. O mobile mantém uma coluna, ordem própria da seção da cozinha, recortes de imagem e espaçamento existente. A localização agora é legível sem depender de foto horizontal.

Botões, menu, navegação principal e links de texto medidos com pelo menos **44 px de altura**. O hero tem botão de 52 px. O menu foi testado na prévia estreita do painel: abrir, fechar por Escape e navegar para Localização, fechando após a seleção. A preferência de viewport do navegador integrado não alterou efetivamente sua superfície; por isso as medidas específicas usam os iframes, sem alegar emulação de um aparelho.

Validações: `node --check` nos dois scripts, `git diff --check`, validação de HTML/âncoras/metadados/JSON-LD e requisição HTTP dos 18 assets usados, incluindo fontes e OG. Todos responderam 200, sem 404. Não há comandos de build, lint ou suíte de testes configurados no projeto estático. Console, imagens e navegação foram inspecionados no navegador.

Acessibilidade básica: um H1, idioma pt-BR, skip link, foco visível, controles com nome, aria-expanded/aria-controls, tabela com legenda, alt explícito de imagem ilustrativa, dimensões e contraste da direção existente preservados. As imagens e o conteúdo permanecem declarativos no HTML. Não foi realizada auditoria completa com leitor de tela ou aparelhos físicos.

**Reduced motion:** conferidas a regra CSS que desativa transições e scroll suave e a condição JavaScript que evita ativar revelações quando a preferência está presente. A preferência do sistema não pôde ser emulada pela API disponível; esse limite permanece explícito.

## 9. AI-SIGNALS REMOVED

- Títulos abstratos de categoria deram lugar aos responsáveis e às técnicas documentadas.
- Retirada a frase sobre “o momento de quem está à mesa”, sem informação própria da casa.
- Reduzidas repetições de nome, serviço e promessa de hospitalidade.
- Retirada a arquitetura fotográfica inventada e a comida fictícia do cartão social.
- Mantidas as frases que já funcionavam, sem reescrever para aparentar atividade.
- Copy visível sem travessões, fornecedores fictícios, ingredientes atribuídos à casa ou narrativas biográficas inventadas.

Os sinais não desapareceram por completo: fotos gastronômicas ainda têm luz e direção de arte parecidas, e os tomates têm gotas uniformes. O aviso não foi removido para esconder essa condição.

## 10. PROTOTYPE-SIGNALS REMOVED

- A seção do espaço não promete uma arquitetura ausente no material.
- Retirados os dois botões redundantes, deixando orientação prática e encerramento com hierarquia própria.
- O cartão social tem as fontes da página e identificação honesta da proposta.
- Alvos de toque mais confortáveis e correção do CSS antigo observado em cache.
- JSON-LD não afirma horários com divergência conhecida.
- Nenhum placeholder vazio, assinatura do desenvolvedor, watermark, badge, loader ou efeito novo.

Ainda são provisórios: logo, favicon, imagens, alguns dados operacionais e o endereço de apresentação. Essa condição deve ser explicada no envio; não ocultada.

## 11. BEFORE OUTREACH

| Status | Item |
|---|---|
| READY | Base existente refinada, responsiva e sem arquitetura fictícia |
| READY | Copy revisada, nomes/funções e fatos já documentados |
| READY | Dois botões principais e um convite final discreto |
| READY | OG tipográfico, favicon, title/description, canonical e schema básico |
| READY | GitHub público, código e relatório disponíveis pelo link |
| VERIFY | Confirmar que o destinatário consegue abrir a apresentação: Sites continua privado para o proprietário; GitHub público dá acesso ao código, não transforma a prévia Sites em site público |
| VERIFY | Grade de horários, principalmente jantar de sexta e sábado |
| VERIFY | WhatsApp ativo, Instagram, mapa e fluxo de reservas |
| REPLACE | Receber logo oficial e material autorizado, antes de tratar a proposta como versão oficial |
| REPLACE | Fotos reais para versão oficial; manter a identificação enquanto houver ilustrações |
| OPTIONAL | Receber detalhes específicos de produtores, pratos e serviço para enriquecer a copy |
| OPTIONAL | Cardápio atual mantido pela casa, se ela desejar disponibilizar |
| OPTIONAL | Domínio próprio e testes de compartilhamento social quando houver endereço público autorizado |
| OPTIONAL | Validação adicional em iPhone/Android, leitor de tela, texto ampliado e métricas de rede |

Não foi enviada mensagem ao restaurante. Nenhuma reserva foi feita. A audiência da hospedagem não foi ampliada sem pedido explícito. Para apresentação imediata, usar capturas/projeto acompanhado do contexto de proposta; não prometer que o link privado abrirá para o cliente.

## 12. FINAL VERDICT

Notas editoriais de julgamento, não resultados de Lighthouse ou de uma pesquisa com clientes:

| Categoria | Nota / 10 | Avaliação |
|---|---:|---|
| Visual | 8,5 | Direção preservada, localização honesta, encerramento menos comercial |
| Copy | 8,0 | Mais precisa e curta; detalhes exclusivos ainda dependem da casa |
| Authenticity | 6,5 | Não há logo/fotos oficiais. Cinco fotos seguem conceituais, embora identificadas e sem espaço físico inventado |
| Performance | 9,0 | Sem dependências novas e menos bytes; faltam métricas em aparelhos reais |
| Mobile | 8,5 | Cinco larguras sem overflow e controles confortáveis; não substitui teste físico |
| Commercial Presentation | 8,0 | Proposta coerente e respeitosa, com limites apresentados sem fingir aprovação |
| Readiness to Send | 7,0 | O link Sites segue privado; horários/canais ainda precisam de verificação. Não é adequado enviar esse link como uma experiência pública já validada |

A apresentação pode demonstrar uma direção madura em uma conversa acompanhada. Para um envio autônomo por link, resolver acesso do destinatário e conferir os dados operacionais. Para lançamento oficial, substituir identidade e fotografia e obter aprovação da casa.

### Red team: olhar de um responsável pelo Cepa

| Possível motivo para rejeição | Correção ou pendência |
|---|---|
| “Esse balcão e terraço não são a nossa casa.” | Corrigido: imagem retirada da distribuição; localização factual em seu lugar |
| “Estão apresentando esses legumes como um prato nosso?” | Nenhum prato recebeu nome ou atribuição de cardápio. Alt e aviso explícitos. Foto oficial permanece necessária |
| “Essa marca foi aprovada por nós?” | Não. Wordmark/favicons são provisórios. OFFICIAL LOGO REQUIRED no relatório |
| “Parece uma landing page cheia de reservas.” | Corrigido: dois botões principais; informações e convite final com outra composição |
| “De onde vieram esses horários?” | Fonte briefing mantida e divergência exposta. Removidos do schema; verificar com a equipe |
| “O texto sobre produtores é específico de nós?” | Parcialmente. Valorizar produtores locais está documentado; faltam relações próprias que a casa autorize citar. CONTENT OPPORTUNITY |
| “Todas as fotos têm a mesma aparência e parecem geradas.” | Risco residual reconhecido. Menos uma cena fictícia; não foi feito novo ensaio imaginário para mascarar a falta de material |
| “Não consigo abrir esse link.” | Pendência real: a hospedagem segue privada. Confirmar audiência/autorização antes do envio |
| “O profissional se colocou como autor do site oficial?” | Corrigido/evitado: aviso de proposta e nenhuma assinatura chamativa, selo ou alegação de vínculo |
| “Fizeram uma reserva ou falaram em nosso nome?” | Não houve contato, envio, reserva ou confirmação automática |

O resultado transmite mais critério porque elimina a afirmação visual falsa e assume seus limites. O ganho seguinte deve vir de material verdadeiro do Cepa, não de mais ornamentação.
