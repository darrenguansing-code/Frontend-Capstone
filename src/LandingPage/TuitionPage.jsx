import React from 'react'
import TuitionBanner from '../Components/LandingpageComponents/Tuition/TuitionBanner'
import TuitionFees from '../Components/LandingpageComponents/Tuition/TuitionFees'
import LoginHeader from '../Components/LoginHeader'
import Footer from '../Components/Footer'

const TuitionPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <LoginHeader />

      <main className="flex w-full flex-1 flex-col bg-egg px-3 pt-4 pb-10 font-[Poppins] text-egg-dark sm:px-5 sm:pt-6 sm:pb-12 lg:px-6 lg:pt-7 lg:pb-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10">
          <TuitionBanner />

          <TuitionFees />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TuitionPage