import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('cs-CZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(d);
}

export function getStatusColor(status: string): string {
  const statusMap: Record<string, string> = {
    'zaplaceno': 'bg-green-100 text-green-800 border-green-200',
    'nezaplaceno': 'bg-red-100 text-red-800 border-red-200',
    'částečně zaplaceno': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'stornováno': 'bg-gray-100 text-gray-800 border-gray-200',
  };
  
  return statusMap[status.toLowerCase()] || 'bg-blue-100 text-blue-800 border-blue-200';
}