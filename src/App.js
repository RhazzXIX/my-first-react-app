import "./App.css";
import MyComponent from "./components/firstComponent";
import { Component } from "react";
import Counter from "./components/Lifecycle";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// function formatAudience (audience) {
//   return `${audience.type} ${audience.scope}`
// }

// const audience = {
//   type: "Up-skilling",
//   scope: "World!"
// }

// function FirstComponent (props) {
//   return <h1>Hello {props.name}</h1>
// }

// const GitHub = () => (<a href='https://github.com/RhazzXIX'>GitHub Profile</a>)

// function App() {
//   return (
//     <div className="App">
//       <FirstComponent name={formatAudience(audience)} />
//       <FirstComponent name="RhazzIX" />
//       <GitHub />
//       <MyComponent title="React" />
//     </div>
//   );
// }

// function onClickBtn () {

//   console.log('Button has bees clicked!')
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//   }

//   onClickBtn(){
//     console.log('Button has bees clicked!')
//   }

//   render() {
//     return (
//     <div className='App'>
//       <MyComponent title="React" onButtonClicked={this.onClickBtn} />
//     </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };

//     this.countUp = this.countUp.bind(this);
//   }

//   countUp() {
//     this.setState({
//       count: this.state.count + 1,
//       name: "Fifo",
//     });
//     console.log(this);
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.countUp}>Click Me!</button>
//         <p>{this.state.count}</p>
//         <p>{this.state.name}</p>
//       </div>
//     );
//   }
// }

// class DemoComponent extends Component {
//   render() {
//     const {user, scope} = this.props
//     return(
//       <div className="App">
//         <h2>Hello {user} {scope}!</h2>
//         <h3>Never ending pursue for improvement!</h3>
//       </div>
//     )
//   }
// }

// function DemoComponent(props) {
//   const { user, scope } = props;
//   return (
//     <div className="App">
//       <h2>
//         Hello {user} {scope}!
//       </h2>
//       <h3>Never ending pursue for improvement!</h3>
//     </div>
//   );
// }

// function Child(props) {
//   console.log(props)
//   return (
//     <div>
//       <h2>Hello, {props.name}</h2>
//       <h3>You are inside Child Component</h3>
//       <h3>Your user id is: {props.userId}</h3>
//     </div>
//   )
// }

// export { DemoComponent };
// export { Child }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mount: true,
//       ignoreProp: 0,
//       seed: 40,
//       showErrorComponent: false
//     };

//     this.mountCounter = () => {
//       this.setState({ mount: true });
//     };
//     this.unmountCounter = () => {
//       this.setState({ mount: false });
//     };

//     this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
//     this.seedGenerator = () =>
//       this.setState({ seed: Number.parseInt(Math.random() * 100) });
//     this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.mountCounter} disabled={this.state.mount}>
//           Mount Counter
//         </button>
//         <button onClick={this.unmountCounter} disabled={!this.state.mount}>
//           Unmount Counter
//         </button>
//         <button onClick={this.ignoreProp}>Ignore Prop</button>
//         <button onClick={this.seedGenerator}>Generate Seed</button>
//         <button onClick={this.toggleError}>Toggle Error</button>
//         {this.state.mount ? (
//           <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed}  showErrorComponent={this.state.showErrorComponent} />
//         ) : null}
//       </div>
//     );
//   }
// }

// #### React Hooks

// const App = () => {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count + 1)
//   }

//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// const App = () => {
//   const [color, setColor] = useState('black');

//   useEffect(() => {

//     const changeColorOnClick = (e) => {
//       e.stopPropagation()
//       if(e.target.id !== "myDiv") return
//       if(color === 'black') {
//         setColor('red');
//       } else {
//         setColor('black')
//       }
//     };
//     document.addEventListener('click', changeColorOnClick);

//     return () => {
//       document.removeEventListener('click', changeColorOnClick)
//     }
//   }, [color]);

//   return(
//     <div>
//       <div id="myDiv"
//       style={{
//         color: "white",
//         width:"100px",
//         height: "100px",
//         position: "absolute",
//         left: "50%",
//         top: "50%",
//         backgroundColor: color,
//       }}
//       >
//         This div can change color. Click on me!
//       </div>
//     </div>
//   )

// }

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [imageSRC, setImageSRC] = useState('')
//   useEffect(() => {
//     document.title = `You clicked ${count} times.`
//   });
//   const handleSubmitImage = (e) => {
//     setImageSRC(URL.createObjectURL(e.target.files[0]))
//   }
//   console.log(imageSRC)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>

//       <input type={'file'} onChange={handleSubmitImage} />
//       <img src={imageSRC} alt='test'/>
//     </div>
//   )
// }

// const App = () => {
//   const [id,setId] = useState('test')

//   return (
//     <div>
//       <Link to={'./profile'}>
//         <h1>Hello from App</h1>
//       </Link>
//     </div>
//   );
// };

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');
  
  const clickHandler = () => {
    setHeading('Radical Rhinos')
  };

  return(
    <>
      <button type="button" onClick={clickHandler}>Click Me</button>
      <h1>{heading}</h1>
    </>
  )
}

export default App;
