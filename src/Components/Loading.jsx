

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
    return ( 
         <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", 
          }}
        >
          <DotLottieReact
            src="https://lottie.host/b0b010ab-bd1c-4c34-8245-56ee377c4e94/31nRnMHft7.lottie"
            style={{
              width: "450px",
              height: "450px", 
            }}
            loop
            autoplay
          />
        </div>
     );
}
 
export default Loading;