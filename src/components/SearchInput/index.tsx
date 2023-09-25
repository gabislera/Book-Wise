import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchInput() {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border border-gray-500 rounded-md mb-8">
      <input type="text" className="bg-gray-800 w-full text-sm text-gray-400" placeholder="Buscar livro avaliado" />
      <MagnifyingGlass weight="thin" className="w-5 h-5 text-gray-500" />
    </div>
  )
}