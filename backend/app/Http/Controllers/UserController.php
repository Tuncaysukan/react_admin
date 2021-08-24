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
            return response()->json([
                'status'=>'200',
                'body'=>'success' 
            ]);
        }else{
            return response()->json([
                'status'=>'400',
                'body'=>'Error '
            ]);
        }
    }
}
