import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {useTheme} from "@/components/theme-provider.tsx";

export function ModeToggle() {
  const {theme,setTheme} = useTheme()
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem]  dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
