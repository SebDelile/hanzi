import { Children, useState } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenuIcon } from '../icons/BurgerMenuIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { ExportHanziListButton } from './ExportHanziListButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <header className="fixed top-0 w-full py-4 bg-primary text-primary-contrast shadow-md">
      <div className="app-container flex justify-between relative flex-wrap">
        <h1 className="text-4xl font-bold font-hanzi">学习汉语</h1>
        <button
          type="button"
          onClick={handleToggleMenu}
          className="text-4xl ml-6 self-end"
        >
          {isMenuOpen ? <CloseIcon /> : <BurgerMenuIcon />}
        </button>
      </div>
      <nav className="app-container flex justify-end">
        {isMenuOpen ? (
          <ul className="w-max list-none flex flex-col items-center gap-3 mt-4 xs:flex-row">
            <li onClick={handleToggleMenu}>
              <Link to="/">Accueil</Link>
            </li>
            <li onClick={handleToggleMenu}>
              <Link to="/reading-test">Test de lecture</Link>
            </li>
            <li onClick={handleToggleMenu}>
              <Link to="/writing-test">Test d&apos;écriture</Link>
            </li>
            <li>
              <ExportHanziListButton />
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
