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
