'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('All fields are required. Please fill in every box.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
      const response = await fetch(`${supabaseUrl}/functions/v1/contact-submission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${response.status})`);
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/40 bg-primary/5 p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary text-glow-cyan" />
        <h3 className="font-retro mt-4 text-sm text-foreground">
          MESSAGE RECEIVED
        </h3>
        <p className="font-mono-retro mt-4 text-xl text-muted-foreground">
          Thanks for reaching out! We'll get back to you within 2-3 business
          days.
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          className="font-mono-retro mt-6 rounded-none border-2 border-border px-6 text-lg hover:border-primary hover:text-primary"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="font-mono-retro text-lg text-foreground">
            {'> Name'}
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={status === 'loading'}
            className="font-mono-retro rounded-none border-2 border-border bg-background text-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-mono-retro text-lg text-foreground">
            {'> Email'}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            disabled={status === 'loading'}
            className="font-mono-retro rounded-none border-2 border-border bg-background text-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject" className="font-mono-retro text-lg text-foreground">
          {'> Subject'}
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          required
          disabled={status === 'loading'}
          className="font-mono-retro rounded-none border-2 border-border bg-background text-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="font-mono-retro text-lg text-foreground">
          {'> Message'}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us everything..."
          required
          disabled={status === 'loading'}
          className="font-mono-retro min-h-[160px] rounded-none border-2 border-border bg-background text-lg text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
          <p className="font-mono-retro text-lg text-destructive">{errorMsg}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="font-mono-retro h-12 rounded-none border-2 border-primary bg-primary/10 text-xl text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            TRANSMITTING...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            SEND MESSAGE
          </>
        )}
      </Button>
    </form>
  );
}
