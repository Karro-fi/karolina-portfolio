import type { Metadata } from 'next';
import EditorialCase from '../EditorialCase';

export const metadata: Metadata = {
  title: 'Duro Sweden: tillgänglig webbhandel',
  description:
    'Ett UX/UI-case om WCAG 2.1 AA, begriplig filtrering och mer tillgänglig webbhandel för Duro Sweden.',
  openGraph: {
    title: 'Duro Sweden: tillgänglig webbhandel',
    description: 'UX/UI · WCAG 2.1 AA · Användartester',
    images: [{ url: '/images/duro-product-grid.png', alt: 'Redesignad produktgrid för Duro Sweden.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duro Sweden: tillgänglig webbhandel',
    description: 'UX/UI · WCAG 2.1 AA · Användartester',
    images: ['/images/duro-product-grid.png'],
  },
};

export default function DuroCase() {
  return (
    <EditorialCase
      period="2026 Q1"
      eyebrow="Case study · UX/UI & tillgänglighet"
      title="Duro Sweden: tillgänglig webbhandel"
      intro="En tre veckor lång redesign av Duros webbhandel, skapad för att möta WCAG 2.1 AA, förenkla produktfiltreringen och göra vägen till rätt tapet mer begriplig."
      meta={[
        { label: 'Min roll', value: 'UX/UI-designer · testledare' },
        { label: 'Team', value: '4 Experience Designers' },
        { label: 'Period', value: '2026 Q1' },
        { label: 'Verktyg', value: 'Figma & Silktide' },
      ]}
      hero={{
        src: '/images/duro-product-grid.png',
        alt: 'Redesignad kategorisida med tapetprodukter, filtrering och sortering för Duro Sweden.',
        caption: 'Den redesignade produktgriden gör filtrering och sortering synliga utan att konkurrera med tapeterna.',
      }}
      challengeTitle="En vacker butik med onödiga barriärer."
      challengeText={[
        'Duro är ett väletablerat svenskt tapetföretag med ett stort sortiment. Den befintliga webbhandeln hade låg kontrast, texttunga ytor och ett filtreringssystem som gjorde flera samtidiga val svåra.',
        'Tillgänglighetsgranskningen och användartesterna visade också brister i tangentbordsnavigation, fokusmarkering, fältbeskrivningar och feedback när tapetprover lades i varukorgen.',
      ]}
      designQuestion="Hur kan vi göra ett stort tapetsortiment lättare att filtrera utan att skapa nya tillgänglighetsbarriärer?"
      focusAreas={['Accessibility & WCAG', 'Webbhandel UX', 'UI design', 'Usability testing']}
      problemTitle="Filtrering som skapade friktion"
      problemText="En statisk sidomeny med låg kontrast, begränsade flerval och otydliga tillstånd gjorde det svårt att avgränsa ett stort sortiment och förstå vad som var valt."
      solutionTitle="En fokuserad och tillgänglig filtermeny"
      solutionText="En popupmeny med tydliga kategorier, kryssrutor, färgsymboler, alfabetisk sortering och handlingar som fungerar för både mus, tangentbord och mindre skärmar."
      contributionTitle="Jag omsatte granskning och testdata till designbeslut."
      contributionIntro="Jag hade en drivande designroll och samarbetade nära med en teammedlem i Figma för att bygga och kvalitetssäkra prototyperna."
      contributionItems={[
        'Byggde komponenter, tillstånd och prototypflöden i Figma.',
        'Sorterade färger och mönster alfabetiskt för lägre kognitiv belastning.',
        'Genomförde användartester som både observatör och testledare.',
        'Översatte granskningsresultat och användarinsikter till konkreta designbeslut.',
        'Strukturerade presentation och manus för en tydlig kundleverans.',
      ]}
      contributionImage={{
        src: '/images/duro-filter-iterations.png',
        alt: 'Iterationer av Duros responsiva filtermeny.',
        caption: 'Menyn följer användaren, sparar val och behåller en tydlig väg även för tangentbordsnavigation.',
      }}
      processTitle="Från granskning till tillgänglig design."
      processIntro="Vi backade från tidiga antaganden, kombinerade tillgänglighetsgranskning med användartester och lät insikterna styra prototypen."
      processSteps={[
        {
          number: '01',
          title: 'Research & tillgänglighetsgranskning',
          text: 'Research, konkurrentanalys, Silktide-granskning och tester med fyra personer synliggjorde låg kontrast, begränsade flerval, språkinkonsekvens och otydlig feedback.',
          image: '/images/duro-audit.png',
          imageAlt: 'Översikt av problem på Duros befintliga webbplats.',
          caption: 'Audit och observationer samlades till ett konkret problemunderlag.',
        },
        {
          number: '02',
          title: 'Koncept & snabbtester',
          text: 'Vi tog fram parallella riktningar, valde den lösning som bäst svarade mot testdatan och snabbtestade hur kryssrutor, färger och kategorier tolkades.',
          image: '/images/duro-moodboard.png',
          imageAlt: 'Moodboard med referenser för filtrering, sortering och fokusmarkering.',
          caption: 'Referenserna fokuserade på tydlig filtrering, begripliga val och synlig fokusmarkering.',
        },
        {
          number: '03',
          title: 'Tillgänglig iteration',
          text: 'Efter två tester gjorde vi hela fält klickbara, lade till rullningslist och en funktion för att rensa alla val, tydliggjorde fokusmarkeringen och rekommenderade bättre alternativtexter och tabbordning.',
          image: '/images/duro-wcag.png',
          imageAlt: 'Rekommendationer för WCAG, fokusmarkering, tabbordning och alternativtext.',
          caption: 'Rekommendationerna kopplar synliga designbeslut till konkreta tillgänglighetsbehov.',
        },
      ]}
      galleryTitle="Tydligare väg från sortiment till beslut."
      galleryIntro="Resultatet skapar en lugnare produktöversikt och en tydligare informationsarkitektur även i stödjande innehåll."
      gallery={[
        {
          src: '/images/duro-product-grid.png',
          alt: 'Produktgrid för tapeter med tydliga knappar för filtrering och sortering.',
          caption: 'Produktgriden prioriterar produkterna och ger filtreringen en självklar, synlig startpunkt.',
        },
        {
          src: '/images/duro-faq.png',
          alt: 'Redesignad sida med frågor och svar för Duro Sweden.',
          caption: 'Frågor och svar får mer luft, tydligare kontraster och en skannbar kategoristruktur.',
        },
      ]}
      principlesTitle="Tillgänglighet som en del av helheten."
      principles={[
        { title: 'Kontrast som funktion', text: 'Text, fokus och handlingar får kontrast som stödjer både läsbarhet och prioritering.' },
        { title: 'Tangentbord utan omvägar', text: 'Tydlig tabbordning, synlig fokusmarkering och förenklade vägar minskar antalet onödiga stopp.' },
        { title: 'Lägre kognitiv belastning', text: 'Alfabetiska listor, flerval och kortare texter gör stora sortiment lättare att hantera.' },
      ]}
      reflectionTitle="Tillgänglighet avgörs i detaljerna."
      reflectionText={[
        'Projektets viktigaste vändpunkt kom när vi bromsade prototyparbetet och återvände till research. När antaganden ersattes av data blev designbesluten både tydligare och lättare att motivera.',
        'Testet med en person som har ADHD visade konkret hur textmängd och klarhet i popupfönster påverkar användbarheten. En missad fokusindikator blev samtidigt en påminnelse om hur ett enda avbrott kan skapa en stor barriär.',
      ]}
      quote="Det räcker inte att designen i övrigt är konsekvent. En enda miss i navigeringen kan skapa stora hinder."
      nextHref="/case/academedia"
      nextLabel="AcadeMedia Academy"
    />
  );
}
