# `Button`

___Quick Nav___  
[Boring UI](../../..) &#10132; [Components](../..) &#10132; [Atoms](..)

A simple button component.

```jsx
<Button 
    type="primary" 
    size="default" 
    link="https://brr.dev"
>
    Button text
</Button>
```

| Option      | Type                                                               | Default   | Description                                               |
|-------------|--------------------------------------------------------------------|-----------|-----------------------------------------------------------|
| `type`      | `primary`,<br/>`secondary`,<br/>`ghost`,<br/>`text`                | `primary` | Set the type of the button.                               |
| `size`      | `default`,<br/>`small`,<br/>`large`,<br/>`x-large`,<br/>`2x-large` | `default` | Change the size of the button.                            |
| `link`      | `string`                                                           | none      | Optionally pass a URL to open when the button is pressed. |
| `iconLeft`  | `React.ReactNode`                                                  | none      | Add an icon to the left side of the button                |
| `iconRight` | `React.ReactNode`                                                  | none      | Add an icon to the right side of the button               |
