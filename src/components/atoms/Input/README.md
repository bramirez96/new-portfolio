# `Input`

___Quick Nav___  
[Boring UI](../../..) &#10132; [Components](../..) &#10132; [Atoms](..)

A custom-built input component with careful attention paid to optimizing user experience.

```jsx
<Input
    required
    label="First and last name"
    placeholder="Enter name here..."
    size="x-large"
    iconLeft={<AiOutlineUser />}
/>
```

| Option        | Type                                                               | Default   | Description                                                                                                                  |
|---------------|--------------------------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| `label`       | `string`                                                           | none      | Add a label to your input                                                                                                    |
| `required`    | `boolean`                                                          | `false`   | If true, input will show an error when empty. If label is not set and field is required, the "Required" label will be added. |
| `placeholder` | `string`                                                           | none      | Add placeholder text to your input                                                                                           | 
| `size`        | `default`,<br/>`small`,<br/>`large`,<br/>`x-large`,<br/>`2x-large` | `default` | Change the size of the input.                                                                                                |
| `iconLeft`    | `React.ReactNode`                                                  | none      | Add an icon to the left side of the input                                                                                    |
| `iconRight`   | `React.ReactNode`                                                  | none      | Add an icon to the right side of the input                                                                                   |
| `inputRef`    | `React.RefObject`                                                  | none      | Optionally pass an existing ref object for the input element. Uses a newly-created ref if not set                            |

You can also pass various props to the HTML elements that compose the custom input using the following options:

| Options            | Passed to                                                                |
|--------------------|--------------------------------------------------------------------------|
| `wrapperProps`     | Passed to the outer `label` element wrapping the `Input` component.      |
| `labelProps`       | Passed to the inner label element with the label text                    |
| `fieldProps`   | Passed to the wrapper `div` that's styled to resemble an `input` element |
| `leftBlockProps`   | Passed to the wrapper `div` around the left block of content             |
| `middleBlockProps` | Passed to the wrapper `div` around the middle block of content           |
| `rightBlockProps`  | Passed to the wrapper `div` around the right block of content            |
