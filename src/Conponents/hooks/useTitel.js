import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Toochat`;

    }, [title])
}
export default useTitle