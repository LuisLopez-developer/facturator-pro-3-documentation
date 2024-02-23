---
sidebar_position: 4
---

# Linux - gestión externa de SSL
Docker | Linux | SSL externo 

## Pasos
1. para instalar se debe ejecutar el script; evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n".

2. finalizada la instalación debe dirigirse a la ruta de instalación

```bash
cd /root/facturadorpro31/
```

3. debe editar el archivo .env

```bash
nano .env
```

dentro del editor ubicar los parámetros y cambiarlos


| Antes | Después |
|---|---|
| `APP_URL=http://${APP_URL_BASE}` | `APP_URL=https://${APP_URL_BASE}` |
| `FORCE_HTTPS=false` | `FORCE_HTTPS=true` |

una vez finalizado, guarde y salga del editor

4. Ejecute los siguientes comandos para eliminar la caché de la aplicación

```bash
php artisan config:Cache
```

con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta

>IMPORTANTE
>
>recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.