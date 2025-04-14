import ContactInfo from "./ContactInfo";
import data from "@/data/contact";
import Heading from "./Heading";

const Contacts = () => {
  return (
    <section className=" mt-10 py-7 border-t border-b border-zinc-100 dark:border-zinc-800 slide-top-1250">
      <span className="h-2 w-full bg-zinc-400"></span>
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap items-center gap-4 mt-4">
        {data.map((e) => (
          <ContactInfo key={e.id} name={e.name} link={e.link} title={e.label} />
        ))}
      </div>
    </section>
  );
};

export default Contacts;
