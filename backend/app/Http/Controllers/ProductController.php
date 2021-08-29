<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductModel;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
       
       $product=new ProductModel;
     $file='Path_Yolu';
       $product->name=$request->name;
       $product->description=$request->description;
       $product->price=$request->price;
       $product->file_path=$file;
     
       $product->save();
        return $product;

    }
}
