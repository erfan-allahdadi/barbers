## 📊 Features Table

| Feature                        | Implementation Status | Notes |
|--------------------------------|-----------------------|-------|
| **Filter based on name**        | ✔️ Implemented        |  |
| **Filter based on Tab**              | ❌ Not Implemented (just UI)        | Apparently the given API is not responsive to this feature and if it were to be client-side handled, we would no longer have the advantage of server-side. |
| **Filter based on services**     |  ✔️ Implemented    |  |
| **App router - Typescript**      | ✔️ Implemented        |  |
| **Use query params in URL**              | ✔️ Implemented        |  |
| **Axios and AbortController**           | ❌ Not Implemented    | The Next document recommends using fetch to achieve things like caching - automatic optimization of requests on the server and client - better compatibility with different environments - support for streams in Next.js: - reducing the size of the project |
| **Suspense and Loading**             | ✔️ Implemented        |  |
| **Responsive design**              | ✔️ Implemented        |  |
| **Tailwind CSS**                   | ✔️ Implemented        |  |
| **TypeScript**                     | ✔️ Implemented        |  |
| **ESLint**                         | ✔️ Implemented        |  |
| **Prettier**                       | ✔️ Implemented        |  |



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
