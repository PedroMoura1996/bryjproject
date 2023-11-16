import { ERoutes } from "../../../enums/route-urls";

export interface IGlobeButtonProps {
  route: ERoutes;
  name: string;
  image: React.ReactNode;
  imageDark: React.ReactNode;
  testId: string;
}
