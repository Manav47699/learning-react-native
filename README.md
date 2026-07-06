### Commands

- TO setup react native in a folder -> "npx create-expo-app learning-react-native"
NOTE: If it asks which version make sure to choose a version that is compatible with expo go so that we can render our project in our phone. As of today, that is SDK version 56
- To reset the default project -> "npx expo reset-project"
### Day 1 (Introduction and setup)

- Definations

1) Native app → An app built specifically for one operating system using its native language and tools. (Example: Swift for iOS, Kotlin for Android)

2) PWA (Progressive Web Application) → A website that behaves like a mobile app and can be installed from a browser. (Example: Starbucks PWA)

3) Cross-platform app → A single codebase that creates native apps for multiple platforms. (Example: React Native app)

4) Hybrid app → A web app wrapped inside a native container so it can run as a mobile app. (Example: Ionic app)

- create an expo app

```
npx create-expo-app@latest myproject
```


### DAY 2


- Connecting react native app from PC (code) to mobile (renderd product).

1) In your phone, go to settings -> About Phone -> Build number -> Tap the Build number 7 times. Now you are in developer mode.

2) In your phone, go to settings -> Developer options -> enable USB debugging

3) On linux, install ADB
```
sudo apt install adb
```

4) Connect the phone and laptop with USB cable. Also ensure they are in either same WiFI or hotspot.

5) Verify the phone is connected
```
adb devices
```

6) In your project folder terminal, now start the expo using localhost
```
npx expo start --localhost
```

7) Scan the QR and DONE.

### Day 3

1) "index.tsx" is the entry file for our project
EXTRA (for making an emulator in Android Studio): more actoin, sdk manager, sdk platform, android 16, ok apply, sdk tools, dai le gareko tick hanne anu apply handene .

### Day 4

1) Asking for user input, buliding components


### DAY 5

1) navigation, folder structuring, passing params, splash screen, lucide react for icons

### DAY 6: Building, apk

- You will find you final apk file here -> " android/app/build/outputs/akp/release/app-realease.apk"
