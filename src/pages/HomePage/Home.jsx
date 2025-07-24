import { useEffect, useState } from "react";
import axios from "../../axios";
import {
  BannerImage,
  CategoryHeader,
  Footer,
  Navbar,
  RelatedItems,
  Television,
  TodayDeals,
} from "../../components";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("/me", {
          headers: {
            Authorization: token,
          },
        });

        setUser(res.data.user);
      } catch (err) {
        console.error("Unauthorized:", err.response?.data?.message);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <CategoryHeader />
      <BannerImage />
      <TodayDeals />
      <RelatedItems />
      <Television />
      <Footer />
    </>
  );
};

export default Home;
