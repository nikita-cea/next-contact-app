export interface HomePageProps {
  data: {
    result: {
      _id: string;
      name: string;
      email: string;
      mobile: string;
      designation: string;
    }[],
    success: boolean
  }
}
