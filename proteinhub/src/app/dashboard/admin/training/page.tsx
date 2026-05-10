"use client";

import { useState } from "react";

interface TrainingSession {
  id: string;
  name: string;
  date: string;
  time: string;
  place: string;
  locationDetails: string;
}

const initialTrainings: TrainingSession[] = [
  { id: "1", name: "Product Costing 101", date: "2026-05-14", time: "14:00", place: "Zoom", locationDetails: "https://zoom.us/j/123456789" },
  { id: "2", name: "Effective Sales Closing", date: "2026-05-16", time: "10:00", place: "Main Office", locationDetails: "Floor 3, Building A, Metro Manila" },
];

export default function TrainingAdminPage() {
  const [trainings, setTrainings] = useState<TrainingSession[]>(initialTrainings);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTraining, setEditingTraining] = useState<TrainingSession | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("Google Meet");
  const [locationDetails, setLocationDetails] = useState("");

  const openModal = (training?: TrainingSession) => {
    if (training) {
      setEditingTraining(training);
      setName(training.name);
      setDate(training.date);
      setTime(training.time);
      setPlace(training.place);
      setLocationDetails(training.locationDetails);
    } else {
      setEditingTraining(null);
      setName("");
      // Set actual date and time as default
      const now = new Date();
      setDate(now.toISOString().split('T')[0]);
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
      setPlace("Google Meet");
      setLocationDetails("");
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTraining) {
      setTrainings(trainings.map(t => t.id === editingTraining.id ? { ...t, name, date, time, place, locationDetails } : t));
    } else {
      const newTraining = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        date,
        time,
        place,
        locationDetails
      };
      setTrainings([...trainings, newTraining]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this training?")) {
      setTrainings(trainings.filter(t => t.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Training Schedule</h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Schedule and manage training sessions for your distributors.</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20"
        >
          Add New Training
        </button>
      </header>

      {/* Training Table */}
      <section className="overflow-hidden rounded-3xl border border-zinc-200/50 bg-white shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50/50 border-b border-zinc-100 dark:bg-zinc-800/50 dark:border-zinc-800">
            <tr>
              <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Meeting Name</th>
              <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Date</th>
              <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Time</th>
              <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Place</th>
              <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {trainings.map((t) => (
              <tr key={t.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-zinc-900 dark:text-white">{t.name}</div>
                  <div className="text-[10px] text-zinc-400 mt-1 truncate max-w-[200px]">{t.locationDetails}</div>
                </td>
                <td className="px-6 py-5 text-zinc-500 dark:text-zinc-400">{new Date(t.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                <td className="px-6 py-5 text-zinc-500 dark:text-zinc-400">{t.time}</td>
                <td className="px-6 py-5">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    t.place === 'Google Meet' || t.place === 'Zoom' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                  }`}>
                    {t.place}
                  </span>
                </td>
                <td className="px-6 py-5 text-right space-x-2">
                  <button 
                    onClick={() => openModal(t)}
                    className="rounded-lg bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(t.id)}
                    className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-zinc-900 animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              {editingTraining ? "Edit Training Session" : "Schedule New Training"}
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Meeting Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white"
                  placeholder="e.g. Sales Mastery"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Date</label>
                  <input 
                    type="date" 
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 py-3 text-sm focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white"
                  />
                  <svg className="absolute left-3 top-[34px] h-4 w-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Time</label>
                  <input 
                    type="time" 
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 py-3 text-sm focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white"
                  />
                  <svg className="absolute left-3 top-[34px] h-4 w-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Place of Meeting</label>
                <select 
                  required
                  value={place}
                  onChange={(e) => {
                    setPlace(e.target.value);
                    setLocationDetails(""); 
                  }}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-10 py-3 text-sm appearance-none focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white"
                >
                  <option value="Google Meet">Google Meet</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Main Office">Main Office</option>
                  <option value="Establishment">Establishment</option>
                </select>
                <svg className="absolute left-3 top-[34px] h-4 w-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg className="absolute right-3 top-[34px] h-4 w-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Conditional Field: Link or Address */}
              <div className="animate-in slide-in-from-top-2 duration-300">
                {place === "Google Meet" || place === "Zoom" ? (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Meeting Link</label>
                    <input 
                      type="url" 
                      required
                      value={locationDetails}
                      onChange={(e) => setLocationDetails(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white"
                      placeholder={`Paste your ${place} link here`}
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Exact Meeting Address</label>
                    <textarea 
                      required
                      rows={2}
                      value={locationDetails}
                      onChange={(e) => setLocationDetails(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm focus:border-red-600 focus:outline-none dark:border-zinc-800 dark:bg-black dark:text-white resize-none"
                      placeholder="Enter the full address or area name"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl bg-zinc-100 py-3 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 rounded-xl bg-red-600 py-3 text-sm font-bold text-white transition-all hover:bg-red-700 shadow-lg shadow-red-600/20"
                >
                  {editingTraining ? "Update Session" : "Schedule Meeting"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
