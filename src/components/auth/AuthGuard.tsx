"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) return <p>Verificando autenticação...</p>;

  return <>{children}</>;
}
