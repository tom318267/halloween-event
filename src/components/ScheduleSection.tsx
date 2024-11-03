import { motion } from "framer-motion";

const SCHEDULE_ITEMS_FIRST_HALF = [
  { time: "6:00 PM", event: "Gates Open – Trick-or-Treat Trail Begins" },
  { time: "7:00 PM", event: "Haunted House Opens" },
  { time: "8:00 PM", event: "Costume Contest Kickoff" },
  { time: "9:00 PM", event: "Pumpkin Carving Winners Announced" },
  { time: "10:00 PM", event: "Live Performances & DJ Spooky Set" },
];

const SCHEDULE_ITEMS_SECOND_HALF = [
  { time: "5:00 PM", event: "Early Access for VIP Ticket Holders" },
  { time: "6:30 PM", event: "Halloween Parade Begins" },
  { time: "7:30 PM", event: "Monster Mash Dance Party" },
  { time: "8:30 PM", event: "Haunted Maze Challenge" },
  { time: "10:00 PM", event: "Grand Finale Fireworks Show" },
];

const ScheduleList = ({
  className,
  items,
}: {
  className: string;
  items: typeof SCHEDULE_ITEMS_FIRST_HALF;
}) => (
  <motion.ul
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mt-4 space-y-2 ${className}`}
  >
    {items.map(({ time, event }, index) => (
      <motion.li
        key={time}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-center"
      >
        <span className="w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-full mr-3 md:mr-4"></span>
        <span className="text-base md:text-xl">{`${time}: ${event}`}</span>
      </motion.li>
    ))}
  </motion.ul>
);

const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="relative mx-auto py-[72px] md:py-[142px] min-h-screen bg-[#D94814]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex items-center justify-start pl-4 md:pl-[130px]"
      >
        {/* Splash Background */}
        <img
          src="/images/splash.png"
          alt="splash"
          className="w-full max-w-[771px] h-auto"
        />

        {/* Festival Text Overlay */}
        <img
          src="/images/festival.png"
          alt="festival"
          className="absolute left-[50px] md:left-[230px] w-[280px] md:w-[486px] h-auto"
        />
      </motion.div>

      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        src="/images/spider.png"
        alt="spider"
        className="absolute top-0 right-4 md:right-20 w-[60px] md:w-[98px] h-auto"
      />

      <div className="px-4 pl-[40px] md:pl-[180px] mt-[40px] md:mt-[86px] relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-albertsans font-semibold"
        >
          OCTOBER 1ST - 15TH
        </motion.h2>
        <ScheduleList
          className="text-base md:text-xl"
          items={SCHEDULE_ITEMS_FIRST_HALF}
        />

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-albertsans font-semibold mt-8"
        >
          OCTOBER 16TH - 31ST
        </motion.h2>
        <ScheduleList
          className="text-base md:text-xl"
          items={SCHEDULE_ITEMS_SECOND_HALF}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 w-[70px] md:w-[228px] h-auto"
      >
        <img
          src="/images/spiderweb.png"
          alt="spiderweb"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 bottom-0 w-[150px] md:w-[500px] h-auto"
      >
        <img
          src="/images/scaryhouse.png"
          alt="scaryhouse"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default ScheduleSection;
