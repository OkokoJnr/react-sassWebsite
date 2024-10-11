import NavigationBar from './components/NavigationBar/NavigationBar'
import Hero from './components/Hero/Hero';
import Video from './components/VideoSection/Video';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Faq from './components/faq/Faq';
import './App.css'

function App() {
console.log('App components')
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Video/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
    </>
  )
}

export default App
