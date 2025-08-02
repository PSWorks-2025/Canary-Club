const StatHighlightDisplay = ({ orgStats, tertiaryBackgroundColor }) => {
  const stats = [
    {
      title: 'Số sự kiện',
      key: 'num_events',
      value: String(orgStats?.num_events ?? ''),
    },
    {
      title: 'Số người đã giúp đỡ',
      key: 'num_people_helped',
      value: String(orgStats?.num_people_helped ?? ''),
    },
    {
      title: 'Số tiền quyên góp',
      key: 'total_money_donated',
      value: String(orgStats?.total_money_donated ?? ''),
    },
    {
      title: 'Số dự án đã làm',
      key: 'num_projects',
      value: String(orgStats?.num_projects ?? ''),
    },
  ];

  return (
    <>
      <div className="w-full h-full md:h-64 flex flex-col md:flex-row justify-center items-center z-auto relative -mt-30">
        {stats.map((stat) => (
          <div
            key={stat.key}
            className="hover:scale-105 opacity-100 transition-all duration-200 w-64 h-full mx-4 relative overflow-hidden rounded-xl"
            style={{
              backgroundColor: orgStats?.primary_color || '#ffffff',
              borderRadius: '1.5rem',
              boxShadow: '0px 8px 28px -9px rgba(0,0,0,0.45)',
            }}
          >
            <div
              className="opacity-100 transition-all duration-200 wave absolute w-[540px] h-[700px] opacity-60"
              style={{
                left: '0',
                top: '270px',
                marginLeft: '-50%',
                marginTop: '-70%',
                background: `linear-gradient(744deg, ${
                  orgStats?.secondary_color || '#000000'
                }, ${tertiaryBackgroundColor || '#000000'})`,
                borderRadius: '40%',
                animation: 'wave 10s infinite linear',
              }}
            />
            <div className="hover:opacity-100 transition-all duration-200 relative z-10 w-full flex flex-col items-center justify-center">
              <h3
                className="w-full font-medium text-sm md:text-xl py-3 md:py-9 text-center outline-none text-white"
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
              >
                {stat.title}
              </h3>
              <div
                className="w-full font-bold text-2xl md:text-6xl text-white text-center outline-none bg-transparent"
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
                // value={stat.value}
              >
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default StatHighlightDisplay;
