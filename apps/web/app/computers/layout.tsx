import { ProfileHeader } from "@/components/layout/profile-header";
import { SiteFooter, SiteHeader } from "@vintage/ui/layout/main-app";
import React from "react";


export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader>
        <ProfileHeader />
      </SiteHeader>
      <div className="container flex-1 items-start ">{children}</div>
      <SiteFooter />
    </div>
  );
}
