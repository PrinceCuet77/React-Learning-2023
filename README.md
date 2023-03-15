## Corresponding Projects

#### useState

1. Birthday Reminder

#### useEffect and Conditional Rendering

2. Tours
3. Reviews
4. Accordion
5. Menu
6. Tabs
7. Slider

#### Forms

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext

14. Cart

#### React Router

15. Cocktails

# React Learning - Sumit Tutorial

## React.createElement

React Element is a valid javascript object which is immutable so that I create a new React Element in every single time instead of changing or updating the React Element. When I use `React.createElement` to create an React Element then that function is returning a valid javascript object.

After that I pass that object (React Element) into `ReactDOM.render` function then that function is placing that React Element into a particular place or position of React DOM or virtual DOM (VDOM).

That virtual DOM is like javascript object. That object or virtual DOM is comparing the previous condition of object (before adding new React Element) and present condition of object (After adding new React Element) and changing only that portion of DOM where it finds the changes between the two condition.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// The following line creates React Element (Immutable).
const element = React.createElement('h1', null, 'Hello World')

// ReactDOM shows the React Element by rendering.
// 1st parameter: Which React Element I want to show in browser or browser DOM
// 2nd parameter: Where I want to show that specific React Element.
ReactDOM.render(element, document.getElementById('root'))
```

### NOTE:

So, `element` is an object something like:

```js
const element = {
    type: 'h1',
    props: {
        children: 'Hello World',
    },
}
```

Creates DOM like:

```js
const element1 = <h2>Hello World</h2>
```

Babble converts the previous line like (Creates React or virtual DOM (VDOM)):

```js
const element1 = React.createElement('h2', null, 'Hello World')
```

Complex design:

```js
const element2 = (
    <h1 className='heading' tabIndex={index}>
        <span className='text'>Hello World</span>
        <img src='' />
    </h1>
)
```

So, `element2` is an object something like the following line and react create that object and understand that type of object when I used `React.createElement`:

```js
const element = {
    type: 'h1',
    props: {
        className: 'heading',
        tabIndex: 0,
        children: [
            {
                type: 'span',
                props: {
                    className: 'text',
                    children: 'Hello World',
                },
            },
            {
                type: 'img',
                props: {
                    src: '',
                },
            },
        ],
    },
}
```

## Class Component

1. Class Component is a statefull component and more powerfull then functional component.
2. Must extend `Component` class component and use like `React.Component`.
3. Automatic call `render` method.
4. Must return JSX from `render` method.
5. `Component` super class has a property called `props` which is an object and takes all the parameters passing in my class component.
6. So, accessing my props like `this.props.value` in my class component.
7. Never change ```props``` inside the components.
8. React component will re-render whenever ```props``` change.
9. If I change props then component will re-render for infinity times.
10. If I use some nested components and changing ```props``` of parent component so that all the children components and parent component will re-render after changing the  ```props``` and goes to infinity loop or infinity times for re-rendering.

```js
import React from 'react'
import ReactDOM from 'react-dom'

export class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello Class Component, and Hello {this.props.name}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <FirstComponent name={'Prince'} />
    </React.StrictMode>,
    document.getElementById('root')
)
```

Output:

```js
Hello Class Component, And Hello Prince
```
