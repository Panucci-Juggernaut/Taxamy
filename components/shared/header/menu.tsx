import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import { EllipsisVertical, LayoutGrid, Phone, Scale } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full items-center justify-end gap-1'>
        <ModeToggle />
        <Button asChild variant='ghost'>
          <Link href='/#features'>
            <LayoutGrid /> Features
          </Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/laws'>
            <Scale /> Tax Laws
          </Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/contact'>
            <Phone /> Contact Us
          </Link>
        </Button>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
        <SheetTrigger className='align-middle'>
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className='flex flex-col items-start'>
          <SheetTitle>Menu</SheetTitle>
          <ModeToggle />
          <Button asChild variant='ghost'>
            <Link href='/#features'>
              <LayoutGrid /> Features
            </Link>
          </Button>
          <Button asChild variant='ghost'>
            <Link href='/laws'>
              <Scale /> Tax Laws
            </Link>
          </Button>
          <Button asChild variant='ghost'>
            <Link href='/contact'>
              <Phone /> Contact Us
            </Link>
          </Button>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
    </div>
  );
};

export default Menu; 
