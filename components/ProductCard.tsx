import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-3xl p-4 shadow-sm w-full flex flex-col">
            <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                />
            </div>

            <h3 className="text-xl font-bold mt-4 text-black lowercase">
                {product.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex-grow">
                {product.description}
            </p>

            <div className="flex flex-col items-start mt-4">
                <span className="text-sm text-gray-600">{product.price} ₽</span>
                <button className="bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs mt-4 hover:bg-blue-800 transition-colors duration-200">
                    в корзину
                </button>
            </div>
        </div>
    );
}