{/*import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


interface Product {
    id : number;
    title : string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}



const ProductPage = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null >(null);

    useEffect(()=>{
        if (id) {
            axios
            .get<Product>(`https://dummyjson.com/products/${id}`)
            .then ((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(`Error fetching product data: ${error}`);
            });
        }
    },[id]);


    if(!product){
        return <h1>Loading...</h1>;
    }


  return (
   <div className="p-5 w-[60%]">
    <button 
    onClick={()=> navigate(-1)}
     className="mb-5 px-4 py-2 bg-black text-white rounded"
     >
        Back

    </button>

    <img 
    src={product.images[0]}
     alt={product.title}
     className="w-[50%] h-auto mb-5"
      />

      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
      <div className="flex">
        <p>price: ${product.price}</p>
        <p className="ml-10 "> Rating:{product.rating}</p>
      </div>
  </div>
  );
  
};

export default ProductPage;*/}







{/*import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            axios
                .get<Product>(`https://dummyjson.com/products/${id}`)
                .then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch((error: AxiosError) => {
                    console.error(`Error fetching product data: ${error}`);
                    if (error.response?.status === 404) {
                        setError("Product not found.");
                    } else {
                        setError("Failed to load product details.");
                    }
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return (
            <div className="p-5 w-full md:w-3/5 mx-auto">
                <h1>{error}</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-5 px-4 py-2 bg-black text-white rounded"
                >
                    Go Back
                </button>
            </div>
        );
    }

    if (!product) {
        return <h1>Product not found.</h1>;
    }

    return (
        <div className="p-5 w-full md:w-3/5 mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="mb-5 px-4 py-2 bg-black text-white rounded"
            >
                Back
            </button>

            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-auto mb-5"
            />

            <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
            <p className="mb-4 text-gray-700">{product.description}</p>
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Price: ${product.price}</p>
                <p className="text-lg font-semibold">Rating: {product.rating}</p>
            </div>
        </div>
    );
};

export default ProductPage;*/}









import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


interface Product {
    id : number;
    title : string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}



const ProductPage = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null >(null);


    useEffect(() => {
        const trimmedId = id?.trim();
        if (trimmedId) {
            axios
                .get<Product>(`https://dummyjson.com/products/${trimmedId}`)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.error(`Error fetching product data: ${error}`);
                });
        }
    }, [id]);


    if(!product){
        return <h1>Loading...</h1>;
    }


  return (
   <div className="p-5 w-[60%]">
    <button 
    onClick={()=> navigate(-1)}
     className="mb-5 px-4 py-2 bg-black text-white rounded"
     >
        Back

    </button>

    <img 
    src={product.images[0]}
     alt={product.title}
     className="w-[50%] h-auto mb-5"
      />

      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
      <div className="flex">
        <p>price: ${product.price}</p>
        <p className="ml-10 "> Rating:{product.rating}</p>
      </div>
  </div>
  );
  
};

export default ProductPage;