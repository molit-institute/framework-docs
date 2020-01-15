Veröffentlicht werden soll es unter: https://docs.molit.eu/vitu-docs/v2019.3/guide/release-description.html

# Releasebeschreibung VITU 2019.3

<print-header/>

## 1. Softwarename
**VITU** - **VITU** ist eine Abkürzung und steht für **Vi**rtuelles **Tu**morboard

## 2. Lizenzrechte
Open Source unter Apache 2.0 auf GitHub veröffentlicht.  
Organisationsname: MOLIT Institut gGmbH ([GitHub](https://github.com/molit-institute/))

## 3. Beschreibung VITU Allgemein
**VITU** ist eine prozessorientierte Informations- und Kommunikationsplattform zur Unterstützung von Tumorkonferenzen. Entwickelt vom MOLIT Institut ist die Software **VITU** web-basiert und folgt einem zyklischen Entwicklungsplan, mit drei veröffentlichten Releases pro Jahr, die jeweils öffentlich unter einer Open Source Lizenz verfügbar sind.  
**VITU** soll die ortsunabhängige, standardisierte Vernetzung von Expertenteams ermöglichen und diese in der Planung und Durchführung von Tumorboards unterstützen. 

## 4. Funktionsbeschreibung Release
Der Feature Release 2019.3 beinhaltet die funktionellen Komponenten:  
* Login
* Administrationsbereich
* Arbeitsliste
* Planer 
* Videokonferenz
* Protokoll 

**VITU** Release 2019.3 beinhaltet folgende Komponenten mit Features:

### 4.1 Login
* Die Nutzung von **VITU** erfordert einen Login des Nutzers, das Rollenkonzept unterscheidet zwischen den Rollen Administrator, Moderator und Teilnehmer. Diese Rollen können durch einen Benutzer mit Administratorrolle im Administrationsbereich (siehe Punkt 4.2) zugewiesen werden. 
* Login-Daten werden an die Benutzer nicht über **VITU** direkt versendet, sondern werden aus Keycloak versendet.
* Die erstmalige Anmeldung erfolgt über einen Aktivierungslink mit persönlicher Kennwortvergabe.
* Keycloak ermöglicht bei Vergessen des Kennworts einen Self-Service, um eine zeitnahe Einwahl zu **VITU** zu gewährleisten.


### 4.2 Administrationsbereich
* Durch Auswahl des Schraubenschlüsselsymbols gelangt der Nutzer mit Administratorrolle in den Administrationsbereich: 
  *  Arbeitsliste: Anpassungen der Statusliste - Aus einer Liste von vorgegebenen Status kann gewählt werden. Nicht verwendete Status können inaktiviert werden. Die Status können neu sortiert werden.
  *  Benutzer: Die Liste der Nutzer kann eingesehen werden, neue Benutzer können hinzugefügt, bearbeitet und gelöscht werden.
  *  Konferenz: Anpassungen der Videoqualität und des Bildformates sind möglich. Der Videostream kann auf Wunsch zugeschnitten werden. Ein Ad-hoc-Raum kann aktiviert/deaktiviert und ein Name für diesen persistenten Raum vergeben werden. 
  *  Aktivieren der Anzeige des Datums im Konferenztitel ist möglich.

### 4.3 Arbeitsliste mit folgenden Features
* Manuelles Hinzufügen von Fällen in die Arbeitsliste.
* Arbeitsliste kann Informationen zu Erstelldatum, Updatedatum, Fallnummer, Name, Geburtsdatum, Diagnose, Status und Statusbeschreibung enthalten.
* Manuelles Zuweisen und Verändern des Status eines Falls in der Prozesskette von der Diagnostikeinleitung über die Zuweisung zu einer Tumorkonferenz bis zum Speichern des Tumorkonferenz-Empfehlungsprotokolls sind möglich. 
* Für die Übersichtlichkeit werden die Einträge der Arbeitsliste in drei Listen unterteilt: aktuell, abgeschlossen und abgebrochen.
* Der Status „Bereit zur Tumorkonferenz“ führt dazu, dass der Fall automatisch in der Komponente Konferenzplaner angezeigt wird.
* Die Funktion „Einträge filtern“ ermöglicht das Suchen über ein Eingabefeld innerhalb der Arbeitsliste.
* Die Fälle der Arbeitsliste können nach Erstelldatum, Updatedatum, Fallnummer, Name, Geburtsdatum, Diagnose sortiert werden.   


### 4.4 Konferenzplaner (kurz: Planer) mit folgenden Features 
* Manuelles Erstellen von Tumorkonferenzen zu einem bestimmten Termin unter Angabe von Datum, Uhrzeit, Konferenzname.
* Hinzufügen von Fällen zu einer bestimmten Tumorkonferenz durch „Drag & Drop“ aus der Liste terminierbarer Fälle.
* Einsehen und Löschen der angelegten Termine.
* Fallsuche über ein Eingabefeld innerhalb der Liste terminierbarer Fälle.
* Konferenzsuche über ein Eingabefeld innerhalb des Planers.  
* Hinzufügen von im System hinterlegten Teilnehmern zu Tumorkonferenzen. Führt zur Berechtigung des zugefügten Teilnehmers den Videokonferenzraum (siehe Punkt 4.5) zu sehen und betreten zu können.
* Serientermine sind in Release 2019.3 nicht funktional, jedoch können angelegte Konferenzen geklont werden. Zugewiesene Teilnehmer werden hierbei übernommen. Name, Datum und Uhrzeit können beim Klonprozess bearbeitet werden.

### 4.5 Videokonferenz mit folgenden Features
* Konferenzsuche über ein Eingabefeld innerhalb der Komponente Videokonferenz.
* Auswahl des Videokonferenzraumes, in die der Teilnehmer eingeladen wurde. Je nach Rollenzuweisung ist es hier möglich, dass der Teilnehmer direkt in den Vorraum der angelegten Tumorkonferenz geleitet wird. Es werden nur Termine angezeigt zu denen man zugewiesen wurde (siehe Punkt 4.4).
* Zugang zu einem persistenten Raum möglich, hier können absichtlich keine Fälle hinzugefügt werden.
* Nach Auswahl der Videokonferenz findet eine Weiterleitung statt, um der Videokonferenz beizutreten muss aktiv der Eintritt bestätigt werden (Vorraum).
* Die Videokonferenz an sich beinhaltet eine Kachel mit eigenem Bild und weitere Kacheln, sobald sich weitere Teilnehmer einloggen.
* In unterschiedlichen Registerkarten (Reitern) können Teilnehmerliste, Chat, Fallliste und Einstellungen ausgewählt werden ohne die laufende Videokonferenz zu unterbrechen.
*  Die Teilnehmerliste listet alle eingeloggten Teilnehmer auf.
*  Die Fallliste listet alle zugeordneten Fälle auf.
*  Die Chatfunktion erlaubt das Absenden einer Nachricht an alle Teilnehmer der Videokonferenz. Der Chat ist nicht persistent.
*  Unter Einstellungen kann ein Nutzer mit entsprechender Rollenzuweisung / Berechtigung seinen Bildschirm mit allen Teilnehmern teilen. Bei Nutzung dieser Funktion verschiebt sich die Ansicht der Videokonferenz: Die Teilnehmer werden kleiner am Rand dargestellt, der geteilte Bildschirm wird vergrößert für alle dargestellt.  
* Das Videobild (auch ein geteilter Bildschirm) kann auf Vollbild gestellt werden. Beenden (über ESC) des Vollbildmodus ist möglich ohne die laufende Videokonferenz zu unterbrechen.
* Die eigene Bild-/und Tonübertragung kann auf Wunsch unterbrochen werden ohne die laufende Videokonferenz zu unterbrechen.
* Durch Anzeige des Verbindungssymbols kann die Verbindungsqualität jedes einzelnen Teilnehmers wahrgenommen werden, schlechte Verbindungsqualität wird in rot dargestellt.
* Verlassen über den Button "Videokonferenz verlassen" ist möglich.

### 4.6 Protokoll mit folgenden Features
* Die Komponente Protokoll befindet sich im Aufbau und wird mit Release 2020.1 für den Usecase Molekulares Tumorboard auf Wunsch zur Verfügung gestellt.

## 5. Was bietet MOLIT?
  *  Kostenloser Support bei Meldung von Bugs (Bugreport & Bugfixes).
  *  Projektbezogene Kooperationen für die gemeinsame Weiterentwicklung von Komponeneten des MOLIT Frameworks.
  *  Unterstützung durch IT-Dienstleistungen [zu den Details](https://molit.eu/projekte/dienstleistungen/). 
  *  Schulungen im Umgang mit Komponenten des MOLIT-Frameworks

## 6. Was muss selbst erbracht werden?
*  Download des gewünschten **VITU** Releases über [GitHub](https://github.com/molit-institute/). 
*  Die technischen Voraussetzungen für den gewünschten Release müssen für eine Nutzung von **VITU** selbst realisiert werden. Diese sind unter [Technische Voraussetzungen VITU 2019.3](https://github.com/molit-institute/vitu-docs/blob/master/docs/v2019.3/guide/requirements.md) einzusehen.


<pdf-download />
