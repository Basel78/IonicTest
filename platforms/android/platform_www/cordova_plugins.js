cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-browsertab.BrowserTab",
    "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
    "pluginId": "cordova-plugin-browsertab",
    "clobbers": [
      "cordova.plugins.browsertab"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-image-picker.ImagePicker",
    "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
    "pluginId": "cordova-plugin-image-picker",
    "clobbers": [
      "plugins.imagePicker"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "ionic-plugin-deeplinks.deeplink",
    "file": "plugins/ionic-plugin-deeplinks/www/deeplink.js",
    "pluginId": "ionic-plugin-deeplinks",
    "clobbers": [
      "IonicDeeplink"
    ],
    "runs": true
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-browsertab": "0.2.0",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-image-picker": "1.1.1",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-whitelist": "1.3.3",
  "ionic-plugin-deeplinks": "1.0.15",
  "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});