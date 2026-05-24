import React, { Suspense } from "react";

const PRODUCTS = [
  { id: "1", name: "Apple", price: 5.0, currency: "HKD" },
  { id: "2", name: "Banana", price: 2.0, currency: "HKD" },
  { id: "3", name: "Avocado", price: 10.0, currency: "HKD" },
  { id: "4", name: "Blueberry", price: 20.0, currency: "HKD" },
  { id: "5", name: "Cherry", price: 25.0, currency: "HKD" },
];

export const fetchProducts = async (query: string) => {
  if (!query) return PRODUCTS;

  return PRODUCTS.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase()),
  );
};

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const Navbar: React.FC = () => {
  // TODO
  const totalItems = 0;

  return (
    <header className="flex justify-between sticky top-0 bg-white border-b p-4">
      <a href="#">ABC Mart</a>
      <span>
        Cart items: <strong>{totalItems}</strong>
      </span>
    </header>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="grid gap-4">
      {PRODUCTS.map((e) => (
        <div key={e.name} className="border p-4 space-y-4 rounded-md">
          <div>{e.name}</div>
          <div>
            <strong>
              {e.currency} ${e.price}
            </strong>
          </div>

          <button
            onClick={() => {}}
            className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-4 py-2 font-medium text-neutral-50 transition active:scale-110 "
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

const Search: React.FC = () => {
  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <input
        type="search"
        id="search"
        className="block w-full rounded-md p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        placeholder="Search"
        required
      />
    </form>
  );
};

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <CartProvider>
        <Navbar />
        <div className="p-4 space-y-4">
          <Search />
          <ProductList />
        </div>
      </CartProvider>
    </Suspense>
  );
}

export default App;
