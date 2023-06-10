import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructorClass = () => {
  const { user, loading } = useAuth();
  const { data = [] } = useQuery({
    queryKey: ["class", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/class?email=${user?.email}`
      );
      const result = await res.json();
      return result;
    },
  });

  return [data];
};

export default useInstructorClass;
