# react-hooks-modal

[![NPMVersion](https://badgen.net/npm/v/react-hooks-modal)](https://npm.im/react-hooks-modal)

> React Hooks for Modal

## Install

```
npm i react-hooks-modal
```

## The Gist

```jsx
import { useModal } from 'react-hooks-modal'
import { Button, Modal } from 'antd'

function App() {
  const { visible, show, hide } = useModal()
  return (
    <Button onClick={show}>Show Modal</Button>
    <React.Fragment>
      <Modal
        visible={visible}
        onClose={hide}
      >
        <span>A modal</span>
      </Modal>
    </React.Fragment>
  )
}
```

## License

MIT &copy; Randy
