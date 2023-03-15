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

React Element is a valid javascript object which is immutable so that I create a new React Element in every single time instead of changing or updating the React Element. When I use `React.createElement()` to create an React Element then that function is returning a valid javascript object.

After that I pass that object (React Element) into `ReactDOM.render()` function then that function is placing that React Element into a particular place or position of React DOM or virtual DOM (VDOM).

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
3. Automatic call `render()` method.
4. Must return JSX from `render()` method.
5. `Component` super class has a property called `props` which is an object and takes all the parameters passing in my class component.
6. So, accessing my props like `this.props.value` in my class component.
7. Never change `props` inside the components.
8. React component will re-render whenever `props` change.
9. If I change props then component will re-render for infinity times.
10. If I use some nested components and changing `props` of parent component so that all the children components and parent component will re-render after changing the `props` and goes to infinity loop or infinity times for re-rendering.

**Example:**

```js
import React from 'react'
import ReactDOM from 'react-dom'

class FirstComponent extends React.Component {
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

**Output:**

```js
Hello Class Component, And Hello Prince
```

## React State & Lifecycle of Class Component

1. `this.state` is **data that changes** which is a javascript object.
2. `this.props` is managed by outside the component and `this.state` is managed by inside the component and for the both times the component will re-render.
3. I can change the data of `this.state` using `this.setState()` method so it triggers to call `render()` method once again for changing `this.state` value.
4. `componentDidMount()` lifecycle event or lifecycle hook.
5. `componentDidMount()` runs after component has been rendered to the DOM. So, Calling flow will be like `Class_Component{} -> render() -> componentDidMount()`.
6. So, I call class component and then it call `render()` method and after that `componentDidMount()` method will call automatically. If I change `this.state` or `this.props` then again component will re-render by calling `render()` method and after that `componentDidMount()` method will call automatically and so on.
7. `componentWillUnmount()` another lifecycle event or lifecycle hook which unmount the component.

**Example: 01** If I set `this.state` using `this.props` then -

```js
import React from 'react'
import ReactDOM from 'react-dom'

class FirstComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.name
    }

    componentDidMount() {
        this.setState({ job: 'Senior Software Engineer', name: 'RSP' })
    }

    render() {
        return (
            <div>
                <h2>
                    Hello! {this.state.name} is a {this.state.job}.
                </h2>
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

**Output:**

```js
Hello! RSP Is A Senior Software Engineer.
```

**Example: 02** If `this.state` doesn't initialize using `this.props` (never ever change `this.props` inside the component) then -

```js
import React from 'react'
import ReactDOM from 'react-dom'

class FirstComponent extends React.Component {
    // Don't provide 'this' cause it's a property not using inside any method or constructor
    // Note: I can initialize 'this.state' object like 'example: 01' as well.
    state = { job: 'Software Engineer' }

    componentDidMount() {
        this.setState({ job: 'Senior Software Engineer' })
    }

    render() {
        return (
            <div>
                <h2>
                    Hello! {this.props.name} is a {this.state.job}.
                </h2>
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

**Output:**

```js
Hello! Prince Is A Senior Software Engineer.
```

**Important Notes:**

1. This will not re-render a component:

```js
this.state.comment = 'Hello'
```

instead, use `setState()`:

```js
this.setState({ comment: 'Hello' })
```

2. `this.props` and `this.state` may be updated asynchronously, I should not rely on their values for calculating the next state. For example, this code may fail to update the counter:

```js
this.setState({
    counter: this.state.counter + this.props.increment,
})
```

instead, use `setState()`:

```js
this.setState((state, props) => ({
    counter: state.counter + props.increment,
})
```

3. If I have multiple properties of `this.state` then if I update only one property at a time then other properties remain same or doesn't update themself.

4. While changing the props, the data will flow top-down or unidirectional or one-way flow.
