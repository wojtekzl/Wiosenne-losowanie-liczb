# README

## Losowanie liczb – Wiosna

### Opis:
Prosta aplikacja frontendowa do losowania 6 unikalnych liczb z zakresu 1–49 w wiosennym motywie.
Użytkownik może dodawać liczby pojedynczo, obserwować licznik pozostałych i resetować losowanie.

---------------------------------------------------------------------------------------------------

### Jak uruchomić:
1. Pobierz projekt i wszystkie pliki (index.html, style.css, app.js, background.jpg)
2. Otwórz index.html w przeglądarce
3. Klikaj "Dodaj liczbę" aż wylosujesz 6 liczb
4. Kliknij "Wyczyść", aby rozpocząć od nowa

---------------------------------------------------------------------------------------------------

### Wymagania środowiskowe:
- Przeglądarka z obsługą HTML5, CSS, JavaScript
- Brak backendu lub serwera - działa lokalnie

---------------------------------------------------------------------------------------------------

### Struktura projektu:
index.html        Struktura strony
style.css         Style, kolory, responsywność
app.js            Logika losowania i resetowania
background.jpg    Tło głównej sekcji

---------------------------------------------------------------------------------------------------

### Testowanie:
1. Czy liczby są unikalne
2. Czy licznik zmniejsza się poprawnie
3. Czy po 6 liczbach przycisk "Dodaj liczbę" jest zablokowany
4. Czy przycisk "Wyczyść" resetuje wszystko
5. Działanie na telefonach – liczby w jednej linii i okrągłe

---------------------------------------------------------------------------------------------------

### Autor:
- Wojciech Złonkiewicz
- Wojciech Strzezik

### Wersja:
v1.0 – funkcjonalna wersja frontendowa, spełniająca wszystkie wytyczne projektu         


---------------------------------------------------------------------------------------------------


# SPECYFIKACJA TECHNICZNA

### Cel:
Aplikacja frontendowa umożliwia losowanie 6 unikalnych liczb z zakresu 1–49.
Użytkownik może dodawać liczby pojedynczo i resetować losowanie.
Projekt ma motyw wiosenny i jest responsywny.
Architektura:
- Frontend: HTML + CSS + JavaScript
- Backend: brak (aplikacja działa lokalnie)  

---------------------------------------------------------------------------------------------------

### Struktura projektu:
Złonkiewicz Strzezik/
|
|--index.html # główny plik HTML
|--style.css # style, responsywność, animacje
|--app.js # logika losowania i obsługa przycisków
|--background.jpg # obraz tła głównej sekcji  

---------------------------------------------------------------------------------------------------

### Moduły i opis:
1. Logika losowania (app.js)
- Funkcja getRandomNumber() generuje losową liczbę 1–49, sprawdza powtórzenia
- Funkcja drawNumber() dodaje liczbę do listy, aktualizuje licznik i blokuje przycisk po 6 liczbach
- Funkcja reset() czyści wszystkie liczby, resetuje licznik i przywraca aktywność przycisku
2. Zarządzanie stanem
- drawnNumbers[] przechowuje wylosowane liczby
- MAX_NUMBERS = 6
- MIN = 1, MAX = 49
3. Obsługa DOM
- <span id="remaining"> – licznik pozostałych liczb
- <div id="numbers"> – kafelki z liczbami
- <button id="drawBtn"> i <button id="resetBtn"> – przyciski
- <p id="message"> – komunikat po wylosowaniu kompletnego zestawu  

---------------------------------------------------------------------------------------------------

### Diagram przepływu logiki:
[START]
 |
 V
[Kliknięcie "Dodaj liczbę"]
 |
 V
[Sprawdzenie liczby w drawnNumbers]
 |
 V
[Dodanie liczby i aktualizacja licznika]
 |
 V
[drawnNumbers.length == 6 ? → TAK → blokada i komunikat "Wylosowano komplet liczb"]
 |
 V
[Kliknięcie "Wyczyść" → reset stanu]

---------------------------------------------------------------------------------------------------

### Zależności:
- Brak zewnętrznych bibliotek
- Działa w nowoczesnej przeglądarce (Chrome, Edge, Safari, Firefox)

---------------------------------------------------------------------------------------------------

### Responsywność:
- Flexbox dla liczb i przycisków
- Media queries:
 * max-width: 600px
 - nagłówek h1: font-size 28px
 - overlay: padding 25px
 - licznik: font-size 18px
 - liczby: 45x45px, font-size 16px
 - przyciski: font-size 14px, min-width 120px, height 40px, padding 10px 16px
 - komunikat: font-size 15px
 * max-width: 400px
 - liczby: 38x38px, font-size 14px
 * max-width: 360px
 - liczby: 36x36px, font-size 14px
 - gap między liczbami: 8px
- Kulki zachowują proporcje aspect-ratio:1/1
