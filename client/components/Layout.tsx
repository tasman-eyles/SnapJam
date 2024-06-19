import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Snapjam - without Fruits!</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
