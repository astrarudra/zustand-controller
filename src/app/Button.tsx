const btnStyle = "text-white font-bold py-2 px-4 rounded-full"

interface ButtonProps {
    hitFn: () => void;
    isAtLeft?: boolean;
    dispText: string;
}
  
export const Button: React.FC<ButtonProps> = ({hitFn, dispText, isAtLeft=false}) => {
  return (
    <div>
        <button className={`bg-[#2a9aa9] hover:bg-[#2a9aa9d3] hover:shadow-md ${btnStyle}`} onClick={hitFn} style={{marginRight: isAtLeft?10:0}}>
          <img src={`./assets/${dispText}.png`} className="h-6 w-6"/>
        </button>
    </div>
  )
}
