import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../store/AuthContext";

export default function useCarts() {
  const queryClient = useQueryClient();
  const {
    user: { uid },
  } = useAuthContext();
  const cartsQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid, // !!연산자: 값을 boolean타입으로 명시적으로 형변환 함
    // enabled: false인 쿼리가 자동응로 실행 안되게 함
  });

  const removeCarts = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  const addCarts = useMutation(
    (product) => {
      return addOrUpdateToCart(uid, product);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  return { cartsQuery, removeCarts, addCarts };
}
