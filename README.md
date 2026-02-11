# Websiteovermezelf

---
check-out (elke dag) voortgang (einde elke week) bronnenlijst

- Wat heb ik vandaag gedaan?
- Hoeveel tijd heeft me dat gekost?
- Wat heb ik geleerd?
- Wat ga ik morgen doen?


voortgang

Aan het eind van elke week beschrijf je je voortgang in meer detail (met voorbeelden van code, afbeeldingen/filmpjes van je ontwerp...).

---
## Dinsdag 3 februari - Checkout
Op de kick-off dag ben ik bezig geweest met inspiratie ophalen voor mijn website en het idee opzetten en schetsen. Ik wil binnen mijn website een vorm van gamification toepassen als vertaling van mijn affiniteit met gamen, denk aan een soort progressbar en andere game elementen. Qua code ben ik eventjes bezig geweest met de setup van een document en me een beetje ingelezen over css remedy en variabelen/root. Verder veel informatie over de minor te horen gekregen. Morgen ga ik de eerste start maken met het coderen en zoveel mogelijk prototypen en experimenteren met de ideeën die ik nu heb. 

## Woensdag 4 februari - Checkout
Vandaag ben ik bezig geweest met het opzetten van mijn site en het uitwerken van het eerste deel: een levelselect box en een begin gemaakt met het inladen van de API data waarbij ik mijn naam inlaad. Daarbij heb ik "subgrid" geleerd en toegepast, samen met het toepassen van css nesting. Hiermee ben ik na de workshops de rest van de dag mee bezig geweest. Morgen ga ik verder met het coderen.

## Donderdag 5 februari - Checkout 
Vandaag ben ik bezig geweest met de loading animatie als intro scherm en heb ik op de pagina zelf basic styling toegepast (font en eerste kleuren). Hier ben ik na de workshops tot de checkout mee bezig geweest. Ik heb van de workshop theming geleerd hoe je light en dark specifiek kan aanpassen en nesten, bij de workshop responsiveness heb ik nieuwe grid elementen geleerd en hoe je ze toepast. Qua eigen code heb ik geleerd hoe je een soort intro scherm kan maken en hoe je een background image gelijk houdt met de site. Morgen ga ik de laad animatie fixen en verder met de pagina in het algemeen. 

Ontvangen feedback/ideeën:
- Gifje als achtergrond maken
- Voor loading screen kleuren color pallette generator, gradient?

# Voortgang week 1 
Afgelopen week ben ik bezig geweest om de eerste versie van mijn site op te zetten, de inhoud mist nog want ik heb me meer gefocust op de opzet van styling en animaties. Qua stijl wil ik mijn affiniteit met gamen door laten schijnen door een game gerelateerd thema toe te passen op mijn site: neon retro achtig. Tot nu toe heb ik een loading screen, kleuren en typografie met animaties.

Het leren van css animaties is dan ook mijn leerdoel voor deze site. 

Een aantal nieuwe dingen die ik tot nu toe heb geleerd qua code:
- toepassing van verschillende animaties, bekender geworden met keyframes, transform en de notatie van animaties en welke onderdelen er bij komen kijken

```css
  animation-name: disappearScreen;
  animation-duration: 2.5s;
  animation-delay: 2.3s;
  animation-fill-mode: forwards;
  ```
of shorthand: 
```css
animation: disappearScreen 2.5s 2.3s forwards;
```

verschillende keyframes:
```css
@keyframes disappearScreen {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
```

- Subgrid
- Css nesting 

```css
.levelBox ul {
  display: grid;
  /* Hulp van Cyd */
  grid-template-columns: subgrid;
  grid-column: span 2;
  padding: 0;
  list-style-type: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--bodyFontSize);
    font-family: var(--bodyFont);
    text-shadow: var(--textShadow);
    animation: bounce 1.5s linear infinite;
    color: var(--textColor);
  }
  a {
    text-decoration: none;
  }
}
```
- (Workshop) toepassing van verschillende grid elementen
- Manier van een “loadingscreen” nabootsen, hoe de progressbar werkt en hoe je die kan stylen.

```css
aside {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

progress[value]
progress[value]::-webkit-progress-value 
progress[value]::-webkit-progress-bar 
```
Versie 1 site:

https://github.com/user-attachments/assets/7ea27ccd-2698-4fae-b742-d1ace64c40bf

## Maandag 9 februari
Vandaag bezig geweest met light/dark mode, heeft vrijwel de hele dag gekost na workshop, probeerde de nieuwe manier met light-dark maar dat kan niet met de linear-gradients die ik gebruikte dus het moest met de andere manier, prefers color-scheme dark. 
- Todo's: eigen informatie weergeven op site
- Medestudenten informatie weergeven

## Dinsdag 10 februari
Vandaag bezig geweest met de opzet voor de eisen van mijn site, animatie voor de over mij tekst, target game voor de leerdoelen en het weergeven van de favoriete games van mensen uit de minor. Verder nog de workshops grid vs flex en workshop hygiëne gevolgd.

## Woensdag 11 februari - code review
- html lang stond nog op engels
- let op consistente naamgeving
- javascript comments bij functies
- letten op let/const
- scroll snap op site
## Woensdag 11 februari - checkout
