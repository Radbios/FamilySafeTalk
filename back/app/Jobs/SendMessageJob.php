<?php

namespace App\Jobs;

use App\Models\Message;
use App\Models\Notification;
use App\Models\User;
use App\Notifications\AlertSecurity;
use App\Notifications\Classifier;
use App\Notifications\Keyword;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification as FacadesNotification;
use Illuminate\Support\Facades\Process;

class SendMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $message, $guardian, $child;
    /**
     * Create a new job instance.
     */
    public function __construct(Message $message, User $guardian, User $child)
    {
        $this->message = $message;
        $this->guardian = $guardian;
        $this->child = $child;
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
                "user_id" => $this->guardian->id,
                "title" => "Palavra chave",
                "content" => "Uma palavra chave foi identificada na mensagem: " . $this->message->content,
                "is_read" => false
            ]);
            FacadesNotification::route('mail', $this->guardian->email)->notify(new Keyword($this->message, $this->guardian, $this->child));
        }



        if($output[1]) {  // PALAVRA SUSPEITA
            Notification::create([
                "user_id" => $this->guardian->id,
                "title" => "Palavra Suspeita",
                "content" => "Uma palavra suspeita foi identificada na mensagem: " . $this->message->content,
                "is_read" => false
            ]);

            FacadesNotification::route('mail', $this->guardian->email)->notify(
                    new Classifier($this->message, $this->guardian, $this->child)
                );
        }


    }
}
