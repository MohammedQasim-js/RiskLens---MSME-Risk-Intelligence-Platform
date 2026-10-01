'use client';

import React from 'react';
import { User } from '@supabase/supabase-js';
import { logout } from '@/app/auth-actions';
import { ShieldCheck, Mail, Calendar, Key, LogOut, User as UserIcon } from 'lucide-react';

export function SettingsClient({ user }: { user: User }) {
  return (
    <div className="flex flex-col w-full min-h-full">
      <div className="px-4 md:px-8 lg:px-12 py-6 flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-xl text-3xl text-on-surface tracking-tight font-semibold">Account Settings</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Manage your personal profile, security credentials, and authentication preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
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
                    <label className="text-xs font-semibold text-outline uppercase tracking-wider">Email Address</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                      <Mail className="text-outline shrink-0" size={18} />
                      <span className="text-on-surface font-medium truncate">{user.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-outline uppercase tracking-wider">Account ID</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                      <Key className="text-outline shrink-0" size={18} />
                      <span className="text-on-surface-variant font-mono text-sm truncate">{user.id}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-outline uppercase tracking-wider">Last Sign In</label>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container/50 border border-border-glass">
                    <Calendar className="text-outline shrink-0" size={18} />
                    <span className="text-on-surface-variant">
                      {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions & Security */}
          <div className="col-span-1 flex flex-col gap-6">
            <div className="rounded-xl bg-surface-container-low/70 border border-border-glass shadow-lg p-6 flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-on-surface border-b border-border-glass pb-4">Security</h3>
              
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-left border border-transparent hover:border-border-glass">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-on-surface">Change Password</span>
                    <span className="text-xs text-on-surface-variant">Update your security credentials</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>
                
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-left border border-transparent hover:border-border-glass">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-on-surface">Two-Factor Auth</span>
                    <span className="text-xs text-on-surface-variant">Add an extra layer of security</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-semantic-critical/5 border border-semantic-critical/20 shadow-lg p-6 flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-semantic-critical border-b border-semantic-critical/20 pb-4">Session</h3>
              <p className="text-sm text-on-surface-variant">
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
