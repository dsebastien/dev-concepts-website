import React from 'react';
import Layout from '@/layouts/layout';
import tw from "twin.macro";

const StyledDiv = tw.div``;

const DesignSystem = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
        <div className="design-system-box">
          <header>Headings</header>
          <main>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - XS</header>
          <main className="text-xs">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - Small</header>
          <main className="text-sm">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - Base</header>
          <main className="text-base">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - Large</header>
          <main className="text-lg">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - XL</header>
          <main className="text-xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 2XL</header>
          <main className="text-2xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 3XL</header>
          <main className="text-3xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 4XL</header>
          <main className="text-4xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 5XL</header>
          <main className="text-5xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 6XL</header>
          <main className="text-6xl">
            <span>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 7XL</header>
          <main className="text-7xl">
            <span>Donec facilisis tortor ut augue lacinia</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 8XL</header>
          <main className="text-8xl">
            <span>Donec facilisis tortor ut augue lacinia</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Text - 9XL</header>
          <main className="text-9xl">
            <span>Donec facilisis tortor ut augue lacinia</span>
            <div className="mt-2 font-bold">This is bold text</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Colors - devConceptsBlue</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-100">devConceptsBlue-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-200">devConceptsBlue-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-300">devConceptsBlue-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-400">devConceptsBlue-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-500">devConceptsBlue-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-600">devConceptsBlue-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-700">devConceptsBlue-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-800">devConceptsBlue-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsBlue-900">devConceptsBlue-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsGray</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-100">devConceptsGray-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-200">devConceptsGray-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-300">devConceptsGray-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-400">devConceptsGray-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-500">devConceptsGray-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-600">devConceptsGray-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-700">devConceptsGray-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-800">devConceptsGray-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGray-900">devConceptsGray-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsPink</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-100">devConceptsPink-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-200">devConceptsPink-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-300">devConceptsPink-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-400">devConceptsPink-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-500">devConceptsPink-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-600">devConceptsPink-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-700">devConceptsPink-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-800">devConceptsPink-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPink-900">devConceptsPink-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsCerise</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-100">devConceptsCerise-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-200">devConceptsCerise-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-300">devConceptsCerise-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-400">devConceptsCerise-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-500">devConceptsCerise-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-600">devConceptsCerise-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-700">devConceptsCerise-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-800">devConceptsCerise-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsCerise-900">devConceptsCerise-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsPurple</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-100">devConceptsPurple-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-200">devConceptsPurple-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-300">devConceptsPurple-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-400">devConceptsPurple-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-500">devConceptsPurple-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-600">devConceptsPurple-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-700">devConceptsPurple-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-800">devConceptsPurple-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsPurple-900">devConceptsPurple-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsIndigo</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-100">devConceptsIndigo-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-200">devConceptsIndigo-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-300">devConceptsIndigo-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-400">devConceptsIndigo-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-500">devConceptsIndigo-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-600">devConceptsIndigo-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-700">devConceptsIndigo-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-800">devConceptsIndigo-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsIndigo-900">devConceptsIndigo-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsGreen</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-100">devConceptsGreen-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-200">devConceptsGreen-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-300">devConceptsGreen-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-400">devConceptsGreen-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-500">devConceptsGreen-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-600">devConceptsGreen-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-700">devConceptsGreen-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-800">devConceptsGreen-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsGreen-900">devConceptsGreen-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsTeal</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-100">devConceptsTeal-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-200">devConceptsTeal-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-300">devConceptsTeal-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-400">devConceptsTeal-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-500">devConceptsTeal-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-600">devConceptsTeal-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-700">devConceptsTeal-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-800">devConceptsTeal-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsTeal-900">devConceptsTeal-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsOrange</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-100">devConceptsOrange-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-200">devConceptsOrange-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-300">devConceptsOrange-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-400">devConceptsOrange-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-500">devConceptsOrange-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-600">devConceptsOrange-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-700">devConceptsOrange-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-800">devConceptsOrange-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsOrange-900">devConceptsOrange-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsYellow</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-100">devConceptsYellow-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-200">devConceptsYellow-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-300">devConceptsYellow-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-400">devConceptsYellow-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-500">devConceptsYellow-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-600">devConceptsYellow-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-700">devConceptsYellow-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-800">devConceptsYellow-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsYellow-900">devConceptsYellow-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsAmber</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-100">devConceptsAmber-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-200">devConceptsAmber-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-300">devConceptsAmber-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-400">devConceptsAmber-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-500">devConceptsAmber-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-600">devConceptsAmber-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-700">devConceptsAmber-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-800">devConceptsAmber-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsAmber-900">devConceptsAmber-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - devConceptsRed</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-100">devConceptsRed-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-200">devConceptsRed-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-300">devConceptsRed-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-400">devConceptsRed-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-500">devConceptsRed-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-600">devConceptsRed-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-700">devConceptsRed-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-800">devConceptsRed-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsRed-900">devConceptsRed-900</div>
          </main>
        </div>
        <div className="design-system-box">
          <header>Colors - gray</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-100">gray-100</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-200">gray-200</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-300">gray-300</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-400">gray-400</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-500">gray-500</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-600">gray-600</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-700">gray-700</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-800">gray-800</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-gray-900">gray-900</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Colors - B/W</header>
          <main>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-black bg-devConceptsWhite">devConceptsWhite</div>
            <div className="m-1 p-1 pl-5 border-l-8 border-gray-400 text-white bg-devConceptsBlack">devConceptsBlack</div>
          </main>
        </div>

        <div className="design-system-box">
          <header>Page content wrapper</header>
          <main>
            <StyledDiv className="page-content-wrapper">
              Content goes here
            </StyledDiv>
          </main>
        </div>

        <div className="design-system-box">
          <header>Article content wrapper</header>
          <main>
            <StyledDiv className="article-content-wrapper">
              Content goes here
            </StyledDiv>
          </main>
        </div>

        <div className="design-system-box">
          <header>Homepage elevated box</header>
          <main>
            <StyledDiv className="homepage-elevated-box">
              Content goes here
            </StyledDiv>
          </main>
        </div>
      </div>
      <div className="mb-16"></div>
    </Layout>
  );
};

export default DesignSystem;
