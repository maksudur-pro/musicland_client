import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const { data = {} } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `https://music-land-server.vercel.app/role?email=${user?.email}`
      );
      const result = await res.json();
      return result;
    },
  });

  return { data };
};

export default useRole;
