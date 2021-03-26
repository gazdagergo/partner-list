# Partners Editor
## Getting Started

For local development/demo please follow the below steps:

Clone the repository

```bash
git clone https://github.com/gazdagergo/partner-list.git
```

Install dependencies

```bash
yarn
# or 
npm i
```

To initialize the database with placeholder data (if necessary) rendame
`prisma/dev.db.example` to `prisma/dev.db`


Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/partners](http://localhost:3000/api/partners). This endpoint can be edited in `pages/api/patners/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

