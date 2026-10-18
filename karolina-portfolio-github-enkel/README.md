# Karolina Paraskevas portfolio

Portfolio med startsida och separata case studies för AcadeMedia, Kommunal och Duro.

## Teknik

- React 19
- TypeScript
- Vinext och Vite
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

## Publicering

GitHub kan lagra källkoden, men projektet är inte konfigurerat som en statisk GitHub Pages-sida. För att publicera webbplatsen från GitHub bör du ansluta repositoryt till en tjänst som kan bygga och köra projektet. Den nuvarande publicerade versionen kan också fortsätta användas som den är.

## Viktiga mappar

- `app/` innehåller sidornas innehåll, struktur och styling.
- `public/images/` innehåller portfolio- och case study-bilderna.
- `components/` innehåller återanvändbara komponenter.

