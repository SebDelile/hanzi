import { Children, useState } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenuIcon } from '../icons/BurgerMenuIcon';
import { CloseIcon } from '../icons/CloseIcon';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full py-4 bg-primary text-primary-contrast shadow-md">
      <div className="app-container flex justify-between relative flex-wrap">
        <h1 className="text-4xl font-bold font-hanzi">学习汉语</h1>
        <button
          type="button"
          onClick={(): void => setIsMenuOpen((state) => !state)}
          className="text-4xl ml-6 self-end"
        >
          {isMenuOpen ? <CloseIcon /> : <BurgerMenuIcon />}
        </button>
      </div>
      <nav className="app-container flex justify-end">
        {isMenuOpen ? (
          <ul
            className="w-max list-none flex flex-col items-center gap-3 mt-4 xs:flex-row"
            onClick={(): void => setIsMenuOpen((state) => !state)}
          >
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/reading-test">Test de lecture</Link>
            </li>
            <li>
              <Link to="/writing-test">Test d&apos;écriture</Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
