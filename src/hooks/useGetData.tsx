import { useEffect, useState } from "react";
import { type importDataConfig } from "../interfaces/Interfaces";

export default function useGetData(): [importDataConfig[], boolean, any] {
  const [data, setData] = useState<importDataConfig[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5000/getdata");
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData().catch((e) => {
      console.log(e);
    });
  }, []);

  return [data, isLoading, error];
}
