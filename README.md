# expo-starter

An opinionated Expo starter template with Expo Router, Reanimated, Gesture Handler, and a clean tab-based layout.

## Use this template

```bash
npx create-expo-app@latest my-app --template github:enes-cetin/expo-starter
```

Replace `enes-cetin` with your GitHub username after you push this repo.

## Stack

- [Expo](https://expo.dev) ~57
- [Expo Router](https://expo.github.io/router) (file-based routing)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) 4
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) 2
- [@expo/ui](https://docs.expo.dev/ui/overview/) (native UI primitives)
- TypeScript, Prettier

## Get started

```bash
npm install   # or yarn

npx expo start
```

Press `i` for iOS simulator, `a` for Android, or scan the QR code with Expo Go.

## Project structure

```
src/
  app/          # Expo Router screens & layouts
  components/   # Shared UI components
  constants/    # Theme tokens
  hooks/        # Custom hooks
assets/         # Images and icons
```
