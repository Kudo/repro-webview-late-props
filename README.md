# Repro

A repro to demonstrate react-native-webview loading too early before setting other props

# How-to

Try to reproduce the `net::ERR_ACCESS_DENIED` error

```sh
$ bun install
$ npx expo run:android
```

Apply the patch and try again

```sh
$ patch -d node_modules/react-native-webview < patches/react-native-webview@13.12.3.patch
$ npx expo run:android
```
