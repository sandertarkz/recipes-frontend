import Image from "next/image";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Button appName="web">Hello world</Button>
      <div className="text-red-500">123123</div>
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
