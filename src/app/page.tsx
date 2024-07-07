import { Slider } from "@/components/Slider";
import { Provider } from "@/store/Provider";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Manga4U",
    description: "Search your next book",
};
const Home: NextPage = () => {
    return (
        <Provider>
            <main className="min-h-screen">
                <Slider />
            </main>
        </Provider>
    );
};
export default Home;
