"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const contactNumber = formData.get("contactNumber") as string;
  const ageRange = formData.get("ageRange") as string;
  const source = formData.get("source") as string;
  const scheduleSlot = formData.get("scheduleSlot") as string;
  const interestLevel = formData.get("interestLevel") as string;
  const referrerId = formData.get("referrerId") as string || null;

  try {
    await prisma.user.upsert({
      where: { email },
      update: {
        name: `${firstName} ${lastName}`,
        contactNumber,
        ageRange,
        source,
        scheduleSlot,
        interestLevel,
        referrerId,
        role: "REGISTERED",
      },
      create: {
        email,
        name: `${firstName} ${lastName}`,
        contactNumber,
        ageRange,
        source,
        scheduleSlot,
        interestLevel,
        referrerId,
        role: "REGISTERED",
      },
    });
  } catch (error) {
    console.error("Failed to register user:", error);
    return { error: "Failed to register user. Please try again." };
  }

  // Set session or cookie here if needed
  // Redirect to distributor dashboard as requested
  redirect("/dashboard/distributor");
}
