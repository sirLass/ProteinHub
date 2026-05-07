"use client";

import React, { useState } from "react";

interface TrainingEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: "Online" | "In-Person";
  description: string;
}

const MOCK_EVENTS: TrainingEvent[] = [
  {
    id: "1",
    title: "New Distributor Orientation",
    date: new Date(2026, 4, 10), // May 10, 2026
    time: "10:00 AM",
    type: "Online",
    description: "Essential first steps for all new Protein Hub partners.",
  },
  {
    id: "2",
    title: "Product Costing & Logistics",
    date: new Date(2026, 4, 14), // May 14, 2026
    time: "2:00 PM",
    type: "Online",
    description: "Master the math behind high-profit menu planning.",
  },
  {
    id: "3",
    title: "Social Media Growth",
    date: new Date(2026, 4, 18), // May 18, 2026
    time: "3:30 PM",
    type: "Online",
    description: "How to use TikTok and FB Reels to attract new leads.",
  },
  {
    id: "4",
    title: "Quarterly Business Review",
    date: new Date(2026, 4, 25), // May 25, 2026
    time: "1:00 PM",
    type: "In-Person",
    description: "Regional gathering to discuss Q2 results and strategy.",
  },
];

export default function TrainingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 4, 14));

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const calendarDays = [];
  const totalDays = daysInMonth(year, month);
  const startOffset = firstDayOfMonth(year, month);

  // Fill empty days before the first day of the month
  for (let i = 0; i < startOffset; i++) {
    calendarDays.push(null);
  }

  // Fill actual days
  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(new Date(year, month, i));
  }

  const selectedEvents = MOCK_EVENTS.filter(
    (event) =>
      selectedDate &&
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
  );

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Calendar Grid */}
      <div className="lg:col-span-2 rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            {monthName} {year}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="rounded-lg border border-zinc-200 p-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextMonth}
              className="rounded-lg border border-zinc-200 p-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="bg-zinc-50 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:bg-zinc-900">
              {day}
            </div>
          ))}
          {calendarDays.map((date, i) => {
            if (!date) return <div key={`empty-${i}`} className="bg-white dark:bg-zinc-900" />;
            
            const hasEvent = MOCK_EVENTS.some(
              (e) => e.date.getDate() === date.getDate() && e.date.getMonth() === date.getMonth()
            );
            const isSelected = selectedDate && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth();
            const isToday = new Date().toDateString() === date.toDateString();

            return (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`relative aspect-square bg-white p-2 transition-all hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 ${
                  isSelected ? "z-10 ring-2 ring-zinc-900 dark:ring-white" : ""
                }`}
              >
                <span className={`text-sm font-medium ${isToday ? "flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black" : "text-zinc-900 dark:text-zinc-300"}`}>
                  {date.getDate()}
                </span>
                {hasEvent && (
                  <div className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-900 dark:bg-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Details */}
      <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-500">
          {selectedDate ? selectedDate.toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric" }) : "Select a day"}
        </h3>
        
        {selectedEvents.length > 0 ? (
          <div className="space-y-6">
            {selectedEvents.map((event) => (
              <div key={event.id} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">
                    {event.type}
                  </span>
                  <span className="text-xs text-zinc-500">{event.time}</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{event.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{event.description}</p>
                <button className="mt-4 w-full rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black">
                  {event.type === "Online" ? "View Training" : "Get Location"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center py-10 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800">
              <svg className="h-6 w-6 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-zinc-500">No trainings scheduled for this day.</p>
          </div>
        )}
      </div>
    </div>
  );
}
