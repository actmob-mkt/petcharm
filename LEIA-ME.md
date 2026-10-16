# PetCharm — código-fonte

## Estrutura
- `PetCharm *.dc.html` — páginas (HTML + estilos inline + lógica JS de cada página no bloco `<script data-dc-script>`).
- `PC Header / PC Footer / PC Produto Card .dc.html` — componentes reutilizados pelas páginas.
- `catalogo.js` — dados (produtos, kits, artigos, carrinho em localStorage, frete por CEP).
- `support.js` — runtime que renderiza as páginas (React 18).
- `assets/` — logos, mascote e ilustrações.
- `index.html` — redireciona para a Home.

## Como rodar
Precisa de um servidor estático (não abre via `file://`):
```
npx serve .
# ou
python3 -m http.server
```
Publicação: qualquer host estático (Netlify, Vercel, GitHub Pages, Hostinger).

## Editar
- Textos e estilos: direto no HTML de cada página.
- Fotos de produtos: lista `IMG` em `catalogo.js`.
- Preços, estoque, frete: `catalogo.js`.
