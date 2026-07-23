
import './App.css'
import AddMessage from './components/AddMessage.jsx'
import SideBar from './components/SideBar.jsx'

function App() {

  return (
    <>
      <div id="container">
        <SideBar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    </>
  )
}

export default App
