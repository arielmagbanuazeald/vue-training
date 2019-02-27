<?php

namespace App\Http\Controllers;

use App\Status;
use App\User;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return Status::latest()->with('user')->get();
    }

    public function store(Request $request)
    {
        // middleware

        // validation
        $this->validate($request, [
            'body' => 'required'
        ]);

        // create the status
        $status = User::find(1)->statuses()->create($request->only(['body']));

        // return it, and also include the user
        return $status->load('user');
    }
}
