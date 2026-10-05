# Karli test

Eestikeelne väitleja arengu enesehindamise rakendus. Veeb töötab Vercelis ja kasutab Verceli Node.js Functionit, mis ühendub Zone’i MariaDB andmebaasiga.

## Arhitektuur

`dist/` sisaldab veebirakendust. `api/index.js` suunab `/api/*` päringud serverikoodile. MySQL-i kasutajanimi ja parool on ainult Verceli keskkonnamuutujad ning ei jõua brauserisse.

## Esmane seadistus

1. Paigalda sõltuvused: `npm install`.
2. Kopeeri `.env.example` failiks `.env.local` ja lisa sinna Zone’i andmebaasi parool.
3. Luba oma ajutine IP Zone’i MySQL-i konto seadetes või käivita skeem Zone’i phpMyAdminis.
4. Loo tabelid ja lisa küsimused käsuga `npm run db:migrate`.
5. Loo administraator lokaalselt keskkonnamuutujatega `ADMIN_EMAIL`, `ADMIN_PASSWORD` ja soovi korral `ADMIN_NAME`, seejärel käivita `npm run db:admin`.

## Vercel

Lisa Production keskkonda järgmised muutujad:

- `DB_HOST=d149665.mysql.zonevs.eu`
- `DB_PORT=3306`
- `DB_NAME=d149665_karl`
- `DB_USER=mathias_loor`
- `DB_PASSWORD` ehk Zone’i parool
- `DB_SSL=true`
- `APP_ORIGIN` ehk avaldatud Verceli URL

Vercel on seadistatud kasutama piirkonda `fra1`. Zone’i MySQL-i välisühenduste seadetes tuleb lubada Verceli Static IP-de aadressid. Verceli tavapärane dünaamiline väljuv IP ei sobi Zone’i täpse IP lubatud nimekirjaga.

Pärast deploy’d kontrolli `https://<sinu-vercel-aadress>/api/health`. Edukas vastus on `{"ok":true}`.

## Kontrollid

- `npm test`
- `npm run build`
- `npm run db:check`
