import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const QuoteRequestModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useModal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xjkrwora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your quote request has been sent. We will get back to you shortly.',
        });
        setFormData({ name: '', email: '', company: '', details: '' });
        closeQuoteModal();
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isQuoteModalOpen} onOpenChange={closeQuoteModal}>
      <DialogContent className="sm:max-w-lg bg-secondary/80 backdrop-blur-sm border-orange-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-500">Request a Custom Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" value={formData.company} onChange={handleChange} placeholder="Strivo Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Project Details</Label>
            <Textarea id="details" value={formData.details} onChange={handleChange} placeholder="Tell us about your project..." required />
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;