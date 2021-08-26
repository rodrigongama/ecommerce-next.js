import Navigation from '../Navigation';
import Search from '../Search';
import useMediaQuery from '../../hooks/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { AcessContainer, LogoSearch, NavigationContainer } from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <AcessContainer>
        <div>
          <p>
            <Link href="/">Acesse sua Conta</Link> ou {''}
            <Link href="/">Cadastre-se</Link>
          </p>
        </div>
      </AcessContainer>

      <LogoSearch>
        {useMediaQuery(765) && (
          <GiHamburgerMenu
            className="menuIcon"
            onClick={() => setIsMenuOpen(true)}
          />
        )}

        <Link href="/" passHref>
          <Image
            width={340}
            height={120}
            src="/logo-webjump.jpg"
            alt="Logo WebJump"
          />
        </Link>

        <Search />
      </LogoSearch>

      <NavigationContainer isMenuOpen={isMenuOpen}>
        {isMenuOpen && (
          <GrFormClose
            onClick={() => setIsMenuOpen(false)}
            className="menuIconClose"
          />
        )}
        <Navigation />
      </NavigationContainer>
    </header>
  );
};

export default Header;
