import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-pattern">
      <div className="w-full max-w-3xl px-6 space-y-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center h-16 gap-3 px-4 rounded-xl bg-zinc-900 shadow-shape">
            <div className="flex items-center flex-1 gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400 " />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="w-40 text-lg bg-transparent outline-none placeholder-zinc-400"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-400 text-lime-950 hover:bg-lime-400"
              >
                Continuar <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex items-center h-16 gap-3 px-4 rounded-xl bg-zinc-900 shadow-shape">
              <div className="flex items-center flex-1 gap-2">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800"></div>

              <button className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-400 text-lime-950 hover:bg-lime-400">
                Confirmar viagem <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-300">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="underline text-zinc-300" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="underline text-zinc-300" href="#">
            {" "}
            políticas de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
