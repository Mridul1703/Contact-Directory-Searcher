import './App.css';
import JsonData from './components/Data.json';

function App() {

    const d = JsonData.map((items) => {
      return(
        <li>{items.first_name}</li>
      )
    });

  return (
    <>
<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contact Directory Searcher</span>
    </a>
    </div>
</nav>


    <br></br>

    <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search Contacts..." /> 
    </div>
  </div>

    <br></br>

  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-sm font-light">
          <thead
            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 py-4">First Name</th>
              <th scope="col" class=" px-6 py-4">Last Name</th>
              <th scope="col" class=" px-6 py-4">Email</th>
              <th scope="col" class=" px-6 py-4">Gender</th>
              <th scope="col" class=" px-6 py-4">Address</th>
            </tr>
          </thead>
          <tbody>

        {JsonData.map((items) => {
          return (
          <tr>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{items.first_name}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{items.last_name}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{items.email}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{items.gender}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{items.address}</td>
            </tr>
          )})}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
