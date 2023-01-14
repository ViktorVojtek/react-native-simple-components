# @viktorvojtek/react-native-simple-components

This package contains a collection of a few essential, customizable and reusable UI components built with React on top of React Native components.
These components are designed to be easy to use, highly flexible and allowing you to quickly and easily build beautiful user interfaces for your projects.

This package inherits react native components such as buttons, spinner, text, scrollview, and [more](https://reactnative.dev/docs/components-and-apis).
Each component is just a react native component with enhanced [style props](https://reactnative.dev/docs/view-style-props), to directly style a component via props.
This approuch could lead to increased development speed when building UI.

As mentioned above, this package is really simple and easy to use. It's a great choice for beginners and experienced developers alike, when you need to build a UI quickly and easily, right out of the box. There is no configuration to be set up, no boilerplate code to write.

I hope you find this components package useful in your projects.
If you have any questions or feedback, please don't hesitate to reach out to me. Thank you for using this package!


## Installation

Yarn:
```
yarn add @viktorvojtek/react-native-simple-components
```

## Documentation

### Usage Example

```
import { Button, Stack, Text } from '@viktorvojtek/react-native-simple-components';

const App = () => {
  return (
    <Stack
      flexDirection="column"
      backgroundColor="red"
      borderWidth={1}
      borderColor="blue"
    >
      <Button
        onPress={() => console.log('Button pressed')}
        backgroundColor="green"
        borderRadius={10}
        padding={10}
      >
        <Text color="white">Button</Text>
      </Button>
    </Stack>
  );
};

```

### Components

| Component   | Props                                                           | Description     |
| ----------- | --------------------------------------------------------------- | --------------- |
| Button      | [Pressable props](https://reactnative.dev/docs/pressable#props), <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A basic button component |
| Center      | [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A component that centers it's children components both horizontally and vertically |
| Circle      | size: Number &#124; undefined, <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A component that renders a circle |
| Checkbox    | children: ReactNode &#124; undefined, <br> isChecked: boolean &#124; undefined, <br> onChange: (isChecked: boolean) => void &#124; undefined, <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A checkbox component |
| Divider     | color: Color &#124; String, <br> isVertical: boolean &#124; undefined, <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A component that renders a divider line |
| Image       | [Image props](https://github.com/DylanVann/react-native-fast-image#properties), <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | Replacement for [FastImage](https://github.com/DylanVann/react-native-fast-image#---fastimage) component |
| ScrollView  | [ScrollView props](https://reactnative.dev/docs/scrollview#props), <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | [ScrollView](https://reactnative.dev/docs/scrollview) component description |
| Spinner     | [ActivityIndicator props](https://reactnative.dev/docs/activityindicator#props), <br> [View Style props](https://reactnative.dev/docs/view-style-props#props)                                    | Displays a circular loading indicator |
| Stack       | [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | Replacement for [View](https://reactnative.dev/docs/view) component |
| StackX      | [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A Stack component rendering it's children components horizontally by default |
| StackY      | [View Style props](https://reactnative.dev/docs/view-style-props#props)                                                         | A Stack component rendering it's children components vertically by default |
| Text        | [Text props](https://reactnative.dev/docs/text#props), <br> [Text Style props](https://reactnative.dev/docs/text-style-props#props)                                                         | Replacement for [Text](https://reactnative.dev/docs/text) component |
| TextInput   | [TextInput props](https://reactnative.dev/docs/textinput#props), <br> [Text Style props](https://reactnative.dev/docs/text-style-props#props)                                                         | Replacement for [TextInput](https://reactnative.dev/docs/textinput) component |