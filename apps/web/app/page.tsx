import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web" className={styles.secondary}>
        Button example
      </Button>
      <Image
        aria-hidden
        src="/next.svg"
        alt="next icon"
        width={300}
        height={60}
      />
    </div>
  );
}
