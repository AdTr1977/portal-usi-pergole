# Portal Uși & Pergole

Site de prezentare + configurator de uși, construit cu React + Vite.

## Structură

- `src/pages/` — o pagină per rută (Home, Produse, ProdusUsi, ProdusPergole,
  Configurator, ConfiguratorUsi, ConfiguratorPergole, Portofoliu, Contact)
- `src/pages/ConfiguratorUsi.jsx` — configuratorul de uși; toate datele
  (modele, culori, dimensiuni, prețuri) sunt grupate la începutul fișierului,
  sub comentariul „ZONA DE EDITARE”.
- `public/images/usi/` — pune aici fotografiile ușilor; numele fișierelor
  trebuie să corespundă cu câmpul `img` din `ConfiguratorUsi.jsx`.
- `src/components/Navbar.jsx` / `Footer.jsx` — numele brandului (`BRAND_NAME`)
  se editează într-un singur loc în fiecare fișier.

## Publicare pe GitHub Pages (fără nimic instalat local)

1. Pe github.com, creezi un repo nou, public, cu numele **exact**
   `portal-usi-pergole` (dacă alegi alt nume, schimbă și linia `base` din
   `vite.config.js`).
2. Intri în repo → **Add file → Upload files**.
3. Din calculator, tragi (drag & drop) tot conținutul folderului `site`
   (nu folderul „site” în sine, ci ce e înăuntru: `src`, `public`,
   `package.json`, `.github`, etc.) direct în pagina de upload. GitHub
   recreează automat structura de foldere.
4. Jos, pui un mesaj de commit (ex: „prima versiune”) și apeși
   **Commit changes**.
5. Repo → **Settings → Pages**. La „Build and deployment” → **Source**,
   alegi **GitHub Actions** (nu „Deploy from a branch”).
6. Repo → tab **Actions** — ar trebui să vezi workflow-ul „Publică pe
   GitHub Pages” pornind automat (declanșat de upload-ul de la pasul 3-4).
   Aștepți 1-2 minute să se termine (bulinuță verde = succes).
7. Te întorci la **Settings → Pages** — sus apare linkul live, de tipul
   `https://utilizator.github.io/portal-usi-pergole/`.

De aici încolo, orice modificare pe care o faci direct în fișierele din
GitHub (ex: editezi `ConfiguratorUsi.jsx` din interfața web) pornește automat
un nou build și republică site-ul.

## Rulare locală (opțional, doar dacă ai Node.js la un moment dat)

```
npm install
npm run dev
```
