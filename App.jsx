import { useMemo, useState } from 'react';
import About from './pages/About';
import Cart from './pages/Cart';
import History from './pages/History';
import Home from './pages/Home';
import Interest from './pages/Interest';
import Leagues from './pages/Leagues';
import Players from './pages/Players';
import Rules from './pages/Rules';
import Shop from './pages/Shop';
import Stats from './pages/Stats';
import Users from './pages/Users';

const pages = {
  '/': Home,
  '/about': About,
  '/history': History,
  '/players': Players,
  '/leagues': Leagues,
  '/stats': Stats,
  '/rules': Rules,
  '/shop': Shop,
  '/users': Users,
  '/cart': Cart,
  '/interest': Interest,
};

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['History', '/history'],
  ['Players', '/players'],
  ['Leagues', '/leagues'],
  ['Stats', '/stats'],
  ['Rules', '/rules'],
  ['Shop', '/shop'],
  ['Users', '/users'],
  ['Cart', '/cart'],
  ['Interest', '/interest'],
];

function App() {
  const [path, setPath] = useState(() => window.location.pathname || '/');

  const CurrentPage = useMemo(() => pages[path] || Home, [path]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Cricket project</p>
          <h1>Classic Cricket World</h1>
        </div>
        <nav className="nav-links">
          {navItems.map(([label, to]) => (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className={path === to ? 'nav-link active' : 'nav-link'}
              onClick={(event) => {
                event.preventDefault();
                window.open(to, '_blank', 'noopener,noreferrer');
                setPath(to);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content-wrap"><CurrentPage /></main>
    </div>
  );
}

export default App;
