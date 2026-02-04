import SlideDeck from './components/SlideDeck.jsx'
import TitleSlide from './slides/TitleSlide.jsx'
import Slide00 from './slides/Slide00.jsx'
import Slide02 from './slides/Slide02.jsx'
import Slide04 from './slides/Slide04.jsx'
import Slide05 from './slides/Slide05.jsx'
import Slide06 from './slides/Slide06.jsx'
import Slide07 from './slides/Slide07.jsx'
import Slide08 from './slides/Slide08.jsx'
import Slide11 from './slides/Slide11.jsx'
import Slide12 from './slides/Slide12.jsx'
import Slide13 from './slides/Slide13.jsx'
import Slide14 from './slides/Slide14.jsx'
import Slide15 from './slides/Slide15.jsx'
import Slide16 from './slides/Slide16.jsx'
import Slide17 from './slides/Slide17.jsx'

const slides = [
  TitleSlide,
  Slide00,
  Slide02,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17
]

export default function App() {
  return <SlideDeck slides={slides} />
}

