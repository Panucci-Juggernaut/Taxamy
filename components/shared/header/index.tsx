import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Menu from "./menu";


const Header = () => {
   return <header className="sticky top-0 z-50 w-full border-b border-emerald-950/10 bg-background/85 backdrop-blur dark:border-white/10">
        <div className="wrapper flex-between">
          <div className="flex-start">
                <Link href={"/"} className="flex-start gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full border border-emerald-700/30 bg-emerald-600/10 text-sm font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                        TX
                    </span>
                    <span className="font-bold text-xl md:text-2xl">
                        {APP_NAME} 
                    </span>
                </Link>
            </div>
            <Menu />
        </div >
    </header>;
}

export default Header
