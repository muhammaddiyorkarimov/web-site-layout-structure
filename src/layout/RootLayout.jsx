import { Outlet } from 'react-router-dom'
import './rootLayout.css'

function RootLayout() {
  return (
    <div className="root-layout">
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default RootLayout