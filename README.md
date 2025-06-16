# Artekoucka.cz

Profesionální webová prezentace pro artekoučku Mgr. Martu Sojkovou, MBA, ACC.
Moderní, responzivní webová stránka postavená na **Deno 2** a **Fresh**
frameworku.

## 🚀 Technologie

- **Runtime**: Deno 2.x
- **Framework**: Fresh (Deno web framework)
- **Frontend**: Preact + TypeScript
- **Styling**: Custom CSS3 (inspirováno Jonas Schmedtmann kurzy)
- **Icons**: React Icons
- **Hosting**: Deno Deploy
- **CI/CD**: GitHub Actions

## 📋 Funkce

- ✅ Responzivní design optimalizovaný pro mobilní zařízení
- ✅ SEO optimalizace s structured data
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Performance monitoring
- ✅ Error tracking
- ✅ Analytics integration
- ✅ GDPR compliance
- ✅ Security headers
- ✅ Automated testing
- ✅ CI/CD pipeline

## 🛠️ Instalace a spuštění

### Požadavky

- Deno 2.x
- Git

### Rychlý start

```bash
# Klonování repozitáře
git clone https://github.com/IshiKakesuFun/artekoucka-cz.git
cd artekoucka-cz

# Automatické nastavení vývojového prostředí
make setup
# nebo
deno task setup

# Spuštění dev serveru
make dev
# nebo
deno task start
```

## 📁 Struktura projektu

```plaintext
artekoucka-cz/
├── 📁 components/         # Preact komponenty
│   ├── 📁 about-me/       # Komponenty pro stránku O mně
│   ├── 📁 analytics/      # Analytics a tracking
│   ├── 📁 artekoucing/    # Sekce artekoučink
│   ├── 📁 cta/            # Call-to-action komponenty
│   ├── 📁 faq/            # Často kladené otázky
│   ├── 📁 footer/         # Footer komponenty
│   ├── 📁 header/         # Header a navigace
│   ├── 📁 hero/           # Hero sekce
│   ├── 📁 icons/          # Ikony a SVG
│   ├── 📁 privacy/        # GDPR komponenty
│   ├── 📁 services/       # Služby
│   ├── 📁 terms/          # Obchodní podmínky
│   └── 📁 testimonials/   # Reference
├── 📁 islands/            # Interaktivní komponenty
├── 📁 middleware/         # Server middleware
├── 📁 routes/             # Stránky a API routes
├── 📁 static/             # Statické soubory
│   ├── 📁 css/            # Styly
│   ├── 📁 images/         # Obrázky
│   └── 📁 fonts/          # Fonty
├── 📁 tests/              # Testy
├── 📁 utils/              # Utility funkce
├── 📁 scripts/            # Build a deployment skripty
└── 📁 .github/            # GitHub Actions workflows
```

## 🧪 Testování

```bash
# Spuštění všech testů
make test
deno task test

# Testy s watch módem
deno task test:watch

# Coverage report
make coverage
deno task coverage

# Linting a formátování
make check
deno task check
```

## 📊 Performance a monitoring

### Lighthouse audit

```bash
make lighthouse
deno task lighthouse
```

### Performance testy

```bash
make performance
deno task performance
```

### Monitoring endpointy

- Health check: `/api/health`
- Metrics: `/api/metrics`
- Error reporting: `/api/errors`

## 🚀 Deployment

### Automatické deployment

Projekt se automaticky nasazuje na **Deno Deploy** při push do `main` branche.

### Manuální deployment

```bash
make deploy
deno task deploy
```

### Preview deployment

Pull requesty automaticky vytváří preview deployment.

## 🔧 Development

### Užitečné příkazy

```bash
# Vývojový server s hot reload
make dev

# Build pro produkci
make build

# Čištění build artefaktů
make clean

# Aktualizace závislostí
deno task update

# Docker development
make docker-dev

# Nápověda
make help
```

### Git hooks

Projekt používá pre-commit hooks pro:

- Automatické formátování kódu
- Linting
- Type checking
- Spuštění testů před push

## 📱 Responzivní design

Web je optimalizován pro všechny velikosti obrazovek:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Breakpointy:

- 48em (768px)
- 54em (864px)
- 67em (1072px)
- 74em (1184px)
- 84em (1344px)

## 🎨 Design systém

### Barvy

- **Primary**: `#ffd966` (žlutá)
- **Accent**: `#d966ff` (fialová)
- **Text**: `#333`, `#4c4c4c`, `#666`
- **Background**: `#fffbf0`

### Typography

- **Headings**: Playfair Display
- **Body**: Rubik
- **Sizes**: 1.2rem - 9.8rem (responsive)

### Spacing

- **System**: 2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px

## 🔒 Security

### Implementované security measures

- Content Security Policy (CSP)
- Security headers (X-Frame-Options, X-Content-Type-Options, atd.)
- HTTPS Strict Transport Security (HSTS)
- Input sanitization
- CSRF protection

### GDPR compliance

- Cookie consent banner
- Privacy policy
- Data processing information
- User rights implementation
- Anonymized analytics

## ⚡ Performance optimalizace

### Implementované optimalizace

- **Image optimization**: WebP format, responsive images
- **CSS optimization**: Critical CSS, minifikace
- **JavaScript**: Tree shaking, code splitting
- **Caching**: Static assets cache, CDN ready
- **Compression**: Gzip/Brotli komprese

### Performance metriky

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTI**: < 3.5s

## 📈 Analytics a tracking

### Google Analytics 4

```typescript
// Environment variables
GOOGLE_ANALYTICS_ID = G - XXXXXXXXXX;
```

### Custom events tracking

- Page views
- Contact form submissions
- CTA clicks
- Download tracking
- Scroll depth

### Error tracking

- Client-side errors
- Server-side errors
- Performance issues
- User feedback

## 🌍 SEO optimalizace

### Implementované SEO features

- Meta tags optimalizace
- Open Graph protokol
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Internal linking strategy

### Content optimalizace

- Sémantické HTML5 značky
- Heading hierarchie (H1-H6)
- Alt texty pro obrázky
- Descriptive link texts

## 🧩 Komponenty

### Hlavní komponenty

#### Header

- Logo
- Hlavní navigace
- Mobilní menu
- CTA tlačítko

#### Hero sekce

- Hlavní headline
- Popis služeb
- CTA tlačítko
- Background obrázek

#### Services (Služby)

- Individuální koučink
- Týmový koučink
- Práce na klíč
- Cenová kalkulačka

#### FAQ

- Rozbalovací otázky
- Vyhledávání v FAQ
- Kategorizace otázek

#### Testimonials (Reference)

- Klientské recenze
- Fotografie klientů
- Rating systém

#### Footer

- Kontaktní informace
- Mapa webu
- Sociální sítě
- Právní odkazy

### Utility komponenty

- Loading spinner
- Error boundary
- Modal dialogy
- Toast notifikace
- Form validace

## 🔗 API dokumentace

### Public endpoints

#### `/api/health`

```json
{
  "status": "healthy",
  "timestamp": 1640995200000,
  "uptime": 86400000,
  "memory": {
    "used": 45000000,
    "total": 100000000
  },
  "metrics": {
    "averageResponseTime": 150,
    "requestCount": 1000
  },
  "version": "1.0.0"
}
```

#### `/api/metrics`

Prometheus compatible metrics endpoint.

#### `/api/errors` (POST)

Error reporting endpoint pro client-side chyby.

### Environment variables

```bash
# Deployment
DENO_ENV=production
PORT=8000
DENO_DEPLOYMENT_ID=auto

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Monitoring
LOG_LEVEL=INFO
SENTRY_DSN=https://...

# Security
ALLOWED_ORIGINS=https://artekoucka.cz
```

## 🧪 Testing strategie

### Test typy

1. **Unit testy**: Komponenty a utility funkce
2. **Integration testy**: API endpoints
3. **E2E testy**: User journeys
4. **Performance testy**: Load testing
5. **Accessibility testy**: A11y compliance

### Test coverage cíle

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 85%
- **Lines**: > 80%

### Testing tools

- Deno standard testing
- Fresh testing utilities
- Lighthouse CI
- Accessibility testing
- Performance monitoring

## 📦 Dependencies

### Runtime dependencies

```json
{
  "$fresh/": "https://deno.land/x/fresh@1.7.3/",
  "preact": "https://esm.sh/preact@10.24.0",
  "@preact/signals": "https://esm.sh/*@preact/signals@1.3.0"
}
```

### Development tools

- Deno formatter
- Deno linter
- TypeScript compiler
- Pre-commit hooks

## 🚨 Troubleshooting

### Časté problémy

#### Build chyby

```bash
# Vyčištění cache
deno cache --reload main.ts

# Restart dev serveru
deno task start
```

#### TypeScript chyby

```bash
# Type check
deno check **/*.ts **/*.tsx

# Update dependencies
deno task update
```

#### Performance problémy

```bash
# Analýza bundle size
deno task build

# Lighthouse audit
deno task lighthouse
```

### Debugging

1. Zapnutí debug módu: `DENO_ENV=development`
2. Verbose logging: `LOG_LEVEL=DEBUG`
3. Browser dev tools
4. VS Code debugger konfigurace

## 🤝 Contributing

### Development workflow

1. Fork repository
2. Vytvořit feature branch
3. Implementovat změny
4. Přidat testy
5. Spustit `make check`
6. Vytvořit pull request

### Code style

- Používat Deno formatter
- Dodržovat TypeScript strict mode
- Psát testy pro nové funkce
- Dokumentovat veřejné API

### Commit conventions

```plaintext
feat: přidání nové funkce
fix: oprava chyby
docs: aktualizace dokumentace
style: úpravy stylů
refactor: refaktoring kódu
test: přidání testů
chore: build a maintenance úkoly
```

## 📄 License

Tento projekt je licencován pod MIT licencí. Viz [LICENSE](LICENSE) soubor.

## 👥 Autoři

- **Design a vývoj**: [IshiKakesuFun](https://github.com/IshiKakesuFun)
- **Obsahová konzultace**: Mgr. Marta Sojková, MBA, ACC
- **Technická podpora**: Deno tým

## 📞 Kontakt

- **Web**: [artekoucka.cz](https://artekoucka.cz)
- **Email**: [marta@artekoucka.cz](mailto:marta@artekoucka.cz)
- **Telefon**: +420 602 181 097
- **LinkedIn**: [Marta Sojková](https://www.linkedin.com/in/marta-sojkov%C3%A1-28b62064/)

## 🔗 Související projekty

- [SojkAtelier](https://www.sojkatelier.cz) - Výtvarný ateliér
- [Fresh Framework](https://fresh.deno.dev) - Web framework
- [Deno Deploy](https://deno.com/deploy) - Hosting platforma

---

## 📋 Checklist pro produkci

- [ ] Performance audit (Lighthouse score > 90)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO audit (všechny meta tags, structured data)
- [ ] Security audit (security headers, HTTPS)
- [ ] GDPR compliance (privacy policy, cookie consent)
- [ ] Error tracking nastavení
- [ ] Analytics integrace
- [ ] Backup strategie
- [ ] Monitoring alertů
- [ ] Load testing
- [ ] Documentation update

## 🚀 Roadmap

### Q3 2025

- [ ] Implementace CMS pro snadnou správu obsahu
- [ ] Online booking systém pro konzultace
- [ ] Pokročilé analytics dashboard
- [ ] A/B testing framework

### Q4 2024

- [ ] PWA implementace
- [ ] Offline funkcionalita
- [ ] Push notifikace
- [ ] Advanced caching strategy
- [ ] Internationalization (EN verze)
- [ ] Blog sekce
- [ ] SEO automatizace
- [ ] Advanced analytics

### Dlouhodobé cíle

- [ ] AI chatbot integrace
- [ ] Voice UI implementace
- [ ] AR/VR preview ateliéru
- [ ] Advanced personalizace

---

**Poslední aktualizace**: 16. června 2025  
**Verze**: 0.7.0  
**Status**: ✅ Production Ready

## Resources

- Fresh [Getting Started](https://fresh.deno.dev/docs/getting-started) guide
- Showcase [Hi, I'm Guillaume](https://guillaumecomte.deno.dev/) on
  [GitHub](https://github.com/guigui64/www/)
- [1001 free fonts](https://www.1001freefonts.com/): Montserattu

### Webs

- [sivena.cz](https://sivena.cz/)
- [houdkova-profikouc.cz](https://houdkova-profikouc.cz/)
- [Koucka.cz](https://www.koucka.cz)
