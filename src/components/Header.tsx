import { useState } from 'react';
import { BurgerMenuIcon } from '../icons/BurgerMenuIcon';
import { CloseIcon } from '../icons/CloseIcon';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full p-8 flex justify-between items-center bg-primary text-primary-contrast">
      <h1 className="text-4xl font-bold font-hanzi">学习汉语</h1>
      <nav className="flex justify-end flex-row-reverse items-center">
        <button
          type="button"
          onClick={(): void => setIsMenuOpen((state) => !state)}
          className="text-2xl p-2"
        >
          {isMenuOpen ? <CloseIcon /> : <BurgerMenuIcon />}
        </button>
        {isMenuOpen ? (
          <ul className="list-none flex justify-end items-center gap-3">
            {['Accueil', 'Test lecture', 'Test écriture'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
