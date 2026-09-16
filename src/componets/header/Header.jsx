import './Header.css'

export default function Header(props) {
  return (
    <header className="header-com">
      <h2 className="header-title">ReactAcademy</h2>
      <nav className="header-nav">
        <a>{props.inicio}</a>
        <a>{props.cursos}</a>
        <a>{props.nosotros}</a>
      </nav>
    </header>
    )
}
