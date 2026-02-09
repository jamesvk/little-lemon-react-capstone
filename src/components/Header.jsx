import Nav from "./Nav.jsx"

export default function Header() {
  return (
    <header className="header">
        <div className="container header_inner">
            <img className="header_logo" src="/Images/logo_sm.jpg" alt="Logo"/>
            <Nav/>
        </div>
    </header>
  )
}