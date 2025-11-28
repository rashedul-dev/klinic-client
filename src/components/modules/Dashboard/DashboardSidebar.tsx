import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getUserinfo } from "@/services/auth/getUserInfo";
import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getNavItemsByRole } from "@/lib/navItems.config";

const DashboardSidebar = async () => {
  const userInfo = (await getUserinfo()) as UserInfo;
  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);
  return (
    <div>
      <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
    </div>
  );
};

export default DashboardSidebar;
