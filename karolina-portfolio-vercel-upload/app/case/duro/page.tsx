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
      readingTime="3 min"
      eyebrow="UX/UI-case · Tillgänglighet"
      title="Duro Sweden: tillgänglig webbhandel"
      intro="Under tre veckor arbetade vi med att göra Duros webbhandel mer tillgänglig, förenkla filtreringen och göra vägen till rätt tapet lättare att förstå."
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
        'Den befintliga webbhandeln hade låg kontrast, texttunga ytor och ett filter som gjorde flera samtidiga val svåra. Granskningen visade även brister i tangentbordsnavigation, fokusmarkering och återkoppling.',
      ]}
      designQuestion={[
        'Hur kan vi göra ett stort tapetsortiment',
        'lättare att filtrera utan att skapa',
        'nya tillgänglighetsbarriärer?',
      ]}
      problemText="En statisk sidomeny med låg kontrast, begränsade flerval och otydliga tillstånd gjorde det svårt att avgränsa ett stort sortiment och förstå vad som var valt."
      solutionTitle="En fokuserad och tillgänglig filtermeny"
      solutionText="En popupmeny med tydliga kategorier, kryssrutor, färgsymboler, alfabetisk sortering och handlingar som fungerar för både mus, tangentbord och mindre skärmar."
      contributionTitle={[
        'Mitt fokus var att göra insikterna',
        'användbara i designen.',
      ]}
      contributionIntro="Jag drev designarbetet tillsammans med en teammedlem. Vi byggde och testade prototyperna i Figma och justerade dem efter det vi såg i testerna."
      contributionItems={[
        'Byggde komponenter, tillstånd och prototypflöden i Figma.',
        'Sorterade färger och mönster alfabetiskt för att minska den kognitiva belastningen.',
        'Genomförde användartester som både observatör och testledare.',
        'Använde resultaten från granskningen och testerna i de fortsatta designbesluten.',
      ]}
      contributionImage={{
        src: '/images/duro-filter-iterations.png',
        alt: 'Iterationer av Duros responsiva filtermeny.',
        caption: 'Menyn följer användaren, sparar val och behåller en tydlig väg även för tangentbordsnavigation.',
      }}
      processTitle="Från granskning till tillgänglig design."
      processIntro="Vi lät tillgänglighetsgranskningen och användartesterna styra hur prototypen utvecklades."
      processSteps={[
        {
          number: '01',
          title: 'Analys & tillgänglighetsgranskning',
          text: 'Granskningen i Silktide och tester med fyra personer visade problem med låg kontrast, begränsade flerval och otydlig återkoppling.',
        },
        {
          number: '02',
          title: 'Koncept & snabbtester',
          text: 'Vi snabbtestade hur kryssrutor, färger och kategorier tolkades och valde den tydligaste riktningen.',
        },
        {
          number: '03',
          title: 'Tillgänglig iteration',
          text: 'Efter testerna gjorde vi hela fält klickbara, lade till en rullningslist och en tydlig funktion för att rensa alla val. Vi förbättrade även fokusmarkering och tabbordning.',
        },
      ]}
      galleryTitle="Tydligare väg från sortiment till beslut."
      galleryIntro="Resultatet skapar en lugnare produktöversikt och tydligare informationsarkitektur."
      gallery={[
        {
          src: '/images/duro-faq.png',
          alt: 'Redesignad sida med frågor och svar för Duro Sweden.',
          caption: 'Frågor och svar får mer luft, tydligare kontraster och en skannbar kategoristruktur.',
        },
      ]}
      principlesTitle="Tillgänglighet som en del av helheten."
      principles={[
        { title: 'Kontrast som funktion', text: 'Text, fokus och handlingar får kontrast som stödjer både läsbarhet och prioritering.' },
        { title: 'Tangentbord utan omvägar', text: 'Synlig fokusmarkering och logisk tabbordning minskar onödiga stopp.' },
        { title: 'Lägre kognitiv belastning', text: 'Alfabetiska listor, flerval och kortare texter gör sortimentet lättare att hantera.' },
      ]}
      reflectionTitle="Tillgänglighet avgörs i detaljerna."
      reflectionText={[
        'Projektets vändpunkt kom när vi stannade upp och gick tillbaka till underlaget. När vi slutade utgå från antaganden och i stället tittade på det vi faktiskt hade sett blev designbesluten både tydligare och lättare att motivera.',
        'Ett av användartesterna genomfördes med en person med ADHD. Det visade tydligt hur textmängd och fokusmarkering påverkar användbarheten. En missad fokusindikator blev samtidigt en påminnelse om hur ett enda avbrott kan skapa en stor barriär.',
      ]}
      quote="Det räcker inte att designen i övrigt är konsekvent. En enda miss i navigeringen kan skapa stora hinder för en användare."
      nextHref="/case/academedia"
      nextLabel="AcadeMedia Academy"
    />
  );
}
