# Releasebeschreibung VITU 2019.1

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
Der Feature Release 2019.1 beinhaltet die funktionellen Komponenten:  
* Arbeitsliste
* Planer 
* Videokonferenz  

Die Komponente Protokoll ist in **VITU** 2019.1 noch nicht funktionell.  


**VITU** Release 2019.1 beinhaltet folgende Komponenten mit Features:

### 4.1 Arbeitsliste mit folgenden Features
* Manuelles Hinzufügen von Personen in die Arbeitsliste.
* Arbeitsliste kann Informationen zu Erstelldatum, Fallnummer, Name, Geburtsdatum, Diagnose, Status und Statusbeschreibung enthalten.
* Manuelles Zuweisen und Verändern des Status einer Person in der Prozesskette von der Diagnostikeinleitung über die Zuweisung zu einer Tumorkonferenz bis zum Abschluss nach Finalisierung des Tumorkonferenz-Protokolls.
* Für die Übersichtlichkeit werden die Einträge der Arbeitsliste in drei Registerkarte (Reiter) für aktuelle, abgeschlossene und abgebrochene Fälle angezeigt.
* Der Status „Bereit zur Tumorkonferenz“ führt dazu, dass der Fall automatisch in der Komponente Konferenzplaner angezeigt wird.
* Die Funktion „Einträge filtern“ ermöglicht das Suchen an Hand selbst bestimmbarerer Kriterien über ein Eingabefeld innerhalb der Arbeitsliste.  

### 4.2 Konferenzplaner mit folgenden Features
*  Manuelles Erstellen von Tumorkonferenzen zu einem bestimmten Termin unter Angabe von Datum, Uhrzeit, Konferenzname und optionaler Kurzbeschreibung.
*  Hinzufügen von Fällen zu einer bestimmten Tumorkonferenz durch „Drag & Drop“ aus der Liste terminierbarer Fälle.
*  Einsehen und Bearbeiten der angelegten Termine.
*  Fallsuche anhand selbst bestimmbarer Kriterien über ein Eingabefeld innerhalb der Liste terminierbarer Fälle.
*  Konferenzsuche anhand selbst bestimmbarerer Kriterien über ein Eingabefeld innerhalb des Planers.  

### 4.3 Videokonferenz mit folgenden Features
* Konferenzsuche anhand selbst bestimmbarerer Kriterien über ein Eingabefeld innerhalb der Komponente Videokonferenz.
* Auswahl des Videokonferenzraumes, in die der Teilnehmer eingeladen wurde. Je nach Rollenzuweisung ist es hier möglich, dass der Teilnehmer direkt in die angelegte Tumorkonferenz geleitet wird und weitere angesetzte Termine gar nicht einsehen kann.
* Die Videokonferenz an sich beinhaltet eine Kachel mit eigenem Bild und weitere Kacheln, sobald sich weitere Teilnehmer einloggen.
* In unterschiedlichen Registerkarten (Reitern) können Teilnehmerliste, Chat, Fallliste und Einstellungen ausgewählt werden ohne die laufende Videokonferenz zu unterbrechen.
*  Die Teilnehmerliste listet alle eingeloggten Teilnehmer auf.
*  Die Fallliste listet alle zugeordneten Fälle auf.
*  Die Chatfunktion erlaubt das Absenden einer Nachricht an alle Teilnehmer der Videokonferenz. Der Chat ist nicht persistent.
*  Unter Einstellungen kann ein Teilnehmer mit entsprechender Rollenzuweisung / Berechtigung seinen Bildschirm mit allen Teilnehmern teilen. Bei Nutzung dieser Funktion verschiebt sich die Ansicht der Videokonferenz: Die Teilnehmer werden kleiner am Rand dargestellt, der geteilte Bildschirm wird vergrößert für alle dargestellt.  

### 4.4 Login
* Die Nutzung von **VITU** erfordert einen Login des Nutzers, Rollenkonzepte sind vorgesehen. Angelegte Rollen sollen individuell vom Nutzer (Adminrolle) zugewiesen werden können.
* Login-Daten werden an die Teilnehmer nicht über **VITU** direkt versendet, sondern müssen in Release 2019.1 separat kommuniziert werden.  

## 5. Was bietet MOLIT?
* Download der veröffentlichten **VITU** Releases über [GitHub](https://github.com/molit-institute/) 

* Dienstleistungen nach Preisliste:
  *  Implementierungsberatung
  *  Initiales Deployment von **VITU** und Durchführung von Updates
  *  Kostenloser Support bei Meldung von Bugs (Bugreport & Bugfixes)
  *  Support bei Kundenspezifischen Anfragen
  *  Support via Fernwartung
  *  Schulungen und Workshops nach gesonderter Vereinbarung
  *  Individuelle Programmierung von Softwaremodulen nach gesonderter Vereinbarung

## 6. Was muss selbst erbracht werden?
*  Die technischen Voraussetzungen für den Release müssen für eine Nutzung von **VITU** selbst realisiert werden. Diese sind unter [Technische Voraussetzungen](/vitu-docs/guide/requirements) einzusehen.

<pdf-download />
