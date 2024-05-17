import { memo, type PropsWithChildren } from "react";
import { TopNavigation } from "./top-navigation";
import { useSpring, animated } from "react-spring";
import { cn } from "@/utils/cn";
import { Footer } from "./footer";

const AnimatedDiv = animated("div");

const PageContent = memo(({ children }: PropsWithChildren) => {
  const styles = useSpring({
    config: {
      duration: 300,
    },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <AnimatedDiv
      className={cn("flex flex-col grow w-full items-center")}
      style={styles}
    >
      <div className="w-full max-w-xl px-2">{children}</div>
    </AnimatedDiv>
  );
});

export const PageContainer = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen flex flex-col">
    <TopNavigation />
    <PageContent>{children}</PageContent>
    <Footer />
  </div>
);
