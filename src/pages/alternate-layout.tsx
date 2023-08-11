import { LayoutWithSidebar } from "@components";
import { NextPageWithLayout } from "@common/interfaces/common";

const AlternateLayout: NextPageWithLayout = () => {
  return <div>This Page is rendering a custom layout</div>;
};

export default AlternateLayout;

AlternateLayout.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
