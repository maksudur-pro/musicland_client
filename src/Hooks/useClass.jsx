import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://music-land-server.vercel.app/classes");
      const result = await res.json();
      return result;
    },
  });

  return [data, refetch];
};

export default useClass;
