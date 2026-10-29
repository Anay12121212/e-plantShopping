import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from './CartSlice.jsx';

const products = [
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy-Care Favorites', price: 299, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85', description: 'Trailing heart-shaped leaves' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy-Care Favorites', price: 449, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=700&q=85', description: 'Architectural, upright foliage' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy-Care Favorites', price: 399, image: 'https://images.unsplash.com/photo-1632207691143-643e2f9a7d7b?auto=format&fit=crop&w=700&q=85', description: 'Glossy leaves and low fuss' },
  { id: 'spider', name: 'Spider Plant', category: 'Easy-Care Favorites', price: 249, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=85', description: 'Fresh green arching leaves' },
  { id: 'peace', name: 'Peace Lily', category: 'Easy-Care Favorites', price: 499, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85', description: 'Elegant leaves and white blooms' },
  { id: 'rubber', name: 'Rubber Plant', category: 'Easy-Care Favorites', price: 599, image: 'https://images.unsplash.com/photo-1600411832986-5a4476c6b7b5?auto=format&fit=crop&w=700&q=85', description: 'Bold, deep green foliage' },

  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 799, image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=700&q=85', description: 'Iconic split-leaf tropical beauty' },
  { id: 'fiddle', name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 999, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', description: 'A sculptural indoor centerpiece' },
  { id: 'bird', name: 'Bird of Paradise', category: 'Statement Plants', price: 1199, image: 'https://images.unsplash.com/photo-1597055181300-a8b4be3e9a1f?auto=format&fit=crop&w=700&q=85', description: 'Tropical leaves with presence' },
  { id: 'alocasia', name: 'Alocasia Polly', category: 'Statement Plants', price: 699, image: 'https://images.unsplash.com/photo-1597055181449-6d5c7b5c1c1a?auto=format&fit=crop&w=700&q=85', description: 'Dramatic arrow-shaped leaves' },
  { id: 'calathea', name: 'Calathea Orbifolia', category: 'Statement Plants', price: 649, image: 'https://images.unsplash.com/photo-1597055181300-a8b4be3e9a1f?auto=format&fit=crop&w=700&q=85', description: 'Soft patterned foliage' },
  { id: 'dracaena', name: 'Dracaena Marginata', category: 'Statement Plants', price: 749, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=85', description: 'Slender leaves with a modern look' },

  { id: 'succulent', name: 'Echeveria Succulent', category: 'Small-Space Plants', price: 149, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', description: 'Compact rosette for sunny spots' },
  { id: 'jade', name: 'Jade Plant', category: 'Small-Space Plants', price: 199, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', description: 'A cheerful, compact succulent' },
  { id: 'aloevera', name: 'Aloe Vera', category: 'Small-Space Plants', price: 179, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', description: 'Sculptural leaves for a bright sill' },
  { id: 'pilea', name: 'Chinese Money Plant', category: 'Small-Space Plants', price: 349, image: 'https://images.unsplash.com/photo-1597055181300-a8b4be3e9a1f?auto=format&fit=crop&w=700&q=85', description: 'Round leaves on cheerful stems' },
  { id: 'peperomia', name: 'Peperomia Green', category: 'Small-Space Plants', price: 279, image: 'https://images.unsplash.com/photo-1597055181449-6d5c7b5c1c1a?auto=format&fit=crop&w=700&q=85', description: 'A tidy plant for desks and shelves' },
  { id: 'parlor', name: 'Parlor Palm', category: 'Small-Space Plants', price: 329, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=85', description: 'Soft tropical texture in a small pot' }
];

const categories = ['Easy-Care Favorites', 'Statement Plants', 'Small-Space Plants'];
const money = (amount) => `₹${amount.toLocaleString('en-IN')}`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog-page">
      <section className="catalog-heading">
        <p className="eyebrow">THE PLANT COLLECTION</p>
        <h1>Find your new favorite.</h1>
        <p>Thoughtfully chosen greens for every room, routine, and growing space.</p>
      </section>
      {categories.map((category) => (
        <section className="product-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((plant) => plant.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((plant) => plant.category === category).map((plant) => {
              const isAdded = addedIds.has(plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-image-wrap">
                    <img src={plant.image} alt={plant.name} className="product-image" loading="lazy" />
                    <span className="plant-tag">HOUSEPLANT</span>
                  </div>
                  <div className="product-info">
                    <p className="product-description">{plant.description}</p>
                    <h3>{plant.name}</h3>
                    <div className="product-card-bottom">
                      <strong className="product-price">{money(plant.price)}</strong>
                      <button
                        className={isAdded ? 'add-button added' : 'add-button'}
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added ✓' : 'Add to Cart +'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
