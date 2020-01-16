# FAQ

<print-header />

Für die häufigsten Fragen, denen Sie bei der Nutzung unserer Plattform begegnen können, finden Sie im Folgenden eine Übersicht, die Ihnen weiterhilft. Konnten wir Ihre Frage nicht zufriedenstellend beantworten, wenden Sie sich bitte an uns über unser [Ticketsystem](https://ticket.molit.eu/#signup).

::: tip Tipp
Sie können die Suchfunktion in der Navigationsleiste nutzen um nach Schlagwörtern zu suchen.
:::

<br>
<div class="questions">

### Wie installiere ich VITU?

Schauen Sie in unsere Installationshinweise.  

### Findet bei VITU ein automatischer Restart der VITU Server nach Linux-Sicherupdates statt und wird dabei ein Script angelegt?

Ja. Alle Komponenten des MOLIT Frameworks können als systemd Services angelegt werden. 

### Was muss ich tun, damit von VITU eine Sicherungskopie erstellt wird?

Automatische Sicherheitskopien der VMs müssen in Eigenverantwortung des Nutzers erstellt werden. MOLIT empfiehlt das Tool [pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html) in Verbindung mit Cron zu nutzen, um Datenbankbackups auf dem Dateisystem zu erstellen.

### Welchen Browser kann ich nutzen?

* Firefox Version [Firefox 65+]
* Google Chrome Version [Chrome 58+]
* Safari Version [13+]
* Microsoft Edge (Chromium) Version [81+]


### Ich habe mein Passwort vergessen. Wie kann ich mich anmelden?

VITU nutzt als Benutzerverwaltung Keycloak. Wenn Sie Ihr Passwort vergessen haben klicken Sie bitte auf der Log In Seite auf "Passwort vergessen?" und nutzen den Self-Service.

### Wie viele Teilnehmer können an einer Videokonferenz teilnehmen?

Abhängig von den Konferenzeinstellungen (Administrationsbereich). Von MOLIT getestet und für geeignet bewertet sind bis zu acht Teilnehmer bei Video und Tonübertragung. Bei mehr Teilnehmern empfiehlt MOLIT auf die Videoübertragung zu verzichten. 

### Wie deaktiviere ich die Videoübertragung meines Bildes?

Klicken Sie in Ihrer Videokonferenz unter Ihrem übertragenen Bild auf das Videokamerasymbol. Durch erneute Auswahl des Symbols aktivieren Sie die Bildübertragung wieder.

###  Wie viele Videokonferenzen können parallel flüssig laufen? 

Die Performance ist abhängig von den Konferenzeinstellungen (Administrationsbereich) und der Kapazität der virtuellen Maschine (VM). Siehe: https://www.researchgate.net/publication/300727546_Performance_analysis_of_the_Janus_WebRTC_gateway. 

### Wie weise ich Rollen zu?

Sie können einem Benutzer nur Rollen zuweisen, wenn Sie selbst Administrationsrechte besitzen. Dann kommen Sie oben in der Leiste rechts über den Schraubenschlüssel in den Administrationsbereich. Dort können Sie über 'Benutzer' denjenigen Benutzer auswählen, dem sie eine Rolle zuweisen möchten. Haben Sie den Benutzer ausgewählt, sehen Sie im dritten Abschnitt, welche Rollen diesem Benutzer zugewiesen wurden. Hier können Sie die Änderungen vornehmen.

### Wie erstelle ich eine neue Konferenz? 

Navigieren Sie in die Komponente Planer und wählen Sie "neue Konferenz anlegen".

### Wie kann ich regelmäßige Termine anlegen?

Sie können mit Release 2019.3 noch keine regelmäßigen Termine im Planer eintragen, jedoch können Einzeltermine geklont werden. Siehe: [Wie klone ich eine Konferenz?](#wie-klone-ich-eine-konferenz)  

### Wie klone ich eine Konferenz?

Wählen Sie im Planer die Konferenz, die Sie klonen möchten und wählen im Auswahlmenü "Konferenz klonen". Zugewiesene Teilnehmer werden hierbei übernommen. Name, Datum und Uhrzeit können beim Klonprozess bearbeitet werden. 

### Wie füge ich Teilnehmer zu einer Konferenz bzw. einem Videokonferenzraum hinzu?

Sie können Teilnehmer zu einer Konferenz hinzufügen, indem Sie im Reiter 'Planer' eine Konferenz auswählen. Sobald Sie darauf klicken, erscheint das Konferenzfenster, in dem Sie aus einer Liste alle verfügbaren Teilnehmer auswählen können. Endgültig hinzugefügt werden diese wenn Sie auf den Button 'Hinzufügen' klicken. Unter dem Auswahlmenü sehen Sie, welche Teilnehmer der Konferenz bisher hinzugefügt wurden.

### Wie füge ich Fälle zu einer Konferenz hinzu?

Sobald Sie Fälle in den Status "Bereit zur Tumorkonferenz" gesetzt haben, erscheinen diese im Konferenzplaner. Dort können Sie die Fälle per Drag&Drop auf die gewünschte Konferenz ziehen. Der Fall wird dann zu dieser Konferenz hinzugefügt.

### Warum kann ich einen Fall nicht einer Konferenz zuordnen?

Der Fall benötigt den Status "Bereit zur Tumorkonferenz".

### Meine Konferenz von vorgestern wird nicht mehr angezeigt. Finde ich sie nochmal?

Aktuell werden Termine, die in der Vergangenheit liegen nur für den Zeitraum von 48h angezeigt. Für den Wunsch einer Änderung wenden Sie sich bitte an das MOLIT Institut, damit Anpassungen für einen Folgerelease ggf. vorgenommen werden.

### Ich habe Probleme bei der Videokonferenz: Wieso kann ich mein Bild in der Videokonferenz nicht sehen?

* Bitte überprüfen Sie, ob Ihre Videokamera eingeschaltet und mit Ihrem Endgerät (PC) verbunden ist.
* Bitte überprüfen Sie, ob Ihre Videokamera physisch verriegelt / überklebt.
* Bitte überprüfen Sie, ob Sie Ihrem Browser den Zugriff auf Ihrer Videokamera erlaubt haben.

### Ich habe Probleme bei der Videokonferenz:  Wieso kann ich andere in der Videokonferenz nicht hören? 

* Bitte überprüfen Sie, ob Ihre Lautsprecher eingeschaltet sind und die Lautstärke hörbau laut aufgedreht ist.
* Stellen Sie sicher, dass der Redende sein Mikrofon nicht deaktiviert (sich selbst gemutet) hat.

### Ich habe Probleme bei der Videokonferenz: Warum können andere Teilnehmer in der Videokonferenz mich nicht hören? 

* Bitte stellen Sie sicher, dass Sie sich nicht selbst stumm gestellt (gemutet) haben.
* Bitte stellen Sie sicher, dass Ihr Mikrofon eingeschaltet und mit dem Endgerät (PC) verbunden ist.
* Bitte stellen Sie sicher, dass Sie Ihrem Browser den Zugruff auf Ihr Mikrofon erlaubt haben.

### Ich habe Probleme bei der Videokonferenz: Ton geht nicht, Bild geht nicht, ich sehe andere nicht, etc. Was kann ich noch tun?

Mit Release 2020.1 wird ein Webcamtest in VITU integriert sein. Klicken Sie auf den Link zum Webcamtest und nutzen Sie die empfohlenen Browser und Versionen. Siehe: [Welchen Browser kann ich nutzen?](#welchen-browser-kann-ich-nutzen)  
Steht Ihnen kein Button zur Verfügung, empfehlen wir Ihnen folgendes Vorgehen zum Testen der Verbindung von VITU: 
* Zur Teilnahme an der Videokonferenz von VITU sind eine Webcam und ein Mikrofon nötig. 
* Stellen Sie sicher, dass Sie den Geräten den Zugriff erlaubt haben.
* Unsere Lösung basiert technisch auf WebRTC, jegliche Kommunikation erfolgt TLS verschlüsselt.
* Falls vorhanden, sollten die ausgehenden Firewallregeln den Zugriff auf die VITU URLs unter Port 443 TCP erlauben. Genutzte Protokolle sind hier HTTPS und WebRTC (über TCP).
* Um Ihren Browser, sowie Kamera und Mikrofon zu testen, können Sie auf: https://webcamtest.molit.eu/ gehen.
* Hier sollte der Browser Zugriff auf Webcam und Mikrofon verlangen und nach Gewähren dieser Rechte sollten Sie sich selbst sehen.
* Falls dies nicht Zutrifft setzten Sie sich bitte unter Angabe des Fehlerprotokolls (Toggle log Copy) mit Ihrer IT-Stelle auseinander. Kann Ihnen dort nicht geholfen werden, können Sie sich an das MOLIT Institut wenden und für eine Fehleranalyse beauftragen.

### Wie kann ich den Status eines Falls verändern?

Sie können den Status Ihres Falls ändern, indem Sie den entsprechenden Eintrag (Zeile) in der Arbeitsliste auswählen. Daraufhin öffnet sich ein Fenster, das eine Bearbeitung des Falls ermöglicht. Über das Auswahlfeld "Status" können Sie den Status des Falls ändern. In Release 2019.3 sind die Statusänderungen manuelle Schritte. Die Ausnahme ist die Änderung des Status "Bereit für Tumorkonferenz" (Der einzige Status, bei dem ein Fall im Planer gelistet wird und so einer anglegten Videokonferenz zugeordnet werden kann) nach Zuordnung in den Status "Warten auf Fallbesprechung".

### Kann ich Status an meine Anforderungen anpassen?

Sie können im Administrationsbereich den Status anpassen, hinzufügen, deaktivieren und in Ihrer Reihenfolge verändern. Hinweis: Die Änderungen wirken sich auf alle Einträge der Arbeitsliste aus. Ein vergebener Status, der nachträglich deaktiviert wird, wird im folgenden Verlauf rot unterlegt. MOLIT empfiehlt eine Anpassung des Arbeitslisteneintrags mit Statusanpassung. 

### Warum fehlt ein Status in meiner Liste?

Anpassungen können im Administrationsbereich eingesehen und vorgenommen werden. Bitte überprüfen Sie, ob der Status deaktiviert wurde oder fragen Sie einen Benutzer mit Administrationsrechten, ob eine Deaktivierung vorgenommen wurde.

### Wie kann ich einen Patienten einem Protokoll zuordnen?

Wenn sie ein neues Protokoll erstellen, können sie mit dem Button 'Patient auswählen' einen im System hinterlegten Patienten dem Protokoll zuordnen.

### Wie bekomme ich einen Patienten in die Arbeitsliste? 

In der Arbeitsliste können sie unter 'Fall hinzufügen' unter dem ersten Punkt "Patient hinzugfügen" einen neuen Patienten anlegen. Alternativ kann über einen Fremdaufrauf ein Patient aus einem KIS System in VITU importiert werden, wenn die entsprechnde IT-Schnittstelle von beiden Seiten funktional ist. 

### Ich finde meinen Patienten nicht in der Arbeitsliste. Was kann ich tun?

Sie können über die Suchfunktion Einträge der Arbeitsliste nach Erstelldatum, Updatedatum, Name und Geburtsdatum filtern. Finden Sie Ihren Patienten nicht könnte er durch Statusänderung in "abgeschlossen" oder "abgebrochen" verschoben worden sein.

### Mein Patient ist nicht mehr in der Arbeitsliste, wo ist er hin?

Je nach Status befinden sich die Einträge ggf. unter "abgeschlossen" oder "abgebrochen". | 

### Warum kann ich meinen angelegten User nicht in VITU in der Liste sehen?

--

### Warum kann ich meinen User keinem Videokonferenzraum zuordnen?

--

### Warum sehe ich meine Videokonferenz unter Videokonferenzen nicht?

Teilnehmer müssen erst einer Videokonferenz zugewiesen werden.  [Siehe: Wie füge ich Teilnehmer zu einer Konferenz hinzu?]

### Was wird unter Datenspende verstanden und wozu wird diese Spende benutzt was sind die Ziele?

Ihre Patientendaten sollen für die medizinische Forschung zur Verfügung gestellt werden. Medizinische Forschung dient ausschließlich dazu, die Erkennung, Behandlung und Vorbeugung von Krankheiten zu verbessern; Ihre Patientendaten werden nicht für die Entwicklung biologischer Waffen oder diskriminierende Forschungsziele verwendet. Ebenso ist es nicht Ziel dieser Forschung, bei Ihnen eine Diagnose zu erstellen oder Ihre konkrete Behandlung zu beeinflussen. Ihre Patientendaten sollen im Sinne eines breiten Nutzens für die Allgemeinheit für viele verschiedene medizinische Forschungszwecke verwendet werden. Bei weiterb Fragen weden Sie sich bitte an unseren [Datenschutz] (Datenschutz@molit.eu)

### Welchen Nutzen habe ich von einer Datenspende?

Persönlich können Sie für Ihre Gesundheit im Regelfall keinen unmittelbaren Vorteil oder Nutzen aus der wissenschaftlichen Nutzung Ihrer Patientendaten erwarten. Es ist jedoch im Einzelfall möglich, dass ein Auswertungsergebnis für Ihre Gesundheit von so erheblicher Bedeutung ist, dass ein Arzt oder Forscher eine Kontaktaufnahme als dringend notwendig erachtet. Das ist insbesondere der Fall, wenn sich daraus ein dringender Verdacht auf eine schwerwiegende, bisher möglicherweise nicht erkannte Krankheit ergibt, die behandelt oder deren Ausbruch verhindert werden könnte.
Darüber hinaus können sich weitere Analyseergebnisse ergeben, die möglicherweise für Ihre Gesundheit relevant sind (Zusatzbefunde) und über die wir Sie informieren möchten. Sie können entscheiden, ob wir Sie in diesem Zusammenhang kontaktieren dürfen. 

### Welcher Nutzen ergibt sich für unsere Gesellschaft aus meiner Datenspende?

Medizinisch-wissenschaftliche Forschungsvorhaben zielen auf eine Verbesserung unseres Verständnisses der Krankheitsentstehung und der Diagnosestellung, und auf dieser Basis auf die Neuentwicklung von verbesserten Präventions-, Versorgungs- und Behandlungsansätzen.

### Wie lange gillt meine Einwilligung?

Ihre Einwilligung in die Erhebung von Patientendaten gilt – wenn Sie sie nicht vorher widerrufen [Siehe Punkt: Kann ich meine Einwilligung widerrufen?] – unbegrenzt ab Ihrer Einwilligungserklärung. Das bedeutet, dass in diesem Zeitraum mit vorheriger Ankündigung von Ihnen nochmals Daten gewonnen werden dürfen, ohne dass Sie erneut eine Einwilligungserklärung unterzeichnen müssten. Ihre Einwilligung in die Nutzung der bisher erhobenen Daten bleibt wirksam.

### Kann ich meine Datenspende zurückziehen?

Ihre Einwilligung ist freiwillig!
Sie können Ihre Einwilligung zur weiteren Erhebung sowie zur wissenschaftlichen Nutzung Ihrer Patientendaten jederzeit ohne Angabe von Gründen und ohne nachteilige Folgen für Sie vollständig oder in Teilen widerrufen.
Ein Widerruf bezieht sich dabei immer nur auf die künftige Verwendung Ihrer Patientendaten. Daten aus bereits durchgeführten Analysen können nachträglich nicht mehr entfernt werden.
Im Falle eines Widerrufs werden Ihre auf Grundlage der vorliegenden Einwilligung gespeicherten Patientendaten gelöscht oder anonymisiert, sofern dies gesetzlich zulässig ist. Wenn eine Löschung nicht oder nicht mit zumutbarem technischem Aufwand möglich ist, werden Ihre Patientendaten anonymisiert, indem der Ihnen zugeordnete Identifizierungscode gelöscht wird. Die Anonymisierung Ihrer Patientendaten kann allerdings eine spätere Zuordnung von - insbesondere genetischen - Informationen zu Ihrer Person über andere Quellen niemals völlig ausschließen.
Für einen Widerruf wenden Sie sich bitte an: [Datenschutz] (Datenschutz@molit.eu)

### Was bedeutet Pseudonymisiert?

Bei der Erfassung von Patientendaten werden auch Informationen wie Ihr Name und Ihr Geburtsdatum erfasst. Mit solchen Informationen kann leicht auf Sie persönlich geschlossen werden. Diese Informationen werden durch eine Kombination von Zeichen ersetzt (dem Pseudonym). Auf diese Weise wird eine einfache Rückverfolgung zu Ihrer Person ausgeschlossen. Eine Rückverfolgung zu Ihrer Person erfolgt nur, wenn Ihre Patientendaten durch zusätzliche Informationen über Sie ergänzt werden sollen oder um erneut mit Ihnen in Kontakt zu treten. Daten, die Ihre Person identifizieren, werden außer in von Ihnen erlaubten oder gesetzlich geregelten Fällen niemals an Forscher oder sonstige Dritte weitergegeben, insbesondere nicht an Versicherungsunternehmen oder Arbeitgeber.

### Was beudetet Anonymisierung?

Bei der Anonymisierung werden Ihre Daten so verändert, dass sie Ihrer Person nicht mehr oder nur mit einem unverhältnismäßig großen technischen Aufwand zugeordnet werden können.


</div>

<pdf-download />




























