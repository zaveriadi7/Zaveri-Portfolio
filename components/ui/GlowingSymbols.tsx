import { motion } from "framer-motion";

const devSymbols = [
  { symbol: "</>", color: "from-indigo-500/40 to-purple-500/40" },
  { symbol: "<>", color: "from-pink-500/40 to-orange-500/40" },
  { symbol: "{}", color: "from-emerald-500/40 to-teal-500/40" },
  { symbol: "[]", color: "from-amber-500/40 to-yellow-500/40" },
  { symbol: "()", color: "from-rose-500/40 to-red-500/40" },
  { symbol: "=>", color: "from-blue-500/40 to-cyan-500/40" },
  { symbol: "&&", color: "from-violet-500/40 to-fuchsia-500/40" },
  { symbol: "||", color: "from-green-500/40 to-emerald-500/40" },
];

interface GlowingSymbolsProps {
  className?: string;
  count?: number;
  size?: "sm" | "md" | "lg";
}

export default function GlowingSymbols({ className = "", count = 4, size = "md" }: GlowingSymbolsProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => {
        const symbol = devSymbols[i % devSymbols.length];
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;

        return (
          <motion.div
            key={i}
            className={`absolute ${sizeClasses[size]} font-mono font-bold`}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
          >
            <span className={`bg-gradient-to-r ${symbol.color} bg-clip-text text-transparent`}>
              {symbol.symbol}
            </span>
            {/* Inner glow */}
            <motion.div
              className={`absolute -inset-2 bg-gradient-to-r ${symbol.color} blur-lg rounded-lg -z-10`}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
            {/* Outer glow */}
            <motion.div
              className={`absolute -inset-4 bg-gradient-to-r ${symbol.color} blur-2xl rounded-lg -z-20`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: randomDuration * 1.2,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
} 