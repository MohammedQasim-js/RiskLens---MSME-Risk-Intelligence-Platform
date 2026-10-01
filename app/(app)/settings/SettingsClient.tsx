'use client';

import React, { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { logout } from '@/app/auth-actions';
import { updateBusiness } from './actions';
import { ShieldCheck, Mail, Calendar, Key, LogOut, User as UserIcon, ChevronDown, ChevronUp } from 'lucide-react';

type Business = {
  business_id: string;
  legal_name: string;
  industry: string;
  city: string;
  state: string;
  msme_class: string;
  age_months: number;
  business_model: string;
  target_monthly_revenue: number;
  project_budget: number;
  project_start: string;
  project_end: string;
  expected_collection_days: number;
  planned_monthly_expenses: number;
} | null;

export function SettingsClient({
  user,
  business,
  updated,
}: {
  user: User;
  business: Business;
  updated: boolean;
}) {
  const [businessExpanded, setBusinessExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-full">
      <div className="px-4 md:px-8 lg:px-12 py-6 flex flex-col gap-8 max-w-[1200px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-xl text-3xl text-on-surface tracking-tight font-semibold">Account Settings</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Manage your personal profile, security credentials, and business entity configuration.
          </p>
        </div>

        {/* Success Toast */}
        {updated && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-semantic-success/10 border border-semantic-success/30 text-semantic-success font-body-sm text-sm">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span>Business profile updated successfully. Your risk scores will recalibrate shortly.</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Profile + Business */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">

            {/* Account Profile Card */}
            <div className="rounded-xl bg-surface-container-low/70 border border-border-glass shadow-lg p-6 sm:p-8 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-3xl font-bold shadow-inner">
                  {user.email ? user.email.charAt(0).toUpperCase() : <UserIcon size={32} />}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-on-surface">Your Profile</h2>
                  <div className="flex items-center gap-2 text-semantic-success text-sm font-medium">
                    <ShieldCheck size={16} />
                    <span>Verified Account</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Email Address</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                      <Mail className="text-outline shrink-0" size={18} />
                      <span className="text-on-surface font-medium truncate">{user.email}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Account ID</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                      <Key className="text-outline shrink-0" size={18} />
                      <span className="text-on-surface-variant font-mono text-sm truncate">{user.id}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Last Sign In</label>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                    <Calendar className="text-outline shrink-0" size={18} />
                    <span className="text-on-surface-variant" suppressHydrationWarning>
                      {user.last_sign_in_at
                        ? new Date(user.last_sign_in_at).toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
                        : 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Profile Edit */}
            <div className="rounded-xl bg-surface-container-low/70 border border-border-glass shadow-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setBusinessExpanded(v => !v)}
                className="w-full flex items-center justify-between p-6 hover:bg-surface-container/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">domain</span>
                  </div>
                  <div className="text-left">
                    <div className="font-headline-sm text-on-surface font-semibold">Business Profile</div>
                    <div className="font-body-sm text-body-sm text-outline">
                      {business ? business.legal_name : 'No business configured — fill in the form to create one'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-label-caps text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 uppercase">
                    Edit
                  </span>
                  {businessExpanded ? <ChevronUp className="text-outline" size={18} /> : <ChevronDown className="text-outline" size={18} />}
                </div>
              </button>

              {businessExpanded && (
                <form action={updateBusiness} className="flex flex-col gap-6 p-6 pt-0 border-t border-border-glass">
                  <div className="pt-4 flex flex-col gap-1">
                    <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Entity Master</span>
                    <p className="font-body-sm text-body-sm text-outline">
                      {business ? 'Update your business entity details. Changes will trigger risk score recalibration.' : 'No business found. Fill in the details below to create your business profile.'}
                    </p>
                  </div>

                  {/* Section 1: Entity Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Registered Business Name</label>
                      <input
                        name="legal_name"
                        defaultValue={business?.legal_name ?? ''}
                        suppressHydrationWarning
                        className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Industry Vertical</label>
                      <div className="relative">
                        <select
                          name="industry"
                          defaultValue={business?.industry ?? 'Precision Manufacturing & Packaging'}
                          suppressHydrationWarning
                          className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer"
                        >
                          <option value="Precision Manufacturing &amp; Packaging">Precision Manufacturing &amp; Packaging</option>
                          <option value="Textiles">Textiles</option>
                          <option value="Chemicals">Industrial Chemicals &amp; Polymers</option>
                          <option value="Logistics">Logistics, Warehousing &amp; Fleet Transport</option>
                          <option value="IT Services">IT &amp; Software Services</option>
                          <option value="Retail">Retail &amp; E-commerce</option>
                          <option value="Agriculture">Agriculture &amp; Food Processing</option>
                          <option value="Construction">Construction &amp; Real Estate</option>
                          <option value="Healthcare">Healthcare &amp; Pharmaceuticals</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline pointer-events-none text-lg">expand_more</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">MSME Classification</label>
                      <div className="relative">
                        <select
                          name="msme_class"
                          defaultValue={business?.msme_class ?? 'micro'}
                          suppressHydrationWarning
                          className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer"
                        >
                          <option value="micro">Micro (&lt;₹1 Cr)</option>
                          <option value="small">Small (₹1–10 Cr)</option>
                          <option value="medium">Medium (₹10–50 Cr)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline pointer-events-none text-lg">expand_more</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Operating City</label>
                      <input
                        name="city"
                        defaultValue={business?.city ?? ''}
                        suppressHydrationWarning
                        className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">State Jurisdiction</label>
                      <div className="relative">
                        <select
                          name="state"
                          defaultValue={business?.state ?? 'Maharashtra'}
                          suppressHydrationWarning
                          className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer"
                        >
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline pointer-events-none text-lg">expand_more</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Business Vintage (months)</label>
                      <input
                        name="age_months"
                        type="number"
                        defaultValue={business?.age_months ?? ''}
                        suppressHydrationWarning
                        className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Commercial Model</label>
                      <input
                        name="business_model"
                        defaultValue={business?.business_model ?? ''}
                        suppressHydrationWarning
                        className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all"
                        placeholder="e.g. B2B Wholesale"
                      />
                    </div>
                  </div>

                  {/* Section 2: Operating Plan */}
                  <div className="pt-2 border-t border-border-glass flex flex-col gap-1">
                    <span className="font-label-caps text-label-caps text-accent-electric uppercase tracking-wider">Operating Plan &amp; Benchmarks</span>
                    <p className="font-body-sm text-body-sm text-outline">Update your financial targets and cycle parameters.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Target Monthly Revenue (₹)</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-accent-electric font-semibold">₹</span>
                        <input name="target_monthly_revenue" type="number" defaultValue={business?.target_monthly_revenue ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Annual WC Budget (₹)</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-accent-electric font-semibold">₹</span>
                        <input name="project_budget" type="number" defaultValue={business?.project_budget ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Planned Monthly OPEX (₹)</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-primary font-semibold">₹</span>
                        <input name="planned_monthly_expenses" type="number" defaultValue={business?.planned_monthly_expenses ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Expected DSO (days)</label>
                      <input name="expected_collection_days" type="number" defaultValue={business?.expected_collection_days ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 rounded-xl outline-none transition-all" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Cycle Start Date</label>
                      <input name="project_start" type="date" defaultValue={business?.project_start ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-caps text-xs uppercase tracking-wider text-outline">Cycle End Date</label>
                      <input name="project_end" type="date" defaultValue={business?.project_end ?? ''} suppressHydrationWarning className="w-full bg-surface-container-lowest border border-border-glass hover:border-border-glass-strong focus:border-primary text-on-surface text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-end gap-3 pt-2 border-t border-border-glass">
                    <button
                      type="button"
                      onClick={() => setBusinessExpanded(false)}
                      className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-body-sm text-sm transition-all border border-border-glass"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-body-sm text-sm font-semibold shadow-md hover:brightness-110 transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">save</span>
                      {/* label set at server render time, no hydration mismatch */}
                      Save &amp; Recalibrate Risk Score
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right — Security & Session */}
          <div className="col-span-1 flex flex-col gap-6">
            <div className="rounded-xl bg-surface-container-low/70 border border-border-glass shadow-lg p-6 flex flex-col gap-6">
              <h3 className="font-headline-sm text-on-surface font-semibold border-b border-border-glass pb-4">Security</h3>
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-left border border-transparent hover:border-border-glass">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-on-surface">Change Password</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Update your security credentials</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-left border border-transparent hover:border-border-glass">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-on-surface">Two-Factor Auth</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Add an extra layer of security</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-semantic-critical/5 border border-semantic-critical/20 shadow-lg p-6 flex flex-col gap-6">
              <h3 className="font-headline-sm text-semantic-critical font-semibold border-b border-semantic-critical/20 pb-4">Session</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Logging out will clear your active session. You will need to re-authenticate to access the MRIP platform.
              </p>
              <form action={logout}>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-semantic-critical/10 text-semantic-critical hover:bg-semantic-critical hover:text-white transition-all font-medium border border-semantic-critical/30 hover:border-semantic-critical"
                >
                  <LogOut size={18} />
                  <span>Log Out of RiskLens</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
