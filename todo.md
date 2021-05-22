# steps
0. setup

1. zoek knop maken -> die data ophaalt over Belgie

- [ ] HTML
    - [ ] knopje maken
    - [ ] geef hem een id
- [ ] interactie programeren
    - [ ] document.getelementbijID
    - [ ] .addEventlistener
        - [ ] event handle async functie maken
    - [ ] Request maken naar de api
        - [ ] axios installeren en importeren
        - [ ] axios.get(url)
        - [ ] await ervoor zetten, kan alleen in async functie (anders krijg je een promise)
        - [ ] we hebben de data (consolelog)

7. Voeg een plaatje toe aan de pagina (de flag van het land)

- [x] zoek de url van het plaatje (uit de response van de api)
- [x] HTML
- [x] div maken (met id)
- [x] div selecteren (getElement)
- [x] createElement -> img
- [ ] url toevoegen aan het plaatje `img.src = url`, `img.setAttribute('src', url)`
- [ ] appendChild -> aan het divje

8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

- [x] HTML
- [x] Maak een inputveld
- [x] id geven aan het inputveld
- [ ] Interacties programmeren
- [ ] Input veld selecteren
- [ ] Event listener toevoegen aan her inputveld (keyup)
- [ ] In het event kijken naar de "code" (event.code)
- [ ] Als event.code "Enter" is dan -> data ophalen uit de api

9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.

- [ ] selecteer het input veld (const inputfield = document...)
- [ ] const query = inputfield.value
