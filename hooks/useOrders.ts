import { useMemo } from 'react';
import { Order, OrdersQueryParams } from '@/types/order';
import { useGetAllOrdersInfiniteQuery } from '@/services/OrderApi';
import { getClientAvatar, mapOrderStatus } from '@/lib/helpers/OrderHelpers';



export function useOrders(queryParams?: OrdersQueryParams) {
  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetAllOrdersInfiniteQuery(queryParams || {});

  // Flatten all pages into a single array of orders
  const orders = useMemo(() => {
    if (!data?.pages) return [];
    
    return data.pages.flatMap(page => 
      page.data.map((order): Order => ({
        ...order,
        clientAvatar: order.clientAvatar || getClientAvatar(order.clientSex),
        status: mapOrderStatus(order.status),
        totalPrice: typeof order.totalPrice === 'string' 
          ? parseFloat(order.totalPrice) 
          : order.totalPrice,
        products: order.products.map(product => ({
          ...product,
          price: typeof product.price === 'string' 
            ? parseFloat(product.price) 
            : product.price,
        })),
      }))
    );
  }, [data?.pages]);

  return {
    orders,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  };
}
