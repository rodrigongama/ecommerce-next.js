import Link from 'next/link';
import { useProductsCategories } from '../../contexts/CategoriesContext';

interface NavigationProps {
  setIsMenuOpen: (value: boolean) => void;
}

const Navigation = ({ setIsMenuOpen }: NavigationProps) => {
  const { categories } = useProductsCategories();

  return (
    <nav>
      <ul onClick={() => setIsMenuOpen(false)}>
        <li>
          <Link href="/">Página Inicial</Link>
        </li>

        {categories.map(({ name, id, path }) => (
          <li key={id}>
            <Link href={`/products/${path}`}>{name}</Link>
          </li>
        ))}

        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
