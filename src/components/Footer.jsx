export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Logan Fire & Security. All rights reserved.</p>
        <div className="text-xs text-gray-500">BAFE • NSI Gold • BS 5839 • BS 8214</div>
      </div>
    </footer>
  );
}
