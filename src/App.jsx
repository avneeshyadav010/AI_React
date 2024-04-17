import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Dictaphone from './Components/Dictaphone'


function App() {

  return (
    <>
      <img src='https://relaxed-lolly-ba2f91.netlify.app/src/assets/BG.jpg' className='header' alt="Header-image" />
      <div className='BG'>
        <div className="header_cards">
        <div className="card card_margin" style={{ width: "23rem", height: "10rem", padding: "0" }}>
            <div className="card-body">
              <h5 className="card-title card_h">Latest News</h5>
              <h5 className="card-title card_h">Try saying:</h5>
              <p className="card-text card_p">latest news</p>
            </div>
          </div>
          <div className="card card_margin" style={{ width: "23rem", height: "10rem", padding: "0" }}>
            <div className="card-body">
              <h5 className="card-title card_h">News by Sources</h5>
              <p className="card-text card_p">Sources:</p>
              <p className="card-text card_p">CNN, BBC, FOX</p>
              <h5 className="card-title card_h">Try saying:</h5>
              <p className="card-text card_p">CNN News</p>
            </div>
          </div>
          <div className="card card_margin" style={{ width: "23rem", height: "10rem", padding: "0" }}>
            <div className="card-body">
              <h5 className="card-title card_h">News by Category</h5>
              <p className="card-text card_p">Category:</p>
              <p className="card-text card_p">business, entertainment, general, health, science, sports, technology</p>
              <h5 className="card-title card_h">Try saying:</h5>
              <p className="card-text card_p">business news</p>
            </div>
          </div>
        </div>
        <Dictaphone />
      </div>
    </>
  )
}

export default App
