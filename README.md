# Chef App - Smartchef project 

![React-Native](https://blog.launchdarkly.com/wp-content/uploads/2019/05/react-native-workshop-1024x538.jpg "React-Native")

## Development Setup
1. Node v12.10.0 and React Native v0.61
2. Be careful with local.properties file in /android folder. You need this file to specify Android SDK location. Example of this file content:

```
sdk.dir = /home/vapedraza/Android/Sdk
```
3. Execute yarn on root project location to install all dependencies when clone this project.
```
$ sudo yarn
``` 
4. Run the app on your phone, see: https://facebook.github.io/react-native/docs/running-on-device how to do this
5. I recommend to start server first to run-android:
```
$ sudo yarn start
$ sudo react-native run-android
```
This will take so much time at first time while compile all resources.

## Project for Universidad El Bosque
#### Developers:
##### Daniel Mauricio Corrales Martínez - dmcorrales.me
##### Víctor Andrés Pedraza León - vapedraza.com