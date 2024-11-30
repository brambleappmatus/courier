import { MainNav } from './main-nav';

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r bg-background lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Courier Efficiency Tool</h2>
      </div>
      <div className="p-6">
        <MainNav />
      </div>
    </div>
  );
}