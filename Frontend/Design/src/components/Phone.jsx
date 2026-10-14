import StatusBar from "./StatusBar";

function Phone({ label, children }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F8FAFD] p-4">
      <div className="relative flex h-[700px] w-[340px] max-h-[calc(100dvh-32px)] flex-col overflow-hidden border border-gray-200 bg-white shadow-xl">
        <StatusBar />

        {children}
      </div>
    </div>
  );
}

export default Phone;
