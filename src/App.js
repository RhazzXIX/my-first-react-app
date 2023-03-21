import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/firstComponent";
import { Component } from "react";
import Counter from "./components/Lifecycle";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
    };

    this.mountCounter = () => {
      this.setState({ mount: true });
    };
    this.unmountCounter = () => {
      this.setState({ mount: false });
    };

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed}  showErrorComponent={this.state.showErrorComponent} />
        ) : null}
      </div>
    );
  }
}

export default App;
// export { DemoComponent };

// export { Child }
