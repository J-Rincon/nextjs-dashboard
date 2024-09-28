import { montserrat } from "./ui/fonts";
import "./ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antiliased`}> 
        {children}
        <footer>
          Powered by <a href="https://github.com/J-Rincon" target="_blank" rel="noopener noreferrer"><span className="text-blue-500">J-Rincon</span></a>
        </footer>
      </body>
    </html>
  );
}
