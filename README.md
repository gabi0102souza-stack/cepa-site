# Cepa | Cozinha de estação em Pinheiros

[Abrir o site no GitHub Pages](https://gabi0102souza-stack.github.io/cepa-site/). Link público, sem login, para apresentar a proposta no computador ou celular.

Proposta de site em português do Brasil, refinada na base existente em HTML/CSS/JS estáticos. Sem build obrigatório, backend, rastreadores ou bibliotecas de interface.

O relatório completo do ciclo atual está em [CEPA_FINAL_REFINEMENT.md](CEPA_FINAL_REFINEMENT.md), com decisões, antes/depois da copy, auditoria de todas as imagens, checagem de fatos, testes, pendências e notas finais.

## Abrir localmente

```sh
python -m http.server 4173 --directory dist
```

Acesse `http://localhost:4173`. Conteúdo e imagens estão no HTML e também aparecem sem JavaScript. O menu interativo utiliza o script leve já existente.

## Base preservada

Marfim, vinho e oliva; Cormorant Garamond e Manrope locais sob SIL OFL; composição editorial e seção escura de vinho; srcset, lazy loading, prioridade do hero e movimento reduzido. Dois botões principais de reserva, no header e no hero. O encerramento usa um único link de conversa. A confirmação da reserva depende da equipe.

## Imagens e identidade

Cinco imagens geradas identificadas como ilustrativas. A arquitetura fictícia foi retirada. Não existem fotos ou logo oficiais no projeto. O wordmark tipográfico e o favicon são provisórios. Prompts históricos em `PROMPTS-IMAGENS.md`; auditoria e necessidades de material real no relatório atual.

Ao receber material autorizado, atualizar src/srcset/sizes/alt/dimensões no `img` do HTML e em `dist/assets.js`. Manter a identificação de imagens ilustrativas enquanto qualquer uma permanecer. O cartão social atual, `dist/og-cepa.png`, é tipográfico, sem foto de prato, e tem fonte em `design/og-card.html`.

## Compartilhamento e dados

Metadados e schema Restaurant básicos configurados. Horários mantidos na tabela do briefing, com nota de confirmação; retirados do JSON-LD por divergência conhecida. O GitHub Pages usa a branch `gh-pages`, na raiz, com HTTPS. Seus metadados apontam para o endereço público acima. A fonte continua na branch `main`, em `dist`; futuras alterações visuais devem ser exportadas novamente para `gh-pages`.

A prévia Sites também foi liberada para acesso público a pedido do usuário. O relatório de refinamento registra o estado anterior à liberação dos links. Logo, fotos oficiais e dados operacionais ainda dependem da casa.

[Código público no GitHub](https://github.com/gabi0102souza-stack/cepa-site). Qualquer pessoa com o link pode consultar e baixar. O link de apresentação é o GitHub Pages indicado no início deste arquivo.

## Validação atual

`node --check dist/main.js`, `node --check dist/assets.js`, `git diff --check`, validação de arquivos/âncoras/metadados e HTTP dos 18 assets usados. Layout simulado nas cinco larguras do briefing: 360, 390, 430, 768 e 1440 px. Detalhes e limites no relatório. Não há build, lint ou suíte de testes configurados.
