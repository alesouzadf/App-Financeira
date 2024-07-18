import {IconDashboard} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
        flex flex-col justify-start h-full sm:h-full
        p-2 gap-2 text-3xl min-w-64 overflow-auto `}
    >
      <MenuItem icon={<IconDashboard />} label="Dashboard" url="/Dashboard" />
    </div>
  );
}
