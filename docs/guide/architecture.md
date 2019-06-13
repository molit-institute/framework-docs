# Beispielarchitektur

<print-header />

![Architecture](~@assets/img/architecture.png)

Die notwendige Infrastruktur um VITU und das Fragebogentool betreiben zu können umfasst **3 (virtuelle) Server:** **Application Server, VideoServer, Data Server**. Die (virtuellen) Server werden unter **Ubuntu 18.04 LTS** betrieben, die automatischen Sicherheitsupdates für Betriebssystem und aus der Paketverwaltung installierten Applikationen sind aktiviert. 

Die Firewall der einzelnen Server sind nach außen bis auf die benötigten Ports komplett geschlossen. Da das virtuelle Tumorboard (VITU) auch mit externen Experten genutzt werden soll ist ein rein klinik-interner Betrieb nicht möglich. Zur Gewährleistung der Vertraulichkeit und Integrität der auf dem Data Server hinterlegten Patientendaten befindet sich der Data Server im internen Netzwerk. **Ein Zugriff von außen ist nur durch den Applikationsserver möglich**.

**DMZ** steht für **Demilitarisierte Zone** (DMZ, auch Demilitarized Zone) und bezeichnet ein Computernetz mit sicherheitstechnisch kontrollierten Zugriffsmöglichkeiten auf die daran angeschlossenen Server. Die in der DMZ aufgestellten Systeme werden durch eine oder mehrere Firewalls gegen andere Netze (z. B. Internet, LAN) abgeschirmt. In Deutschland empfiehlt das BSI in seinen IT-Grundschutz-Katalogen ein zweistufiges Firewall-Konzept zum Internet. In diesem Fall trennt eine Firewall das Internet von der DMZ und eine weitere Firewall die DMZ vom internen Netz.

<pdf-download />