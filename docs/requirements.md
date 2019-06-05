# Technische Voraussetzungen

Die im Folgenden angegebenen Werte sind Richtwerte, die sich je nach Anwendungsfall noch ändern können.
VITU Release 2019.1 benötigt zur Teilnahme an der Videokonferenz neben einem aktuellen FireFox oder Chrome Browser (Unterstützte Browser: Chrome 58+ & FireFox 65+), eine Webcam und Mikrofon. Die eingesetzte Software VITU ist komplett Browser basiert. Unsere Lösung basiert technisch auf WebRTC, jegliche Kommunikation erfolgt TLS verschlüsselt. Falls vorhanden, sollten die ausgehenden Firewallregeln folgende URLs auf port 443 TCP erlauben. 

Spezielle Hardware-Anforderungen zur Installation der VITU Instanz aller vier Komponenten (Arbeitsliste, Konferenzplaner, Videokonferenz und Protokoll) für Release 2019.1 sind aus technischer Sicht für den Administrator: zwei/drei Server bzw. zwei/drei VMs mit folgenden Anforderungen, je nach Konfiguration.

## Empfohlene Systemvoraussetzungen

### VM1: VITU

- Funktion: Stellt die VITU Applikation bereit, Reverseproxy für Data Server  
- Betriebssystem: Ubuntu Server 18.04 LTS  
- Arbeitsspeicher: 4GB RAM  
- Prozessor: Quad Core @2Ghz  
- Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein  
- Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll  
- DNS Eintrag + SSL Zertifikat

### VM2: Videoserver

- Betriebssystem: Ubuntu Server 18.04 LTS  
- Arbeitsspeicher: 8GB RAM  
- Prozessor: Quad Core @2Ghz  
- Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein  
- Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)  
- Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll  
- DNS Eintrag + SSL Zertifikat

### VM3: Data

- Betriebssystem: Ubuntu Server 18.04 LTS  
- Arbeitsspeicher: 8GB RAM  
- Prozessor: Quad Core @2Ghz  
- Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)  
- DNS Eintrag + SSL Zertifikat (von interner CA, da nicht von außen erreichbar)
