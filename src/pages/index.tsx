import { HomePageProps } from "@common/interfaces/homepage";
import { Card } from "@components";
import { getContacts } from "../services/contacts";

const HomePage = ({ data }: HomePageProps) => {
  
  if(data?.success) {
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
  }

  return (
    <div>
      <h1>No Data Found</h1>
    </div>
  )
};
export default HomePage;

// This function is used for server side render this page
// This function gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getContacts();
  
  // Pass data to the page via props
  return { props: { data } };
}
