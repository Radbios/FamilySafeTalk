<?php

namespace App\Jobs;

use App\Models\Notification;
use App\Models\Teste;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Process;

class SendMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $message, $guardian_id;
    /**
     * Create a new job instance.
     */
    public function __construct($message, $guardian_id)
    {
        $this->message = $message;
        $this->guardian_id = $guardian_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $process = Process::start('python3 ' . storage_path('app/scripts/classifier.py') . " '" . $this->message->content ."'");
        $result = $process->wait();

        $output = explode(' ', $result->output());

        if($output[0]) { // PALAVRA CHAVE
            Notification::create([
                "user_id" => $this->guardian_id,
                "title" => "Palavra chave",
                "content" => "Uma palavra chave foi identificada na mensagem: " . $this->message->content,
                "is_read" => false
            ]);
        }

        if($output[1]) {  // PALAVRA SUSPEITA
            Notification::create([
                "user_id" => 1,
                "title" => "Palavra Suspeita",
                "content" => "Uma palavra suspeita foi identificada na mensagem: " . $this->message->content,
                "is_read" => false

            ]);
        }
    }
}
