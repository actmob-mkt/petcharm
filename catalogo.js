// Dados fictícios de demonstração. Nomes e SKUs vindos da LISTA DE PRODUTOS (UpSeller). Preços e notas: [AJUSTAR]
export const FRETE_GRATIS = 149;
export const PIX_OFF = 0.10;
export const brl = v => 'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const pix = v => Math.round(v * (1 - PIX_OFF) * 100) / 100;

export const categorias = [
  { slug: 'tapete-higienico', nome: 'Tapete higiênico', icon: 'ph-squares-four', itens: 38, tint: '#EFE9FB' },
  { slug: 'areia-e-sanitarios', nome: 'Areia e sanitários', icon: 'ph-cat', itens: 64, tint: '#FFF8C7' },
  { slug: 'petiscos', nome: 'Petiscos', icon: 'ph-bone', itens: 41, tint: '#E6EEFF' },
  { slug: 'brinquedos', nome: 'Brinquedos', icon: 'ph-tennis-ball', itens: 97, tint: '#EFE9FB' },
  { slug: 'moveis', nome: 'Caminhas e arranhadores', icon: 'ph-armchair', itens: 152, tint: '#FFF8C7' },
  { slug: 'higiene', nome: 'Higiene', icon: 'ph-drop', itens: 86, tint: '#E6EEFF' },
  { slug: 'acessorios', nome: 'Acessórios', icon: 'ph-bowl-food', itens: 211, tint: '#EFE9FB' }
];

const P = (id, sku, nome, cat, preco, de, nota, aval, extra = {}) => ({ id, sku, nome, cat, preco, de, nota, aval, pix: pix(preco), parcela: Math.round(preco / 3 * 100) / 100, ...extra });

export const produtos = [
  P('tapete-30', 'CT000072', 'Tapete higiênico PetCharm 60x60 com 30 unidades', 'tapete-higienico', 69.90, 84.90, 4.9, 2318, { propria: true, selo: 'Mais vendido', recebaHoje: true, porte: 'Todos', pet: 'Cão' }),
  P('areia-2', 'CT0007736', 'Areia PetCharm grãos finos 2 kg', 'areia-e-sanitarios', 24.90, null, 4.8, 1104, { propria: true, selo: 'Marca própria', recebaHoje: true, pet: 'Gato' }),
  P('tapete-20', 'CT000072-20', 'Tapete higiênico PetCharm 60x60 com 20 unidades', 'tapete-higienico', 49.90, null, 4.9, 1462, { propria: true, recebaHoje: true, pet: 'Cão' }),
  P('balde-areia', 'CT0021778', 'Balde de areia PetCharm Premium 12 kg', 'areia-e-sanitarios', 79.90, 92.90, 4.7, 386, { propria: true, selo: 'Lançamento', pet: 'Gato' }),
  P('tapete-10', 'CT000072-10', 'Tapete higiênico PetCharm 60x60 com 10 unidades', 'tapete-higienico', 27.90, null, 4.8, 873, { propria: true, recebaHoje: true, pet: 'Cão' }),
  P('wisecat', 'CT000612', 'Areia de mandioca Wisecat grãos médios 2 kg', 'areia-e-sanitarios', 34.90, null, 4.6, 517, { pet: 'Gato' }),
  P('sanitario-2d', 'CT000386', 'Sanitário 2D para gatos azul', 'areia-e-sanitarios', 39.90, 46.90, 4.5, 228, { pet: 'Gato' }),
  P('arranhador-mdf', 'CT000098', 'Arranhador MDF cinza', 'moveis', 54.90, null, 4.7, 194, { selo: 'Lançamento', pet: 'Gato' }),
  P('kit-brinq-5', 'CT000XXX', 'Kit brinquedo com 5 unidades', 'brinquedos', 42.90, 49.90, 4.6, 341, { pet: 'Cão' }),
  P('bifinho', 'CT000BIF', 'Bifinhos Mozão sabor carne 60 g', 'petiscos', 12.90, null, 4.8, 659, { recebaHoje: true, pet: 'Cão' }),
  P('comedouro', 'CT000COM', 'Comedouro elevado 150 ml roxo neon', 'acessorios', 29.90, null, 4.5, 112, { selo: 'Lançamento' }),
  P('cama-gg', 'CT000574', 'Cama GG preta antiderrapante', 'moveis', 129.90, 149.90, 4.8, 287, { pet: 'Cão', porte: 'Grande' }),
  P('shampoo-filhote', 'CT000SHF', 'Shampoo filhotes Pet Clean 700 ml', 'higiene', 22.90, null, 4.7, 403),
  P('coletor-eva', 'CT000COL', 'Tapete coletor de areia EVA 60x40 bege', 'areia-e-sanitarios', 44.90, null, 4.6, 156, { selo: 'Lançamento', pet: 'Gato' }),
  P('educador', 'CT000074', 'Educador Up Clean xixi sim 20 ml', 'higiene', 19.90, null, 4.4, 241, { pet: 'Cão' }),
  P('casinha-n4', 'CT000133', 'Casinha N4 Unishop azul', 'moveis', 119.90, null, 4.6, 98, { pet: 'Cão', porte: 'Médio' })
];

export const kits = [
  { id: 'kit-filhote', nome: 'Kit primeiro mês do filhote', itens: ['Tapete PetCharm 30 un', 'Educador xixi sim', 'Bifinhos Mozão 60 g'], preco: 89.90, de: 102.70 },
  { id: 'kit-gato', nome: 'Kit caixinha completa', itens: ['Sanitário 2D', 'Areia PetCharm 2 kg', 'Tapete coletor EVA'], preco: 99.90, de: 109.70 },
  { id: 'kit-estoque', nome: 'Kit estoque do mês', itens: ['2 Tapetes PetCharm 30 un', 'Areia PetCharm 2 kg'], preco: 149.90, de: 164.70 }
];

export const artigos = [
  { slug: 'como-ensinar-cachorro-usar-tapete-higienico', cat: 'Comportamento', titulo: 'Como ensinar seu cachorro a usar o tapete higiênico em 7 dias', resumo: 'Um passo a passo gentil, com reforço positivo, para filhotes e adultos.', data: '22 set 2026', leitura: '6 min' },
  { slug: 'qual-areia-escolher-para-gato', cat: 'Gatos', titulo: 'Areia de argila, mandioca ou sílica: qual escolher para o seu gato', resumo: 'Compare absorção, odor, rendimento e custo por mês de cada tipo.', data: '9 set 2026', leitura: '8 min' },
  { slug: 'adaptacao-filhote-primeira-semana', cat: 'Filhotes', titulo: 'A primeira semana do filhote em casa: o que preparar antes', resumo: 'Lista prática de itens, rotina e cuidados para uma chegada tranquila.', data: '28 ago 2026', leitura: '5 min' }
];

export const depoimentos = [
  { nome: 'Renata Albuquerque', cidade: 'Campinas, SP', nota: 5, pet: 'tutora do Thor, shih tzu', texto: 'O tapete não vaza nem quando o Thor erra a mira pela metade. Chegou no mesmo dia e já fiz a assinatura.' },
  { nome: 'Patrícia Mendonça', cidade: 'Curitiba, PR', nota: 5, pet: 'tutora da Mel e da Nina', texto: 'A areia da PetCharm segura o cheiro de verdade. Com duas gatas, isso muda a casa inteira.' },
  { nome: 'Luciana Ferraz', cidade: 'Belo Horizonte, MG', nota: 4, pet: 'tutora do Pipoca, vira lata', texto: 'Comprava na Shopee e migrei para o site pelo Pix com desconto. Embalagem caprichada e entrega dentro do prazo.' }
];

export const getCart = () => { try { return JSON.parse(localStorage.getItem('pc_cart') || '[]'); } catch (e) { return []; } };
export const setCart = c => { localStorage.setItem('pc_cart', JSON.stringify(c)); window.dispatchEvent(new Event('pc_cart')); };
export const addToCart = (id, qty = 1) => { const c = getCart(); const f = c.find(i => i.id === id); if (f) f.qty += qty; else c.push({ id, qty }); setCart(c); };
export const cartLines = () => getCart().map(l => { const p = produtos.find(x => x.id === l.id) || kits.find(x => x.id === l.id); return p ? { ...l, nome: p.nome, preco: p.preco, total: p.preco * l.qty } : null; }).filter(Boolean);

export const regiaoPorCep = cep => {
  const n = parseInt(String(cep).replace(/\D/g, '').slice(0, 5), 10);
  if (isNaN(n) || String(cep).replace(/\D/g, '').length < 8) return null;
  if (n >= 1000 && n <= 9999) return { uf: 'SP', cidade: 'São Paulo capital', flex: true, prazo: 'Receba hoje', obs: 'Pedidos até 16h, transportadora local', valor: 9.90 };
  if (n >= 10000 && n <= 19999) return { uf: 'SP', cidade: 'Interior de SP', flex: false, prazo: '1 a 3 dias úteis', obs: 'Melhor Envio', valor: 14.90 };
  if (n >= 20000 && n <= 28999) return { uf: 'RJ', cidade: 'Rio de Janeiro', flex: false, prazo: '2 a 4 dias úteis', obs: 'Melhor Envio', valor: 19.90 };
  if (n >= 30000 && n <= 39999) return { uf: 'MG', cidade: 'Minas Gerais', flex: false, prazo: '2 a 5 dias úteis', obs: 'Melhor Envio', valor: 19.90 };
  if (n >= 80000 && n <= 99999) return { uf: 'Sul', cidade: 'Região Sul', flex: false, prazo: '3 a 6 dias úteis', obs: 'Melhor Envio ou Correios', valor: 22.90 };
  return { uf: 'BR', cidade: 'Demais regiões', flex: false, prazo: '5 a 10 dias úteis', obs: 'Correios', valor: 27.90 };
};

export const U = {
  home: 'PetCharm%20Home.dc.html',
  cat: s => 'PetCharm%20Categoria.dc.html?c=' + s,
  busca: q => 'PetCharm%20Categoria.dc.html?q=' + encodeURIComponent(q),
  prod: id => 'PetCharm%20Produto.dc.html?p=' + id,
  carrinho: 'PetCharm%20Carrinho.dc.html',
  checkout: 'PetCharm%20Checkout.dc.html',
  blog: 'PetCharm%20Blog.dc.html',
  artigo: s => 'PetCharm%20Artigo.dc.html?a=' + s
};
export const ICON = { 'tapete-higienico': 'ph-squares-four', 'areia-e-sanitarios': 'ph-cat', petiscos: 'ph-bone', brinquedos: 'ph-tennis-ball', moveis: 'ph-armchair', higiene: 'ph-drop', acessorios: 'ph-bowl-food' };
export const TINT = { 'tapete-higienico': '#EFE9FB', 'areia-e-sanitarios': '#FFF8C7', petiscos: '#E6EEFF', brinquedos: '#EFE9FB', moveis: '#FFF8C7', higiene: '#E6EEFF', acessorios: '#EFE9FB' };
export const ASS_OFF = 0.07;
export const cartCount = () => getCart().reduce((s, i) => s + i.qty, 0);
export const linePrice = (l, p) => p.preco * (l.ass ? 1 - ASS_OFF : 1);
export const findItem = id => produtos.find(x => x.id === id) || kits.find(x => x.id === id);

export const descricao = {
  'tapete-higienico': 'O tapete higiênico PetCharm tem cinco camadas com gel superabsorvente que transforma o xixi em gel em poucos segundos. A base plástica impermeável protege o piso e a faixa adesiva nas bordas mantém o tapete no lugar, mesmo com filhote agitado.',
  'areia-e-sanitarios': 'Pensada para gatos exigentes, com grãos que formam torrões firmes e fáceis de retirar com a pazinha. Controla o odor por mais tempo e rende mais do que a areia comum, o que reduz a frequência de troca completa da caixa.',
  petiscos: 'Petisco macio, fácil de partir em pedaços pequenos para usar no adestramento. Feito com carne de verdade e sem corantes artificiais.',
  brinquedos: 'Brinquedos resistentes para gastar energia e reduzir o tédio quando o pet fica sozinho. Materiais atóxicos e fáceis de lavar.',
  moveis: 'Feito para durar, com acabamento firme e base antiderrapante. Fácil de limpar e montar em poucos minutos.',
  higiene: 'Fórmula suave para o dia a dia, com pH balanceado para a pele do pet e fragrância leve que não incomoda.',
  acessorios: 'Acessório prático para a rotina, em material atóxico e fácil de lavar à mão ou na lava louças.'
};
export const specs = p => {
  const base = [['Código', p.sku], ['Indicado para', p.pet ? (p.pet === 'Cão' ? 'Cachorros' : 'Gatos') : 'Cães e gatos'], ['Porte', p.porte || 'Todos os portes']];
  const extra = {
    'tapete-higienico': [['Medidas', '60 x 60 cm'], ['Camadas', '5, com gel superabsorvente'], ['Fixação', 'Faixa adesiva nas bordas']],
    'areia-e-sanitarios': [['Tipo', 'Grãos aglomerantes'], ['Controle de odor', 'Até 14 dias']],
    moveis: [['Base', 'Antiderrapante'], ['Limpeza', 'Pano úmido']]
  }[p.cat] || [];
  return [...base, ...extra, ['Marca', p.propria ? 'PetCharm' : 'Parceira']];
};
export const avaliacoes = [
  { nome: 'Juliana Prates', nota: 5, data: '2 out 2026', texto: 'Segura bem e não vaza para o piso. Meu filhote acertou o tapete já na primeira semana.', cor: '#FFD43B' },
  { nome: 'Marcos Vilela', nota: 5, data: '24 set 2026', texto: 'Chegou no mesmo dia, pedi às 13h. Preço no Pix compensa mais que no marketplace.', cor: '#C9DAFF' },
  { nome: 'Sueli Tavares', nota: 4, data: '11 set 2026', texto: 'Muito bom, só queria que viesse em embalagem maior. Já assinei para chegar todo mês.', cor: '#E3D9F8' }
];

artigos.forEach((a, i) => { a.autor = ['Dra. Camila Rezende, veterinária', 'Bruno Okada, adestrador', 'Dra. Camila Rezende, veterinária'][i]; });
artigos.push(
  { slug: 'quanto-de-areia-colocar-na-caixa', cat: 'Gatos', titulo: 'Quanto de areia colocar na caixa e quando trocar tudo', resumo: 'A altura certa evita sujeira fora da caixa e economiza areia no mês.', data: '14 ago 2026', leitura: '4 min', autor: 'Dra. Camila Rezende, veterinária' },
  { slug: 'brinquedos-para-cachorro-que-fica-sozinho', cat: 'Comportamento', titulo: 'Brinquedos para o cachorro que passa o dia sozinho', resumo: 'Como escolher e alternar brinquedos para reduzir tédio e ansiedade.', data: '31 jul 2026', leitura: '7 min', autor: 'Bruno Okada, adestrador' },
  { slug: 'como-escolher-caminha-pelo-porte', cat: 'Bem estar', titulo: 'Como escolher a caminha certa pelo porte e jeito de dormir', resumo: 'Medidas, formatos e materiais para cada tipo de soneca.', data: '17 jul 2026', leitura: '5 min', autor: 'Equipe PetCharm' }
);
export const artigoProduto = { 'como-ensinar-cachorro-usar-tapete-higienico': 'tapete-30', 'qual-areia-escolher-para-gato': 'areia-2', 'adaptacao-filhote-primeira-semana': 'tapete-20', 'quanto-de-areia-colocar-na-caixa': 'balde-areia', 'brinquedos-para-cachorro-que-fica-sozinho': 'kit-brinq-5', 'como-escolher-caminha-pelo-porte': 'cama-gg' };
export const corpos = {
  'como-ensinar-cachorro-usar-tapete-higienico': [
    { h: 'Antes de começar', p: ['Escolha um canto fixo da casa, longe do pote de comida e da caminha. Cachorros evitam fazer as necessidades perto de onde comem e dormem, então essa distância já ajuda metade do trabalho.', 'Nos primeiros dias, cubra uma área maior com dois ou três tapetes lado a lado. Conforme ele acerta, você reduz até ficar com um só.'] },
    { h: 'Dias 1 e 2: observe a rotina', p: ['Filhotes costumam fazer xixi logo depois de acordar, comer, beber água e brincar. Nesses momentos, leve o cachorro até o tapete com calma e espere alguns minutos.', 'Quando ele acertar, elogie com voz animada e ofereça um petisco pequeno na hora. O reforço precisa acontecer em até três segundos para ele associar ao comportamento.'] },
    { h: 'Dias 3 a 5: reduza a área', p: ['Retire um dos tapetes extras, sempre mantendo o principal no mesmo lugar. Se houver erro fora do tapete, limpe com um produto enzimático para eliminar o cheiro que atrai o pet de volta ao local.', 'Nunca brigue ou esfregue o focinho no xixi. Isso ensina o cachorro a se esconder para fazer, o que atrasa todo o processo.'] },
    { h: 'Dias 6 e 7: consolide o hábito', p: ['A essa altura a maioria dos cães já procura o tapete sozinha. Continue premiando os acertos por mais algumas semanas, espaçando os petiscos aos poucos.', 'Troque o tapete sempre que estiver úmido. Um tapete cheio faz o cachorro procurar outro lugar limpo, e esse lugar costuma ser o seu tapete da sala.'] }
  ],
  'qual-areia-escolher-para-gato': [
    { h: 'Areia de argila', p: ['É a mais comum e a mais barata. Forma torrões firmes quando é aglomerante, o que facilita retirar só a parte suja e prolonga o uso.', 'O ponto de atenção é a poeira: prefira versões com baixa emissão, principalmente se o gato ou alguém da casa tem sensibilidade respiratória.'] },
    { h: 'Areia de mandioca e grãos vegetais', p: ['Biodegradável e leve, pode ir em pequenas quantidades no vaso sanitário em alguns modelos. Agrada tutores que buscam opção mais sustentável.', 'Rende um pouco menos que a argila em casas com mais de um gato, então calcule o custo por mês, não por pacote.'] },
    { h: 'Sílica', p: ['Absorve muito e controla bem o odor, com trocas completas mais espaçadas. Alguns gatos estranham a textura dos cristais, então faça a transição misturando com a areia antiga ao longo de uma semana.'] }
  ],
  'adaptacao-filhote-primeira-semana': [
    { h: 'O que ter em casa no primeiro dia', p: ['Caminha, potes de água e comida, tapetes higiênicos, a mesma ração que ele comia antes e dois ou três brinquedos. Mudanças bruscas de alimentação causam desconforto intestinal.'] },
    { h: 'Rotina previsível', p: ['Horários fixos para comer, brincar e dormir reduzem o choro noturno. Deixe uma peça de roupa com o seu cheiro perto da caminha nas primeiras noites.', 'Agende a primeira consulta no veterinário ainda nessa semana para conferir vacinas e vermifugação.'] },
    { h: 'Visitas com calma', p: ['Segure as visitas por alguns dias. O filhote precisa primeiro entender que a casa nova é segura antes de conhecer muita gente.'] }
  ],
  'quanto-de-areia-colocar-na-caixa': [
    { h: 'A altura ideal', p: ['Entre 5 e 7 centímetros funciona para a maioria dos gatos. Menos que isso, o xixi chega ao fundo e gruda. Mais que isso, a areia vai parar no chão a cada enterrada.'] },
    { h: 'Limpeza diária e troca completa', p: ['Retire os torrões uma ou duas vezes por dia e complete a altura com areia nova. A troca total, com lavagem da caixa, fica entre 2 e 4 semanas, dependendo do tipo de areia e do número de gatos.'] },
    { h: 'Regra das caixas', p: ['O ideal é ter uma caixa por gato mais uma extra, em lugares diferentes da casa. Isso evita disputa e reduz xixi fora do lugar.'] }
  ],
  'brinquedos-para-cachorro-que-fica-sozinho': [
    { h: 'Brinquedos recheáveis', p: ['Brinquedos onde você esconde petisco ou ração mantêm o cachorro ocupado por bastante tempo e cansam a mente, o que vale tanto quanto um passeio curto.'] },
    { h: 'Faça rodízio', p: ['Deixe dois ou três brinquedos disponíveis e guarde o resto. Trocar a cada poucos dias faz cada um parecer novidade de novo.'] },
    { h: 'Quando procurar ajuda', p: ['Latidos contínuos, destruição de portas ou xixi fora do lugar só quando ele está sozinho podem indicar ansiedade de separação. Nesses casos, converse com um veterinário comportamentalista.'] }
  ],
  'como-escolher-caminha-pelo-porte': [
    { h: 'Meça o pet dormindo', p: ['Meça do focinho até a base do rabo com ele esticado e some cerca de 20 centímetros. Essa é a largura mínima da caminha.'] },
    { h: 'Formato pelo jeito de dormir', p: ['Quem dorme enrolado prefere caminhas redondas com borda. Quem se espalha precisa de modelos retangulares e baixos, tipo colchonete.'] },
    { h: 'Material e limpeza', p: ['Capa removível e base antiderrapante fazem diferença no dia a dia. Para cães idosos, prefira espuma mais firme, que ajuda as articulações.'] }
  ]
};

// Fotos ilustrativas (Unsplash, licença livre). Substituir pelas fotos oficiais dos produtos.
const u = id => 'https://images.unsplash.com/photo-' + id + '?w=800&q=70&auto=format&fit=crop';
const px = id => 'https://images.pexels.com/photos/' + id + '/pexels-photo-' + id + '.jpeg?auto=compress&cs=tinysrgb&w=800';
export const IMG = {
  'tapete-30': px(5724971), 'tapete-20': u('1600369671236-e74521d4b6ad'), 'tapete-10': u('1605197161470-d0261cac6767'),
  'areia-2': px(13705497), wisecat: u('1727510153658-643787acb16a'), 'balde-areia': px(13705506),
  'sanitario-2d': u('1727510152963-b98611a4b8a0'), 'coletor-eva': u('1727510155089-721c9c729a46'),
  'arranhador-mdf': u('1636543459642-ea9df9cc8f5a'), 'kit-brinq-5': u('1568640347023-a616a30bc3bd'),
  bifinho: u('1508609540374-67d1601ba520'), comedouro: u('1565204333704-e2618a0a6938'), 'cama-gg': u('1581888227599-779811939961'),
  'shampoo-filhote': u('1681305694935-9048ba34d72f'), educador: px(19605435), 'casinha-n4': u('1518640165980-d3e0e2aa6c1e'),
  'kit-filhote': u('1627323721367-94128c3fa0f7'), 'kit-gato': u('1636543459622-52a3a0f953b6'), 'kit-estoque': u('1601758123927-4f7acc7da589')
};
const wrap = (t, n) => { const w = t.split(' '), l = []; let s = ''; w.forEach(x => { if ((s + ' ' + x).trim().length > n) { l.push(s.trim()); s = x; } else s += ' ' + x; }); l.push(s.trim()); return l; };
export const placeholder = (nome, funcao, bg = '#EFE9FB') => {
  const linhas = wrap(nome, 26).slice(0, 4);
  const y0 = 400 - (linhas.length * 34) / 2;
  const t = linhas.map((l, i) => '<tspan x="400" y="' + (y0 + i * 34) + '">' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</tspan>').join('');
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="' + bg + '"/><rect x="24" y="24" width="752" height="752" rx="24" fill="none" stroke="#6834CC" stroke-opacity=".35" stroke-width="3" stroke-dasharray="14 10"/><text font-family="Poppins,Arial,sans-serif" font-size="26" font-weight="600" fill="#1E1730" text-anchor="middle">' + t + '</text><text x="400" y="' + (y0 + linhas.length * 34 + 30) + '" font-family="Poppins,Arial,sans-serif" font-size="22" font-weight="500" fill="#6834CC" text-anchor="middle">' + funcao + '</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};
const tintOf = p => (p.cat && TINT[p.cat]) || '#E6EEFF';
[...produtos, ...kits].forEach(p => { p.img = placeholder(p.nome, 'Imagem principal', tintOf(p)); });
export const galeria = p => [p.img, ...[1, 2, 3].map(n => placeholder(p.nome, 'Galeria ' + n, tintOf(p)))];

// Imagens ilustrativas dos posts (Unsplash/Pexels, licença livre)
const ART_IMG = {
  'como-ensinar-cachorro-usar-tapete-higienico': px(5724971),
  'qual-areia-escolher-para-gato': u('1727510153658-643787acb16a'),
  'adaptacao-filhote-primeira-semana': u('1627323721367-94128c3fa0f7'),
  'quanto-de-areia-colocar-na-caixa': px(13705497),
  'brinquedos-para-cachorro-que-fica-sozinho': u('1587559070757-f72a388edbba'),
  'como-escolher-caminha-pelo-porte': u('1581888227599-779811939961')
};
artigos.forEach(a => { a.img = ART_IMG[a.slug] || ''; });
