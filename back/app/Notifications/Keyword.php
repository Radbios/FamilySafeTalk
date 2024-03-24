<?php

namespace App\Notifications;

use App\Models\Message;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class Keyword extends Notification
{
    use Queueable;

    protected $message, $guardian, $child;
    /**
     * Create a new notification instance.
     */
    public function __construct(Message $message, User $guardian, User $child)
    {
        $this->message = $message;
        $this->guardian = $guardian;
        $this->child = $child;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject("Alerta! Identificamos uma palavra chave na conversa de " . $this->child->name . '.')
                    ->greeting("Alerta! Identificamos uma palavra chave na conversa de " . $this->child->name)
                    ->line('Identificamos "palavra" na mensagem:')
                    ->line($this->message->content);
                    // ->action('Notification Action', 'google.com');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
