<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = ["Responsável", "Protegido"];

        foreach ($types as $key => $value) {
            Role::create([
                "name" => $value
            ]);
        }
    }
}
