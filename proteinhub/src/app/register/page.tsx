"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { registerUser } from "@/lib/actions";

function RegisterForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrerId = searchParams.get("ref");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    ageRange: "",
    source: "",
    scheduleSlot: "",
    interestLevel: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("referrerId", referrerId || "");

    const result = await registerUser(data);
    if (result?.error) {
      alert(result.error);
      setIsLoading(false);
      setShowConfirm(false);
    }
  };

  const steps = [
    { id: 1, title: "Personal" },
    { id: 2, title: "Details" },
    { id: 3, title: "Schedule" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      <Link 
        href="/" 
        className="absolute left-8 top-8 flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>
      
      <div className="w-full max-w-xl">
        {/* Progress Indicator */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                step >= s.id 
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black" 
                  : "border-zinc-200 bg-white text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
              }`}>
                {step > s.id ? (
                  <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs sm:text-sm font-bold">{s.id}</span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className={`h-[2px] w-8 sm:w-12 mx-1 sm:mx-2 transition-all duration-500 ${
                  step > s.id ? "bg-zinc-900 dark:bg-white" : "bg-zinc-200 dark:bg-zinc-800"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-10 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
            {step === 1 && "Start Your Journey"}
            {step === 2 && "Tell Us More"}
            {step === 3 && "Final Step"}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {step === 1 && "Basic info to get started."}
            {step === 2 && "Help us understand your background."}
            {step === 3 && "Pick a time that works for you."}
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="John" className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Doe" className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="name@example.com" className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Contact Number</label>
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required placeholder="0917 123 4567" className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Age Range</label>
                  <select name="ageRange" value={formData.ageRange} onChange={handleInputChange} required className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                    <option value="">Select Range</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-60">55-60</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">How did you hear about us?</label>
                  <select name="source" value={formData.source} onChange={handleInputChange} required className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                    <option value="">Select Source</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Preferred Schedule Slot</label>
                  <select name="scheduleSlot" value={formData.scheduleSlot} onChange={handleInputChange} required className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                    <option value="">Select Slot</option>
                    <option value="tuesday">Tuesday (7:00 PM)</option>
                    <option value="thursday">Thursday (7:00 PM)</option>
                    <option value="saturday">Saturday (2:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Interest Level</label>
                  <select name="interestLevel" value={formData.interestLevel} onChange={handleInputChange} required className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                    <option value="">Select Interest</option>
                    <option value="casual">Casual (Just curious)</option>
                    <option value="serious">Serious (Ready to start)</option>
                    <option value="urgent">Urgent (Want to start ASAP)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-14 flex-1 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-base font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.contactNumber)}
                className="flex h-14 flex-[2] items-center justify-center rounded-2xl bg-zinc-900 text-base font-bold text-white transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirm(true)}
                disabled={!formData.scheduleSlot || !formData.interestLevel}
                className="flex h-14 flex-[2] items-center justify-center rounded-2xl bg-zinc-900 text-base font-bold text-white shadow-xl transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Submit Reservation
              </button>
            )}
          </div>
          <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Step {step} of 3
          </p>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already a distributor?{" "}
          <Link href="/login" className="font-bold text-zinc-900 hover:underline dark:text-white">
            Sign In
          </Link>
        </p>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-zinc-900/40 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">Confirm Your Reservation</h2>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                By submitting, you agree to receive details about your business orientation at <span className="font-bold text-zinc-900 dark:text-white">{formData.email}</span>.
              </p>
            </div>
            
            <div className="mt-10 space-y-4">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full rounded-2xl bg-zinc-900 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-zinc-800 active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                {isLoading ? "Processing..." : "Yes, Submit Reservation"}
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full rounded-2xl bg-zinc-100 py-4 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-200 active:scale-[0.98] dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-zinc-500">Loading registration form...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
