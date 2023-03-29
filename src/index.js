import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DemoComponent, Child } from "./App";
import Counter from "./components/Lifecycle";
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<StrictMode>{RouteSwitch}</StrictMode>);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function tick () {
//   const element = (
//     <div className="App">
//       <h1>Hello Up-skilling World!</h1>
//       <p>It is {new Date().toLocaleTimeString()}</p>
//     </div>
//   )
//   root.render(element)
// }

// function Clock(props) {
//   return (
//     <div className="App">
//       <h1>Hello Up-skilling World!</h1>
//       <h2> it is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       date: new Date(),
//     }
//   }

//   tick() {
//     this.setState({
//         date: new Date()
//       }
//     )
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div className="App">
//        <h1>Hello Up-skilling World!</h1>
//        <h2> it is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }

// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);

// class MultiClocks extends Component {
//   render() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     )
//   }
// }
// const audience = {
//   user: "Up-skilling",
//   scope: "World"
// }
// const div = document.createElement('div');
// div.textContent = 'test'

// root.render(<DemoComponent {...audience}/>)

// function Parent (props) {
//   return(
//     <div>
//       <h2>You are inside Parent Component</h2>
//       <Child name="User" userId="55555" />
//     </div>
//   )
// }

// root.render(<Parent />)

// class ExampleClass extends Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           The name of the pokemons are {this.props.names.map(function nameIterator(item, i, arr) {
//             if (i === (arr.length - 1)) return " and " + item;
//             return " " + item;
//           })}
//         </h1>
//       </div>
//     );
//   }
// }

// ExampleClass.defaultProps = {
//   names: ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"],
// };

// class MyClass extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: 'Hello!'
//     }
//   }

//   updateState () {
//     this.setState({
//       text: 'Hi!'
//     })
//   }

//   componentDidMount() {
//     setTimeout(
//       () => this.updateState(),
//       5000
//     )
//   }

//   render () {
//     return (
//       <div className="App">
//         <h1>{this.state.text} Up-skilling World!</h1>
//       </div>
//     )
//   }

// }

// class TestComponent extends Component {
//   // state = {
//   //   name: 'John',
//   // };
//   render () {
//     return <h1 className="App">Hello {this.props.name}!</h1>
//   }
// }

// const TestFunction = () => {
//   const name = 'Rubic';
//   console.log(`Hey ${name}!`)
// }

// root.render(<TestComponent name='Mike' />);
// TestFunction();

// function showTime() {
//   const myElement = (
//     <div className="App">
//       <h1>Welcome to Up-skilling World!</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   root.render(myElement);
// }

// // setInterval(showTime, 1000)

// class Clock extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     }

//   }

//   tick() {
//     this.setState(
//       {
//         time: new Date().toLocaleTimeString()
//       }
//     )
//   }

//   componentDidMount() {
//     this.tick = this.tick.bind(this);
//     this.timer = setInterval( this.tick
//     , 1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return(
//     <div className="App">
//       <h1>{this.props.greeting}</h1>
//       <h2>{this.state.time}</h2>
//     </div>
//     )
//   }
// }

// root.render(<Clock greeting = "Hello Up-skilling World!" />);
