import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <main class="flex min-h-screen flex-col items-center justify-center">
      
      <div class="px-3 py-2 rounded-xl">
        <h1 class="font-edu font-medium text-2xl text-[#1A1A1D] ">SpreadKertas</h1>
      </div>
      
    </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
