## Zusätzliche Layer-Properties
**Folgende Properties müssen in Layern über dem eigentlichen Musik-Layer sein**
- `volume`: Diese Eigenschaft regelt die Lautstärke. Falls nicht vorhanden ist Lautstärke auf 100%
    - Datentyp: int
    - Wert: Prozentwert, z.B. 50 für 50% Lautstärke
- `lowPassFilter`: Aktiviert den Low-pass Filter. Wenn nicht angegeben ist der Wert auf 20.000 gesetzt 
    - Datentyp: int
    - Wert: Gibt die Frequenz an.
- `game`: Wie `openWebsite` nur für Games. Einziger Unterschied ist, dass der Focus auf das iframe gesetzt wird, damit Tastatur-Steuerung bei den Spielen funktioniert.
    - Datentyp: string
    - Wert: Url (muss mit "https://" starten)
