function Footer() {
  return (
    <div className="bg-slate-900 text-gray-50">
      <h3 className="font-bold text-3xl mb-12 text-center pt-8">Social Media: </h3>
      <div className="flex justify-center font-bold">
        <a className="mx-12 hover:text-purple-800" href="">
          GitHub
        </a>
        <a className="mx-12 mb-12 hover:text-purple-800" href="">
          Instagram
        </a>
        <a className="mx-12 hover:text-purple-800" href="">
          Email
        </a>
      </div>
      <div className="flex pb-12 justify-center items-center flex-col">
        <p className="text-2xl font-bold">Source:</p>
        <a target='blank' href="https://rickandmortyapi.com/" className="hover:underline">https://rickandmortyapi.com</a>
      </div>
    </div>
  );
}

export default Footer;
