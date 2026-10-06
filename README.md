# Cepa | Cozinha de estação em Pinheiros

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

Metadados e schema Restaurant básicos configurados. Horários mantidos na tabela do briefing, com nota de confirmação; retirados do JSON-LD por divergência conhecida. Ao trocar o domínio, atualizar canonical, og:url, URLs sociais e url do schema. A hospedagem Sites permanece privada: verificar o acesso do destinatário antes de enviar o link.

[Código público no GitHub](https://github.com/gabi0102souza-stack/cepa-site). Qualquer pessoa com o link pode consultar e baixar. O acesso ao código não muda a audiência da hospedagem.

## Validação atual

`node --check dist/main.js`, `node --check dist/assets.js`, `git diff --check`, validação de arquivos/âncoras/metadados e HTTP dos 18 assets usados. Layout simulado nas cinco larguras do briefing: 360, 390, 430, 768 e 1440 px. Detalhes e limites no relatório. Não há build, lint ou suíte de testes configurados.
