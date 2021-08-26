import Link from 'next/link';
import { useProductsCategories } from '../../contexts/CategoriesContext';

const Navigation = () => {
  const { categories } = useProductsCategories();

  return (
    <nav>
      <ul>
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
