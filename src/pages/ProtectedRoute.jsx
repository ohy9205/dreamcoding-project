import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || (requireAdmin && !user.isAdmin)) {
      // navigate("/");
      navigate("/", { replace: true });
      // return <Navigate to="/" replace={true} />;
    }
  }, [user, requireAdmin, navigate]);

  return children;
  // 로그인한 사용자가 있는지 확인하고
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true면 로그인 상태이면서 관리자 권한이어야 하고
  // 조건이 안맞으면 Home컴포넌트로 이동
  // 조건이 맞는 경우에만 전달된 children(실제 페이지 컴포넌트)를 보여줌
}
