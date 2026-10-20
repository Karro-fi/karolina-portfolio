# Karolina Paraskevas portfolio

Portfolio med startsida och separata case studies för AcadeMedia, Kommunal och Duro.

## Publicera med Vercel

1. Lägg filerna i roten av ditt GitHub-repository.
2. Logga in på Vercel med GitHub och välj **Add New → Project**.
3. Importera repositoryt `Karro-fi/karolina-portfolio`.
4. Välj **Next.js** som Framework Preset och klicka på **Deploy**.
5. Under **Settings → Environment Variables**, lägg till `NEXT_PUBLIC_SITE_URL` med den slutliga webbadressen.

Varje ny ändring på GitHubs `main`-branch publiceras därefter automatiskt.

## Sökmotorer

Projektet innehåller `robots.txt`, sitemap och metadata. När den slutliga domänen är ansluten kan den registreras i Google Search Console.

## Teknik

- React 19
- TypeScript
- Next.js
- CSS

## Starta projektet lokalt

Du behöver Node.js 22.13 eller senare och pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

Öppna sedan adressen som visas i terminalen, vanligtvis `http://localhost:3000`.

## Kontrollera en produktionsversion

```bash
pnpm build
pnpm start
```

## Lägg upp koden på GitHub

1. Skapa ett nytt tomt repository på GitHub.
2. Packa upp ZIP-filen och öppna mappen i en terminal.
3. Kör kommandona nedan och ersätt URL:en med adressen till ditt repository.

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/DITT-NAMN/DITT-REPOSITORY.git
git push -u origin main
```

## Viktiga mappar

- `app/` innehåller sidornas innehåll, struktur och styling.
- `public/images/` innehåller portfolio- och case study-bilderna.
- `components/` innehåller återanvändbara komponenter.

