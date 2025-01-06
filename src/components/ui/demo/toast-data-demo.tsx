import { toast } from 'sonner';
import { Button } from '../button';

type ToastProps = {
  title?: string;
  description?: string;
  variant?: 'destructive' | 'default';
};
export function ToastDemo({ description, title }: ToastProps) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast(title, {
          description,
        });
      }}
    >
      shadcn
    </Button>
  );
}
