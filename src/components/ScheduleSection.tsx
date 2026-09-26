import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "6:00 AM", mon: "Yoga", tue: "Cardio", wed: "Yoga", thu: "Cardio", fri: "Yoga", sat: "Open" },
  { time: "8:00 AM", mon: "Strength", tue: "HIIT", wed: "Strength", thu: "HIIT", fri: "Strength", sat: "Strength" },
  { time: "10:00 AM", mon: "Cardio", tue: "Functional", wed: "Cardio", thu: "Functional", fri: "Cardio", sat: "Group" },
  { time: "5:00 PM", mon: "HIIT", tue: "Strength", wed: "HIIT", thu: "Strength", fri: "HIIT", sat: "Open" },
  { time: "7:00 PM", mon: "Bodybuilding", tue: "Cardio", wed: "Bodybuilding", thu: "Cardio", fri: "Bodybuilding", sat: "—" },
];

const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ScheduleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Schedule</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Weekly <span className="gold-text">Timetable</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-display text-sm uppercase text-muted-foreground">Time</th>
                {dayLabels.map((d) => (
                  <th key={d} className="p-4 text-center font-display text-sm uppercase text-muted-foreground">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <motion.tr
                  key={row.time}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-border/50 transition-colors hover:bg-card/50"
                >
                  <td className="p-4 font-display text-sm font-semibold text-primary">{row.time}</td>
                  {days.map((d) => (
                    <td key={d} className="p-4 text-center text-sm text-foreground">{row[d]}</td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
