"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { MirrorProfile } from "@/types/profile";

export default function ProfilePage() {
  const [profile, setProfile] = useState<MirrorProfile | null>(null);

  useEffect(() => {
    const storedProfile = sessionStorage.getItem("mirrorme_profile");

    if (!storedProfile) return;

    try {
      const parsedProfile = JSON.parse(storedProfile) as MirrorProfile;
      setProfile(parsedProfile);
    } catch {
      setProfile(null);
    }
  }, []);

  if (!profile) {
    return (
      <main className="container-app flex min-h-screen items-center justify-center py-16">
        <section className="card max-w-xl p-8 text-center">
          <h1 className="text-3xl font-black">No profile found</h1>
          <p className="muted mt-3">
            Complete the onboarding first so MirrorMe can generate your initial
            profile.
          </p>
          <Link href="/onboarding" className="primary-button mt-6">
            Go to onboarding
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container-app min-h-screen py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          Your first Mirror Profile
        </p>
        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Here’s how MirrorMe sees you
        </h1>
        <p className="muted mt-4 max-w-2xl text-lg leading-8">
          This is the first generated version of your psychological profile.
          Next, we’ll use this to power your mirror agent.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="card p-6">
          <p className="muted text-sm">Social energy</p>
          <p className="mt-2 text-2xl font-bold capitalize">
            {profile.socialEnergy}
          </p>
        </div>

        <div className="card p-6">
          <p className="muted text-sm">Decision style</p>
          <p className="mt-2 text-2xl font-bold capitalize">
            {profile.decisionStyle}
          </p>
        </div>

        <div className="card p-6">
          <p className="muted text-sm">Risk style</p>
          <p className="mt-2 text-2xl font-bold capitalize">
            {profile.riskStyle}
          </p>
        </div>

        <div className="card p-6">
          <p className="muted text-sm">Work style</p>
          <p className="mt-2 text-2xl font-bold capitalize">
            {profile.workStyle}
          </p>
        </div>

        <div className="card p-6">
          <p className="muted text-sm">Emotional style</p>
          <p className="mt-2 text-2xl font-bold capitalize">
            {profile.emotionalStyle}
          </p>
        </div>

        <div className="card p-6 md:col-span-2 xl:col-span-1">
          <p className="muted text-sm">Summary</p>
          <p className="mt-2 leading-7">{profile.summary}</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/onboarding" className="secondary-button">
          Retake onboarding
        </Link>

        <button type="button" className="primary-button" disabled>
          Mirror chat coming next
        </button>
      </div>
    </main>
  );
}
