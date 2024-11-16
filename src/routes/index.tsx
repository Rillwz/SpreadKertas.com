import { component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <main class="flex min-h-screen flex-col items-center justify-center">
      
      <div class="px-3 py-2 rounded-xl">
        <h1 class="font-edu font-medium text-xl ">SpreadKertas</h1>
      </div>
      
    </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "SpreadKertas",
  meta: [
    {
      name: "official website",
      content: "For Those Who Reads",
    },
  ],
};
