import { } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
/* App.jsx acts as the global layout shell, rendering persistent components like <Header /> and <Footer />
on every page, while <Main /> serves as the page switcher that contains the React Router <Routes>. Each
<Route> maps a URL path (e.g., /about) to a page component stored in the /pages folder (e.g., AboutPage.jsx).
The navigation (Nav.jsx) does not control routing logic — it simply uses <Link to="..."> to update the URL,
which React Router then matches to a route and renders the corresponding page component inside <Main /> without reloading the browser. */

function App() {
  return (
    <div className="app-layout">
      <Header/>
      <Main />
      <Footer/>
    </div>
  )
}

export default App
