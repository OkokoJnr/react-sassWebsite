import NavigationBar from './components/NavigationBar/NavigationBar'
import Hero from './components/Hero/Hero';
import Video from './components/VideoSection/Video';
import Testimonials from './components/Testimonials/Testimonials';

import './App.css'

function App() {
console.log('App components')
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Video/>
      <Testimonials/>
    </>
  )
}

export default App
