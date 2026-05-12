const DashboardOverviewStats = ({ stats }) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-emerald-700">
              {stat.change}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default DashboardOverviewStats;
