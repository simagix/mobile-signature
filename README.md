# Mobile Signature

Mobile Signature is a mobile HTML5 web app to draw on canvas and upload the image to the server.

### Keywords
    - HTML 5
    - Node.js
    - Express.js
    - MQTT

### Installation
```
npm install
```

### Start Web Server
```
npm start
```
The default port is 3300, http://localhost:3300.

### Unit Test
```
npm test
```

### Docker Build
```
docker build -t mobile-signature .
```

### Docker Run
```
docker run -p 3300:3300 -d mobile-signature

```

### Build for Raspberry PI
```
docker build -t simagix/mobile-signature-rpi -f Dockerfile.rpi .
```
