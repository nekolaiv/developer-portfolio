import { FloatingNav } from "@/components/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main className="w-full min-h-[200vh] flex flex-col border border-red-700">
			<div className="flex flex-col flex-1 justify-center items-center">
				<FloatingNav navItems={navItems} />
				<h1 className="text-4xl md:text-6xl lg:text-9xl">Hello World</h1>
			</div>
		</main>
    );
}
