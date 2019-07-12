# Installation Guide

<print-header />

To get your system running as fast as possible, we provide installation scripts for the different components. To obtain those scripts, please visit [start.molit.eu](https://start.molit.eu) and choose your components. Make sure you're familiar with the [example architecture](architecture.md) as the scripts will reflect this architecture. Nevertheless, you're always welcome to adapt these scripts to your desired architecture and your needs. Also, ensure you fullfil each [system requirement](requirements.md) before starting the installation.

For each virtual machine (VM) we provide two scripts. One for downloading the configuration files and one for installing necessary dependencies. Make sure to execute the configuration script first and to adapt the configuration to your needs before starting the installations scripts.

Execute the scripts in the following order to keep the dependencies: Data VM, Application VM, Video VM.

The following describes the installation process and the necessary configuration.

## Before installation

This section describes the necessary adaptions inside the config files after executing the configuration scripts.

### Janus

- Set Janus secret `admin_secret` in `janus.jcfg`
- Set `turn_server` in `janus.jcfg` (external IP of your turn server)
- Set `turn_user` in `janus.jcfg` (credentials provided in coturn config)
- Set `turn_pwd` in `janus.jcfg` (credentials provided in coturn config)

### Postgres

- Generate passwords for postgres users _keycloak_, _vitu_ and _hapi_. You will have to enter them during installation.

::: tip
Postgres users will be created during installation using the your passwords.
:::

### coturn

File `/opt/config/coturn`

- Set `TURNSERVER_ENABLED=0` if you do not need a turn server, or want to use your own

File `/opt/config/turnserver.conf`

- Set `listening-ip`, `relay-ip`, `user` and `realm` accordingly

For a detailed description of all configuration parameters, please see [coturn's official docs](https://github.com/coturn/coturn/wiki/turnserver).

### Apache 2

File `/opt/config/000-default.conf`

- Configure the virtual host to listen to your DNS

### HAPI FHIR

File `/opt/config/hapi.properties`

- Set `server_address` to HAPI base (IP or DNS if available)

### EQU

File `/opt/config/equ.production`

- Set `VUE_APP_BASE_URL` to the path at which EQU is accessible (e.g. for https://demo.com/equ this would be /equ)
- Set `VUE_APP_FHIR_URL` to your FHIR server's IP or DNS
- Set `VUE_APP_AUTHENTICATION` to `true` or `false` wether you want to enable the authentication or not
- Set `VUE_APP_KEYCLOAK_URL` to your Keycloak server. Only required if `VUE_APP_AUTHENTICATION=true`

### VITU

File `/opt/config/vitu.env.production`

- Set `VUE_APP_BASE_URL` to the path at which VITU is accessible (e.g. for https://demo.com/vitu this would be /vitu)
- Set `VUE_APP_FHIR_URL` to your FHIR server's IP or DNS
- Set `VUE_APP_AUTHENTICATION` to `true` or `false` wether you want to enable the authentication or not
- Set `VUE_APP_KEYCLOAK_URL` to your Keycloak server. Only required if `VUE_APP_AUTHENTICATION=true`
- Set `VUE_APP_JANUS_URL` to your Janus video server.

- Set `VUE_APP_BACKEND_URL` to the VITU backend (the Application VM)

### HUB

File `/opt/config/hub.env.production`

- Set `VUE_APP_BASE_URL` to the path at which HUB is accessible (e.g. for https://demo.com/hub this would be /hub)
- Set `VUE_APP_AUTHENTICATION` to `true` or `false` wether you want to enable the authentication or not
- Set `VUE_APP_KEYCLOAK_URL` to your Keycloak server. Only required if `VUE_APP_AUTHENTICATION=true`
- Set `VUE_APP_FHIR_URL` to your FHIR server's IP or DNS

### VITU (backend)

#### video-backend

File `/opt/config/video-backend.yml`

- Set `keycloak.auth-server-url` to your keycloak instance. Don't forget the `/auth`.
- Set `janus.url` to the IP of your Janus video server
- Set `janus.secret` to the secret specified in the Janus config
- Set `turn.url` to your turn server's IP. This must be the same as specified in the Janus config.
- Set `turn.user` to your turn server's configured user
- Set `turn.password` to your turn server user's configured password

#### vitu-process

File `/opt/config/vitu-process.yml`

- Set `keycloak.auth-server-url` to your keycloak instance. Don't forget the `/auth`.
- Set `vitu.hapi.url` to your FHIR server's IP or DNS

#### molit-security

File `/opt/config/molit-security.yml`

- Set `keycloak.auth-server-url` to your keycloak instance. Don't forget the `/auth`.

## During Installation

### 1. Data VM

During installation, prompts will appear asking you for the following passwords (depending on the VM script):

- Postgres user _keycloak_ for the keycloak database
- Postgres user _hapi_ for the hapi database
- Keycloak user _admin_ (do not forget the password as you will need the user to connect your AD or to create user account!)

Furthermore, the installation will ask you for the following URLs:

- The URL at which VITU will be accessible
- The URL at which HUB will be accessible
- The URL at which EQU will be accessible

::: danger
Enter the URLs **without a trailing slash**. _/\*_ will be automatically appended.
:::

During the installation, a file with secrets for Keycloak authentication is written to `/opt/keycloak/secrets`. **Copy this file onto the Application VM to _/opt/secrets_!**

### 2. Application VM

::: warning
In order to proceed, make sure you've copied `/opt/keycloak/secrets` from the _Data_ VM to `/opt/secrets` on the _Application_ VM.
:::
During installation, prompts will appear asking you for the following passwords (depending on the VM script):

- Postgres user _vitu_ for the vitu database

### 3. Video VM

No further action required.

## After installation

After running all installation scripts, your system is almost ready to use.

### Configure Keycloak

::: warning
Store the content of `/opt/secrets` securely and **delete the file afterwards**.
:::

- Add users. Make sure to assign the role _vitu-user_ and/or _vitu-moderator_.

* Alternatively, you can connect your AD or LDAP.

To manage the Keycloak instance, please see the [official docs](https://www.keycloak.org/docs/latest/server_admin/index.html).

### Configure your firewall

During installation, ports according to the [example architecture](architecture.md) are opened. If you adapt the firewall configuration, make sure to keep those ports open.
