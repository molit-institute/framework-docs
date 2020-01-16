# FAQ

<print-header />

Für die häufigsten Fragen, denen Sie bei der Nutzung unserer Plattform begegnen können, finden Sie im Folgenden eine Übersicht, die Ihnen weiterhilft. Konnten wir Ihre Frage nicht zufriedenstellend beantworten, wenden Sie sich bitte an uns über unser [Ticketsystem](https://ticket.molit.eu/#signup).

::: tip Tipp
Sie können die Suchfunktion in der Navigationsleiste nutzen um nach Schlagwörtern zu suchen.
:::

<br>
<div class="questions">

### Wie installiere ich VITU?

--

### Findet bei VITU ein automatischer Restart der VITU Server nach Linux-Sicherupdates statt und wird dabei ein Script angelegt?

--

### Was muss ich tun, damit von VITU eine Sicherungskopie erstellt wird?

--

### Welchen Browser kann ich nutzen?

Firefox Version [Firefox 65+] und Google Chrome Version [Chrome 58+] und Safari Version [13+].

### Welches Betriebssystem kann ich nutzen?

--

### Ich habe mein Passwort vergessen. Wie kann ich mich anmelden?

VITU nutzt als Benutzerverwaltung Keycloak. Wenn Sie Ihr Passwort vergessen haben klicken Sie bitte auf der Log In Seite auf "Passwort vergessen?" und nutzen den Self-Service.

### Wie viele Teilnehmer können an einer Videokonferenz teilnehmen und VITU läuft dabei flüssig?

Abhängig von den Konferenzeinstellungen (Administrationsbereich). Von MOLIT getestet und für geeignet bewertet sind bis zu acht Teilnehmer bei Video und Tonübertragung. Bei mehr Teilnehmern empfiehlt MOLIT auf die Videoübertragung zu verzichten. 

### Wie deaktiviere ich die Videoübertragung meines Bildes?

Klicken Sie in Ihrer Videokonferenz unter Ihrem übertragenen Bild auf das Videokamerasymbol. Durch erneute Auswahl des Symols aktivieren Sie die Bildübertragung wieder.

###  Wie viele Videokonferenzen können parallel flüssig laufen? 

Abhängig von den Konferenzeinstellungen (Administrationsbereich) und der Kapazität der virtuellen Maschine (VM). Von MOLIT nicht getestet, jedoch sind drei parallele Konferenzen mit je 8 Teilnehmern realistisch.

### Wie weise ich Rollen zu?

Sie können einem Benutzer nur Rollen zuweisen, wenn sie selbst Administrationsrechte besitzen. Dann kommen sie oben in der Leiste rechts über den Schraubenschlüssel in den Administrationsbereich. Dort können sie über 'Benutzer' denjenigen Benutzer auswählen, dem sie eine Rolle zuweisen möchten. Haben sie den Benutzer ausgewählt, sehen sie im dritten Abschnitt, welche Rollen dieser Benutzer besitzt und welche nicht. Hier können sie die Änderungen vornehmen.

### Wie füge ich Teilnehmer zu einer Konferenz bzw. einem Videokonferenzraum hinzu?

Sie können Teilnehmer zu einer Konferenz hinzufügen, indem sie im Reiter 'Planer' eine Konferenz auswählen. Sobald sie darauf klicken, erscheint das Konferenzfenster, in dem sie aus einer Liste alle verfügbaren Teilnehmer auswählen können. Endgültig hinzugefügt werden diese wenn sie auf den Button 'Hinzufügen' klicken. Unter dem Auswahlmenü sehen sie, welche Teilnehmer der Konferenz bisher hinzugefügt wurden.

### Wie füge ich Fälle zu einer Konferenz hinzu?

Sobald sie Fälle in den Status "Bereit zur Tumorkonferenz" gesetzt haben, erscheinen diese im Konferenzplaner. Dort können sie die Fälle per Drag&Drop auf die gewünschte Konferenz ziehen. Der Fall wird dann zu dieser Konferenz hinzugefügt.

### Wie kann ich einen Patienten einem Protokoll zuordnen?

Wenn sie ein neues Protokoll erstellen, können sie mit dem Button 'Patient auswählen' einen im System hinterlegten Patienten dem Protokoll zuordnen.

### Wie bekomme ich einen Patienten in die Arbeitsliste? 

In der Arbeitsliste können sie unter 'Fall hinzufügen' unter dem ersten Punkt "Patient hinzugfügen" einen neuen Patienten anlegen. Alternativ kann über einen Fremdaufrauf ein Patient aus einem KIS System in VITU importiert werden, wenn die entsprechnde IT-Schnittstelle von beiden Seiten funktional ist. 

### Wie kann ich den Status eines Falls verändern?

Sie können den Status ihres Falls ändern, indem sie den entsprechenden Eintrag (Zeile) in der Arbeitsliste auswählen. Daraufhin öffnet sich ein Fenster, das eine Bearbeitung des Falls ermöglicht. Sie sehen die Statusleiste unten, in der Sie den Status des Falls festlegen können. In Release 2019.3 sind die Statusänderungen manuelle Schritte. Die Ausnahme ist die Änderung des Status "Bereit für Tumorkonferenz" (Der einzige Status, bei dem ein Fall im Planer gelistet wird und so einer anglegten Videokonferenz zugeordnet werden kann) nach Zuordnung in den Status "Warten auf Fallbesprechung".

### Kann ich Status an meine Anforderungen anpassen?
Sie können im Administrationsbereich den Status anpassen, hinzufügen, deaktivieren und in Ihrer Reihenfolge verändern. Hinweis: Die Änderungen wirken sich auf alle Einträge der Arbeitsliste aus. Ein vergebener Status, der nachträglich Deaktiiert wird, wird im folgenden Verlauf rot unterlegt. MOLIT empfiehlt eine Anpassung des Arbeitslisteneintrags mit Statusanpassung. 

### Warum kann ich meinen angelegten User nicht in VITU in der Liste sehen?

--

### Warum kann ich meinen User keinem Videokonferenzraum zuordnen?

--

### Warum sehe ich meine Videokonferenz unter Videokonferenzen nicht?

Teilnehmer müssen erst einer Videokonferenz zugewiesen werden.  [Siehe: Wie füge ich Teilnehmer zu einer Konferenz hinzu?]


### Was wird unter Datenspende verstanden und wozu wird diese Spende benutzt?

--

### Kann ich meine Datenspende zurückziehen?

--





| Frage | Antwort|
| ------ | ---| 
| Mein Patient ist nicht mehr in der Arbeitsliste, wo ist er hin? | Je nach Status befinden sich die Einträge ggf. unter "abgeschlossen" oder "abgebrochen". | 
| Warum kann ich einen Patienten nicht einer Konferenz zuordnen? | Der Fall benötigt den Status "Bereit zur Tumorkonferenz". | 
| Warum fehlt ein Status in meiner Liste? | Anpassungen können im Administrationsbereich eingesehen und vorgenommen werden. | 
| Ich finde meinen Patienten nicht in der Arbeitsliste. Was kann ich tun? | Sie können über die Suchfunktion Einträge der Arbeitsliste nach Erstelldatum, Updatedatum, Name und Geburtsdatum filtern. Finden Sie Ihren Patienten nicht könnte er durch Statusänderung in abgeschlossen oder abgebrochen verschoben worden sein. | 
| Wie kann ich regelmäßige Termine zufügen? | Sie können mit Release 2019.3 noch keine regelmäßigen Termine im Planer eintragen, jedoch können einzeltermine geklont werden. [Siehe: Wie klone ich eine Konferenz?]  | 
| Wie klone ich eine Konferenz? | Wählen sie im Planer die Konferenz, die sie klonen möchten und wählen im Auswahlmenü "Konferenz klonen". Zugewiesene Teilnehmer werden hierbei übernommen. Name, Datum und Uhrzeit können beim Klonprozess bearbeitet werden. | 
| Meine Konferenz von vorgestern wird nicht mehr angezeigt. Finde ich sie nochmal? | ... | 
| Ich bin allein in der Videokonferenz. Warum sehe ich keinen anderen Teilnehmer?  | ... | 
| Ton geht nicht, Bild geht nicht, ich sehe andere nicht, etc. Was ist los? | **Klicken Sie auf den Link zum Webcamtest und nutzen Sie die empfohlenen Versionen der Browser. Stellen Sie sicher, dass die Hardware physisch vorhanden ist.**| 
| Wieso kann ich mein Bild in der Videokonferenz nicht sehen? | Ist ihre Videokamera eingeschaltet? Ist ihre Videokamera physisch verriegelt/ überklebt? Ist ihre Videokamera mit ihrem PC verbunden? Haben Sie den Zugriff der Kamera erlaubt?|
| Wieso kann ich andere in der Videokonferenz nicht hören? | Sind ihre Lautsprecher eingeschaltet? Haben sie die Tonlautstärke laut genug eingestellt?|
| Warum können andere Teilnehmer in der Videokonferenz mich nicht hören? | Ist ihr Mikrofon eingeschaltet? Ist ihr Mikrofon mit dem PC verbunden? Haben sie sich selbst eventuell stumm geschaltet? Haben Sie den Zugriff des Mikrofons erlaubt?|

</div>

<pdf-download />




























