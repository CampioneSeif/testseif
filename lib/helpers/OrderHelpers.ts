import { Order } from "@/types/order";

// Helper function to generate avatar based on client sex
export const getClientAvatar = (clientSex?: string) => {
  if (clientSex === 'M') return '👨';
  if (clientSex === 'F') return '👩';
  return '👤'; // Default avatar
};
// Helper function to map API status to display status
export const mapOrderStatus = (status: string): Order['status'] => {
  switch (status) {
    case 'PENDING':
      return 'En attente';
    case 'DELIVERED':
      return 'Livrée';
    case 'CANCELLED':
      return 'Annulée';
    default:
      return status as Order['status'];
  }
};
