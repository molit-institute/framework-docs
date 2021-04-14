# Technische Voraussetzungen

<print-header/>

Die im Folgenden angegebenen Werte sind Richtwerte, die sich je nach Anwendungsfall noch ändern können.

**VITU** benötigt zur Teilnahme an der Videokonferenz neben einem aktuellen Chrome, Firefox oder Edge Chromium Browser (Unterstützte Browserversionen: Chrome 75+ / Firefox 68+ / Microsoft Edge Chromium Version 81+), eine Webcam und Mikrofon. 


Die eingesetzte Software VITU ist komplett browserbasiert. Die Lösung basiert technisch auf WebRTC, jegliche Kommunikation erfolgt TLS verschlüsselt. Falls vorhanden, sollten die ausgehenden Firewallregeln Zugriff auf Port 443 TCP erlauben.

Spezielle Hardware-Anforderungen zur Installation der VITU Instanz aller Komponenten sind aus technischer Sicht für den Administrator: zwei bis drei Server bzw. zwei bis drei VMs mit folgenden Anforderungen, je nach Konfiguration.

## Empfohlene Systemvoraussetzungen

### VM1: VITU

- Funktion: Stellt die VITU Applikation bereit, Reverseproxy für Data Server
- Betriebssystem: Ubuntu Server 20.04 LTS
- Arbeitsspeicher: 4GB RAM
- Prozessor: Quad Core @2Ghz
- Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein
- Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll
- DNS Eintrag + SSL Zertifikat

### VM2: Videoserver

- Betriebssystem: Ubuntu Server 20.04 LTS
- Arbeitsspeicher: 8GB RAM
- Prozessor: Quad Core @2Ghz
- Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein
- Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)
- Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll
- DNS Eintrag + SSL Zertifikat

### VM3: Data

- Betriebssystem: Ubuntu Server 20.04 LTS
- Arbeitsspeicher: 8GB RAM
- Prozessor: Quad Core @2Ghz
- Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)
- DNS Eintrag + SSL Zertifikat (von interner CA, da nicht von außen erreichbar)

<pdf-download />
