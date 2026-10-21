import type { Metadata } from 'next';
import EditorialCase from '../EditorialCase';

export const metadata: Metadata = {
  title: 'Kommunal Måendestöd',
  description:
    'Ett UX/UI-case om ett lugnare och mer tillgängligt digitalt måendestöd för Kommunals medlemmar.',
  openGraph: {
    title: 'Kommunal Måendestöd',
    description: 'UI-design · Kognitiv ergonomi · Prototyp',
    images: [{ url: '/images/kommunal-overview.png', alt: 'Kommunal Måendestöd före och efter redesign.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kommunal Måendestöd',
    description: 'UI-design · Kognitiv ergonomi · Prototyp',
    images: ['/images/kommunal-overview.png'],
  },
};

export default function KommunalCase() {
  return (
    <EditorialCase
      period="2025 Q2"
      readingTime="4 min"
      eyebrow="Case study · UI design & prototyping"
      title="Kommunal Måendestöd"
      intro="En vidareutveckling av ett digitalt måendestöd för Kommunals medlemmar med fokus på lägre kognitiv belastning, tydligare självskattning och mer begripliga resultat."
      meta={[
        { label: 'Min roll', value: 'UX/UI-designer · prototypansvar' },
        { label: 'Team', value: '2 Experience Designers' },
        { label: 'Period', value: '2025 Q2' },
        { label: 'Verktyg', value: 'Figma & FigJam' },
      ]}
      hero={{
        src: '/images/kommunal-overview.png',
        alt: 'Bilder före och efter av Kommunals digitala måendestöd.',
        caption: 'Den omarbetade tjänsten förankras i Kommunals inloggade miljö och ger självskattningen en tydligare plats i användarresan.',
      }}
      challengeTitle="Stöd som var svårt att hitta och tolka."
      challengeText={[
        'Funktionen Mitt mående låg dold i en undermeny och mötte användaren med en svag visuell hierarki. För en redan stressad målgrupp blev vägen till stöd mer krävande än den behövde vara.',
        'Självskattningen gav liten återkoppling om progression, och resultatöversiktens linjediagram var svårt att läsa. Utmaningen var att minska brus utan att förenkla bort viktig information.',
      ]}
      designQuestion={[
        'Hur kan ett känsligt självskattningsflöde',
        'bli lättare att hitta, förstå och fullfölja?',
      ]}
      problemText="Binära svar, symboler utan förklaring och ett svårtolkat linjediagram gjorde tjänsten svår att skanna och gav användaren begränsad kontroll över flödet."
      solutionTitle="Ett lugnare och mer vägledande flöde"
      solutionText="En stegvis självskattning med tydlig status, igenkännbara kategorier och en resultatvy som översätter komplex data till direkt visuell återkoppling."
      contributionTitle={[
        'Jag formgav ett tydligare',
        'självskattningsflöde.',
      ]}
      contributionIntro="Jag kvalitetssäkrade användarresan och tog ett särskilt ansvar för självskattningsformuläret, från visuell struktur till interaktionsdetaljer."
      contributionItems={[
        'Formgav självskattningen med en skala från 1 till 5 och tre tydliga interaktionslägen.',
        'Införde stepper och vertikal progressionslinje för synlig systemstatus.',
        'Skapade större träffytor, konsekvent pilnavigation och hovringslägen.',
        'Gjorde om resultatvyn från linjediagram till staplar med en grön mållinje.',
      ]}
      contributionImage={{
        src: '/images/kommunal-self-assessment.png',
        alt: 'Jämförelse mellan tidigare och ny självskattning för Kommunal Måendestöd.',
        caption: 'Självskattningen före och efter, från binära val till ett vägledande flöde med tydlig progression.',
      }}
      processTitle="Från testinsikter till detaljerad prototyp."
      processIntro="Arbetet byggde vidare på tidigare användartester och kombinerade analys, visuella iterationer och ett förankrat komponentbibliotek."
      processSteps={[
        {
          number: '01',
          title: 'Insikter & analys',
          text: 'Vi återvände till tidigare testresultat och ringade in tre huvudproblem: funktionen var dold, självskattningen saknade vägledning och resultatet krävde för mycket tolkning.',
        },
        {
          number: '02',
          title: 'Formulär & interaktion',
          text: 'Vi itererade ett lugnare frågeflöde med mer luft, stegindikator, kategoribilder och en skala som gav mer nyanserad återkoppling än ja eller nej.',
        },
        {
          number: '03',
          title: 'Resultatöversikt',
          text: 'Linjen byttes mot staplar, kategorierna fick en konsekvent vertikal struktur och en mållinje lades till för att ge omedelbar feedback.',
        },
      ]}
      galleryTitle="Ett sammanhållet stöd för reflektion."
      galleryIntro="Lösningen bär Kommunals uttryck men prioriterar lugn, igenkänning och tydliga nästa steg genom hela tjänsten."
      gallery={[
        {
          src: '/images/kommunal-overview.png',
          alt: 'Kommunals måendestöd i den nya inloggade miljön.',
          caption: 'Måendestödet integrerat i Mina sidor med tydliga ingångar och konsekvent hierarki.',
        },
        {
          src: '/images/kommunal-mobile.png',
          alt: 'Mobil presentation av Kommunal Måendestöd.',
          caption: 'Samma kategorier och interaktionsmönster följer med till mindre skärmar.',
        },
      ]}
      principlesTitle="Tre beslut som minskar belastningen."
      principles={[
        { title: 'Luft skapar fokus', text: 'Luft mellan elementen dämpar visuellt brus och låter en stressad användare fokusera på en fråga i taget.' },
        { title: 'Igenkänning framför minne', text: 'Samma färger och ikoner används i formulär och resultat för att skapa en tydlig röd tråd.' },
        { title: 'Synlig systemstatus', text: 'Stepper, progression och direkt återkoppling ger kontroll över både nuvarande och nästa steg.' },
      ]}
      reflectionTitle="Systematik förstärker omsorgen i designen."
      reflectionText={[
        'Arbetet visade hur små beslut kring avstånd, komponenter och återkoppling kan förändra känslan i ett känsligt flöde. Den stora vinsten var inte fler funktioner, utan en lugnare relation mellan dem.',
        'Nästa gång skulle jag definiera typografi, avstånd och autolayout tidigare. Det hade minskat manuellt merarbete och gjort iterationerna snabbare att kvalitetssäkra.',
      ]}
      quote="Det bidrag som jag är mest stolt över är utformningen av självskattningsformuläret."
      nextHref="/case/duro"
      nextLabel="Duro Sweden: tillgänglig webbhandel"
    />
  );
}
