# React Popper

[![CircleCI](https://circleci.com/gh/d8660091/react-popper.svg?style=svg)](https://circleci.com/gh/d8660091/react-popper)
[![npm version](https://badge.fury.io/js/%40d8660091%2Freact-popper.svg)](https://badge.fury.io/js/%40d8660091%2Freact-popper)
[![dependencies Status](https://david-dm.org/d8660091/react-popper/status.svg)](https://david-dm.org/d8660091/react-popper)

React [popper.js](https://github.com/FezVrasta/popper.js) component.

**Features**:
* Easy to use, check the usage below.
* React to props change, re-render the popper when options change.
* Nestable, for example, there can be two popup windows respond to _mouseenter_ and _click_ events of a button separately.

[Try it](https://d8660091.github.io/react-popper/)

## Usage

Install with yarn:

``` shell
yarn add @d8660091/react-popper
```

Or npm:

``` shell
npm install @d8660091/react-popper -P
```

Import in your source file:

``` jsx
import Popper from '@d8660091/react-popper'

// A simple popper
<Popper
  options={{ 
    placement: 'bottom'
  }}
  renderRef={({ setReference, toggle }) => (
    <span ref={setReference} onClick={toggle}>
      Popover Trigger
    </span>
  )}>
  <div>Popper content</div>
</Popper>

// A nested popper
<Popper
  options={{
    placement: 'right',
  }}
  renderRef={({ setReference, open, close, isOpened }) => (
    <Popper
      options={{
        placement: 'bottom',
      }}
      renderRef={({
        setReference: setInnerReference,
        toggle: innerToggle,
        isOpened: isInnerOpened
      }) => (
        <button
          ref={el => {
            setReference(el)
            setInnerReference(el)
          }}
          onClick={() => {
            close()
            innerToggle()
          }}
          onMouseEnter={() => {
            !isInnerOpened && open()
          }}
          onMouseLeave={() => {
            close()
          }}>
          A button which triggers two popper, one on hover, one on click
        </button>
      )}>
      <div>
        On click inner popper.
      </div>
    </Popper>
  )}>
  <div>
    On hover outer popper content.
  </div>
</Popper>
```

Types (index.d.ts):

``` typescript
declare module '@d8660091/react-popper' {
  import { PopperOptions } from 'popper.js'
  import * as React from 'react'

  interface RenderProps extends PopperProps {
    setReference: React.Ref<HTMLElement>
    setPop: React.Ref<HTMLElement>
    isOpened: boolean
    open: () => void
    close: () => void
    toggle: () => void
  }

  type PopperProps = {
    renderRef: (props: RenderProps) => React.ReactNode
    renderPop?: (props: RenderProps) => React.ReactNode
    options?: PopperOptions
    children?: React.ReactNode
    canClickOutside?: Boolean // default: false
    style?: Object
    className?: string
    defaultIsOpened?: Boolean // default: false
  }

  const Popper: React.ComponentClass<PopperProps>

  export default Popper
}
```

* options: popper.js [options](https://popper.js.org/popper-documentation.html#defaults).
* renderRef: the function to render reference, i.e, the element used to position the popper.
* children: content inside the popper.
* canClickOutside: if true, popper will not hide itself when users click outside.
* style and className: goes to the popper instead of the reference.
* renderPop: if this function is set, the children, style and className will be ignored and the popper will be rendered using this function.
* defaultIsOpened: whether open popper when it mounts

## ClickableArea
You can click ClickableArea without closing popper, which is useful when you have an interactable Popper rendered by another parent Popper.

``` jsx
import { ClickableArea } from '@d8660091/react-popper'

<ClickableArea>
  clickable text
</ClickableArea>
```


[**Storybook**](https://github.com/d8660091/react-popper/blob/master/.storybook/index.js) - More usages, including specifying options, styles and nesting. You can also play with the components by live editing the options and placements.


