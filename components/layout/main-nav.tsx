'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Truck,
  MessageSquare,
  FileBarChart2,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', Icon: LayoutDashboard },
  { name: 'Input Data', href: '/input', Icon: ClipboardList },
  { name: 'Couriers', href: '/couriers', Icon: Users },
  { name: 'Deliveries', href: '/deliveries', Icon: Truck },
  { name: 'Feedback', href: '/feedback', Icon: MessageSquare },
  { name: 'Reports', href: '/reports', Icon: FileBarChart2 },
  { name: 'Settings', href: '/settings', Icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
            pathname === item.href ? 'bg-accent' : 'transparent'
          )}
        >
          <item.Icon className="h-4 w-4" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}