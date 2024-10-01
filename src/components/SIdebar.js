import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SIdebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  //early return
  if(!isMenuOpen) return null
  return (
    <div className='shadow-lg w-[200px]  sticky top-20 z-0'>
      <div className='shadow-lg ml-2'>
     
     <ul>
     <Link to='/' className='flex'>
     <li  className='flex mt-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>Home</li></Link>
      <li className='flex mt-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>Shorts</li>
      <li className='flex mt-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>Videos</li>
      <li className='flex mt-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path></g></svg>Live</li>
     </ul>
      </div>
      <div className='shadow-lg ml-2'>
      <h1 className='font-bold flex mt-1 items-center'> <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>Subscriptions</h1>
     <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
      </div>
      <div className='shadow-lg ml-2'>
      <h1 className='font-bold'>Playlist</h1>
     <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
      </div>
      <div className='shadow-lg ml-2'>
      <h1 className='font-bold'>Playlist</h1>
     <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
      </div>
      <div className='shadow-lg ml-2'>
      <h1 className='font-bold'>Playlist</h1>
     <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
      </div>
      <div className='shadow-lg ml-2'>
      <h1 className='font-bold'>Playlist</h1>
     <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
      </div>
    </div>
  )
}

export default SIdebar
