<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    function register(Request $request)
    {
         
        $user=new User;

        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        if ($user->save()) {
            return $user;
    }}

    function login(Request $request)
    {
        $user= User::where('email',$request->email)->first();
        if ($user and HASH::check($request->password,$user->password)) {
            return [$user]; 
        }else{return ['error'=>'E Mail  veya  şifreniz  hatalı  kontrol edin'];
        }
       
        
    
    }
}
