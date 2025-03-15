import { getStatusColor } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const statusColors = getStatusColor(status);

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors} ${className}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;