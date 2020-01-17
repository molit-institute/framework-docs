# Installationshinweise

<print-header />

Für die Installation von VITU werden, wie in der [Beispielarchitektur](architecture) beschrieben, drei VMs benötigt. 

Klinische Daten sowie Nutzerdaten werden auf der Data VM gespeichert. Auf der Data VM müssen daher ein FHIR-Server und ein kompatibler OpenID Connect Server inklusive einer Datenbank für die Datenhaltung installiert werden. MOLIT empfiehlt [HAPI](https://hapifhir.io/) als FHIR Server, [Keycloak](https://www.keycloak.org/) als OpenID Connect Server und [PostgreSQL](https://www.postgresql.org/) als Datenbank.

Die Video VM dient als zentraler Knotenpunkt für das Videokonferenzmodul von VITU. Hier werden ein STUN/TURN Server und ein WEBRTC Gateway benötigt. Als STUN/TURN Server eignet sich [Coturn](https://github.com/coturn/coturn) und als WEBRTC Gateway [Janus](https://janus.conf.meetecho.com/).

Auf der App VM müssen Frontends und Backends des MOLIT Frameworks aufgespielt werden. Hierzu werden ein Webserver und ein Java Applikationssever benötigt. MOLIT empfiehlt als Webserver [Apache2](https://httpd.apache.org/) und als Java Applikationsserver [Tomcat](http://tomcat.apache.org/). Die Applikationen müssen entsprechend der gewählten Architektur und der vergebenen URLs und Ports konfiguriert werden.

<pdf-download />