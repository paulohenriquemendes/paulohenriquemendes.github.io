import Image from "next/image";

export default function Home() {
  return (
  <div>
<h1>Olá mundohhhh!</h1>
<Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
  </div>
  );
}
