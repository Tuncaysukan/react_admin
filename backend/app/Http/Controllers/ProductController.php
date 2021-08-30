<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductModel;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        
        return $request->all();
        if($request->hasFile('file'))
        return 'var';

        // return $request->all();
        // $path = NULL;
        // if($request->hasFile('file')){
        //     $path = $request->file->store('images');
        // }

        
       
            $path = null;
       $product=new ProductModel;
<<<<<<< Updated upstream
     $file='Path_Yolu';
       $product->name=$request->name;
       $product->description=$request->description;
       $product->price=$request->price;
       $product->file_path=$file;
     
=======
  

       $product->name=$request->name;
       $product->description=$request->description;
       $product->price=$request->price;
       $product->file=$path;
    
>>>>>>> Stashed changes
       $product->save();
        return $product;

    }

    public function productLis()
    {
       return ProductModel::all();
    }
    public function delete($id)
    {
        $product= ProductModel::findorfail($id);
        if ($product->delete()){
            return response()->json([
                'message' => 'Deleted   ',
            ]);
        }else{
            return response()->json([
                'error' => 'Product not found',
            ]);
        }
        
    }

    public function updateProduct($id)
    {
    return    $product= ProductModel::findorfail($id);
    }
}
