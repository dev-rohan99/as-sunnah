import { useEffect } from "react";


const usePopupClose = (ref, setUserMenu) => {

    useEffect(() => {
        document.addEventListener("mousedown", function(event){
            if(ref.current && !ref?.current?.contains(event.target)){
                setUserMenu(false)
            }
        });
    }, [ref.current]);

}

export default usePopupClose;
