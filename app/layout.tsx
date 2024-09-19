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
          Powered by <span className="text-blue-500">Midudev</span>
        </footer>
      </body>
    </html>
  );
}
