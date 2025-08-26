export default function Home() {
  return (
      <div
          className="flex flex-col items-center h-[calc(100vh-80px)] w-full  text-[#FFD700]  bg-cover bg-center bg-no-repeat shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]"
          style={{backgroundImage: 'url("/hero-img.webp")'}}
      >
        <p className="mt-10 text-4xl">Home Page</p>
      </div>
  )
}
