# expo-starter

An opinionated Expo starter template with Expo Router, Reanimated, Gesture Handler, and a clean tab-based layout.

## Use this template

```bash
npx create-expo-app@latest my-app --template @eness_ctnn/expo-starter
```

## Stack

- [Expo](https://expo.dev) ~57
- [Expo Router](https://expo.github.io/router) (file-based routing)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) 4
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) 3
- [@expo/ui](https://docs.expo.dev/ui/overview/) (native UI primitives)
- TypeScript, Prettier, ESLint
- Yarn v4 (node-modules linker)

## Get started

```bash
yarn install

npx expo start
```

Press `i` for iOS simulator, `a` for Android, or scan the QR code with Expo Go.

## Project structure

```
app/            # Expo Router screens & layouts
components/     # Shared UI components
constants/      # Theme tokens
hooks/          # Custom hooks
assets/         # Images and icons
```

## Code quality

- ESLint with `eslint-config-expo`, import sorting, unused import detection, and type-aware rules
- Prettier with single quotes
- Run `yarn lint` to check, `yarn lint --fix` to auto-fix
