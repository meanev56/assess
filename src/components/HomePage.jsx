import React from 'react'
import NavbarMenu from '../sections/NavbarMenu'
import Header from '../sections/home/Header'

const HomePage = () => {
  return (
    <div>
      <NavbarMenu />
      <div className="relative flex min-h-screen flex-row overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="absolute top-[10px] h-[400px] bg-blue-600 ">
            <div className='left-[20px]'>
                <p className="left-[20px] top-[20px] relative text-[50px] font-bold text-white">Become smarter in just 5 minutes</p>
                <p className='text-white left-[20px] relative top-[40px]'>Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for free.</p>
            </div>
        <div>
      <form className='top-[80px] relative'>
        <label for="default-search" className="relative sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="youremail@domain.com" required />
        </div>
        <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
      </form>
    </div>
  </div>

  <div className="relative left-[400px] flex-col">
    <img src="" />
    <p>Bossy</p>
    <p>Therapists, Coaches, and Masterminds: Building Your Personal Support Team</p>
    <p>Today, Tara &amp; Katie debate the age-old question: Do I need a
        therapist...or an executive coach?</p>
  </div>
</div>

      
<Header />

</div>
  )
}

export default HomePage
