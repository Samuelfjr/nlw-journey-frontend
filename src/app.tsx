import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl px-6 space-y-10">
        <p className="text-lg text-zinc-300">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="flex items-center h-16 px-4 rounded-xl bg-zinc-900 shadow-shape">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="text-lg bg-transparent placeholder-zinc-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <input
              type="text"
              placeholder="Quando?"
              className="text-lg bg-transparent placeholder-zinc-400"
          />
          </div>
          <button className="bg-lime-400 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">Continuar <ArrowRight className="size-5 text-lime-950"/></button>
        </div>

        <p className="text-sm text-zinc-300">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos <a href="#">termos de uso</a> e{" "}
          <a href="#"> políticas de privacidade</a>
        </p>
      </div>
    </div>
  );
}
