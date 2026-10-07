import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-800 bg-slate-900 lg:block">
        <div className="flex h-full flex-col">

          {/* Logo */}
          <div className="flex h-20 items-center border-b border-slate-800 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                A
              </div>

              <div>
                <h1 className="font-bold">AdminPanel</h1>
                <p className="text-xs text-slate-500">Dashboard</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white"
            >
              <span>⌂</span>
              Dashboard
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <span>👤</span>
              Users
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <span>📦</span>
              Products
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <span>🛒</span>
              Orders
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <span>⚙</span>
              Settings
            </a>

          </nav>

          {/* Profile */}
          <div className="border-t border-slate-800 p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                MY
              </div>

              <div>
                <p className="text-sm font-semibold">Muhammad Younas</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full rounded-xl border border-red-500/20 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
            >
              Logout
            </button>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">

        {/* Topbar */}
        <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

            <div>
              <p className="text-sm text-slate-500">
                Welcome back 👋
              </p>

              <h1 className="text-xl font-bold sm:text-2xl">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">

              <button className="hidden rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 sm:block">
                🔔 Notifications
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                MY
              </div>

            </div>

          </div>
        </header>

        {/* Dashboard Content */}
        <section className="p-4 sm:p-6 lg:p-8">

          {/* Welcome Banner */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-slate-900 p-6 sm:p-8">

            <div className="max-w-2xl">

              <p className="mb-2 text-sm font-medium text-blue-400">
                ADMIN DASHBOARD
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Good to see you, Muhammad! 👋
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Manage your application, monitor activity, and keep
                everything organized from one place.
              </p>

            </div>

          </div>

          {/* Statistics */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  👥
                </div>

                <span className="text-sm font-medium text-green-400">
                  +12.5%
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                Total Users
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                1,248
              </h3>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                  📦
                </div>

                <span className="text-sm font-medium text-green-400">
                  +8.2%
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                Products
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                356
              </h3>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  🛒
                </div>

                <span className="text-sm font-medium text-green-400">
                  +15.4%
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                Orders
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                842
              </h3>

            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-xl">
                  💰
                </div>

                <span className="text-sm font-medium text-green-400">
                  +10.8%
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                Revenue
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                $24.8K
              </h3>

            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            {/* Overview */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-bold">
                    Overview
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your activity overview
                  </p>
                </div>

                <button className="rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-400 hover:bg-slate-800">
                  This Month
                </button>

              </div>

              {/* Fake Chart */}
              <div className="mt-8 flex h-64 items-end gap-2 sm:gap-4">

                {[35, 55, 45, 70, 50, 80, 65, 90, 72, 95, 78, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div
                        className="w-full max-w-10 rounded-t-lg bg-blue-600 transition hover:bg-blue-500"
                        style={{ height: `${height}%` }}
                      ></div>

                      <span className="text-xs text-slate-600">
                        {index + 1}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="mb-6">
                <h2 className="text-lg font-bold">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Latest updates
                </p>
              </div>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    👤
                  </div>

                  <div>
                    <p className="text-sm text-slate-300">
                      New user registered
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      5 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm text-slate-300">
                      Order completed
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      20 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                    📦
                  </div>

                  <div>
                    <p className="text-sm text-slate-300">
                      New product added
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      1 hour ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                    ⚡
                  </div>

                  <div>
                    <p className="text-sm text-slate-300">
                      System updated
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      2 hours ago
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;