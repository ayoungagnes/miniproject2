import { useEffect, useState } from "react";

function useRoomDescription(url) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setDescription(data.description || data.body || "No description available");
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load description.");
        setLoading(false);
      });
  }, [url]);

  return { description, loading, error };
}

export default useRoomDescription;
