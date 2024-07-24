<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{

    public function index(User $user){
        return Inertia::render('Profile/View', [
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => session('status'),
            'success' => session('success'),
            'user' => new UserResource($user),
        ]);
    }

    public function edit(Request $request){
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return redirect()->route('profile', $request->user()->username);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    // Méthode pour mettre à jour l'image de couverture et l'avatar de l'utilisateur
    public function updateImage(Request $request) 
    {
        $data = $request->validate([
            'cover' => ['nullable', 'image'],
            'avatar' => ['nullable', 'image'],
        ]);

        $user = $request->user();
        
        $avatar = $data['avatar'] ?? null;
        /** @var UploadedFile $cover */
        $cover = $data['cover'] ?? null;
        $success = '';

        if($cover){
            if($user->cover_path){
                Storage::disk('public')->delete($user->cover_path);
            }
            $path = $cover->store('user-'.$user->id, 'public'); // Sauvegarde de l'image de couverture dans le stockage public avec un chemin spécifique à l'user
            $user->update(['cover_path' => $path]); // Mise à jour du chemin de l'image de couverture dans la base de données
            $success = 'Your cover image has been updated';
        }
        
        if($avatar){
            if($user->avatar_path){
                Storage::disk('public')->delete($user->avatar_path);
            }
            $path = $avatar->store('user-'.$user->id, 'public'); // Sauvegarde de l'image de couverture dans le stockage public avec un chemin spécifique à l'user
            $user->update(['avatar_path' => $path]); // Mise à jour du chemin de l'image de couverture dans la base de données
            $success = 'Your avatar image has been updated';
        }

        // session('success', 'Cover image has been updated');

        return back()->with('success', $success);
    }
}
