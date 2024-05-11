'use client';

import React, { useState } from 'react';
import RoleGuard from '../hoc/RoleGuard';
import SidebarDashboard from '../components/SidebarDashboard';

const organizerDashboard = () => {
  return (
    <main className="min-h-[90vh] ">
      <SidebarDashboard />
      <main className="ml-[70px] p-8 h-full">
        <section>
          <div id="headerContent"></div>
          <div id="content">
            <div className="grid auto-rows-[200px] grid-cols-[600px_minmax(200px,_1fr)_minmax(200px,_1fr)] gap-4">
              <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
              <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
              <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
              <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
              <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
              <div className="row-span-1 col-span-2 h-[500px] rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
              </div>
            </div>
          </div>
          <div id="footerContent"></div>
        </section>
      </main>
    </main>
  );
};

export default RoleGuard(organizerDashboard);
