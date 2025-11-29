'use client';

import { useEffect, useState, useRef } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

interface ContributionData {
  date: string;
  count: number;
}

interface Milestone {
  date: string;
  label: string;
}

const milestones: Milestone[] = [
  { date: '2022-05-15', label: 'Influxer Start' },
  { date: '2023-03-01', label: 'First Revenue Earned' },
  { date: '2024-08-15', label: 'Hired Team of 9' },
  { date: '2025-03-01', label: 'Change Management' },
  { date: '2025-10-20', label: 'Leave Influxer' },
];


export default function ContributionHeatmap() {
  const [allData, setAllData] = useState<ContributionData[]>([]);
  const [selectedYear, setSelectedYear] = useState(2023);

  // Scroll bullshit
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    visibleWidth: 0,
    totalWidth: 0,
    scrollLeft: 0
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (scrollableRef.current) {
        setDimensions({
          visibleWidth: scrollableRef.current.clientWidth,
          totalWidth: scrollableRef.current.scrollWidth,
          scrollLeft: scrollableRef.current.scrollLeft
        });
      }
    };

    updateDimensions();
    
    const element = scrollableRef.current;
    if (element) {
      element.addEventListener('scroll', updateDimensions);
      window.addEventListener('resize', updateDimensions);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', updateDimensions);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);


  useEffect(() => {
    const loadContributions = async () => {
      try {
        const files = [
          '/data/contributions22-23.csv',
          '/data/contributions23-24.csv',
          '/data/contributions24-25.csv',
          '/data/contributions25.csv',
        ];

        const combined: ContributionData[] = [];

        for (const file of files) {
          const response = await fetch(file);
          const text = await response.text();
          const lines = text.trim().split('\n');

          for (const line of lines) {
            const [dateStr, countStr] = line.split(',');
            const date = dateStr.replace(/"/g, '');
            const count = parseInt(countStr);
            combined.push({ date, count });
          }
        }

        setAllData(combined);
      } catch (error) {
        console.error('Error loading contribution data:', error);
      }
    };

    loadContributions();
  }, []);

  // Filter data for selected year - start from Jan 2022
  let startDate: Date;
  let endDate: Date;

  if (selectedYear === 2022) {
    startDate = new Date(2022, 1, 1); // Jan 1, 2022
    endDate = new Date(2022, 11, 31);
  } else {
    startDate = new Date(selectedYear, 0, 1);
    endDate = new Date(selectedYear, 11, 31);
  }

  const yearData = allData.filter(d => {
    const date = new Date(d.date);
    return date >= startDate && date <= endDate;
  });

  // Calculate total contributions for selected year
  const yearTotal = yearData.reduce((sum, item) => sum + item.count, 0);

  // Get milestones for selected year
  const yearMilestones = milestones.filter(m => {
    const milestoneDate = new Date(m.date);
    return milestoneDate >= startDate && milestoneDate <= endDate;
  });

  const years = [2022, 2023, 2024, 2025];

  return (
    <div className="w-full mb-16" >
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold mb-2">
          Code Contribution Activity
        </h3>
        <h4 className="text-m font-display font-bold mb-2">
          *Only includes work done at Influxer
        </h4>
        <p className="text-secondary mb-4">
          <span className="font-bold text-tertiary">{yearTotal.toLocaleString()}</span> contributions in {selectedYear}
        </p>

        {/* Year selector */}
        <div className="flex gap-2 mb-6">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 font-display font-bold transition-smooth ${
                selectedYear === year
                  ? 'bg-tertiary text-primary'
                  : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div ref={scrollableRef}  className="contribution-heatmap-container bg-secondary/5 p-6 pt-12 rounded-lg overflow-x-auto relative">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={yearData}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return 'color-empty';
            }
            if (value.count < 5) {
              return 'color-scale-1';
            }
            if (value.count < 10) {
              return 'color-scale-2';
            }
            if (value.count < 15) {
              return 'color-scale-3';
            }
            return 'color-scale-4';
          }}

          showWeekdayLabels={false}
        />

        {/* Milestone markers */}
        {yearMilestones.map((milestone, index) => {
          const milestoneDate = new Date(milestone.date);
          const milestoneMonth = milestoneDate.getMonth();
          const milestoneYear = milestoneDate.getFullYear();

          // Get first day of the milestone month
          const monthStart = new Date(milestoneYear, milestoneMonth, 1);
          const dayOfYear = Math.floor((monthStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
          const weekOfYear = Math.floor(dayOfYear / 7);

          // Calculate total weeks in the view
          const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
          const totalWeeks = Math.ceil(totalDays / 7);

          // Position as percentage - each month is roughly 4.3 weeks
          //const leftPosition = `${(weekOfYear / totalWeeks) * 100}%`;
          const leftPosition = `${(weekOfYear / totalWeeks) * dimensions.totalWidth}px`;

          const widthPercentage = `${(4.3 / totalWeeks) * 100}%`;

          // Need scroll width number, then take percentage styling applied in pixesl of the number 

          return (
            <div
              key={index}
              className="absolute pointer-events-none"
              style={{
                left: leftPosition,
                top: '40px',
                width: widthPercentage,
                height: 'calc(100% - 40px)',
              }}
            >
              {/* Highlighted month background */}
              <div className="absolute inset-0 bg-tertiary/20 border-2 border-tertiary/40 rounded" />

              {/* Label above */}
              <div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold text-secondary px-2 py-1 bg-tertiary/20 rounded"
              >
                {milestone.label}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        .contribution-heatmap-container {
          min-width: 100%;
        }

        .react-calendar-heatmap {
          width: 100%;
          min-width: 800px;
        }

        .react-calendar-heatmap text {
          font-size: 10px;
          fill: #403D39;
        }

        .react-calendar-heatmap .color-empty {
          fill: #FFFCF2;
          stroke: #403D39;
          stroke-width: 1px;
        }

        .react-calendar-heatmap .color-scale-1 {
          fill: #FED4C4;
          stroke: #403D39;
          stroke-width: 1px;
        }

        .react-calendar-heatmap .color-scale-2 {
          fill: #FCA885;
          stroke: #403D39;
          stroke-width: 1px;
        }

        .react-calendar-heatmap .color-scale-3 {
          fill: #F77E52;
          stroke: #403D39;
          stroke-width: 1px;
        }

        .react-calendar-heatmap .color-scale-4 {
          fill: #EB5E28;
          stroke: #403D39;
          stroke-width: 1px;
        }

        .react-calendar-heatmap rect:hover {
          stroke: #252422;
          stroke-width: 2px;
          cursor: pointer;
        }

        .react-calendar-heatmap .react-calendar-heatmap-month-label {
          font-size: 10px;
          fill: #403D39;
          font-weight: 600;
        }

        .react-calendar-heatmap .react-calendar-heatmap-weekday-label {
          font-size: 10px;
          fill: #403D39;
        }
      `}</style>
    </div>
  );
}
