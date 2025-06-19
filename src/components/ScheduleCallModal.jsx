import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { InlineWidget } from 'react-calendly';
import { useToast } from '@/components/ui/use-toast';

const ScheduleCallModal = ({ isOpen, onOpenChange }) => {
  const calendlyUrl = 'YOUR_CALENDLY_URL';
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && calendlyUrl === 'YOUR_CALENDLY_URL') {
      toast({
        title: "📞 Let's Connect!",
        description: "To activate call scheduling, please provide your Calendly URL. I'll guide you on how to find it!",
        duration: 8000,
      });
    }
  }, [isOpen, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl w-full h-[90vh] bg-secondary/80 backdrop-blur-sm border-orange-500/20 p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 pb-0 shrink-0">
          <DialogTitle className="text-2xl font-bold text-orange-500">Schedule a Discovery Call</DialogTitle>
          <DialogDescription>
            Choose a time that works for you. We're excited to discuss your project.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow min-h-0">
          {calendlyUrl !== 'YOUR_CALENDLY_URL' ? (
            <InlineWidget 
              url={calendlyUrl} 
              styles={{ height: '100%', width: '100%' }}
              pageSettings={{
                backgroundColor: '1a1a1a',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'ff6600',
                textColor: 'ffffff'
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground text-center p-8">
                The scheduling calendar will appear here once you provide your Calendly link.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleCallModal;