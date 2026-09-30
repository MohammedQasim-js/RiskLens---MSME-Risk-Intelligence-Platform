"use client";

import { useEffect } from "react";

export function OverviewClientInteractions() {
  useEffect(() => {
    // Toggle Chart Display Modes
    const toggleButtons = document.querySelectorAll('.chart-toggle-btn');
    const inflowBars = ['inflow-apr', 'inflow-may', 'inflow-jun', 'inflow-jul', 'inflow-aug', 'inflow-sep'];
    const outflowBars = ['outflow-apr', 'outflow-may', 'outflow-jun', 'outflow-jul', 'outflow-aug', 'outflow-sep'];
    const netLine = document.getElementById('net-trajectory-path');

    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleButtons.forEach(b => {
          b.classList.remove('bg-surface-container-high', 'text-on-surface');
          b.classList.add('text-outline');
        });
        btn.classList.remove('text-outline');
        btn.classList.add('bg-surface-container-high', 'text-on-surface');

        const mode = (btn as HTMLElement).dataset.mode;
        inflowBars.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.style.opacity = (mode === 'outflow') ? '0.15' : '1';
        });
        outflowBars.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.style.opacity = (mode === 'inflow') ? '0.15' : '1';
        });
        if (netLine) {
          netLine.style.opacity = (mode === 'all') ? '1' : '0.35';
        }
      });
    });

    // Evidence Drawer Trigger Interaction
    const drawer = document.getElementById('evidence-drawer');
    const closeBtn = document.getElementById('close-evidence');
    const closeActionBtn = document.getElementById('close-evidence-btn');
    const evidenceTitle = document.getElementById('evidence-title');
    const triggers = document.querySelectorAll('.evidence-trigger');

    triggers.forEach(trig => {
      trig.addEventListener('click', () => {
        const signal = (trig as HTMLElement).getAttribute('data-driver') || 'Risk Evidence Factor';
        if (evidenceTitle) evidenceTitle.textContent = signal;
        if (drawer) drawer.classList.remove('hidden');
      });
    });

    const hideDrawer = () => {
      if (drawer) drawer.classList.add('hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', hideDrawer);
    if (closeActionBtn) closeActionBtn.addEventListener('click', hideDrawer);
    if (drawer) {
      drawer.addEventListener('click', (e) => {
        if (e.target === drawer) hideDrawer();
      });
    }
  }, []);

  return null;
}
