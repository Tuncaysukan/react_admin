<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductModel;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
       
       $product=new ProductModel;
    //    $file=$request->file;
       $product->name=$request->name;
       $product->description=$request->description;
       $product->price=$request->price;
       //$product->file_path=$request->file('file_path')->store('products');
     
       $product->save();
        return $product;

    }
}
