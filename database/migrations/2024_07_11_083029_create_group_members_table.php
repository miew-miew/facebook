<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('group_members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('group_id')->constrained('groups');
            $table->string('role', 25); // admin or user
            $table->string('status', 25); //approved or pending
            $table->string('token', 1024)->nullable();
            $table->string('token_expire_date')->nullable();
            $table->string('token_used')->nullable();
            $table->foreignId('created_by')->constrained('users');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('group_members');
    }
};
