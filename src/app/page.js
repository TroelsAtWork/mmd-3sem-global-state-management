import Messagesform from "./components/Messagesform";
import Messages from "./components/Messages";

export default function Home() {
  return (
    <section className="flex flex-col p-24 w-lvw h-lvh justify-between">
      <Messages />
      <main className="self-center">
        <h1 className="text-6xl">Indhold</h1>
      </main>
      <Messagesform />
    </section>
  );
}
