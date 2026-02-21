// Implement the Filters component to match the approved wireframes. 
// This is a reusable UI element for displaying a vertical stack of filter “pills” (outlined and filled states).

const Filters = () => {
    return (
        <>  
    <div className="h-10 px-7 py-2.5 bg-white/20 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-white text-sm font-medium font-['Poppins'] uppercase">EXECUTIVES</div>
    </div>

    <div className="h-10 px-7 py-2.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-zinc-800 text-sm font-medium font-['Poppins'] uppercase">EXECUTIVES</div>
    </div>
        </>
    );
};

export default Filters;