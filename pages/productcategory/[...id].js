import { useRouter } from "next/router";

function productcatagory() {
  const router = useRouter();
  console.log(router.query);
  return <div>product Catagory </div>;
}

export default productcatagory;
