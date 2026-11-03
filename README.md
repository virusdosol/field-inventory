<div align="center">

<img src="icon-512.png" alt="Field Inventory" width="140">

# FIELD INVENTORY

**Inventário tático de equipamentos para cicloturismo.**
Organize alforges, bolsas e mochila numa grade de células, como nos inventários de jogos de extração FPS.

[**Abrir o app**](https://virusdosol.github.io/field-inventory/) · [Instalar no celular](#-instalar-no-celular) · [Backup](#-seus-dados-e-backup)

![PWA](https://img.shields.io/badge/PWA-instalável-78a342?style=flat-square)
![Offline](https://img.shields.io/badge/funciona-offline-3d5622?style=flat-square)
![Sem dependências](https://img.shields.io/badge/dependências-zero-272c25?style=flat-square)
![Mobile first](https://img.shields.io/badge/mobile-first-1d211b?style=flat-square)

</div>

---

## O que é

Uma ferramenta pessoal para saber **o que você leva, onde está guardado e quanto pesa**. Cada bolsa tem compartimentos, cada compartimento tem uma grade de células, e cada objeto ocupa o espaço real que tem. Você arrasta, gira e encaixa as peças, como num inventário de jogo.

Foi pensado para o celular, para usar na garagem, no preparo da viagem ou na estrada.

## Equipamentos de partida

| Código | Equipamento | Compartimentos |
|---|---|---|
| `FORK-01` / `FORK-02` | Alforges artesanais do garfo (esq. / dir.) | Principal |
| `HANDLEBAR-01` | Bolsa de guidão | Principal, lateral esq., lateral dir. |
| `FRAME-01` | Bolsa de quadro | Principal |
| `BACKPACK-01` | Mochila Trilhas & Rumos Crampton 44 L | Principal, superior secundário, **EXTERNAL LOAD** |
| `REAR-01` / `REAR-02` | Alforges Elops 15 L (esq. / dir.) | Principal |

O inventário começa **vazio**: nada de objetos de exemplo. Você pode adicionar, renomear e excluir equipamentos e compartimentos em *Config*, sem mexer no código.

## Funcionalidades

**Grade de inventário**
- Cada compartimento tem sua própria grade, com largura e altura configuráveis.
- Arrastar e soltar por toque ou mouse, com prévia verde (cabe) ou vermelha (não cabe).
- Alternativa sem arrastar: tocar no objeto e depois na célula de destino.
- Girar 90°, mover entre compartimentos e entre equipamentos.
- Sem sobreposição e sem sair da grade. Se não couber, o app explica o motivo e o objeto continua onde estava.

**Objetos**
- Nome, descrição, categoria, subcategoria, peso (g), tamanho em células, quantidade, empilhável e observações.
- Upload de imagem (PNG, WebP ou JPG) usada como sprite, com proporção preservada.
- Duplicar, editar, excluir, ampliar, trocar ou remover a imagem.

**EXTERNAL LOAD**
- Área da mochila para o que vai preso por fora (tripé, chinelo, barraca). Não ocupa células.

**Categorias**
- 12 categorias iniciais, com cor própria. Crie, edite ou exclua.
- A categoria é independente do local: ver "Cozinha" mostra tudo junto, sem mover nada de lugar.

**Busca e visões**
- Busca global por nome, que leva direto ao compartimento e destaca o objeto.
- Telas: Inventário, Objetos (filtros por categoria e equipamento, ordenação), Categorias, Busca, Estatísticas e Config.
- Estatísticas de peso total e por equipamento, distribuição por categoria e ocupação das grades.

## 📲 Instalar no celular

1. Abra **https://virusdosol.github.io/field-inventory/** no **Chrome** (Android) ou no **Safari** (iPhone).
2. Toque em **Instalar app** (Chrome) ou em **Compartilhar > Adicionar à Tela de Início** (Safari).
3. Abra pelo ícone novo. Depois do primeiro acesso, funciona offline.

## 💾 Seus dados e backup

- Tudo fica **salvo no próprio aparelho**, no armazenamento do navegador. Nada é enviado para servidores.
- Limpar os dados do navegador ou desinstalar o app **apaga o inventário**.
- Faça backup em **Config > Exportar** (arquivo `.json` com dados e imagens) e restaure em **Config > Importar**, inclusive em outro aparelho.

## 🛠 Para quem quer mexer no código

É um app de **um único arquivo** (`index.html`), em HTML, CSS e JavaScript puro, sem build e sem dependências.

```
field-inventory/
├── index.html      # o app inteiro
├── manifest.json   # nome, cores e ícones do PWA
├── sw.js           # service worker (cache offline)
├── icon-192.png
├── icon-512.png
└── icon-1024.png
```

Para rodar localmente, sirva a pasta com qualquer servidor estático (por exemplo `python3 -m http.server`) e abra `http://localhost:8000`. O service worker só funciona em `localhost` ou `https`.

Para publicar a sua cópia: faça um fork, vá em **Settings > Pages**, escolha a branch `main` e a pasta `/ (root)`.

## Ainda não tem

- Sincronização em nuvem entre dispositivos.
- Backup compactado em ZIP.
- Subcategorias cadastráveis e ícones de categoria personalizáveis.
- Filtros por compartimento e por faixa de peso.

Sugestões e contribuições são bem-vindas: abra uma *issue* ou um *pull request*.

## Observações

- As grades novas começam em 6×6 células. Ajuste cada uma em **Config > Grade**.
- Células não equivalem a litros: a capacidade em litros é só um dado informativo.
- Inspirado na organização visual de inventários de jogos de extração. Sem logotipos ou arte de terceiros.

---

<div align="center">

Feito por **virusdosol** para quem pedala longe e quer saber onde está o isqueiro.

</div>
