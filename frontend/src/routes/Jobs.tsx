import Filters from "../components/Filters";
import SearchJobInput from "../components/SearchJobInput";
import DefaultLayout from "../layouts/DefaultLayout";

function Jobs() {
  return (
    <DefaultLayout className="grid grid-cols-6 gap-4">
      <aside className="col-span-2">
        <Filters></Filters>
      </aside>
      <section className="col-span-4">
        <SearchJobInput></SearchJobInput>
      </section>
    </DefaultLayout>
  );
}

export default Jobs;
