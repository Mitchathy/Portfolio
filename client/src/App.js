import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import Projects from './PortfolioContainer/Projects/Projects';
import Footer from './PortfolioContainer/Footer/Footer';

function App() {

let attempts = 4;
let maxNumberOfMessages = 3;
let numberOfMessages = 0;

function getMessageString (attempts) {
  console.log(attempts)
  let messageString = '';
  for (let i = 1; i <= attempts && i <= maxNumberOfMessages; i++) {
    messageString += 'Attempt' + i + '\n';
  }
  return messageString
}
function displayMessages (messageString) {
  if(messageString.length && numberOfMessages) {
    console.log(messageString)
  }
}
function showAttempts(numAttempts) {
  const messageString = getMessageString(numAttempts)
  displayMessages(messageString)
}
console.log(showAttempts(attempts))
 
  return (
    <div className="App">
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
