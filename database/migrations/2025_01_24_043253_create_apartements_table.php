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
        Schema::create('apartements', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('image_url'); 
            $table->integer('total_unit'); 
            $table->text('location'); 
            $table->text('address'); 
            $table->json('facilities')->nullable();
            $table->text('description'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apartements');
    }
};
