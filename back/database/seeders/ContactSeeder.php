<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'name' => "userzin1",
            'user_id' => 2,
            'contact_id' => 1
        ]);

        Contact::create([
            'name' => "userzin2",
            'user_id' => 1,
            'contact_id' => 2
        ]);
    }
}
