type btnProps={
        title?:string,
        children?:React.ReactNode,
        onClick?:()=>void,
        icon?:React.ReactNode,
        className?:string,
        disabled?:boolean
    }
export const FlatButton = ({title, 
    children, onClick, 
    icon, className, 
    disabled}:btnProps)=>{
   
    return (
       
            <button className={`btn ${className}`}
             disabled={disabled} onClick={onClick}>{title} {children} {icon}</button>
        
    )
}