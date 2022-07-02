import './App.css'
import Characters from './components/Characters'
import Footer from './components/Footer'

// Main Component

function App() {

  return (
    <div className='App bg-slate-800 absolute font-sans'>
      <main className='main-container'>
        <h1 className=' text-4xl text-gray-50 font-bold mt-20 mb-2 text-center'>Rick and Morty API</h1>
        <p className='text-gray-50 text-center mb-24'>Here you can find a lot of information about the serie Rick and Morty</p>
        <Characters />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

