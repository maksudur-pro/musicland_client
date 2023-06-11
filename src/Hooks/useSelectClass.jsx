import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useSelectClass = () => {
  const { user, loading } = useAuth();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [classes, refetch];
};

export default useSelectClass;
