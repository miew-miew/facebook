<?php

namespace App\Http\Requests; // Déclare le namespace pour organiser le code.

use App\Models\Post; // Importe le modèle Post pour interagir avec la table des posts.
use Illuminate\Foundation\Http\FormRequest; // Importe la classe de base pour les requêtes HTTP avec validation.
use Illuminate\Support\Facades\Auth; // Importe la façade Auth pour gérer l'authentification des utilisateurs.

class UpdatePostRequest extends FormRequest // Déclare la classe qui étend FormRequest pour la validation des requêtes.
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool // Méthode pour vérifier l'autorisation de l'utilisateur.
    {
        // Récupère le post correspondant à l'ID fourni et vérifie s'il appartient à l'utilisateur authentifié.
        $post = Post::where('id', $this->input('id'))
                    ->where('user_id', Auth::id())
                    ->first();
        
        return !!$post; // Retourne true si le post existe (l'utilisateur est autorisé), sinon false.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array // Méthode qui définit les règles de validation pour les données de la requête.
    {
        return [
            'content' => ['nullable', 'string'], // Le champ 'content' peut être nul ou doit être une chaîne.
            'user_id' => ['numeric'] // Le champ 'user_id' doit être un nombre.
        ];
    }
}
