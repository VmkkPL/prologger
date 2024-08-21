# ProLogger

(Only PL)

Za pomocą tego pliku możesz w prosty sposób wygenerować logi do pliku i konsoli.

**Wtyczka wymagana do działania:** `npm i winstone`

## Sposób użycia

```js
logger(type, content, color, logToFle);
```
Wyjaśnienie:
- `type` - Typ wiadomości. Dostępne opcje: warn, warn-deny, deny, success, success-warn, info, log, none (brak prefixu)
- `content` - Treść wiadomości.
- `color` - Kolor wiadomości. **W przypadku stosowania `type` zalecam nie ustawienie koloru (none)**. Dostepne kolory: black, red, green, yellow, blue, magenta, cyan, white, gray, crimson, none
- `logToFile` - Czy wiadomość oprócz wyświetlenia w konsoli ma również logować do pliku tekstowego ustawionego u góry skryptu?

## Przykłady zastosowania:

Przykład #1 
```js
logger("success", "Databases connected and tables created!", "none", true)
```
![image](https://github.com/user-attachments/assets/c5af842b-1eef-48db-8df0-f36ef0888e31)

Przykład #2
```js
logger(null, "            application name", "red", false);
logger(null, "                v0.0.1", "gray", false);
```
![image](https://github.com/user-attachments/assets/782aa534-6f7a-4ea5-94af-bc0a7305b8fa)

Przykład #3
```
logger("info", `Download data!`, "none", true);
logger("log", `Saved this data to logs`, "gray", false);
```
![image](https://github.com/user-attachments/assets/3b48a472-3e12-4717-b568-6df7a2571be8)




