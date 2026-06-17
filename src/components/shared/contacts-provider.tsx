"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { apiPath } from "@/lib/api-path";

export interface ContactData {
  address: string;
  phone: string;
  email: string;
}

const DEFAULT: ContactData = {
  address: "г. Москва, ул. Медицинская, д. 15",
  phone: "8 (800) 400-20-20",
  email: "info@mind.ru",
};

interface ContactsContextValue {
  contacts: ContactData;
  reload: () => Promise<void>;
}

const ContactsContext = createContext<ContactsContextValue | null>(null);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<ContactData>(DEFAULT);

  const reload = useCallback(async () => {
    const res = await fetch(apiPath("/api/contacts"));
    const data = await res.json();
    if (data) setContacts(data);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <ContactsContext.Provider value={{ contacts, reload }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const ctx = useContext(ContactsContext);
  if (!ctx) throw new Error("useContacts must be used within ContactsProvider");
  return ctx;
}
