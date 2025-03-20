import Image from "next/image";

interface ScreenshotDisplayProps {
  src: string;
  alt?: string;
}

export default function ScreenshotDisplay({ src, alt = "Screenshot" }: ScreenshotDisplayProps) {
  return (
    <div className="flex justify-center items-center pt-16 p-4">
      <div className="shadow-3xl rounded-lg overflow-hidden border border-gray-300">
        <Image 
          src={src} 
          alt={alt} 
          width={800} 
          height={500} 
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
