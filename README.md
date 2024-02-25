# Musicify

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![chatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

Musicify is a website to help you settle on a mood. We know its hard to decide what music to listen to, so simply type in a mood your feeling and have ChatGPT generate up to 6 songs recommendations based on that mood.

## How it works
By typing in a prompt and passing it into the OpenAI API, we generate a recommendation object which we can then feed into Spotify API in order to generate up to six tracks that help fit whatever mood your looking for.
![Demo](https://github.com/colinthekkinedath/musicify/assets/54488379/b96eb7b8-2642-4468-bbc7-d9a29483e2d5)

## Node.js

Musicify runs on Node.js Version 16.17.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Next.js

This project is built using [Next.js](https://nextjs.org), a React framework. Next.js is automatically installed when you install all dependencies for this project.

## Environment Variables

The following environment variables are required and must be stored in an `.env` file:

```env
OPENAI_API_KEY=
SPOTIFY_PUBLIC_API=
SPOTIFY_SECRET_API=
```

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Website Locally

```bash
# Open a browser at localhost:3000
npm run dev
```

### Formatting Code via Prettier

```bash
# Rewrite code recursively with proper formatting
npm run format

# Show formatting differences recursively
npm run check
```

### Build the Website

```bash
npm run build
```
