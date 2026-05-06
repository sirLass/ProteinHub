"use client";

// Simple mock authentication utility using LocalStorage
export const MOCK_USER = {
  id: "PH-2026-001",
  name: "Sample Distributor",
  email: "distributor@proteinhub.com",
  tier: "Gold Distributor",
};

export function loginUser() {
  if (typeof window !== "undefined") {
    localStorage.setItem("ph_session", JSON.stringify(MOCK_USER));
  }
}

export function logoutUser() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("ph_session");
  }
}

export function getSession() {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("ph_session");
    return session ? JSON.parse(session) : null;
  }
  return null;
}

export function isAuthenticated() {
  return getSession() !== null;
}
