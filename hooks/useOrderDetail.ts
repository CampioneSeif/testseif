import { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Order } from '@/types/order';
import { useGetOrderByIdQuery } from '@/services/OrderApi';

export function useOrderDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const orderId = params.orderId as string;

  // Poll API every 3 seconds to detect when client scans QR code
  const { data: apiOrder, isLoading } = useGetOrderByIdQuery(orderId, {
    pollingInterval: 3000,
    skip: !orderId, // Skip if no orderId
  });

  const [order, setOrder] = useState<Order | null>(null);
  const [cancelSheetVisible, setCancelSheetVisible] = useState(false);
  const [qrScannerVisible, setQrScannerVisible] = useState(false);
  const [successSliderVisible, setSuccessSliderVisible] = useState(false);
  const [scanType, setScanType] = useState<'accept' | 'cancel'>('accept');
  const [cancelReason, setCancelReason] = useState('');
  const [cancelComment, setCancelComment] = useState('');

  // Use API data or fallback to mock data
  useEffect(() => {
    if (apiOrder) {
      // Check if status changed (client scanned QR code)
      if (order && order.status !== apiOrder.status) {
        // If QR is visible and status changed, show success
        if (qrScannerVisible) {
          setQrScannerVisible(false);
          setSuccessSliderVisible(true);
        }
      }
      setOrder(apiOrder); 
    } 
  }, [apiOrder, orderId, isLoading, order, qrScannerVisible]);

  const showCancelSheet = () => {
    setCancelSheetVisible(true);
  };

  const hideCancelSheet = () => {
    setCancelSheetVisible(false);
  };

  const handleAcceptOrder = () => {
    if (!order) return;
    setScanType('accept');
    setQrScannerVisible(true);
  };

  const handleCancelOrder = (reason: string, comment: string) => {
    if (!order) return;
    setCancelReason(reason);
    setCancelComment(comment);
    setScanType('cancel');
    hideCancelSheet();
    setQrScannerVisible(true);
  };

  const handleSuccessSliderClose = () => {
    setSuccessSliderVisible(false);
    // Navigate back to home
    router.push('/(tabs)');
  };

  const generateQRCodeUrl = (type: 'accept' | 'cancel') => {
    const action = type === 'accept' ? 'accept' : 'cancel';
    const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';
    
    // Build URL with query params for cancel action
    let url = `${apiUrl}/order/${orderId}/${action}`;
    if (type === 'cancel') {
      const params = new URLSearchParams();
      if (cancelReason) params.append('reason', cancelReason);
      if (cancelComment) params.append('comment', cancelComment);
      const queryString = params.toString();
      if (queryString) url += `?${queryString}`;
    }
    
    const dataParam = encodeURIComponent(url);
    
    // Center label with client name
    const label = encodeURIComponent(String(order?.clientName || 'CLIENT').slice(0, 28));
    const centerTextUrl = encodeURIComponent(
      `https://dummyimage.com/200x60/ffffff/000000.png&text=${label}`
    );
    
    // Generate QR URL
    const qrUrl = `https://quickchart.io/qr?text=${dataParam}&size=300&format=png&margin=2&ecLevel=H&centerImageUrl=${centerTextUrl}&centerImageWidth=120&centerImageHeight=36`;
    
    return qrUrl;
  };

  return {
    order,
    isLoading,
    cancelSheetVisible,
    showCancelSheet,
    hideCancelSheet,
    handleAcceptOrder,
    handleCancelOrder,
    qrScannerVisible,
    setQrScannerVisible,
    generateQRCodeUrl,
    scanType,
    successSliderVisible,
    handleSuccessSliderClose,
  };
}
