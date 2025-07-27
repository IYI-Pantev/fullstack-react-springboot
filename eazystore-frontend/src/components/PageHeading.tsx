import PageTitle from "./PageTitle";

type Props = {
  title: string;
  children: string;
};
const PageHeading = ({ title, children }: Props) => {
  return (
    <div className="text-center max-w-[576px] mx-auto px-4 py-6">
      <PageTitle title={title} />
      <p className="font-primary leading-6 text-gray-600">{children}</p>
    </div>
  );
};

export default PageHeading;
