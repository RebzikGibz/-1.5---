import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-black mb-8">коллекция посуды</h1>

                {/* Адаптивная сетка */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Кнопка под сеткой */}
                <div className="flex justify-center mt-12">
                    <button className="bg-blue-900 text-white uppercase rounded-full px-12 py-4 text-sm font-semibold hover:bg-blue-800 transition-colors duration-200">
                        смотреть всю коллекцию
                    </button>
                </div>
            </div>
        </main>
    );
}