# linoo.ch

## Stack

- **Frontend:** Next.js (with Tailwind)
- **CMS:** Strapi (on own AWS VM)
- **Hosting:** AWS Amplify (CI/CD via main branch)

## Strapi URL

`https://strapi.prod-strapi-fra-01.surmatik.ch`

## Blogposts

Data via REST:
- `Title`
- `Content` (Markdown)
- `Slug`
- `Image`

## Deployment process

1. push to `main`
2. amplify builds automatically
3. live at: https://linoo.ch

## Dev local

```bash
npm install
npm run dev
```

## API call (example)

```ts
await fetch(‘https://strapi.prod-strapi-fra-01.surmatik.ch/api/blogs?populate=*’)
```

## CMS hosting

- Ubuntu VM on AWS
- Nginx reverse proxy
- Strapi runs as a service (PM2)