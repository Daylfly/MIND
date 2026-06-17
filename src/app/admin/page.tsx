"use client";

import { useCallback, useEffect, useState } from "react";
import { apiPath } from "@/lib/api-path";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Tab = "services" | "doctors" | "reviews" | "programs" | "contacts";

interface ServiceRow {
  id: string;
  title: string;
  price: number;
  scheduleHours: string;
  scheduleNote: string;
}

interface DoctorRow {
  id: string;
  name: string;
  role: string;
  qualification: string;
  schedule: string;
  active: boolean;
}

interface ReviewRow {
  id: string;
  doctorName: string;
  authorName: string;
  text: string;
  rating: number;
}

interface ProgramRow {
  id: string;
  title: string;
  description: string;
  price: number | null;
  active: boolean;
}

interface ContactRow {
  address: string;
  phone: string;
  email: string;
}

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(apiPath(path), {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) throw new Error("Ошибка запроса");
  return res.json();
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("services");
  const [services, setServices] = useState<ServiceRow[]>([]);
  const [doctors, setDoctors] = useState<DoctorRow[]>([]);
  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [programs, setPrograms] = useState<ProgramRow[]>([]);
  const [contact, setContact] = useState<ContactRow>({ address: "", phone: "", email: "" });

  const load = useCallback(async () => {
    const [s, d, r, p, c] = await Promise.all([
      api<ServiceRow[]>("/api/services"),
      api<DoctorRow[]>("/api/doctors"),
      api<ReviewRow[]>("/api/reviews"),
      api<ProgramRow[]>("/api/programs"),
      api<ContactRow>("/api/contacts"),
    ]);
    setServices(s);
    setDoctors(d);
    setReviews(r);
    setPrograms(p);
    if (c) setContact(c);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const remove = async (path: string) => {
    await api(path, { method: "DELETE" });
    await load();
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "services", label: "Услуги и цены" },
    { id: "doctors", label: "Врачи" },
    { id: "reviews", label: "Отзывы" },
    { id: "programs", label: "Программы" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <Container>
        <h1 className="mb-2 text-2xl font-bold text-gray-900">Админ-панель MIND</h1>
        <p className="mb-8 text-sm text-mind-muted">
          Редактирование и удаление данных. Изменения сразу сохраняются в базу.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <Button
              key={t.id}
              variant={tab === t.id ? "default" : "outline"}
              onClick={() => setTab(t.id)}
              className="rounded-xl"
            >
              {t.label}
            </Button>
          ))}
        </div>

        {tab === "services" && (
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border bg-white p-4 space-y-3">
                <Input
                  value={s.title}
                  onChange={(e) =>
                    setServices((prev) =>
                      prev.map((x) => (x.id === s.id ? { ...x, title: e.target.value } : x))
                    )
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Input
                    type="number"
                    value={s.price}
                    onChange={(e) =>
                      setServices((prev) =>
                        prev.map((x) =>
                          x.id === s.id ? { ...x, price: Number(e.target.value) } : x
                        )
                      )
                    }
                    placeholder="Цена"
                  />
                  <Input
                    value={s.scheduleHours}
                    onChange={(e) =>
                      setServices((prev) =>
                        prev.map((x) =>
                          x.id === s.id ? { ...x, scheduleHours: e.target.value } : x
                        )
                      )
                    }
                    placeholder="Расписание"
                  />
                  <Input
                    value={s.scheduleNote}
                    onChange={(e) =>
                      setServices((prev) =>
                        prev.map((x) =>
                          x.id === s.id ? { ...x, scheduleNote: e.target.value } : x
                        )
                      )
                    }
                    placeholder="Примечание"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    className="rounded-xl"
                    onClick={() =>
                      api(`/api/services/${s.id}`, {
                        method: "PUT",
                        body: JSON.stringify(s),
                      }).then(load)
                    }
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl text-red-600"
                    onClick={() => remove(`/api/services/${s.id}`)}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "doctors" && (
          <div className="space-y-4">
            {doctors.map((d) => (
              <div key={d.id} className="rounded-2xl border bg-white p-4 space-y-3">
                <Input
                  value={d.name}
                  onChange={(e) =>
                    setDoctors((prev) =>
                      prev.map((x) => (x.id === d.id ? { ...x, name: e.target.value } : x))
                    )
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input
                    value={d.role}
                    onChange={(e) =>
                      setDoctors((prev) =>
                        prev.map((x) => (x.id === d.id ? { ...x, role: e.target.value } : x))
                      )
                    }
                    placeholder="Должность"
                  />
                  <Input
                    value={d.qualification}
                    onChange={(e) =>
                      setDoctors((prev) =>
                        prev.map((x) =>
                          x.id === d.id ? { ...x, qualification: e.target.value } : x
                        )
                      )
                    }
                    placeholder="Квалификация"
                  />
                </div>
                <Input
                  value={d.schedule}
                  onChange={(e) =>
                    setDoctors((prev) =>
                      prev.map((x) => (x.id === d.id ? { ...x, schedule: e.target.value } : x))
                    )
                  }
                  placeholder="Расписание"
                />
                <div className="flex gap-2">
                  <Button
                    className="rounded-xl"
                    onClick={() =>
                      api(`/api/doctors/${d.id}`, {
                        method: "PUT",
                        body: JSON.stringify(d),
                      }).then(load)
                    }
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl text-red-600"
                    onClick={() => remove(`/api/doctors/${d.id}`)}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="rounded-2xl border bg-white p-4 space-y-3">
                <Input
                  value={r.text}
                  onChange={(e) =>
                    setReviews((prev) =>
                      prev.map((x) => (x.id === r.id ? { ...x, text: e.target.value } : x))
                    )
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input
                    value={r.authorName}
                    onChange={(e) =>
                      setReviews((prev) =>
                        prev.map((x) =>
                          x.id === r.id ? { ...x, authorName: e.target.value } : x
                        )
                      )
                    }
                    placeholder="Автор"
                  />
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    value={r.rating}
                    onChange={(e) =>
                      setReviews((prev) =>
                        prev.map((x) =>
                          x.id === r.id ? { ...x, rating: Number(e.target.value) } : x
                        )
                      )
                    }
                    placeholder="Оценка"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    className="rounded-xl"
                    onClick={() =>
                      api(`/api/reviews/${r.id}`, {
                        method: "PUT",
                        body: JSON.stringify(r),
                      }).then(load)
                    }
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl text-red-600"
                    onClick={() => remove(`/api/reviews/${r.id}`)}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "programs" && (
          <div className="space-y-4">
            {programs.map((p) => (
              <div key={p.id} className="rounded-2xl border bg-white p-4 space-y-3">
                <Input
                  value={p.title}
                  onChange={(e) =>
                    setPrograms((prev) =>
                      prev.map((x) => (x.id === p.id ? { ...x, title: e.target.value } : x))
                    )
                  }
                />
                <Input
                  value={p.description}
                  onChange={(e) =>
                    setPrograms((prev) =>
                      prev.map((x) =>
                        x.id === p.id ? { ...x, description: e.target.value } : x
                      )
                    )
                  }
                />
                <div className="flex gap-2">
                  <Button
                    className="rounded-xl"
                    onClick={() =>
                      api(`/api/programs/${p.id}`, {
                        method: "PUT",
                        body: JSON.stringify(p),
                      }).then(load)
                    }
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl text-red-600"
                    onClick={() => remove(`/api/programs/${p.id}`)}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "contacts" && (
          <div className="rounded-2xl border bg-white p-4 space-y-3 max-w-lg">
            <Input
              value={contact.address}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
              placeholder="Адрес"
            />
            <Input
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              placeholder="Телефон"
            />
            <Input
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              placeholder="Email"
            />
            <Button
              className="rounded-xl"
              onClick={() =>
                api("/api/contacts", { method: "PUT", body: JSON.stringify(contact) }).then(load)
              }
            >
              Сохранить контакты
            </Button>
          </div>
        )}
      </Container>
    </main>
  );
}
