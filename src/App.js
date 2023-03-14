import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/firstComponent";
import { Component } from "react";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
      name: "Fifo",
    });
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

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

function DemoComponent(props) {
  const { user, scope } = props;
  return (
    <div className="App">
      <h2>
        Hello {user} {scope}!
      </h2>
      <h3>Never ending pursue for improvement!</h3>
    </div>
  );
}

function Child(props) {
  console.log(props)
  return (
    <div>
      <h2>Hello, {props.name}</h2>
      <h3>You are inside Child Component</h3>
      <h3>Your user id is: {props.userId}</h3>
    </div>
  )
}

export default App;
export { DemoComponent };

export { Child }
