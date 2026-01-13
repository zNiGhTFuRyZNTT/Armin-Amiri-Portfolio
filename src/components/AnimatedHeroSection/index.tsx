import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Cover } from '@/components/ui/cover';
import { FlipWords } from '@/components/ui/flip-words';
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onScrollToFeatures: () => void;
}

export const AnimatedHeroSection = React.memo<HeroSectionProps>(({ onScrollToFeatures }) => {
  const words = ["Armin", "a Full Stack Developer", "impactful"]
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-container');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background-secondary to-background text-text-primary">
      <div
        ref={parentRef}
        className="absolute inset-0 overflow-hidden z-0"
      >
        <BackgroundGrids />
        <CollisionMechanism
          beamOptions={{
            initialX: -400,
            translateX: 600,
            duration: 7,
            repeatDelay: 3,
          }}
          containerRef={containerRef}
          parentRef={parentRef}
        />
        <CollisionMechanism
          beamOptions={{
            initialX: -200,
            translateX: 800,
            duration: 4,
            repeatDelay: 3,
          }}
          containerRef={containerRef}
          parentRef={parentRef}
        />
        <CollisionMechanism
          beamOptions={{
            initialX: 200,
            translateX: 1200,
            duration: 5,
            repeatDelay: 3,
          }}
          containerRef={containerRef}
          parentRef={parentRef}
        />
        <CollisionMechanism
          containerRef={containerRef}
          parentRef={parentRef}
          beamOptions={{
            initialX: 400,
            translateX: 1400,
            duration: 6,
            repeatDelay: 3,
          }}
        />
      </div>

      <div className="flex items-center justify-center min-h-screen relative z-10 pt-16 sm:pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 md:mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
            ref={containerRef}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight relative z-20"
            >
              I&apos;m
                {' '}<FlipWords words={words} className='text-text-primary' />
              <span className="block mt-2">
                Let 
                {' '}
                <span className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6">
                <Cover>ME</Cover> 
                </span>
                {' '}
                Amplify your business!</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 relative z-20 leading-relaxed"
            >
              Specializing in <span className="text-primary font-semibold">Full-stack Web </span> And{' '}
              <span className="text-primary font-semibold">Application Development</span>
              <br className="hidden sm:block" /> 
              <span className="block mt-2">From Small to Large Enterprise Applications</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-20"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base relative z-50"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <button 
                onClick={onScrollToFeatures}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base relative z-50"
              >
                <span>$ whoami</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative z-20">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "10+", label: "Valid Certifications" },
                { value: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-3 sm:p-4 md:p-6 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 transform hover:scale-105"
                >
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-700/50 relative z-20"
            >
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">Certified from top universities and institutions</p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-50">
                {['Harvard', 'MIT', 'Sharif', 'UChicago', 'Quera'].map((uni, index) => (
                  <div 
                    key={index} 
                    className="font-display text-base sm:text-lg md:text-xl font-bold text-text-secondary transform hover:scale-110 transition-transform duration-300"
                  >
                    {uni}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AnimatedHeroSection.displayName = 'AnimatedHeroSection';

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-background/50 to-transparent">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = React.useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = React.useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = React.useState(false);

  React.useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
          if (beamRef.current) {
            beamRef.current.style.opacity = "0";
          }
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  React.useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        if (beamRef.current) {
          beamRef.current.style.opacity = "1";
        }
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || -45,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "800px",
            translateX: beamOptions.translateX || "700px",
            rotate: beamOptions.rotate || -45,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-primary via-primary-hover to-transparent opacity-30",
          beamOptions.className,
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-10 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full bg-gradient-to-r from-transparent via-primary-hover to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-primary-light to-primary-hover"
        />
      ))}
    </div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#020817",
          "--color": "rgba(96, 165, 250, 0.6)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(96, 165, 250, 0.6)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-0",
        className,
      )}
    ></div>
  );
};
