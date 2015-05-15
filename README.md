# scratchx-websensor

- [ScratchX extension](http://llk.github.io/scratch-extension-docs/) for [WebAPI](https://wiki.mozilla.org/WebAPI) and [Web Sensor API](http://smus.com/web-sensor-api/)

## Usage

Extension script URL is `http://pastak.github.io/scratchx-websensor/script.js`

[Here is link for ScratchX with this extension.](http://scratchx.org/?url=http://pastak.github.io/scratchx-websensor/script.js#scratch)

**Caution**

Some blocks only run on Firefox with MacOSX or Android.

Google Chrome and Firefox for other OS don't support these API.

## Blocks

### Light sensor (Int) **Only Firefox**

![](https://i.gyazo.com/608840a12f786d529e00051fc73901b6.png)

This block return value get with front camera.( unit is lux )

### Battery Level (Int) **Only Firefox**

![](https://i.gyazo.com/5a6e87a1436c1a6e1e894bad2d1c7a93.png)

This block return battery level with percentage.

### Acceleration (Float)

![](https://i.gyazo.com/96d23dd07f46a56dfdc68a2d9a1dcbca.png)

This block return acceleration includes the effect of gravity.

### Geolocation (Float)

![](https://i.gyazo.com/683ab603ea1a34d3244bd47dc296cebc.png)

This block return geolocation of place which in you are.
