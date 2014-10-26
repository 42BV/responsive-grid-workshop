## Requirements

- npm
- Node
- Bower
- Grunt


## Installation

After cloning the project, execute the following command in your terminal:
```
$ npm install
```

After everything is installed, run the following from the app folder of the project:
```
$ grunt serve
```

http://localhost:9000 will start automaticly in your browser.


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
