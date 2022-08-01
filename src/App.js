import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const headname="This is Header";
const footname="This is Footer";

const author="siri";
const lap="mac";

function App() {
  return (
    <div>
      {/* <h1>hello</h1> */}
      <Header headname={headname} author={author} lap={lap}/>
      <Footer footname={footname} author={author} lap={lap}/>
    </div>
  );
}

export default App;
