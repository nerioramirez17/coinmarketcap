# Challenge

Challenge App
Este repositorio contiene la aplicación móvil "Challenge", desarrollada en React Native.

# Requisitos

Debes tener instalado:

- Node.js: Version LTS, yo tengo la 18
- React Native CLI
- Yarn
- Java 17, para actualizar `brew install --cask zulu@17` y actualizar el `JAVA_HOME` del bash

# Instalacion

```bash
# Clonar repo
git clone https://github.com/nerioramirez17/coinmarketcap.git
cd coinmarketcap

# Instalar las dependencias
yarn install
yarn pod:install
```

# Correr Proyecto

```bash
# Iniciar la aplicación
yarn start
```

Despues

```bash
# Iniciar la aplicación en iOS
i

# Iniciar la aplicación en Android
a
```

Sino puedes hacer

```bash
# Iniciar la aplicación en iOS
yarn ios

# Iniciar la aplicación en Android
yarn android
```

# Tecnologías Utilizadas

### React Native:

Framework de desarrollo móvil basado en React.
https://reactnative.dev/

### Navegacion

https://reactnavigation.org/docs/getting-started/

- **React Navigation (`@react-navigation/native`, `react-native-safe-area-context`, `@react-navigation/native-stack`, `react-native-screens`, `react-native-gesture-handler`, `react-native-masked-view/masked-view`)**

### Autenticacion

- **Google Sign-In (`@react-native-google-signin/google-signin`)**

## Storage

- **MMKV (`react-native-mmkv`)**

### API CALL

- **Axios (`axios`)**

### Lodash (debounce)

- **Lodash (`lodash`)**

### SVG

- **React Native SVG (`react-native-svg`, `react-native-svg-transformer`)**

### UI

- **Styled Components (, `styled-components`)**

### Testing

- **Testing Library (`@testing-library/react-native`, `@testing-library/react-hooks`)**

### Debugger

- **React native debugger (, `react-native-debugger`)**

### ENV

- **Env (, `react-native-config`)**
