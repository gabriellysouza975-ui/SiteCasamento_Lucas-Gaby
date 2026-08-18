# Site de Casamento — Gabrielly & Lucas

Data: 13/03/2027 às 16h30
Local: Chácara Virgínia — Guarujá/SP
WhatsApp/PIX: 13 98870-2314

## Como usar
1. Extraia o ZIP.
2. Abra `index.html` no navegador.
3. Para publicar, envie a pasta inteira para uma hospedagem de site estático.

## Como alterar os presentes
Abra `script.js` e procure o bloco `const gifts` no começo do arquivo.
Cada presente possui:
- `name`: nome que aparece no site.
- `value`: valor em reais. Exemplo: `value: 250`.
- `photo`: caminho da foto do presente.
- `description`: texto que aparece no card/modal.

Os valores desta versão estão como `0` para você preencher.

## Como trocar as fotos dos presentes
A pasta `images/presentes/` possui os nomes reservados para as 40 fotos:
`presente-01.jpg` até `presente-40.jpg`.

Você pode simplesmente colocar/substituir uma foto com o mesmo nome nessa pasta. O site vai carregá-la automaticamente.
Também é possível mudar o caminho diretamente no campo `photo` de cada presente no `script.js`.

Se a foto ainda não existir, o card mostra apenas o ícone do presente, então você pode adicionar as fotos aos poucos.

## Foto dos noivos
A foto enviada para a seção “Nossa história” está em:
`images/noivos.jpg`

Para trocar depois, substitua esse arquivo mantendo o mesmo nome, ou altere o `src` no `index.html`.

## Onde alterar WhatsApp/PIX
No início de `script.js`, altere:
- `WHATSAPP`
- `PIX_KEY`

## Importante sobre o PIX
Esta versão usa a chave PIX como chave de pagamento e exibe o valor escolhido ao convidado, mas não gera/valida automaticamente uma cobrança PIX nem confirma o pagamento. Para isso seria necessária uma solução de cobrança/QR dinâmico ou integração com um provedor de pagamentos.
