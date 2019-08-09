# Installation Guide

::: warning
Dieser Artikel gilt für eine ältere Version von VITU, für die aktuelle Version klicken Sie bitte [hier](../../v2019.2/guide/installation-guide).
:::

<print-header />

Um Ihr System so schnell wie möglich zum Laufen zu bringen, stellen wir Ihnen Installationsskripte für die verschiedenen Komponenten zur Verfügung. Um diese Skripte zu erhalten, besuchen Sie bitte [start.molit.eu](https://start.molit.eu) und wählen Sie Ihre Komponenten aus. Stellen Sie sicher, dass Sie mit der [Beispielarchitektur](architecture) vertraut sind, da die Skripte diese Architektur widerspiegeln. Dennoch können Sie diese Skripte jederzeit an Ihre gewünschte Architektur und Ihre Bedürfnisse anpassen. Stellen Sie außerdem sicher, dass Sie alle [Systemanforderungen](requirements) erfüllen, bevor Sie mit der Installation beginnen.

Für jede virtuelle Maschine (VM) stellen wir zwei Skripte zur Verfügung. Eine für den Download der Konfigurationsdateien und eine für die Installation der notwendigen Abhängigkeiten. Achten Sie darauf, zuerst das Konfigurationsskript auszuführen und die Konfiguration an Ihre Bedürfnisse anzupassen, bevor Sie die Installationsskripte starten.

Führen Sie die Skripte in der folgenden Reihenfolge aus, um die Abhängigkeiten zu erhalten: Daten-VM, Anwendungs-VM, Video-VM.

Folgend wird der Installationsprozess und die notwendige Konfiguration beschrieben.

## Vor der Installation

Dieser Abschnitt beschreibt die notwendigen Anpassungen innerhalb der Konfigurationsdateien nach dem Ausführen der Konfigurationsskripte.

### Janus

- Setzen Sie das Janus Secret `admin_secret` in `janus.jcfg`
- Setzen Sie `turn_server` in `janus.jcfg` (öffentliche IP Ihres turn servers)
- Setzen Sie `turn_user` in `janus.jcfg` (wie in der coturn Konfiguration eingetragen)
- Setzen Sie `turn_pwd` in `janus.jcfg` (wie in der coturn Konfiguration eingetragen)

### Postgres

- Generieren Sie Passwörter für Postgres-Benutzer Keycloak, Vitu und Hapi. Diese müssen Sie bei der Installation eingeben.
  ::: tip
  Die Postgres-Benutzer werden während der Installation mit Ihren Passwörtern erstellt.
  :::

### coturn

Datei `/opt/config/coturn`

- Setzen Sie `TURNSERVER_ENABLED=0`, wenn Sie keinen Turn-Server benötigen oder Ihren eigenen verwenden möchten.

Datei `/opt/config/turnserver.conf`

- Stellen Sie `listening-ip`, `relay-ip`, `user` und `realm` entsprechend ein.

Eine detaillierte Beschreibung aller Konfigurationsparameter finden Sie in der [offiziellen Dokumentation](https://github.com/coturn/coturn/wiki/turnserver) von coturn.

### Apache 2

Datei `/opt/config/000-default.conf`

- Konfigurieren Sie den virtuellen Host, um auf Ihren DNS zu hören.

### HAPI FHIR

Datei `/opt/config/hapi.properties`

- `server_address` auf HAPI Base setzen (IP oder DNS, falls vorhanden)

### EQU

Datei `/opt/config/equ.production`

- `VUE_APP_BASE_URL` auf den Pfad setzen, über den EQU erreichbar ist (z.B. für https://demo.com/equ wäre dies /equ).
- Setzen Sie `VUE_APP_FHIR_URL` auf die IP oder DNS Ihres FHIR-Servers.
- Setzen Sie `VUE_APP_AUTHENTICATION` auf `true` oder `false`, ob Sie die Authentifizierung aktivieren möchten oder nicht.
- Setzen Sie `VUE_APP_KEYCLOAK_URL` auf Ihren Keycloak-Server. Nur erforderlich, wenn `VUE_APP_AUTHENTICATION=true`

### VITU

Datei `/opt/config/vitu.env.production`

- `VUE_APP_BASE_URL` auf den Pfad setzen, über den VITU erreichbar ist (z.B. für https://demo.com/vitu wäre dies /vitu).

- Setzen Sie `VUE_APP_FHIR_URL` auf die IP oder DNS Ihres FHIR-Servers.

- Setzen Sie `VUE_APP_AUTHENTICATION` auf true oder false, ob Sie die Authentifizierung aktivieren möchten oder nicht.

- Setzen Sie `VUE_APP_KEYCLOAK_URL` auf Ihren Keycloak-Server. Nur erforderlich, wenn `VUE_APP_AUTHENTICATION=true`

- Setzen Sie `VUE_APP_JANUS_URL` auf Ihren Janus-Videoserver.

- `VUE_APP_BACKEND_URL` auf das VITU-Backend (die Anwendungs-VM) einstellen.

### HUB

Datei `/opt/config/hub.env.production`

- `VUE_APP_BASE_URL` auf den Pfad setzen, über den HUB erreichbar ist (z.B. für https://demo.com/hub wäre das /hub).
- Setzen Sie `VUE_APP_AUTHENTICATION` auf `true` oder `false`, ob Sie die Authentifizierung aktivieren möchten oder nicht.
- Setzen Sie `VUE_APP_KEYCLOAK_URL` auf Ihren Keycloak-Server. Nur erforderlich, wenn `VUE_APP_AUTHENTICATION=true`
- Setzen Sie `VUE_APP_FHIR_URL` auf die IP oder DNS Ihres FHIR-Servers.

### VITU (Backend)

#### video-Backend

Datei `/opt/config/video-backend.yml`

- Setzen Sie `janus.url` auf die IP Ihres Janus Videoservers.
- Setzen Sie `janus.secret` auf das in der Janus-Konfiguration angegebene Secret.
- Setzt `turn.url` auf die IP deines Turn-Servers. Dies muss mit der in der Janus-Konfiguration angegebenen übereinstimmen.
- Setzen Sie `turn.user` auf den konfigurierten Benutzer Ihres Turn-Servers.
- Setzen Sie `turn.password` auf das konfigurierte Passwort Ihres Turn-Server-Benutzers.

#### vitu-prozess

Datei `/opt/config/vitu-process.yml`

- Setzen Sie `keycloak.auth-server-url` auf Ihre Keycloak Instanz. Vergessen Sie das `/auth` nicht.
- Setzen Sie `vitu.hapi.url` auf die IP oder DNS Ihres FHIR-Servers.

#### molit-security

Datei `/opt/config/molit-security.yml`

- Setzen Sie `keycloak.auth-server-url` auf Ihre Keycloak Instanz. Vergessen Sie das `/auth` nicht.

## Während der Installation

### 1. Daten-VM

Während der Installation werden Sie (je nach VM-Skript) zur Eingabe der folgenden Passwörter aufgefordert:

- Postgres User _keycloak_ für die Keycloak-Datenbank
- Postgres Benutzer _hapi_ für die Hapi-Datenbank
- Keycloak-Benutzer _admin_ (vergessen Sie das Passwort nicht, da Sie den Benutzer benötigen, um Ihre AD zu verbinden oder ein Benutzerkonto zu erstellen!)

Außerdem werden Sie bei der Installation nach den folgenden URLs gefragt:

- Die URL, unter der VITU erreichbar sein wird.
- Die URL, unter der HUB erreichbar sein wird.
- Die URL, unter der EQU erreichbar sein wird.

::: danger
Geben Sie die URLs **ohne nachlaufenden Schrägstrich ein**. _/\*_ wird automatisch angehängt.
:::

Während der Installation wird eine Datei mit Geheimnissen für die Keycloak-Authentifizierung in `/opt/keycloak/secrets` geschrieben. **Kopieren Sie diese Datei auf die Anwendungs-VM nach /opt/secrets!**

### 2. Anwendung VM

::: warning
Um fortzufahren, stellen Sie sicher, dass Sie `/opt/keycloak/secrets` von der _Daten_-VM nach `/opt/secrets` auf der _Anwendungs_-VM kopiert haben.
:::
Während der Installation werden Sie (je nach VM-Skript) zur Eingabe der folgenden Passwörter aufgefordert:

- postgres user _vitu_ für die vitu-Datenbank

### 3. Video-VM

Es sind keine weiteren Maßnahmen erforderlich.

## Nach der Installation

Nachdem Sie alle Installationsskripte ausgeführt haben, ist Ihr System fast einsatzbereit.

### Keycloak konfigurieren

::: warning
Speichern Sie den Inhalt von `/opt/secrets` sicher ab und **löschen Sie die Datei anschließend**.
:::

- Fügen Sie Benutzer hinzu. Achten Sie darauf, dass Sie die Rolle _vitu-user_ und/oder _vitu-moderator_ zuweisen.

* Alternativ können Sie auch Ihre AD oder Ihren LDAP verbinden.

Um die Keycloak-Instanz zu verwalten, lesen Sie bitte die [offizielle Dokumentation](https://www.keycloak.org/docs/latest/server_admin/index.html).

### Konfigurieren Sie Ihre Firewall

Während der Installation werden Ports gemäß der [Beispielarchitektur](architecture.md) geöffnet. Wenn Sie die Firewall-Konfiguration anpassen, achten Sie darauf, dass diese Ports offen bleiben.

<pdf-download />
