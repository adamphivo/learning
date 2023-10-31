"use client";

import { useEffect, useState } from "react";
import { ApiResponseSchema } from "@/schemas";

export default function Stats() {
  const [data, setData] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/stats");
      if (response.ok) {
        const data = await response.json();
        const parsed = ApiResponseSchema.parse(data);
        setData(parsed.data);
      }
    }

    getData();
  });

  return (
    <div>
      {!data && <div>loading</div>}
      {data}=
    </div>
  );
}
