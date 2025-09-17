# Guia para conectar Github con SSH

## 1. Generar claves SSH
Antes de nada, asegurarse de tener **Git** y **Node.js** instalados en tu equipo
Crear las claves (pública y privada) con el siguiente comando en **Git Bash**:

```bash
ssh-keygen -t ed25519 -C "fferher513h@g.educaand.es"
```
![imagen sshkeygen](/img/imagen1.png)

Esto generará dos archivos dentro de la carpeta `~/.ssh/`:
- **id_ed25519** → clave privada 
- **id_ed25519.pub** → clave pública

Para mostrar la clave pública:

```bash
cat ~/.ssh/id_ed25519.pub
```
![imagen cat ssh](/img/imagen2.png)

Copia la clave

---

## 2. Registrar la clave en Github
1. Acceder al perfil de Github
2. Ir a **Settings > SSH and GPG keys > New SSH key**
3. Pegar la clave pública que se ha copiado
4. Guarda los cambios

---

## 3. Activar y usar el agente SSH en Windows
En **PowerShell**, hay que habilitar el servicio del agente con:

```bash
Get-Service ssh-agent | Set-Service -StartupType Automatic
```
![imagen del ssh_agent](/img/imagen3.png)
Después, iniciarlo:

```bash
Start-Service ssh-agent
```
![imagen iniciar_servicio ssh_agent](/img/imagen4.png)
Ahora añadir la clave privada al agente

```bash
ssh-add C:\Users\fjavi\.ssh\id_ed25519
```
![imagen añadiendo clave privada](/img/imagen5.png)
---

## 4. Verificar la conexión con Github
En **Git Bash**, hay que poner este comando:

```bash
ssh -T git@github.com
```
![imagen conexión con Github](/img/imagen6.png)
Y deberia funcionar perfectamente

---

## 5. Vincular repositorio local con remoto
Dentro de la carpeta del proyecto, hay enlazar el repositorio con github con:

```bash
git remote add origin git@github.com:fjfh06/Curso_25_26_m.git
```
![imagen del enlace local origin](/img/imagen7.png)
Ahora ya se podra subir a github los cambios
Y vamos a github para comprobar la clave ssh

![imagen clave SSH en Github](/img/imagen8.png)
