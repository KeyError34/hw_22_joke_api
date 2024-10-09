
import './App.css';
import Quote from './components/quote';
function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1>Random Dad Jokes</h1>
      <Quote />
    </div>
  );
}

export default App;
