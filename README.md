# 📚 Media Book API

Bem-vindo ao **Media Book API**! 🚀

Este é o motor backend que alimenta uma aplicação estilo rede social. Se você estava procurando por interfaces bonitas e botões coloridos, você veio ao lugar errado (por enquanto). Aqui é onde a mágica dos dados acontece: usuários, posts, perfis e tags, tudo servido via **GraphQL**.

É um projeto robusto, modular e construído com as melhores práticas do ecossistema Node.js.

## 🛠️ Tech Stack

Não economizamos nas ferramentas legais:

- **[NestJS](https://nestjs.com/)**: O framework Node.js progressivo para construir aplicações eficientes e escaláveis.
- **[GraphQL](https://graphql.org/)**: Porque REST é legal, mas pedir exatamente o que você quer é muito melhor. (Abordagem Code-First).
- **[TypeORM](https://typeorm.io/)**: Para conversar com o banco de dados sem dor de cabeça.
- **[PostgreSQL](https://www.postgresql.org/)**: O banco de dados relacional mais avançado do mundo open source.
- **[Docker](https://www.docker.com/)**: Porque "funciona na minha máquina" não é uma desculpa válida.

## 🧩 Funcionalidades (Módulos)

O sistema é dividido em módulos para manter tudo organizado:

- **Users**: Gerenciamento de usuários (quem são eles?).
- **Profiles**: Detalhes adicionais sobre os usuários (o que eles gostam?).
- **Posts**: O conteúdo real. Títulos, textos e tudo o que você quer compartilhar.
- **Tags**: Para categorizar e encontrar posts interessantes.

## 🚀 Como Rodar

Você tem duas opções: a fácil (Docker) e a "raiz" (Local).

### Opção 1: Docker (Recomendado)

Se você tem o Docker e o Docker Compose instalados, é mamão com açúcar:

```bash
# Subir o banco e a aplicação
docker-compose up --build
```

### Opção 2: Localmente

Se você prefere rodar tudo na unha:

1.  Instale as dependências:

    ```bash
    npm install
    ```

2.  Configure seu banco de dados (verifique os arquivos em `src/config/`).

3.  Inicie a aplicação:
    ```bash
    # Desenvolvimento
    npm run start:dev
    ```

## 🎮 Playground

Depois que a aplicação estiver rodando, acesse o **GraphQL Playground** para testar suas queries e mutations:

📍 **URL:** `http://localhost:3000/graphql`

Divirta-se explorando o schema!

---

_Feito com 💜 e muito café._
