import React from 'react'
import { useState, useEffect } from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductsPage = () => {


  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/books'); // update with your backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();

        // Map backend data to frontend product shape
        const mappedBooks = data.map((book) => ({
          id: book._id,
          name: book.title,
          author: book.author,
          category: book.category,
          price: `$${book.price.toFixed(2)}`,
          imageSrc: book.imageUrl || 'https://via.placeholder.com/300x400',
          imageAlt: book.title,
          href: `/product-details/${book._id}`, // example link to detail page
        }));

        setProducts(mappedBooks);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/books/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');

        const data = await response.json();

        // Optional: Map if needed
        const mappedCategories = data.map((cat) => ({
          name: cat,
          href: `#category-${cat}`, // or link to filtered list
        }));

        setCategories(mappedCategories);
      } catch (err) {
        console.error('Failed to fetch categories', err);
        setCategoriesError(err.message);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
    fetchBooks();
  }, []);

  return (
    <div >
      {/* Top Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
            opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div>

        {/* Mobile filter dialog */}
        {/*  */}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Books</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {categories.map((category) => (
                    <li key={category.name}> {/* ✅ use string key */}
                      <button
                        type="button"
                        onClick={() => fetchBooksByCategory(category.name)} // ✅ pass name string
                        className="text-left hover:underline cursor-pointer text-gray-900"
                      >
                        {category.name} {/* ✅ render string, not object */}
                      </button>
                    </li>
                  ))}

                </ul>
              </form>



              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between px-4 pb-4">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                             
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* Bottom Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]  -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>

  )
}
export default ProductsPage
