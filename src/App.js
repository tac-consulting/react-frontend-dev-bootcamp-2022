import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/Card';
import users from './components/Card/card';
import Exstate from './Exstate';
import Weather from './components/Weather';

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
      
      {users.map((item) =>  {
        return <User key={item.id} id={item.id} username={item.username} />})}
         
        <Exstate/>
        <Weather/>
    </div>
  );
}

export default App;
