<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Native Simple Components" style="height: 100px; width:130px;" />
</div>

# @viktorvojtek/react-native-simple-components

This package contains a collection of a few essential, customizable and reusable UI components built with React on top of React Native components.
These components are designed to be easy to use, highly flexible and allowing you to quickly and easily build beautiful user interfaces for your projects.

This package inherits react native components such as buttons, spinner, text, scrollview, and [more](https://reactnative.dev/docs/components-and-apis).
Each component is just a react native component with enhanced list of [style](https://reactnative.dev/docs/view-style-props) props, to directly style a component via props.

This approach leads to increased development speed when building UI without compromising app performance at all.
That being said we are building pure React Native components (best for performance), that can be styled as quickest as possible via props only.

As mentioned above, this package is really simple and easy to use. It's a great choice for beginners and experienced developers alike, when you need to build a UI quickly and easily, right out of the box. There is no configuration to be set up, no boilerplate code to write. And it comes with TypeScript support out of the box with all the types and beauty of intellisense.

I hope you find this components package useful in your projects.
If you have any questions or feedback, please don't hesitate to reach out to me. Thank you for using this package!

## Installation

**Make sure you have installed React Native of version 0.60 or higher.**

NPM:

```bash
$ npm -i @viktorvojtek/react-native-simple-components
```

Yarn:

```bash
$ yarn add @viktorvojtek/react-native-simple-components
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

| Component | Props                                                                                                                                                                                                                        | Description                                                                                                | Defaults                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Button    | [ Pressable props ](https://reactnative.dev/docs/pressable#props), <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                            | A basic button component                                                                                   |                                       |
| Center    | [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                                                                                                    | A component that centers it's children components both horizontally and vertically                         |                                       |
| Circle    | size: Number &#124; undefined, <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                                                                | A component that renders a circle                                                                          | size: 40<br>bgColor: '#d3d3d3'        |
| Checkbox  | children: ReactNode &#124; undefined, <br> isChecked: boolean &#124; undefined, <br> onChange: (isChecked: boolean) => void &#124; undefined, <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props) | A checkbox component                                                                                       |                                       |
| Divider   | color: Color &#124; String, <br> isVertical: boolean &#124; undefined, <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                        | A component that renders a divider line                                                                    | color: '#d3d3d3'<br>isVertical: false |
| Image     | [ Image props ](https://github.com/DylanVann/react-native-fast-image#properties), <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                             | Replacement for [ FastImage ](https://github.com/DylanVann/react-native-fast-image#---fastimage) component |                                       |
| Pressable | [ Pressable props ](https://reactnative.dev/docs/pressable#props), <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                            | Replacement for [ Pressable ](https://reactnative.dev/docs/pressable) component                            |                                       |
| Spinner   | [ ActivityIndicator props ](https://reactnative.dev/docs/activityindicator#props), <br> [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                            | Displays a circular loading indicator                                                                      |                                       |
| Stack     | [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                                                                                                    | Replacement for [ View ](https://reactnative.dev/docs/view) component                                      |                                       |
| StackX    | [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                                                                                                    | A Stack component rendering it's children components horizontally by default                               |                                       |
| StackY    | [ View Style props ](https://reactnative.dev/docs/view-style-props#props)                                                                                                                                                    | A Stack component rendering it's children components vertically by default                                 |                                       |
| Text      | [ Text props ](https://reactnative.dev/docs/text#props), <br> [ Text Style props ](https://reactnative.dev/docs/text-style-props#props)                                                                                      | Replacement for [ Text ](https://reactnative.dev/docs/text) component                                      |                                       |
| TextInput | [ TextInput props ](https://reactnative.dev/docs/textinput#props), <br> [ TextInput Style props ](https://reactnative.dev/docs/textinput-style-props#props)                                                                  | Replacement for [ TextInput ](https://reactnative.dev/docs/textinput) component                            |                                       |

### Shorthand Props

| Prop Name | Description        | Type                                  | Default   |
| --------- | ------------------ | ------------------------------------- | --------- |
| bgColor   | Background color   | Color &#124; String &#124; undefined  | '#d3d3d3' |
| m         | Margin             | Number &#124; String &#124; undefined | 0         |
| mt        | Margin top         | Number &#124; String &#124; undefined | 0         |
| mr        | Margin right       | Number &#124; String &#124; undefined | 0         |
| mb        | Margin bottom      | Number &#124; String &#124; undefined | 0         |
| ml        | Margin left        | Number &#124; String &#124; undefined | 0         |
| mx        | Margin horizontal  | Number &#124; String &#124; undefined | 0         |
| my        | Margin vertical    | Number &#124; String &#124; undefined | 0         |
|           |                    |                                       |           |
| p         | Padding            | Number &#124; String &#124; undefined | 0         |
| pt        | Padding top        | Number &#124; String &#124; undefined | 0         |
| pr        | Padding right      | Number &#124; String &#124; undefined | 0         |
| pb        | Padding bottom     | Number &#124; String &#124; undefined | 0         |
| pl        | Padding left       | Number &#124; String &#124; undefined | 0         |
| px        | Padding horizontal | Number &#124; String &#124; undefined | 0         |
| py        | Padding vertical   | Number &#124; String &#124; undefined | 0         |

**Note:** _All shorthand props can be used with all components such as: Button, Center, Circle, Divider, Image, Pressable, Spinner, Stack, StackX, StackY, Text, TextInput_

**Note:** _style prop still works as all othern React Native props and APIS for related components_
