import React from 'react'
import Header from './components/Header'
import TextCarousel from './components/TextCarousel'
import CircularText from './components/CircularText '

function App() {
  return (
    <div>
      <Header />
      <main className="h-[calc(100vh-64px)] grid place-items-center relative overflow-hidden">
        <TextCarousel />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,1)_1%,rgba(255,255,255,0)_15%,rgba(255,255,255,0)_85%,rgba(255,255,255,1)_99%)]"></div>
        <div className="absolute max-w-370 mx-auto bottom-5 w-full grid grid-cols-2 gap-4 font-audiowide">
          <p className='text-xl leading-6 flex flex-col justify-end'>Rewriting the rules of footwear, one step at a time <br />
            Where creativity meets precision and nothing is off-limits <br />
            Each pair is engineered to stand out, not blend in <br />
            Made for those who walk like the world is watching</p>
          <div className=' flex justify-between items-end'>
            <div>© 2026 HERIK</div>
            <CircularText
              text="STYLE*KICKS*CUSTOMIZE*"
              onHover="slowDown"
              spinDuration={10}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App