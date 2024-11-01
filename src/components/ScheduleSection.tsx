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
        <span className="w-4 h-4 bg-orange-400 rounded-full mr-4"></span>
        <span>{`${time}: ${event}`}</span>
      </motion.li>
    ))}
  </motion.ul>
);

const ScheduleSection = () => {
  return (
    <section className="relative mx-auto py-[142px] h-100vh bg-[#D94814]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex items-center justify-start pl-[130px]"
      >
        {/* Splash Background */}
        <img src="/images/splash.png" alt="splash" width={771} height={272} />

        {/* Festival Text Overlay */}
        <img
          src="/images/festival.png"
          alt="festival"
          className="absolute left-[230px]"
          style={{ width: "486px", height: "200px" }}
        />
      </motion.div>

      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        src="/images/spider.png"
        alt="spider"
        className="absolute top-0 right-20"
        style={{ width: "98px", height: "193px" }}
      />

      <div className="pl-[180px] mt-[86px]">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-albertsans font-semibold"
        >
          OCTOBER 1ST - 15TH
        </motion.h2>
        <ScheduleList className="text-xl" items={SCHEDULE_ITEMS_FIRST_HALF} />

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-albertsans font-semibold mt-8"
        >
          OCTOBER 16TH - 31ST
        </motion.h2>
        <ScheduleList className="text-xl" items={SCHEDULE_ITEMS_SECOND_HALF} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0"
      >
        <img
          src="/images/spiderweb.png"
          alt="spiderweb"
          width={228}
          height={297}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 bottom-0"
      >
        <img
          src="/images/scaryhouse.png"
          alt="scaryhouse"
          width={500}
          height={600}
        />
      </motion.div>
    </section>
  );
};

export default ScheduleSection;
