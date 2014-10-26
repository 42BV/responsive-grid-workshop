##Requirements

- npm
- Node
- Bower
- Grunt


##Installation

After cloning the project, execute the following command in your terminal:
```
$ npm install
```

After everything is installed, run the following from the app folder of the project:
```
$ grunt serve
```

http://localhost:9000 will start automaticly in your browser.


##Blok 1:

De Winery is een bedrijf dat wijnen indexeert en deze beoordeeld op verschillende eigenschappen. Op dit moment heeft de winery een website die gemaakt is voor desktops. Graag zouden zij een website willen hebben welke ook geschikt is mobile devices.
Ze willen alles graag vanuit 1 plek beheren en hebben een niet al te hoog budget. Een ideale oplossing hiervoor is natuurlijk responsive design.
Voor de website daadwerkelijk kan worden aangepast is het van belang dat er eerst een prototype opgeleverd wordt. Aan jou de opdracht om je creatieve brein aan het werk te zetten en de huidige website te gebruiken om een versie te maken welke geschikt is voor zowel tablets als smartphones.


Probeer tijdens deze opdracht niet te letten op je schetskwaliteiten want deze zijn minder belangrijk. Wat belangrijk is dat je na denkt over hoe de website de juiste indeling krijgt.

##Blok 2

Nu de schetsen zijn goedgekeurd door de opdrachtgevers is het tijd om te beginnen aan het omzetten van de website.

Om een eerste stap te zetten richting responsive design ga je gebruik maken van een responsive grid systeem.
Probeer nog niet te veel na te denken over positionering en het wel of niet laten zien van onderdelen. In deze fase is het belangrijk om de basis van het grid goed te implementeren.

De opdracht luidt dus: Implementeer het grid systeem van Bootstrap in de huidige website.

###Opdracht 1:
Gebruik een container of meerdere containers
```<element class="container"></element>```
Voor hulp bij de eerste drie opdrachten, ga naar de volgende link:

 [voorbeeld](http://plnkr.co/edit/5m9XEN7AbDBQZKpDP6wA?p=preview)

###Opdracht 2:
Gebruik rows waar nodig
```
<element class="container">
    <div class="row">...</div>
</element>
```
###Opdracht 3:
Gebruik columns waar nodig

```
<element class="container">
    <div class="row">
    <div class="col-*-*"></div>
</div>
</element>
```

###Opdracht 4:
Maak afbeeldingen responsive doormiddel van de ```img-responsive``` class.

[voorbeeld](http://plnkr.co/edit/furoLAe7Y8vVfrTDJ23Q?p=preview)

###Opdracht 5: 
Nest waar nodig rows en columns

[voorbeeld](http://plnkr.co/edit/BG1owEQajGeTnbtBd1ji?p=preview)
```
<element class="container">
    <div class="row">
        <div class="col-*-*">
            <div class="row">
                <div class="col-*-*">...</div>
            </div>
        </div>
    </div>
</element>
```
[voorbeeld](http://plnkr.co/edit/BG1owEQajGeTnbtBd1ji)
###Opdracht 6: 
Maak tables responsive met behulp van de `table-responsive` class. Vergeet niet de class om de table te zetten en niet op de table

[voorbeeld](http://plnkr.co/edit/ztsWzOKSF4GI6jYukcTw?p=preview)
 
##Blok 3
Goed, we zijn zover dat het grid systeem is ingebouwd in de website. Zoals inmiddels bekend zal zijn, is de website nog niet geheel responsive. Er missen nog een aantal sleutelelementen die het geheel compleet zullen maken.
Denk hierbij aan afbeeldingen die groter zijn dan nodig op een smartphone of bepaalde onderdelen die ergens anders moeten staan.

###Opdracht 1
Stel de viewport `meta` tag in zodat de browser weet hoe de pagina geladen moet worden.
Zie: [voorbeeld](http://plnkr.co/edit/FbuZaKj9Fy91HPov5LZc?p=preview)

###Opdracht 2
Maak afbeeldingen responsive doormiddel van het `picture` element
[voorbeeld](http://plnkr.co/edit/yTiuPyqN0B4yrTGUvUNT?p=preview)

###Opdracht 3
Verplaats kolommen met behulp van de `col-*-pull-*` en `col-*-push-*` classes.
[voorbeeld](http://plnkr.co/edit/Qv867Jk7bacjWfdUppX8?p=preview)