import {products} from '../../data/products';
import Image from "next/image" ;

export async function generateStaticParams() {
    return products.map((product) =>({
        id: product.id,
    }));
}

export default function ProductPage({params}){
    const product = products.find((p) => p.id === params.id);

    if (!product){
        return <h1>Product not found</h1>
    }

    return (
        <div className="flex justify-center">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Image src={product.image} alt={product.name} width={400} height={200} />
        </div>
    );
}