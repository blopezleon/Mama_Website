import { Property } from '@/types/property';

type StatusType = Property['status'];

interface StatusBadgeProps {
    status: StatusType;
}

const statusLabels: Record<StatusType, string> = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
};

const statusClasses: Record<StatusType, string> = {
    'for-sale': 'badge-for-sale',
    'for-rent': 'badge-for-rent',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span className={`badge ${statusClasses[status]}`}>
            {statusLabels[status]}
        </span>
    );
}
