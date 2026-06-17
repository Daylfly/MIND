"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { apiPath } from "@/lib/api-path";
import { getServiceIcon } from "@/lib/service-icons";
import type { ServiceClient } from "@/lib/service-mapper";
import type { MindServiceDetail } from "@/types/service-detail.interface";

interface DataContextValue {
  services: MindServiceDetail[];
  generalService: MindServiceDetail | null;
  loading: boolean;
  reload: () => Promise<void>;
}

const DataContext = createContext<DataContextValue | null>(null);

function toDetail(s: ServiceClient): MindServiceDetail {
  return {
    id: s.id,
    slug: s.slug,
    icon: getServiceIcon(s.iconKey),
    iconColor: s.iconColor,
    iconBg: s.iconBg,
    title: s.title,
    description: s.description,
    fullDescription: s.fullDescription,
    price: s.price,
    specialists: s.specialists,
    schedule: s.schedule,
    image: s.image,
  };
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<MindServiceDetail[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(apiPath("/api/services"));
      const data: ServiceClient[] = await res.json();
      setServices(data.map(toDetail));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const generalService = useMemo(
    () => services.find((s) => s.slug === "general") ?? null,
    [services]
  );

  return (
    <DataContext.Provider value={{ services, generalService, loading, reload }}>
      {children}
    </DataContext.Provider>
  );
}

export function useAppData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useAppData must be used within DataProvider");
  return ctx;
}
