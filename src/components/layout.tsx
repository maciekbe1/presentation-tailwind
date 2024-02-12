import { Link } from "react-router-dom";
import { Container } from "./ui/container";
type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Container>
      <div className="my-6 flex items-center justify-center space-x-4">
        <Link
          to="/demo-1"
          className="text-2xl text-blue-500 hover:text-blue-700"
        >
          Demo 1
        </Link>
        <Link
          to="/demo-2"
          className="text-2xl text-blue-500 hover:text-blue-700"
        >
          Demo 2
        </Link>
        <Link
          to="/demo-3"
          className="text-2xl text-blue-500 hover:text-blue-700"
        >
          Demo 3
        </Link>
        <Link
          to="/demo-4"
          className="text-2xl text-blue-500 hover:text-blue-700"
        >
          Demo 4
        </Link>
      </div>

      {children}
    </Container>
  );
};
