<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class PlayerController extends Controller
{
    public function test(Request $request)
    {
        $player = new Player();
        $file = $request->file('file');
        if ($file) {

            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $filepath = $file->getRealPath();

            try {
                $fileopen = fopen($filepath, "r");
                $importData_arr = array();
                while (($filedata = fgetcsv($fileopen, 1000, "n"))) {
                    $num = count($filedata);
                    // dd($num);
                    // echo($filedata[4]);
                    for ($c = 0; $c < $num; $c++) {
                        $importData[$c][] = $filedata[$c];
                    }
                }
                // $temp1 = Arr::flatten($importData);
                fclose($fileopen);
                $temp = array();
                $j = 0;

                for ($i = 0; $i < 5; $i++) {
                    $exploded = explode(',', $importData[0][$i]);
                    // dd($exploded[0]);
                    Player::create([
                        'id' => $exploded[0],
                        'name' => $exploded[1],
                        'club' => $exploded[2],
                        'email' => $exploded[3],
                        'position' => $exploded[4],
                        'age' => $exploded[5],
                        'salary' => $exploded[6]
                    ]);
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        return ("data stored successfully");
    }

    public function apitest(Request $request)
    {
        $data = $request->all();
        // dd($request->name);
        try {
            Contact::create([
                "name" => $request->name,
                "email" => $request->email,
                "description" => $request->description
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }


        // return ["data stored succesfully "];
    }
}


// 'database' => env('DB_DATABASE', 'temp'),
//             'username' => env('DB_USERNAME', 'postgres'),
//             'password' => env('DB_PASSWORD', 'postgres'),