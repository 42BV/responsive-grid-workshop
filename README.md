##Requirements

- npm
- Node
- Bower
- Grunt

##Installation

Na het klonen van het project, voer de volgende lijnen in je terminal uit:
```$ npm install ``` (sudo kan nodig zijn)

Nadat alles is geinstalleerd voer het volgende uit:
``` $ bower install ``` & ```$ grunt serve```

http://localhost:9000 will start automaticly in your browser.



##Blok 2

Nu de schetsen zijn goedgekeurd door de opdrachtgevers is het tijd om te beginnen aan het omzetten van de website.

Om een eerste stap te zetten richting responsive design ga je gebruik maken van een responsive grid systeem.
Probeer nog niet te veel na te denken over positionering en het wel of niet laten zien van onderdelen. In deze fase is het belangrijk om de basis van het grid goed te implementeren.

De opdracht luidt dus: Implementeer het grid systeem van Bootstrap in de huidige website.

Aan de html structuur hoeft niets aangepast te worden, enkel de classes moeten worden toegevoegd. Voer de volgende opdrachten uit in index.html & wines.html

*een container wordt altijd direct gevolgd door een row en een row door 1 of meerdere kolommen.
Content wordt alleen in kolommen geplaatst.*

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

[voorbeeld](http://plnkr.co/edit/BG1owEQajGeTnbtBd1ji?p=preview)
###Opdracht 6: 
Maak tables responsive met behulp van de `table-responsive` class. Vergeet niet de class om de table te zetten en niet op de table

[voorbeeld](http://plnkr.co/edit/ztsWzOKSF4GI6jYukcTw?p=preview)
