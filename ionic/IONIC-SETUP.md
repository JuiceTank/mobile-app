# [ionic framework](https://ionicframework.com/)

## Development Preconditions

- node (-v v10.17.0)
- npm (-v 6.11.3)
- ionic cli (-v 5.4.13)
    
    `npm install -g ionic`

- cordova (-v 9.0.0 (cordova-lib@9.0.1))

    `npm install -g ionic`

- Android Studio (ionic setup instructions [here](https://ionicframework.com/docs/installation/android))

- iOS XCode (ionic setup instructions [here](https://ionicframework.com/docs/installation/ios)). Requires a mac, but don't got one yet

## RUNNING APPLICATION

###  ON LOCAL BROWSER

*NOTE* BLE Scan not supported - use emulator

In console, navigate to `/mobile-app/iconic/juicetank` and run `ng serve` 

Application will be available in your local browser at [http://localhost:8100](http://localhost:8100) 

### ANDROID - EMULATED

ionic [documentation](https://ionicframework.com/docs/cli/commands/cordova-emulate)

In console, navigate to `/mobile-app/iconic/juicetank`and run `ionic cordova emulate android`

### ANDROID - USB CONNECTED

Ensure Android connected, and USB Logging enabled

In console, navigate to `/mobile-app/iconic/juicetank`and run `ionic cordova run android`

### iOS

_Not Yet Supported_

## ISSUES

### Android

* make sure USB device visible:
`adb devices`

Deploying to USB Connected Android

*  some licences have not been accepted 
    ```
      FAILURE: Build failed with an exception.
         
         * What went wrong:
         A problem occurred configuring project ':core'.
         > Failed to install the following Android SDK packages as some licences have not been accepted.
              platforms;android-28 Android SDK Platform 28
    ```
   #### Cause: 
   Android Developer did not have appropriate Android API installed.
   
   #### Solution:
   Open SDK Manager: Android Developer > Tools > SDK Manager...
   In SDK Manager Dialog: Appearances & Behavior > System Settings > Android SDK
   - Select and install appropriate API Level (28 in this case, Android 9.0 (Pie)) 
   
* [adb-devices-unauthorized](https://stackoverflow.com/questions/31638582/android-adb-devices-unauthorized)

## Application Specific Details

### Ionic BLE

Ionic BLE [documentation](https://ionicframework.com/docs/native/ble) and [usage](https://github.com/don/cordova-plugin-ble-central)

Nice short YouTube [tutorial](https://www.youtube.com/watch?v=ZZOauPBUhSs)

from application root `mobile-app/ionic/juictank`, run:
```
ionic cordova plugin add cordova-plugin-ble-central
npm install @ionic-native/ble
```

### Bootstrap Styling 
- Adding bootstrap styling to application
    * Install locally to mobile-app/ionic/juicetank `npm install --save bootstrap@3`
    * Append the following to angular.json section...
    ```
    { 
      "projects": {
        "app": {
          "architect": {
            "build": {
              "options": {
                "styles": [
                    {
                      "input": "node_modules/bootstrap/dist/css/bootstrap.min.css"
                    },              
                    ...
                ]
              }
            }
          }
        }
      }
    }
    ``` 

