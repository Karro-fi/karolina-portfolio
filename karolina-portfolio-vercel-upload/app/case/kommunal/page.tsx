import type { Metadata } from 'next';
import EditorialCase from '../EditorialCase';

export const metadata: Metadata = {
  title: 'Kommunal Måendestöd',
  description:
    'Ett fiktivt projekt inom UX/UI om ett lugnare och mer tillgängligt digitalt måendestöd för Kommunals medlemmar.',
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
      readingTime="3 min"
      eyebrow="UX/UI-case · Fiktivt projekt"
      title="Kommunal Måendestöd"
      intro="I det här fiktiva projektet tog vi fram ett förslag på hur ett digitalt måendestöd för Kommunals medlemmar skulle kunna bli lugnare, tydligare och lättare att använda."
      meta={[
        { label: 'Min roll', value: 'UX/UI-designer · prototypansvar' },
        { label: 'Team', value: '2 Experience Designers' },
        { label: 'Period', value: '2025 Q2' },
        { label: 'Verktyg', value: 'Figma & FigJam' },
      ]}
      hero={{
        src: '/images/kommunal-overview.png',
        alt: 'Bilder före och efter av Kommunals digitala måendestöd.',
        caption: 'I vårt förslag får självskattningen en tydligare plats i Kommunals inloggade miljö.',
      }}
      challengeTitle="Stöd som var svårt att hitta och tolka."
      challengeText={[
        'Mitt mående låg dold i en undermeny, självskattningen saknade tydlig progression och resultatets linjediagram krävde mycket tolkning. För en redan stressad målgrupp blev vägen till stöd mer krävande än den behövde vara.',
      ]}
      designQuestion={[
        'Hur kan ett känsligt',
        'självskattningsflöde bli enklare',
        'att hitta, förstå och fullfölja?',
      ]}
      problemText="Binära svar, symboler utan förklaring och ett svårtolkat linjediagram gjorde tjänsten svår att skanna och gav användaren begränsad kontroll över flödet."
      solutionTitle="Ett lugnare och mer vägledande flöde"
      solutionText="En stegvis självskattning med tydlig status, igenkännbara kategorier och en resultatvy som översätter komplex data till direkt visuell återkoppling."
      contributionTitle={[
        'Mitt fokus låg på ett tydligare',
        'självskattningsflöde.',
      ]}
      contributionIntro="I det fiktiva projektet tog jag särskilt ansvar för självskattningsformuläret och arbetade med allt från den visuella strukturen till detaljerna i interaktionen."
      contributionItems={[
        'Formgav självskattningen med en skala från 1 till 5 och tre tydliga interaktionslägen.',
        'Införde stepper, vertikal progressionslinje, större träffytor och konsekvent navigation.',
        'Gjorde om resultatvyn från linjediagram till staplar med en grön mållinje.',
      ]}
      contributionImage={{
        src: '/images/kommunal-self-assessment.png',
        alt: 'Jämförelse mellan tidigare och ny självskattning för Kommunal Måendestöd.',
        caption: 'Självskattningen före och efter, från binära val till ett vägledande flöde med tydlig progression.',
      }}
      processTitle="Från testinsikter till detaljerad prototyp."
      processIntro="Vi utgick från tidigare testresultat när vi utvecklade och justerade prototypen."
      processSteps={[
        {
          number: '01',
          title: 'Insikter & analys',
          text: 'Tidigare tester ringade in tre problem: funktionen var dold, flödet saknade vägledning och resultatet var svårt att tolka.',
        },
        {
          number: '02',
          title: 'Formulär & interaktion',
          text: 'Vi itererade ett lugnare frågeflöde med mer luft, stegindikator, kategoribilder och en svarsskala från 1 till 5.',
        },
        {
          number: '03',
          title: 'Resultatöversikt',
          text: 'Linjen byttes mot staplar, kategorierna fick en konsekvent struktur och en mållinje gav direkt återkoppling.',
        },
      ]}
      galleryTitle="Ett sammanhållet stöd för reflektion."
      galleryIntro="Vi ville att lösningen skulle kännas lugn, vara lätt att känna igen och visa ett tydligt nästa steg."
      gallery={[
        {
          src: '/images/kommunal-mobile.png',
          alt: 'Mobil presentation av Kommunal Måendestöd.',
          caption: 'Samma kategorier och interaktionsmönster följer med till mindre skärmar.',
        },
      ]}
      principlesTitle="Tre beslut som minskar belastningen."
      principles={[
        { title: 'Luft skapar fokus', text: 'Mer luft dämpar visuellt brus och låter användaren fokusera på en fråga i taget.' },
        { title: 'Igenkänning framför minne', text: 'Samma färger och ikoner följer med från formulär till resultat och skapar en röd tråd.' },
        { title: 'Synlig systemstatus', text: 'Stepper, progression och direkt återkoppling gör både nuvarande och nästa steg tydligt.' },
      ]}
      reflectionTitle="Små detaljer förändrade hela känslan."
      reflectionText={[
        'Det blev tydligt för mig hur mycket avstånd, komponenter och återkoppling påverkar känslan i ett så pass känsligt flöde. Det viktigaste var inte att lägga till fler funktioner, utan att få delarna att hänga ihop på ett lugnare sätt.',
        'Om jag gjorde om projektet skulle jag sätta typografi, avstånd och autolayout tidigare. Det hade sparat tid och gjort det enklare att testa nya versioner.',
      ]}
      quote="Det bidrag som jag är mest stolt över är utformningen av självskattningsformuläret."
      nextHref="/case/duro"
      nextLabel="Duro Sweden: tillgänglig webbhandel"
    />
  );
}
