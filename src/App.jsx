import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import Taskbar from './components/Taskbar'
import { ListsData } from './data/listData'
function App() {

  return (
    <div className='h-screen'>
      <Navbar />
      <Taskbar />
      
      <div className='px-4 md:px-6 py-3 h-[81vh] w-screen flex overflow-y-hidden overflow-x-scroll gap-x-8'>
        {ListsData.map((list, key) => (
          <List list={list}/>
        ))}
      </div>
    </div>
  )
}

export default App
