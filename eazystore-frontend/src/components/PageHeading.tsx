import PageTitle from "./PageTitle";

type Props = {
  title: string;
  children: string;
};
const PageHeading = ({ title, children }: Props) => {
  return (
    <div className="page-heading-container">
      <PageTitle title={title} />
      <p className="page-heading-paragraph">{children}</p>
    </div>
  );
};

export default PageHeading;
