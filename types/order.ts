export type OrderStatus = 'PENDING' | 'CANCELLED' | 'DELIVERED' | 'En attente' | 'Annulée' | 'Livrée';

export interface OrderProduct {
  id: string;
  name: string;
  image: string;
  price: string | number;
  quantity: number;
}

export interface Order {
  id: string;
  clientName: string;
  clientPhone: string;
  clientSex?: string;
  clientAvatar?: string;
  status: OrderStatus;
  totalPrice: string | number;
  products: OrderProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface CancelOrderInput {
  orderId: string;
  reason: string;
  comment?: string;
}

export interface OrdersResponse {
  data: Order[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface OrdersQueryParams {
  search?: string;
  status?: string;
}