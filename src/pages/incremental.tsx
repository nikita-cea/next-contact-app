import { Card } from "@components";
import { HomePageProps } from "@interfaces/homepage";
import { getContacts } from "../services/contacts";
import { contacts } from "../utils/db";

const IncrementalPage = ({ data }: any) => {
  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2">
          {data?.result?.map(
            (item: { _id: string; name: string; designation: string }) => (
              <Card key={item._id} {...item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default IncrementalPage;

// This function is used for static site generation
// This function gets called only once during build time
export async function getStaticProps() {
  // Fetch data from external API
  const data = await getContacts();
  // Pass data to the page via props
  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 20, // In seconds
  };
}
