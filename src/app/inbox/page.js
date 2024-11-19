import Messages from "../components/Messages";
const page = () => {
  return (
    <section className="flex flex-col h-lvh p-24 justify-between">
      <Messages />
      <h1 className="text-6xl self-center">Indhold</h1>
    </section>
  );
};

export default page;
