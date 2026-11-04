window.sercomtelData = [
  {
    "id": "001-SERC-PRO-AV.01",
    "title": "Cartões (001-SERC-PRO-AV.01) Sercomtel-Série Propaganda ( cards): INCOMPL.: card nº 1",
    "ref": "001-SERC-PRO-AV.01",
    "operator": "SERCOMTEL",
    "price": 0.5,
    "image": "fotos/sercomtel/001-SERC-PRO-AV.01.jpg"
  }
];
```[cite: 3, 5]

### O que fazer:
1. Abra o seu arquivo `sercomtel.js` no Bloco de Notas[cite: 3].
2. Substitua todo o conteúdo dele pelo bloco de código acima e salve o arquivo.
3. Certifique-se de que o arquivo da foto na pasta `fotos/sercomtel/` no seu computador se chama exatamente `001-SERC-PRO-AV.01.jpg`[cite: 2].

Se preferir resolver pelo **console do navegador** na hora (para testar sem precisar reenviar arquivos agora), basta abrir o site, apertar `F12`, ir na aba **Console** e colar este comando para forçar a imagem no cartão:

```javascript
localEdits["001-SERC-PRO-AV.01"] = { image: "fotos/sercomtel/001-SERC-PRO-AV.01.jpg", operator: "Sercomtel" };
localStorage.setItem('tc_card_edits', JSON.stringify(localEdits));
location.reload();