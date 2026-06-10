import { useEffect, useMemo, useState } from 'react';
import About from './About';
import Cart from './Cart';
import History from './History';
import Home from './Home';
import Interest from './Interest';
import Leagues from './Leagues';
import Players from './Players';
import Rules from './Rules';
import Shop from './Shop';
import Stats from './Stats';
import Users from './Users';

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
  const getPath = () =>
    window.location.hash.replace('#', '') || '/';

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getPath());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const CurrentPage = useMemo(
    () => pages[path] || Home,
    [path]
  );

  const navigate = (to) => {
    window.location.hash = to;
  };

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
              href={`#${to}`}
              className={
                path === to
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={(e) => {
                e.preventDefault();
                navigate(to);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content-wrap">
        <CurrentPage />
      </main>
    </div>
  );
}

export default App;
